/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
(function() {
	"use strict";
	if (typeof QUnit !== "undefined") {
		var d = document.location.href.replace(/\?.*|#.*/g, ""),
			s = document.getElementsByTagName("script"),
			b = null,
			f = null;
		for (var i = 0; i < s.length; i++) {
			var S = s[i].getAttribute("src");
			if (S) {
				var B = S.match(/(.*)qunit\/qunit-junit\.js$/i);
				if (B && B.length > 1) {
					b = B[1];
					break;
				}
			}
		}
		if (b === null) {
			if (jQuery && jQuery.sap && jQuery.sap.getModulePath) {
				f = jQuery.sap.getModulePath("sap.ui.thirdparty.qunit-reporter-junit", ".js");
			} else {
				throw new Error("qunit-junit.js: The script tag seems to be malformed!");
			}
		} else {
			f = b + "thirdparty/qunit-reporter-junit.js";
		}
		var t = document.location.pathname.substr(1).replace(/\./g, "_").replace(/\//g, ".") + document.location.search.replace(/\./g, '_');
		var a = function(n) {
			return String(n || 'default').replace(/\./g, "_");
		};
		QUnit.config.callbacks.begin.unshift(function() {
			var $ = jQuery("#qunit");
			var c = jQuery('#qunit-header,#qunit-banner,qunit-userAgent,#qunit-testrunner-toolbar,#qunit-tests');
			var e = jQuery("#qunit-fixture");
			if ($.size() === 0 && c.size() > 0) {
				$ = jQuery("<div id='qunit'></div>").insertBefore(c[0]);
				$.append(c);
			}
			if (e.size === 0) {
				$.after("<div id='qunit-fixture'></div>");
			}
		});
		QUnit.equals = window.equals = window.equal;
		QUnit.raises = window.raises = window["throws"];
		QUnit.moduleStart(function(D) {
			D.name = t + "." + a(D.name);
		});
		QUnit.testStart(function(D) {
			D.module = t + "." + a(D.module);
			window.assert = QUnit.config.current.assert;
		});
		QUnit.testDone(function(c) {
			try {
				delete window.assert;
			} catch (e) {
				if (!window._$cleanupFailed) {
					QUnit.test("A script loaded via script tag defines a global assert function!", function(c) {
						QUnit.ok(QUnit.config.ignoreCleanupFailure, e);
					});
					window._$cleanupFailed = true;
				}
			}
		});
		QUnit.log(function(c) {
			if (!c.result && c.source) {
				c.___message = c.message;
				c.message += '\n' + 'Source: ' + c.source;
			}
		});
		var r = new window.XMLHttpRequest();
		r.open('GET', f, false);
		r.onreadystatechange = function() {
			if (r.readyState == 4) {
				var c = r.responseText;
				if (typeof window.URI !== "undefined") {
					c += "\n//# sourceURL=" + URI(f).absoluteTo(d);
				}
				window.eval(c);
			}
		};
		r.send(null);
		QUnit.log(function(c) {
			if (!c.result && c.source) {
				c.message = c.___message;
				c.___message = undefined;
			}
		});
		QUnit.jUnitReport = function(D) {
			window._$jUnitReport.results = D.results;
			window._$jUnitReport.xml = D.xml;
		};
		QUnit.log(function(D) {
			window._$jUnitReport.tests = window._$jUnitReport.tests || [];
			var T = String(D.message) || (D.result ? "okay" : "failed");
			if (!D.result) {
				if (D.expected !== undefined) {
					T += "\nExpected: " + D.expected;
				}
				if (D.actual !== undefined) {
					T += "\nResult: " + D.actual;
				}
				if (D.expected !== undefined && D.actual !== undefined) {
					T += "\nDiff: " + D.expected + " != " + D.actual;
				}
				if (D.source) {
					T += "\nSource: " + D.source;
				}
			}
			window._$jUnitReport.tests.push({
				module: D.module,
				name: D.name,
				text: T,
				pass: D.result
			});
		});
		window._$jUnitReport = {};
	} else {
		throw new Error("qunit-junit.js: QUnit is not loaded yet!");
	}
})();
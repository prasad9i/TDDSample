/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
(function() {
	"use strict";
	if (typeof QUnit === "undefined") {
		throw new Error("qunit-coverage.js: QUnit is not loaded yet!");
	}
	window["sap-ui-qunit-coverage"] = "client";
	var f, a;
	var d = document.location.href.replace(/\?.*|#.*/g, ""),
		s = document.getElementsByTagName("script"),
		b = null,
		F = null;
	for (var i = 0; i < s.length; i++) {
		var S = s[i];
		var c = S.getAttribute("src");
		if (c) {
			var B = c.match(/(.*)qunit\/qunit-coverage\.js$/i);
			if (B && B.length > 1) {
				b = B[1];
				if (S.hasAttribute("data-sap-ui-cover-only")) {
					f = S.getAttribute("data-sap-ui-cover-only");
				}
				if (S.hasAttribute("data-sap-ui-cover-never")) {
					a = S.getAttribute("data-sap-ui-cover-never");
				}
				break;
			}
		}
	}
	if (b === null) {
		if (jQuery && jQuery.sap && jQuery.sap.getModulePath) {
			F = jQuery.sap.getModulePath("sap.ui.thirdparty.blanket", ".js");
		} else {
			throw new Error("qunit-coverage.js: The script tag seems to be malformed!");
		}
	} else {
		F = b + "thirdparty/blanket.js";
	}
	if (QUnit.urlParams.coverage) {
		var r = new window.XMLHttpRequest();
		r.open('GET', F, false);
		r.onreadystatechange = function() {
			if (r.readyState == 4) {
				var e = r.responseText;
				if (typeof window.URI !== "undefined") {
					e += "\n//# sourceURL=" + URI(F).absoluteTo(d);
				}
				window.eval(e);
				QUnit.config.autostart = true;
				blanket.options("existingRequireJS", true);
				if (jQuery && jQuery.sap) {
					jQuery.sap.require._hook = function(e, m) {
						if (e.indexOf("window['sap-ui-qunit-coverage'] = 'server';") === 0) {
							return e;
						}
						var g = blanket.options("sap-ui-cover-only") || f;
						var A = blanket.options("sap-ui-cover-never") || a;
						if (typeof A !== "undefined" && blanket.utils.matchPatternAttribute(m, A)) {} else if (typeof g === "undefined" || blanket.utils.matchPatternAttribute(
								m, g)) {
							blanket.instrument({
								inputFile: e,
								inputFileName: m,
								instrumentCache: false
							}, function(I) {
								e = I;
							});
						} else {}
						return e;
					};
				} else {
					throw new Error("qunit-coverage.js: jQuery.sap.global is not loaded - require hook cannot be set!");
				}
			}
		};
		r.send(null);
	} else {
		QUnit.config.urlConfig.push({
			id: "coverage",
			label: "Enable coverage",
			tooltip: "Enable code coverage."
		});
	}
})();
jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;


sap.ui.require([
	"sap/ui/test/Opa5",
	"list/test/integration/pages/Common",
	"list/test/integration/pages/View1",
	"list/test/integration/pages/Browser"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "list.view."
	});

	sap.ui.require([
		"list/test/integration/View1Journey"
	], function () {
		QUnit.start();
	});
});
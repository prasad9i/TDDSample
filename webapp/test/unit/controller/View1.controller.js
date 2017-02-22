sap.ui.define([
		"list/controller/View1.controller",
		"sap/ui/base/ManagedObject",
		"test/unit/helper/FakeI18nModel",
		"sap/ui/thirdparty/sinon",
		"sap/ui/thirdparty/sinon-qunit"
	], function(View1Controller ,ManagedObject, FakeI18n) {
		"use strict";

		QUnit.module("Busy indicator delay", {

			beforeEach : function () {
				this.oView1Controller = new View1Controller();
				this.oTableStub = new ManagedObject();
				this.oTableStub.getBusyIndicatorDelay = sinon.stub();
				this.oViewStub = new ManagedObject();
				this.oComponentStub = new ManagedObject();
				this.oComponentStub.setModel(new FakeI18n(), "i18n");

				sinon.stub(this.oView1Controller, "getOwnerComponent").returns(this.oComponentStub);
				sinon.stub(this.oView1Controller, "getView").returns(this.oViewStub);
				sinon.stub(this.oView1Controller, "byId").returns(this.oTableStub);
			},

			afterEach : function () {
				this.oView1Controller.destroy();
				this.oTableStub.destroy();
				this.oViewStub.destroy();
				this.oComponentStub.destroy();
			}
		});

		QUnit.test("Should set the initial busyindicator delay to 0", function (assert) {
			// Act
			this.oView1Controller.onInit();

			// Assert
			assert.strictEqual(this.oViewStub.getModel("Form").getData().Busy, 0, "The original busy delay was restored");
		});

		QUnit.test("Should reset the busy indicator to the original one after the first request completed", function (assert) {
			// Arrange
			var iOriginalBusyDelay = 0;

			this.oTableStub.getBusyIndicatorDelay.returns(iOriginalBusyDelay);

			// Act
			this.oView1Controller.onInit();
			this.oTableStub.fireEvent("updateFinished");

			// Assert
			assert.strictEqual(this.oViewStub.getModel("Form").getData().Busy, 0, "The original busy delay was restored");
		});

	}
);
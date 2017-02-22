sap.ui.define([
		"sap/ui/model/Model"
	], function (Model) {
		"use strict";


		return Model.extend("test.unit.helper.FakeI18nModel", {

			constructor : function (mTexts) {
				Model.call(this);
				this.mTexts = mTexts || {};
			}

		});

	}
);
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"list/model/formatter"
], function(Controller, JSONModel, formatter) {
	"use strict";

	return Controller.extend("list.controller.View1", {
		formatter: formatter,
	
		onInit: function() {
			
			/*var oViewModel = new JSONModel({
				tableBusyDelay: 0
			});
			
			this.getView().setModel(oViewModel, "worklistView");*/

			var empdata = {
				"Name": "",
				"Address": "",
				"Street1": "",
				"Street2": "",
				"Zip": "",
				"Phone": "",
				"Busy" : 0
			};
			var oJSON = new JSONModel(empdata);
			this.getView().setModel(oJSON, "Form");
		},
		onSubmit: function() {
			/*var model = this.getView().getModel("Form");
			var data = model.getData();
			model.updateBindings(true);*/
		}
	});
});
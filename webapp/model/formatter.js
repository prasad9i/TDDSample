sap.ui.define([], function() {
	"use strict";

	return {
		Name : function(Namevalue){
			if (Namevalue  === "") {
				return "None";
			} else {
				return "Success";
			}
		},
		
		
		Address : function(Addressvalue){
			if (Addressvalue  === "") {
				return "None";
			} else {
				return "Success";
			}
		},
		
		Street1 : function(Street1Value){
			if (Street1Value  === "") {
				return "None";
			} else {
				return "Success";
			}
		},
		
		Zip : function(ZipValue){
			if (ZipValue  === "") {
				return "None";
			} else {
				return "Success";
			}
		},
		
		Phone : function(PhoneValue){
			if (PhoneValue  === "") {
				return "None";
			} else {
				return "Success";
			}
		}
	};

});
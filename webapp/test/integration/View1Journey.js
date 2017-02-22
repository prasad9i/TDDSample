sap.ui.require(
	["sap/ui/test/opaQunit"],
	function (opaTest) {
		"use strict";

		QUnit.module("Data");

	/*	opaTest("Should see the table with all Posts", function (Given, When, Then) {
			// Arrangements
			Given.iStartMyApp();

			//Actions
			When.onTheView1Page.iLookAtTheScreen();

			// Assertions
			Then.onTheView1Page.theTitleShouldDisplayTheTotalAmountOfItems();
		});*/

		opaTest("Should be able to load data", function (Given, When, Then) {
			// Arrangements
			Given.iStartMyApp();
			//Actions
			When.onTheView1Page.iPressOnMoreData();

			// Assertions
			Then.onTheView1Page.theTableShouldHaveAllEntries().
				and.iTeardownMyAppFrame();
		});
	}
);
sap.ui.require([
		'sap/ui/test/Opa5',
		'sap/ui/test/matchers/AggregationLengthEquals',
		'sap/ui/test/matchers/PropertyStrictEquals',
		'sap/ui/test/matchers/BindingPath',
		'list/test/integration/pages/Common',
		'sap/ui/test/actions/Press'
	],
	function(Opa5,
		AggregationLengthEquals,
		PropertyStrictEquals,
		BindingPath,
		Common,
		Press) {
		"use strict";

		var sViewName = "View1",
			sTableId = "table";

		Opa5.createPageObjects({
			onTheView1Page: {
				baseClass: Common,
				actions: {
					iPressOnMoreData: function() {
						return this.waitFor({
							id: sTableId,
							viewName: sViewName,
							actions: new Press(),
							errorMessage: "The Table does not have a trigger"
						});
					},

					iPressOnTheItemWithTheID: function(sId) {
						return this.waitFor({
							controlType: "sap.m.ColumnListItem",
							viewName: sViewName,
							matchers: new BindingPath({
								path: "/Posts('" + sId + "')"
							}),
							actions: new Press(),
							errorMessage: "No list item with the id " + sId + " was found."
						});
					}
				},
				assertions: {
					theTableShouldHaveAllEntries: function() {
						return this.waitFor({
							id: sTableId,
							viewName: sViewName,
							matchers: new AggregationLengthEquals({
								name: "items",
								length: 5
							}),
							success: function() {
								Opa5.assert.ok(true, "The table has 5 items");
							},
							errorMessage: "Table does not have all entries."
						});
					},

					/*theTitleShouldDisplayTheTotalAmountOfItems: function() {
						return this.waitFor({
							id: "tableHeader",
							viewName: sViewName,
							matchers: function(oPage) {
								var sExpectedText = oPage.getModel("i18n").getResourceBundle().getText("worklistTableTitleCount", [23]);
								return new PropertyStrictEquals({
									name: "text",
									value: sExpectedText
								}).isMatching(oPage);
							},
							success: function() {
								Opa5.assert.ok(true, "The table header has 5 items");
							},
							errorMessage: "The Table's header does not container the number of items: 5"
						});
					},*/

					iShouldSeeTheTable: function() {
						return this.waitFor({
							id: sTableId,
							viewName: sViewName,
							success: function() {
								Opa5.assert.ok(true, "The table is visible");
							},
							errorMessage: "Was not able to see the table."
						});
					}
				}
			}
		});

	});
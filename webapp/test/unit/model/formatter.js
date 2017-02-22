sap.ui.define([
	"list/model/formatter"
], function(formatter) {
	"use strict";

	QUnit.module("Name");

	function NameTest(oOptions) {
		// Act
		var sState = formatter.Name(oOptions.Namevalue);

		// Assert
		oOptions.assert.strictEqual(sState, oOptions.expected, "Value was correct");
	}

	QUnit.test("Name Should not be empty", function(assert) {
		NameTest.call(this, {
			assert: assert,
			Namevalue: "something",
			expected: "Success"
		});
	});

	QUnit.test("if empty", function(assert) {
		NameTest.call(this, {
			assert: assert,
			Namevalue: "",
			expected: "None"
		});
	});

	QUnit.module("Address");

	function AddressTest(oOptions) {
		// Act
		var sState = formatter.Address(oOptions.Addressvalue);

		// Assert
		oOptions.assert.strictEqual(sState, oOptions.expected, "Address was correct");
	}

	QUnit.test("Address Should not be empty", function(assert) {
		AddressTest.call(this, {
			assert: assert,
			Addressvalue: "something",
			expected: "Success"
		});
	});

	QUnit.test("if empty", function(assert) {
		AddressTest.call(this, {
			assert: assert,
			Addressvalue: "",
			expected: "None"
		});
	});

	QUnit.module("Street1");

	function Street1Test(oOptions) {
		// Act
		var sState = formatter.Street1(oOptions.Street1Value);

		// Assert
		oOptions.assert.strictEqual(sState, oOptions.expected, "Street Value was correct");
	}

	QUnit.test("Street1 Should not be empty", function(assert) {
		Street1Test.call(this, {
			assert: assert,
			Street1Value: "something",
			expected: "Success"
		});
	});

	QUnit.test("if empty", function(assert) {
		Street1Test.call(this, {
			assert: assert,
			Street1Value: "",
			expected: "None"
		});
	});

	QUnit.module("Zip");

	function ZipTest(oOptions) {
		// Act
		var sState = formatter.Zip(oOptions.ZipValue);

		// Assert
		oOptions.assert.strictEqual(sState, oOptions.expected, "Zip Value was correct");
	}

	QUnit.test("Zip Should not be empty", function(assert) {
		ZipTest.call(this, {
			assert: assert,
			ZipValue: "something",
			expected: "Success"
		});
	});

	QUnit.test("if empty", function(assert) {
		ZipTest.call(this, {
			assert: assert,
			ZipValue: "",
			expected: "None"
		});
	});

	QUnit.module("Phone");

	function PhoneTest(oOptions) {
		// Act
		var sState = formatter.Phone(oOptions.PhoneValue);

		// Assert
		oOptions.assert.strictEqual(sState, oOptions.expected, "Phone Value was correct");
	}

	QUnit.test("Phone Should not be empty", function(assert) {
		PhoneTest.call(this, {
			assert: assert,
			PhoneValue: "something",
			expected: "Success"
		});
	});

	QUnit.test("if empty", function(assert) {
		PhoneTest.call(this, {
			assert: assert,
			PhoneValue: "",
			expected: "None"
		});
	});

});
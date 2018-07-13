jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Customer in the list
// * All 3 Customer have at least one Items

sap.ui.require([
	"sap/ui/test/Opa5",
	"de/adwizor/xsa/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"de/adwizor/xsa/test/integration/pages/App",
	"de/adwizor/xsa/test/integration/pages/Browser",
	"de/adwizor/xsa/test/integration/pages/Master",
	"de/adwizor/xsa/test/integration/pages/Detail",
	"de/adwizor/xsa/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "de.adwizor.xsa.view."
	});

	sap.ui.require([
		"de/adwizor/xsa/test/integration/MasterJourney",
		"de/adwizor/xsa/test/integration/NavigationJourney",
		"de/adwizor/xsa/test/integration/NotFoundJourney",
		"de/adwizor/xsa/test/integration/BusyJourney",
		"de/adwizor/xsa/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});
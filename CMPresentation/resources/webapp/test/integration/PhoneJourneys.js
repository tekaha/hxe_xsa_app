jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"de/adwizor/xsa/test/integration/NavigationJourneyPhone",
		"de/adwizor/xsa/test/integration/NotFoundJourneyPhone",
		"de/adwizor/xsa/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});
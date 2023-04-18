"use strict";

/* Require reusable components */
//require("@mymonero/mymonero-web-components");
//require("./node_modules/@mymonero/mymonero-web-components");
//require("@mymonero/mymonero-web-components");

/* Require various view elements */
require("./Exchange/Elements/ChangenowBuyWithFiatView");

require("./Exchange/Elements/ChangenowFixedRateView");

require("./Exchange/Elements/ChangenowFloatingRateView");

require("./Yat/Elements/YatSettingsView");
/* Import exchange landing page class */


var ExchangeLandingPage = require("./Exchange/Elements/ExchangeLandingPage");

var ExchangeNavigationController = require("./Exchange/Controllers/ExchangeNavigationController");
/* Export page templates */


module.exports = {
  ExchangeLandingPage: ExchangeLandingPage,
  ExchangeNavigationController: ExchangeNavigationController
};
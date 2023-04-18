"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function sendFunds(wallet, xmr_amount, xmr_send_address, sweep_wallet, validation_status_fn, handle_response_fn) {
  return new Promise(function (resolve, reject) {
    // for debug, we use our own xmr_wallet and we send a tiny amount of XMR. Change this once we can send funds
    var enteredAddressValue = xmr_send_address; // ;

    var resolvedAddress = '';
    var manuallyEnteredPaymentID = '';
    var resolvedPaymentID = '';
    var hasPickedAContact = false;
    var manuallyEnteredPaymentID_fieldIsVisible = false;
    var resolvedPaymentID_fieldIsVisible = false;
    var resolvedAddress_fieldIsVisible = false;
    var contact_payment_id;
    var cached_OAResolved_address;
    var contact_hasOpenAliasAddress;
    var contact_address;
    var raw_amount_string = xmr_amount; // XMR amount in double

    var sweeping = sweep_wallet;
    var simple_priority = 1;
    wallet.SendFunds(enteredAddressValue, resolvedAddress, manuallyEnteredPaymentID, resolvedPaymentID, hasPickedAContact, resolvedAddress_fieldIsVisible, manuallyEnteredPaymentID_fieldIsVisible, resolvedPaymentID_fieldIsVisible, contact_payment_id, cached_OAResolved_address, contact_hasOpenAliasAddress, contact_address, raw_amount_string, sweeping, simple_priority, validation_status_fn, cancelled_fn, handle_response_fn);

    function cancelled_fn() {// canceled_fn
      // TODO: Karl: I haven't diven deep enough to determine what state would invoke this function yet
    }
  });
} // end of functions to check Bitcoin address


function renderOrderStatus(order) {
  /*
         "btc_amount",
        "btc_amount_partial",
        "btc_dest_address",
        "btc_num_confirmations_threshold",
        "created_at",
        "in_amount_remaining",
        "out_amount",
        "status",
        "expires_at",
        "incoming_amount_total",
        "incoming_num_confirmations_remaining",
        "incoming_price_btc",
        "receiving_subaddress",
        "recommended_mixin",
        "remaining_amount_incoming",
        "seconds_till_timeout",
        "state",
        "uses_lightning",
        "uuid"
        "provider_order_id"
  */
  var idArr = ['in_amount_remaining', 'out_amount', 'status', 'expires_at', 'provider_order_id', 'in_address', 'in_amount'];
  var test = document.getElementById('exchangePage');

  if (!(test == null)) {
    idArr.forEach(function (item, index) {
      if (item == 'in_address') {
        document.getElementById('receiving_subaddress').innerHTML = order[item];
      } else {
        document.getElementById(item).innerHTML = order[item];
      }
    });
  }
}

function getTimeRemaining(endtime) {
  var total = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor(total / 1000 % 60);
  var minutes = Math.floor(total / 1000 / 60 % 60);
  var hours = Math.floor(total / (1000 * 60 * 60) % 24);
  var days = Math.floor(total / (1000 * 60 * 60 * 24));

  if (total < 0) {
    seconds = 0;
    minutes = 0;
  }

  return {
    total: total,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

function checkDecimals(value, decimals) {
  var str = value.toString();
  var strArr = str.split('.');

  if (strArr.length > 1) {
    if (strArr[1].length >= decimals) {
      return false;
    }
  }

  return true;
}

function isValidBase10Decimal(number) {
  var str = number.toString();
  var strArr = str.split('.');

  if (strArr.size > 1 && (0, _typeof2["default"])(strArr) === Array) {
    return false;
  }

  for (var i = 0; i < 2; i++) {
    if (isNaN(parseInt(strArr[i]))) {
      return false;
    }
  }

  if (strArr.size > 1) {
    if (strArr[1].length == 0) {
      return false;
    }
  }

  return true;
}

var _default = {
  getTimeRemaining: getTimeRemaining,
  isValidBase10Decimal: isValidBase10Decimal,
  checkDecimals: checkDecimals,
  renderOrderStatus: renderOrderStatus,
  sendFunds: sendFunds
};
exports["default"] = _default;
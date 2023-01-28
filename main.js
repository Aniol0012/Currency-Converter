const input = require("sync-input");

console.log("Welcome to Currency Converter!");
currencies = {
  USD: 1.0,
  JPY: 113.5,
  EUR: 0.89,
  RUB: 74.36,
  GBP: 0.75,
};

function printCurrencies() {
  for (let i = 1; i < Object.keys(currencies).length - 1; i++) {
    process.stdout.write(Object.keys(currencies)[i] + ", ");
  }
  process.stdout.write("USD, ");
  console.log(Object.keys(currencies)[Object.keys(currencies).length - 1]);
}

function getCurrencyPosition(currency) {
  if (!(currency in currencies)) {
    console.log("Unknown currency");
    return false;
  }
  for (let i = 0; i <= Object.keys(currencies)[i].length + 1; i++) {
    if (currency === Object.keys(currencies)[i]) {
      return i;
    }
  }
}

function check_returncode(given_function) {
  if (given_function === false) {
    process.exit(1);
  }
}

for (let i = 0; i < Object.keys(currencies).length; i++) {
  console.log(
    "1 USD equals " +
      Object.values(currencies)[i] +
      " " +
      Object.keys(currencies)[i]
  );
}

process.stdout.write("I can convert USD to these currencies: ");
printCurrencies();
let fromCurrency = input(
  "Type the currency you wish to convert: "
).toUpperCase();
let from_currency_position = getCurrencyPosition(fromCurrency);
check_returncode(from_currency_position);

let currency = input("To: > ").toUpperCase();
let currency_position = getCurrencyPosition(currency);
check_returncode(currency_position);

let amount = input("Amount: > ");
if (amount < 1) {
  console.log("The amount cannot be less than 1");
  process.exit(1);
}
if (amount.isNumber === false) {
  console.log("The amount has to be a number");
  process.exit(1);
}

let result =
  (Object.values(currencies)[currency_position] * amount) /
  Object.values(currencies)[from_currency_position];
let result_fixed = result.toFixed(4);
console.log(
  "Result: " +
    amount +
    " " +
    fromCurrency +
    " equals " +
    result_fixed +
    " " +
    currency
);

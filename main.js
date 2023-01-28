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

function checkReturncode(givenFunction) {
  if (givenFunction === false) {
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
let fromCurrencyPosition = getCurrencyPosition(fromCurrency);
checkReturncode(fromCurrencyPosition);

let currency = input("To: > ").toUpperCase();
let currencyPosition = getCurrencyPosition(currency);
checkReturncode(currencyPosition);

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
  (Object.values(currencies)[currencyPosition] * amount) /
  Object.values(currencies)[fromCurrencyPosition];
let resultFixed = result.toFixed(4);
console.log(
  "Result: " +
    amount +
    " " +
    fromCurrency +
    " equals " +
    resultFixed +
    " " +
    currency
);

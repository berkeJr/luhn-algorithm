const validateCreditCardNumber = require('./app');

// Bu tool ile Credit Card Numarası Üretip Fonksiyonu Test Edebiliriz
// https://www.creditcardvalidator.org/generator

console.log(validateCreditCardNumber("4532201414641731")); // Visa = true
console.log(validateCreditCardNumber("5316400776001851")); // MasterCard = true
console.log(validateCreditCardNumber("379727417901957")); // Amex = true
console.log(validateCreditCardNumber("6222021199044319")); // UnionPay = true
console.log(validateCreditCardNumber("3016364233432398")); // Diners = true
console.log(validateCreditCardNumber("6011866636836197")); // Discover = true


console.log(validateCreditCardNumber("1234567890123456")); // false
console.log(validateCreditCardNumber("123456AABB")); // false
console.log(validateCreditCardNumber("1564894561657159")); // false
console.log(validateCreditCardNumber("7563214588")); // false
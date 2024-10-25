"use strict";

function makeTransaction(quantity, pricePerDroid) {
  return `You ordered ${quantity} droids worth ${
    quantity * pricePerDroid
  } credits!`;
}

console.log(makeTransaction(5, 3000));

// task 2

function getShippingMessage(country, price, deliveryFee) {
  return `Shipping to ${country} will cost ${price + deliveryFee} credits`;
}

console.log(getShippingMessage("Australia", 120, 50));

// task 3

function getElementWidth(content, padding, border) {
  return `${content} + ${padding * 2} + ${border * 2}`;
}
console.log(getElementWidth("50px", "8px", "4px"));

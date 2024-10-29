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
  const contentNum = Number.parseInt(content);
  const paddingNum = Number.parseInt(padding);
  const borderNumb = Number.parseInt(border);

  return contentNum + paddingNum * 2 + borderNumb * 2;
}
console.log(getElementWidth("50px", "8px", "4px"));

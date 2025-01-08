// const user = {
//     username: "Victor",
//     showName() {
//           // ✅ Віктор біжить швидко, тому що він (this) намагається зловити поїзд.
//       console.log(this.username);
//     },
//   };

//   user.showName();

const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};

console.log(pizzaPalace.order("Supercheese"));

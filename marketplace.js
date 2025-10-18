function ItemGroup(name, pricePerItem, numberOfItems) {
  this.name = name;
  this.pricePerItem = pricePerItem;
  this.numberOfItems = numberOfItems;
}

function Cart() {
  this.itemGroups = [];

  this.addItemGroup = function(itemGroup) {
    this.itemGroups.push(itemGroup);
  };

  this.getTotalAmount = function() {
    let amount = 0;
    for (let i = 0; i < this.itemGroups.length; i++) {
      amount += this.itemGroups[i].pricePerItem * this.itemGroups[i].numberOfItems;
    }
    return amount;
  };

  this.showTotalAmount = function() {
    let total = this.getTotalAmount();
    let taxRate = 0.15;
    let totalWithTax = total * (1 + taxRate);
    document.write(`<p>Number of item groups: ${this.itemGroups.length}</p>`);
    document.write(`<p>Total price: $${total.toFixed(2)}</p>`);
    document.write(`<p>Total with taxes: $${totalWithTax.toFixed(2)}</p>`);
  };
}

// Example usage
let cart = new Cart();
let pants = new ItemGroup("Nice Pants", 10.05, 15);
cart.addItemGroup(pants);
cart.showTotalAmount();
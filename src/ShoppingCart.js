class ShoppingCart {
    constructor() {
        this.items = []
        
    }
    getItems() {
        return this.items
            .map(item => item)
    }
    addItem(itemName, quantity, price) {
        this.items.push({name: itemName}, {quantity: quantity}, {pricePerUnit: price})
    }
    clear() {
        this.items.length = 0
    }
    clone() {
        return new ShoppingCart(this.items)
    }
}
const cart = new ShoppingCart()
cart.addItem("watch", 1, 15.50)
console.log(cart)
cart.getItems()
console.log(cart.getItems())

module.exports = ShoppingCart; 
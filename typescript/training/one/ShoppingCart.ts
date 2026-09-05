import type { Product } from "./Products"

export class ShoppingCart {

    private products: Product[];

    constructor() {
        this.products = [];
    }

    public addProduct(product: Product): void {
        this.products.push(product);
    }

    public getProducts(): Product[] {
        return this.products;
    }

    public getTotal(): number {
        let total = 0;
        for (const product of this.products) {
            total += product.price;
        }
        return total;
    }
}


const cart = new ShoppingCart();

cart.addProduct({
  id: "p1",
  name: "Keyboard",
  price: 200
});

cart.addProduct({
  id: "p2",
  name: "Mouse",
  price: 100
});

console.log(cart.getTotal());
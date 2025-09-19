import { products } from "../../mock/products"

export default class productsModal { 
   #products = products;

   get products() { 
      return this.#products;
   }

   addProducts(products) { 
      this.#products.push(products);
   }

   getProductById(id) {
      this.#products.find((product) => product.id === id);
   }  
}

// не modal а model (название папки тоже)
// имя класса в большой буквы
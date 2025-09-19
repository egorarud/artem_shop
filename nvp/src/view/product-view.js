import AbstractView from "./abstract-view"

function getLayout(product) {

    // класс product, а не products
    return (
        `<li class="products" id="${product.id}">
          <img class="product-png" src="public/img/${product.img}" alt="${product.name}">
          <p class="product-name">${product.name}</p>
          <p class="product-prase">${product.price}</p>
      </li>`
    );
}

export default class ProductView extends AbstractView{
    #product = null;
    #onOpen

    constructor(product, onOpen) { 
        super();
        this.#product = product;
        this.#onOpen = onOpen;
        document.querySelector(".products").addEventListener("click", this.#productClickHandler)
    }

    get template() { 
        return getLayout(this.#product)
    }

    #productClickHandler = (evt) => { 
        evt.preventDefault();
        this.#onOpen()
    }

    
}

export{getLayout}
 


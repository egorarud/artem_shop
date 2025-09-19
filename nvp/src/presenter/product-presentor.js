import ProductView  from "../view/product-view.js"
import productsModal from "../modal/produts-modal"
import { render } from "../utils/render.js";
import EmptyCatalogView from "../view/empty-product-view.js";




export default class ProductsPresenter { 
    #productsModal;// model
    #container;

    constructor() { 
        this.#productsModal = new productsModal // экземпляр класса создает со скобками new Class()
        this.#container = document.querySelector(".catalog")
    }

    init() {
        this.#renderProducts()
    }

    #renderProducts() { 
        const products = this.#productsModal.products
        if (products.length > 0) {
            products.forEach((product) => render(new ProductView(product), this.#container));
        }
        else {
            render(new EmptyCatalogView(), this.#container)
        }     
    }
} 
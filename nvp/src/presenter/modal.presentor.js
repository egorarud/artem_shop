import ProductView  from "../view/product-view.js"
import productsModal from "../modal/produts-modal"
import { render } from "../utils/render.js";
import EmptyCatalogView from "../view/empty-product-view.js";
import ModalView from "../view/modal.view.js";

// много пустого места

export default class ProductsPresenter { 
    #modalComponent;

    init() {
        this.#modalComponent = new ModalView(content, this.#closeButtonClickHandler)
        this.#modalComponent = new ModalView(content, this.#openButtonClickHandler)
        // компонент модального окна, должен быть один на один и тот же контент
    }

    open() { 
        console.log('Open')
    }

    close() { 
        console.log('slose')
    }

    #closeButtonClickHandler = () => { 
        this.close()
    }

    #openButtonClickHandler = () => { 
        this.open()
    }

} 

// название файла через тире, а не точку
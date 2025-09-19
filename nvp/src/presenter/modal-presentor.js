import ModalView from "../view/modal.view.js";

export default class ProductsPresenter { 
    #modalComponent;

    init() {
        this.#modalComponent = new ModalView(content, this.#closeButtonClickHandler, this.#openButtonClickHandler);
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
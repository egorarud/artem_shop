import ModalView from "../view/modal.view.js";

<<<<<<< HEAD:nvp/src/presenter/modal.presentor.js
// много пустого места

=======
>>>>>>> 46dc8a9c000e8558778d33b7d055c3d24a56db7b:nvp/src/presenter/modal-presentor.js
export default class ProductsPresenter { 
    #modalComponent;

    init() {
<<<<<<< HEAD:nvp/src/presenter/modal.presentor.js
        this.#modalComponent = new ModalView(content, this.#closeButtonClickHandler)
        this.#modalComponent = new ModalView(content, this.#openButtonClickHandler)
        // компонент модального окна, должен быть один на один и тот же контент
=======
        this.#modalComponent = new ModalView(content, this.#closeButtonClickHandler, this.#openButtonClickHandler);
>>>>>>> 46dc8a9c000e8558778d33b7d055c3d24a56db7b:nvp/src/presenter/modal-presentor.js
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
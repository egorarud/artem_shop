import AbstractView from "./abstract-view"

function getLayout() {
    return (
        `<div class="modal-bg">
            <div class="modal">
                < img class="arrow" src="public/img/images (7).png" alt="назад" width="50" height="50">
                ${content}
            </div>
        </div>`
    )
}

export default class ModalView extends AbstractView{
    #content 
    #onClose
    constructor(content, onClose) { 
        super()
        this.#content = content
        this.onClose = onClose // есть this.#onClose

        document.querySelector('.arrow').addEventListener('click', this.#closeButtonClickHandler)
    }
    get template() { 
        return getLayout()
    
    }

    #closeButtonClickHandler = (evt) => { 
        evt.preventDefault();
        this.onClose
    }
}

// название файла черерз тире




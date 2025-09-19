import AbstractView from "./abstract-view"

function getLayout() {
    return (
        '<p class="empty-catalog">католог сейчас пуст</p>'
    )
}

export default class EmptyCatalogView extends AbstractView{
    get template() { 
        return getLayout()
    }
}


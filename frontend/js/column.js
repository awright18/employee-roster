// templateElement is a document fragment

export class Columns {

    constructor (injectorElement, driverElement, templateFragment, deleteIdentifier) {
        this.list = [];
        this.injectorElement = injectorElement
        this.deleteIdentifier = deleteIdentifier
        this.templateFragment = document.importNode(templateFragment, true)

        this.eventDriverElement = driverElement
        this.eventDriverElement.addEventListener('click', this.createColumn.bind(this))

        injectorElement.addEventListener('columnDeleted', this.onColumnDeleted.bind(this))
    }
    
    createColumn () {
        let column = new Column(this.injectorElement, this.templateFragment, this.list.length + 1, '.del-ico')
        this.list.push(column)
    }

    onColumnDeleted (event) {
        this.list = this.list.filter(column => column.mainElement.id != event.detail.id)
    }

}

export class Column {
    injectorElement;
    mainElement;
    colNumber;
    #options;

    constructor (injectorElement, templateFragment, columnCount, deleteIdentifier) {
        this.injectorElement = injectorElement
        
        // Since first child is always the text #document-fragment
        this.mainElement = templateFragment.firstChild.nextSibling
        
        this.deleteElement = this.mainElement.querySelector(deleteIdentifier)
        this.deleteElement.addEventListener('click', this.deleteColumn.bind(this))

        this.colNumber = columnCount
        this.#options = []
        this.getOptions()
        this.addToDom.bind(this)()
    }
    
    getOptions () {
        let options = this.mainElement.querySelectorAll('.column-option')
        let allowEmpty;
        let columnOption;

        options.forEach((option) => {
            if (option.classList.contains('not-empty')) {
                allowEmpty = false
            } else {
                allowEmpty = true
            }

            columnOption = new ColumnOption(option, allowEmpty)
        })

    }

    deleteColumn () {

        let element = document.querySelector(`#col_${this.colNumber}`)
        document.querySelector(`#${this.mainElement.id}`).remove(element)

        // Custom event to update the columns list in Columns class
        const columnDeleted = new CustomEvent('columnDeleted', {
            detail: {
                id: `col_${this.colNumber}`
            }
        })
        document.querySelector(`#${this.injectorElement.id}`).dispatchEvent(columnDeleted)
    }

    addToDom () {
        this.mainElement.id = `col_${this.colNumber}`
        this.injectorElement.appendChild(this.mainElement)
    }

}

export class ColumnOption {

    selectedElement;

    constructor (optionElement, allowEmpty) {
        this.optionElement = optionElement
        this.allowEmpty = allowEmpty
        this.optionValueElements = []
        this.isAnOptionSelected = false

        // this.getOptions.bind(this)
        this.getOptions.bind(this)()
    }

    getOptions () {
        for (let childElement of this.optionElement.children) {

            if (childElement.classList.contains("option-value")) {
                this.optionValueElements.push({
                    element: childElement,
                    allowOptionEmpty: this.allowEmpty,
                    isSelected: false
                })
                this.optionElement.addEventListener('click', this.toggleOptions.bind(this))
            }
        }
        console.log(this.optionValueElements)
    }

    toggleOptions (click) {

        // ONLY proceed if the clicked element the option values element
        // and not the option element itself
        if (click.target != this.optionElement) {
            
            if (this.isAnOptionSelected === false && this.allowEmpty === false) {
                click.target.classList.add('bg-info')
                this.isAnOptionSelected = true
            }

        }
    }
}
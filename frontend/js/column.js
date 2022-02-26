export class Column {
    #options;

    constructor () {
        this.#options = []

        let templateHTML = document.getElementById('tableColumn').content
        this.columnContent = templateHTML.cloneNode(true)

        this.createOptions()
        this.addCloseButton()
    }

    createOptions () {
        let optionElements = this.columnContent.querySelectorAll('.column-option')
        optionElements.forEach((option) => {
            let optionObj = new ColumnOption(option, !option.classList.contains('not-empty'))
            this.addOption(optionObj)
        })
    }

    addCloseButton () {
        let closeButton = this.columnContent.querySelector('.del-ico')
        closeButton.addEventListener('click', this.deleteColumn())
    }

    getOptions () {
        return this.#options
    }
    
    addOption (option) {
        this.#options.push(option)
    }

    deleteColumn () {
        let columnsElement = document.querySelector('#rosterColumns')
        let baseElement = this.columnContent.querySelector('fieldset')
        // columnsElement.remove(baseElement)

        // Should log to console when closeButton is clicked
        // but is logging to console when the column is created? (Add button)
        console.log(baseElement)
    }
}


export class ColumnOption {

    constructor (parentElement, allowEmpty) {
        this.parentElement = parentElement
        this.allowEmpty = allowEmpty
        this.children = []
        this.isAnOptionSelected = false
        this.selectedElement

        for (let childElement of this.parentElement.children) {
            this.children.push({
                element: childElement,
                allowDeselect: allowEmpty,
                isSelected: false
            })
        }

        this.parentElement.addEventListener('click', this.toggleOptions)

        // this.children = [...this.element.chldren].map
    }

    toggleOptions (click) {
        
        // ONLY proceed if the clicked element is not the parent
        if (click.target != this.parentElement) {
            


        }
    }
}
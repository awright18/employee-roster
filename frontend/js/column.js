// templateElement is a document fragment

export class Columns {

    constructor (injectorElement, driverElement, templateFragment, deleteIdentifier) {
        this.list = [];
        
        this.injectorElement = injectorElement
        
        this.deleteIdentifier = deleteIdentifier
        
        this.templateFragment = templateFragment//document.importNode(templateFragment, true)

        this.eventDriverElement = driverElement
        
        this.eventDriverElement.addEventListener('click', this.addColumn.bind(this))

    }

    addColumn () {
        let columnId = this.list.length + 1;

        let column = new Column(this.templateFragment,columnId, '.del-ico',this)

        this.list.push(column)

        this.injectorElement.appendChild(column.element);
    }

    onDelete (columnElement) {
    
        this.list = this.list.filter(column => column.element.id != columnElement.id)

        columnElement.remove();
    }

}

export class Column {    
    #options;
    columns;
    constructor (templateElement, columnId, deleteIdentifier, columns) {
        
        this.columns = columns;

        this.element = templateElement.content.firstElementChild.cloneNode(true)

        this.element.id = `col_${columnId}`;

        this.deleteElement = this.element.querySelector(deleteIdentifier)

        this.deleteElement.addEventListener('click', this.deleteColumn.bind(this));

        this.#options = []
        this.getOptions()
    }
    
    getOptions () {
        let options = this.element.querySelectorAll('.column-option')

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

    deleteColumn (click) {
        //This finds the closest anscestor fieldset and grabs its id 
        let columnElement = click.target.closest('fieldset');    

        //tell the columns object to delete this element
        this.columns.onDelete(columnElement);
    }
}

export class ColumnOption {

    selectedElement;

    constructor (optionElement, allowEmpty) {
        this.optionElement = optionElement
        
        this.allowEmpty = allowEmpty
        
        this.optionValueElements = []

        this.isAnOptionSelected = false
        
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
                this.optionValueElements.forEach((option) => {
                    console.log(this);
                    option.element.addEventListener(
                        'click', 
                        this.toggleOptions.bind(this)
                    )
                })
            }
        }
    }

    toggleOptions (click) {

        console.log(click.target)
            
            this.optionValueElements.forEach((optionValueElement) => {

                // do something

            })
    }
}
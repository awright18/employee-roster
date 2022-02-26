import { Column } from'./column.js'

let columnsList = []

// ADD COLUMN EVENT
const addButton = document.querySelector('#addButton')
addButton.addEventListener('click', createRosterColumn)

function createRosterColumn () {
    const columnsElement = document.querySelector('#rosterColumns')

    let column = new Column()
    columnsList.push(column.columnContent)

    columnsElement.appendChild(column.columnContent)
}
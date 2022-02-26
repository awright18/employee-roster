import { Column, ColumnOption } from'./toggleOptions.js'

let showCreateButton = false
let rosterColCount = 0
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

// REMOVING COLUMNS
function deleteColumn (e) {
    let idNumber = e.target.id.slice(1, e.target.id.length)
    
    let colElement = document.querySelector(`#rsCol${idNumber}`)
    colElement.remove()
}
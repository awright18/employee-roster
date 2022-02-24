let showCreateButton = false;
let rosterColCount = 0;


// ADD COLUMN EVENT
const addButton = document.querySelector('#addButton')
addButton.addEventListener('click', createRosterColumn)

function createRosterColumn () {
    let rosterColumnTemplate = document.querySelector('#tableColumn')

    let columnHTML = document.importNode(rosterColumnTemplate.content, true)

    // Adding IDs to the fieldset and the delete icon
    rosterColCount++
    columnHTML.children[0].id = `rsCol${rosterColCount}`
    let deleteColElement = columnHTML.children[0].querySelector('.del-ico')
    deleteColElement.id = `_${rosterColCount}`
    deleteColElement.addEventListener('click', deleteColumn)
    
    let rosterColumnsElement = document.querySelector('#rosterColumns')
    rosterColumnsElement.appendChild(columnHTML)

    addListenerToOptions()
}

function addListenerToOptions () {
    const selectTypeElements = document.querySelectorAll('.select-type')
    selectTypeElements.forEach((element) => {
        element.addEventListener('click', selectSpan)
    })
}

function selectSpan (e) {
    if (!e.target.classList.contains("select-type")) {
        const parentElement = e.target.parentElement

        for (let child of parentElement.children) {
            if (child === e.target) {
                child.classList.toggle('bg-info')
            } else {
                child.classList.remove('bg-info')
            }
        }
    }

}

// REMOVING COLUMNS
function deleteColumn (e) {
    let idNumber = e.target.id.slice(1, e.target.id.length)
    
    let colElement = document.querySelector(`#rsCol${idNumber}`)
    colElement.remove()
}
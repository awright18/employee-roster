let tableColumns = 0;

function addColumn() {
    let formElement = document.getElementById("createTable");
    let columnElement = document.getElementById("tableColumn").content;
    let columnClone = document.importNode(columnElement, true);
    columnClone.querySelector("fieldset").id = "column_" + tableColumns;

    formElement.appendChild(columnClone);

    tableColumns++;
    console.log(columnClone);
}

function removeColumn (e) {
    e.target.parentElement.remove();

}
import { Columns, Column } from'./column.js'

const eventDriverElement = document.querySelector('#addButton')
const injectorElement = document.querySelector('#columns')
const templateElement = document.querySelector('#column')
const deleteIdentifier = '.del-ico'

const columns = new Columns(injectorElement, eventDriverElement, templateElement, deleteIdentifier)

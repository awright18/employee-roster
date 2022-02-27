import { Columns, Column } from'./column.js'

const eventDriverElement = document.querySelector('#addButton')
const injectorElement = document.querySelector('#columns')
const templateFragment = document.querySelector('#column').content
const closeElementSelector = '.del-ico'

const columns = new Columns(injectorElement, eventDriverElement, templateFragment, closeElementSelector)

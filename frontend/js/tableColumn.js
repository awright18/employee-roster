const selectTypeElements = document.querySelectorAll('.select-type')
selectTypeElements.forEach((element) => {
    element.addEventListener('click', selectSpan)
})

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
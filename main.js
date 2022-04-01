
const btnCreateTask = document.querySelector('.create button')
const getTask = document.querySelector('.create input')
const msg = document.querySelector('.container-taskCreate div')


console.log(getTask.value)

const taskList = document.querySelector('ul')

const tasks = []



function createElementTask(item) {
    const element = document.createElement('li')
    const check = document.createElement('input')

    if (item === "") {
        msg.textContent = 'Campo vazio'

        return null;

    } else {
        msg.textContent = ''
        const text = document.createTextNode(item)
        const label = document.createElement('label')
        const button = document.createElement('button')
        const icon = document.createElement('i')
        icon.classList.add('fa-solid')
        icon.classList.add('fa-trash')

        check.type = 'checkbox'
        check.setAttribute('id', 'check')
        label.setAttribute('for', 'check')

        label.appendChild(text)
        element.appendChild(check)
        element.appendChild(label)
        element.appendChild(button)
        button.appendChild(icon)
        console.log(element)
    }


    return taskList.appendChild(element)




}

btnCreateTask.addEventListener('click', () => {
    tasks.push(getTask.value)
    createElementTask(getTask.value)
    getTask.value = ''

})























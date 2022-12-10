let modal = document.querySelector('.modal')
let btnOpen = document.querySelector('.openModal')
let btnClose = document.querySelector('.formSubmit')

let inputName = document.querySelector('.inputName')
let number = document.querySelector('.inputNumber')
let date = document.querySelector('.inputDate')

let output = document.querySelector('.output') 

btnOpen.addEventListener('click', () => {
    modal.showModal()
})
btnClose.addEventListener('click', (e) => {
    e.preventDefault()

    console.log(inputName.value)
    console.log(number.value)
    console.log(date.value)

    //ListWrapper

    let listWrapper = document.createElement('div')
    listWrapper.classList.add('listWrapper')

    //List

    let listInfo = document.createElement('div')
    listInfo.classList.add('listInfo')

    let infoName = document.createElement('p')
    infoName.innerText = "Name: "
    listInfo.append(infoName)

    let infoNumber = document.createElement('p')
    infoNumber.innerText = "Number: "
    listInfo.append(infoNumber)
    
    let infoDate = document.createElement('p')
    infoDate.innerText = "Date: "
    listInfo.append(infoDate)

    //ListInfo

    let list = document.createElement('div')
    list.classList.add('list')

    let nameText = document.createElement('p')
    nameText.innerText = inputName.value
    list.append(nameText)

    let numberText = document.createElement('p')
    numberText.innerText = number.value
    list.append(numberText)

    let dateText = document.createElement('p')
    dateText.innerText = date.value
    list.append(dateText)

    //deleteBtn

    let deleteBtn = document.createElement('button')
    deleteBtn.innerText = "X"
    deleteBtn.classList.add('deleteBtn')

    deleteBtn.addEventListener('click', e => {
        let target = e.target;
        target.parentElement.remove()
    })
    
    output.appendChild(listWrapper)
    listWrapper.appendChild(listInfo)
    listWrapper.appendChild(list)
    listWrapper.appendChild(deleteBtn)


    modal.close()
    console.log(output.children.length)

    if(output.children.length >= 5) {
        alert('no more than 4 cards')
    }
})

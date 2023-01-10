let modal = document.querySelector('.modal')
let btnOpen = document.querySelector('.openModal')
let btnClose = document.querySelector('.formSubmit')

let inputName = document.querySelector('.inputName')
let number = document.querySelector('.inputNumber')
let date = document.querySelector('.inputDate')
let balance = document.querySelector('.inputBalance')

let output = document.querySelector('.output') 

let onScreenBalanceValue = document.querySelectorAll('.balanceValue')
let cardBalanceValue = document.querySelector('.cardBalanceValue')

//topRightContent modal
let transferBtn = document.querySelector('.transferBtn')
let rightContentModal = document.querySelector('.rightContentModal')

transferBtn.addEventListener('click', () => {
    rightContentModal.showModal();
})
let rightContentFormSubmit = document.querySelector('.rightContentFormSubmit')
let rightContentBalance = document.querySelector('.rightContentBalance')
let rightContentInputBalance = document.querySelector('.rightContentInputBalance')

rightContentFormSubmit.addEventListener('click', e => {
    e.preventDefault();
    rightContentModal.close();
    
    value = rightContentInputBalance.value;
    const rightContentBalanceValue = Number(rightContentBalance.innerText) + Number(value)
    rightContentBalance.innerText = rightContentBalanceValue
    cardBalanceValue.innerText = rightContentBalanceValue
    console.log(parseInt(rightContentBalanceValue))
})

btnOpen.addEventListener('click', () => {
    modal.showModal()
})
btnClose.addEventListener('click', (e) => {
    
    if(output.children.length === 4) {
        alert('no more than 4 cards')
    } else {
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
        
        let infoBalance = document.createElement('p')
        infoBalance.innerText = "Balance: "
        listInfo.append(infoBalance)
        
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
        let BalanceText = document.createElement('p')
        BalanceText.innerText = balance.value + "$"
        list.append(BalanceText)
        
        //deleteBtn
        
        let deleteBtn = document.createElement('button')
        deleteBtn.innerText = "X"
        deleteBtn.classList.add('deleteBtn')
        
        
        output.appendChild(listWrapper)
        listWrapper.appendChild(listInfo)
        listWrapper.appendChild(list)
        listWrapper.appendChild(deleteBtn)
        
        
        modal.close()
        
        let currentCardAmount = document.querySelector('.currentCardAmount')
        currentCardAmount.innerText = output.children.length
        console.log(output.children.length)

        deleteBtn.addEventListener('click', e => {
            let target = e.target;
            target.parentElement.remove()
            currentCardAmount.innerText = output.children.length + 1 - 1
        })
    }
})



//Modal for transactions
let transBtn = document.querySelector('.transBtn')
let transModal = document.querySelector('.transModal')
let formTransSubmit = document.querySelector('.formTransSubmit')

transBtn.addEventListener('click', () => {
    transModal.showModal()
})
formTransSubmit.addEventListener('click', (e, value) => {
    let inputTransType = document.querySelector('.inputTransType')
    let inputPayOrTrans = document.querySelector('.inputPayOrTrans')
    let inputTransNumber = document.querySelector('.inputTransNumber')
    e.preventDefault()
    transModal.close()
    // console.log(inputTransType.value)
    // console.log(inputPayOrTrans.value)

    //Handle withdraw and deposit function
    onScreenBalanceValue.forEach(amountOfBalance => {
        if(inputPayOrTrans.value === "Payment") {
            console.log("-" + inputTransNumber.value + "$")
            //Withdraw "function"
            value = inputTransNumber.value;
            const balanceValue = Number(amountOfBalance.innerText) - Number(value)
            amountOfBalance.innerText = balanceValue
            cardBalanceValue.innerText = balanceValue
        } 
        else if(inputPayOrTrans.value === "Transfer"){
            console.log(inputTransNumber.value + "$")
            //deposit "function"
            value = inputTransNumber.value;
            const balanceValue = Number(amountOfBalance.innerText) + Number(value)
            amountOfBalance.innerText = balanceValue
            cardBalanceValue.innerText = balanceValue
        } else {
            //Bug: items still get appended to page
            return;
        }
    })

    



    //append
    let transOutput = document.querySelector('.transOutput')
    
    let transOutputWrapper = document.createElement('div')
    transOutputWrapper.classList.add('outputWrapper')
    
    //get date
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];

    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes();
    let dateTime = date.substring(5).replace("-", "/") + " " + "-" + " " + time;

    let transTypeDate = document.createElement('p')
    transTypeDate.innerText =  dateTime
    transTypeDate.style.fontSize = ".8rem"
    transTypeDate.style.opacity = "80%"
    transTypeDate.classList.add('transTypeStyling')
    transOutputWrapper.append(transTypeDate)
    
    //get Type of purchase
    let transTypeName = document.createElement('p')
    transTypeName.innerText =  inputTransType.value
    transTypeName.classList.add('transTypeStyling')
    transOutputWrapper.append(transTypeName)
    
    //get type of transaction
    let transTypePayment = document.createElement('p')
    transTypePayment.innerText =  inputPayOrTrans.value
    transTypePayment.classList.add('transTypeStyling')
    transOutputWrapper.append(transTypePayment)
    
    //get amount
    let TransTypeNumber = document.createElement('p')
    if(inputPayOrTrans.value === "Payment") {
        TransTypeNumber.innerText = "-" + inputTransNumber.value + "$"
        TransTypeNumber.style.color = "Orange"
        transTypePayment.style.color = "Orange"
    } else {
        TransTypeNumber.innerText = inputTransNumber.value + "$"
        TransTypeNumber.style.color = "Blue"
        transTypePayment.style.color = "Blue"
    }
    TransTypeNumber.classList.add('transTypeStyling')
    transOutputWrapper.append(TransTypeNumber)


    transOutput.appendChild(transOutputWrapper)
})
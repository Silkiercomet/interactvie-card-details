const form = document.querySelector("#form")

form.addEventListener("submit", function(e){
    e.preventDefault()

    const name = document.querySelector("#name").value
    const number = document.querySelector("#number").value
    const date = addZero(document.querySelector("#date").value)
    const year = addZero(document.querySelector("#year").value)
    const cvc = document.querySelector("#cvc").value

    const cleanedValue = number.replace(/\s/g, '').substring(0, 16);
    const formattedValue = cleanedValue.replace(/(.{4})/g, '$1 ').trim();

    const cardNumber = document.querySelector("#card_number")
    const cardMonth = document.querySelector("#card_month")
    const cardYear = document.querySelector("#card_year")
    const cardName = document.querySelector("#card_name")
    const cardCVC = document.querySelector(".back__number")

    cardNumber.textContent = formattedValue
    cardMonth.textContent = date
    cardYear.textContent = year
    cardCVC.textContent = cvc
    cardName.textContent = name
})

function addZero(str){
    if(str < 10){
        return "0".concat(str)
    }
    return str
}
const form = document.querySelector("#form")
const thankyou = document.querySelector("#thankbtn")
const cardNumber = document.querySelector("#card_number")
const cardMonth = document.querySelector("#card_month")
const cardYear = document.querySelector("#card_year")
const cardName = document.querySelector("#card_name")
const cardCVC = document.querySelector(".back__number")

form.addEventListener("submit", function(e){
    e.preventDefault()

    const name = document.querySelector("#name").value
    const number = document.querySelector("#number").value
    const date = addZero(document.querySelector("#date").value)
    const year = addZero(document.querySelector("#year").value)
    const cvc = document.querySelector("#cvc").value

    const cleanedValue = number.replace(/\s/g, '').substring(0, 16);
    const formattedValue = cleanedValue.replace(/(.{4})/g, '$1 ').trim();

    toggleFadeInCards()

    setTimeout(function(){
        cardNumber.textContent = formattedValue
        cardMonth.textContent = date
        cardYear.textContent = year
        cardCVC.textContent = cvc
        cardName.textContent = name
        toggleFadeInCards()
    }, 1000)

    thankYouState()
})

thankyou.addEventListener("click" , function(){
    document.querySelector("#name").value = ""
    document.querySelector("#number").value = ""
    document.querySelector("#date").value = ""
    document.querySelector("#year").value = ""
    document.querySelector("#cvc").value = ""
    thankYouState()
})

function addZero(str){
    if(str < 10){
        return "0".concat(str)
    }
    return str
}
function toggleFadeInCards(){

    let arr = [cardNumber, cardMonth, cardYear, cardName, cardCVC]
    arr.map(e => e.classList.toggle("hide"))
}

function thankYouState(){

    let form = document.querySelector("#form")
    let thankYou = document.querySelector(".completed_state")
    let arr = [form, thankYou]
    const animation = () => arr.map(e => e.classList.toggle("hide"))
    animation()
    setTimeout(function(){
        arr.map(e => e.classList.toggle("none"))
        animation()
    }, 1000)  

}


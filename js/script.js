const inputEmail = document.querySelector('.email')
const btnSubmit = document.querySelector('.submit')
const divPai = document.querySelector('.div')

const spanErro = document.createElement('span')
const spanSuccess = document.createElement('span')
spanSuccess.textContent = "Success!"

btnSubmit.addEventListener('click', function (event) {
    event.preventDefault()

    if (inputEmail.value.length <= 0) {
        spanErro.textContent = "This field cannot be empty"
        divPai.appendChild(spanErro)
        spanErro.classList.add("span")
        inputEmail.classList.add("erro")
    } else {
        spanErro.textContent = "Please provide a valid email address"
        if (validarEmail(inputEmail.value) == false) {
            inputEmail.classList.add("erro")
            divPai.appendChild(spanErro)
            spanErro.classList.add("span")
        } else {
            inputEmail.classList.remove("erro")
            divPai.removeChild(spanErro)
            divPai.appendChild(spanSuccess)
            spanSuccess.classList.add("span-success")
        }
    }
})

function validarEmail(email) {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
}
const form = document.querySelector("#form-numerico")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let formValido = false

    const campoA = document.querySelector("#campo-a")
    const campoB = document.querySelector("#campo-b")

    formValido = parseInt(campoB.value) > parseInt(campoA.value)

    const mensagem = document.querySelector("#mensagem")
    mensagem.className = ""
    mensagem.style.display = "block"

    if (formValido) {
        mensagem.classList.add("valid-form-message")
        mensagem.innerHTML = "Form válido!"
        campoA.value = ""
        campoB.value = ""
    } else {
        mensagem.classList.add("invalid-form-message")
        mensagem.innerHTML = "Form inválido! O número B não é maior que o número A"
    }
})
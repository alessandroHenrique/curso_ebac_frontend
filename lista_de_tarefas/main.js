$(document).ready(() => {
    $("form").on("submit" ,(e) => {
        e.preventDefault()
        const tarefa = $("#tarefa").val()
        const novaTarefa = $(`<li>${tarefa}</li>`).click(function() {
            $(this).toggleClass("sublinhar")
        })
        novaTarefa.appendTo("ul")
        $("#tarefa").val("")
    })
})
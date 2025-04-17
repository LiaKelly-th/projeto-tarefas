function adicionarTarefa() {
    const input = document.getElementById("tarefaInput");
    const tarefa = input.value.trim();

    if (tarefa === "") return;

    const li = document.createElement("li");
    li.textContent = tarefa;

    //Remover tarefa ao clicar
    li.addEventListener("click", () =>{
        li.remove();
    });

    document.getElementById("listaTarefas").appendChild(li);
    input.value = "";
}

var iconoUno = document.getElementById("iconoUno");
var iconoDos = document.getElementById("iconoDos");
var lista = document.getElementById("lista");

iconoDos.style.display = "none";
function Lista(){
    lista.style.display = "block";
    lista.style.width = "300px"
    iconoUno.style.cursor = "pointer"
    iconoDos.style.display = "block";
    iconoUno.style.display = "none";
}
function ocultarLista(){
    lista.style.display = "none";
    iconoDos.style.display = "none";
    iconoUno.style.display = "block";
}

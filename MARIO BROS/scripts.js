/* Variáveis 

Var = Não é utilizado mais
Let = Variavel que pode ser alterada depois
Const = Constante que não pode ser modificada depois

*/

/*
Funções
    Um trecho de código que, só é executado
    quando é chamado

*/
const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


function mostrarForm(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
  
}

function esconderForm(){
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"

}
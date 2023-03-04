const textoJogo = document.querySelector("#texto");
const campo = document.querySelector("#campo");
const botao = document.querySelector("#botao");
const div = document.getElementById("jogo");

let fimdeJogo = false;
let simboloMaquina="";
let simboloEscolhido = "";
        //const mydiv = document.getElementById(linha);
function simbolo()
{
         return Math.round(Math.random() *1);
}
   
function maquinaVerifica()
{
    
}
while(fimdeJogo == false)
{
    if(simbolo()== 1)
        {
            simboloEscolhido= "X";
            window.alert("seu simbolo é : " + simboloEscolhido);
            textoJogo.innerHTML = "Digite aqui o numero,onde deseja coloca o : " + simboloEscolhido;
            simboloMaquina="O";
    }else 
        {
            simboloEscolhido= "O";
            window.alert("seu simbolo é : " + simboloEscolhido);
            textoJogo.innerHTML = "Digite aqui numero,onde deseja coloca o : " + simboloEscolhido;
            simboloMaquina = "X";
    }

    botao.addEventListener("click",function(){
        
    })
fimdeJogo = true;
}
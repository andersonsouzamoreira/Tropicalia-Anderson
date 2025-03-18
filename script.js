document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');

    let tamanhoAtual = 1;

    aumentaFonteBotao.addEventListener('click', function){
         tamanhoAtualFonte += 0.1;
         document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    };
;})
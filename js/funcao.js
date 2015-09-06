window.onload = function(){
    document.getElementById("enviar").onclick = function() {correcao();};
    
    function correcao() {
        var correto = 0;
        var incorreto = 10;
        var qualC = " ";
        var qualI = " ";
        
    if(document.getElementById("1A").checked) { correto++; incorreto--; qualC = qualC + "1; ";} else {qualI = qualI + "1; ";}
    if(document.getElementById("2B").checked) { correto++; incorreto--; qualC = qualC + " 2;";} else {qualI = qualI + " 2;";}
    if(document.getElementById("3D").checked) { correto++; incorreto--; qualC = qualC + " 3;";} else {qualI = qualI + " 3;";}
    if(document.getElementById("4B").checked) { correto++; incorreto--; qualC = qualC + " 4;";} else {qualI = qualI + " 4;";}
    if(document.getElementById("5C").checked) { correto++; incorreto--; qualC = qualC + " 5;";} else {qualI = qualI + " 5;";}
    if(document.getElementById("6A").checked) { correto++; incorreto--; qualC = qualC + " 6;";} else {qualI = qualI + " 6;";}
    if(document.getElementById("7D").checked) { correto++; incorreto--; qualC = qualC + " 7;";} else {qualI = qualI + " 7;";}
    if(document.getElementById("8B").checked) { correto++; incorreto--; qualC = qualC + " 8;";} else {qualI = qualI + " 8;";}
    if(document.getElementById("9C").checked) { correto++; incorreto--; qualC = qualC + " 9;";} else {qualI = qualI + " 9;";}
    if(document.getElementById("10A").checked){correto++; incorreto--; qualC = qualC + " 10;";} else {qualI = qualI + " 10;";}
        
        document.getElementById("acertos").innerHTML = "<u>Acertos: " + correto + "</u><br>" + qualC;
        document.getElementById("erros").innerHTML = "<u>Erros: " + incorreto + "</u><br>" + qualI;
        
    }
}

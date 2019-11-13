

var tab =["mot 1", "mot2"];
var compteur=0;

document.getElementById("lettres").onkeypress = function wordSwitch(){
document.getElementById("ton_compteur").innerHTML = document.getElementById("ton_textarea").value.length; 

resultat.innerHTML=tab[compteur];
compteur++;

}

setTimeout(wordSwitch();1000);


/*document.getElementById("ton_textarea").onkeypress = function(){ 
	document.getElementById("ton_compteur").innerHTML = document.getElementById("ton_textarea").value.length; 
}*/

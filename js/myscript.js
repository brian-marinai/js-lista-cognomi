
var cognomeUtente = prompt("Inserisci il tuo cognome")

var cognomi = ["Bucciarati", "Mista","Abbacchio","Givanna","Fugo","Doppio"]

cognomi.push(cognomeUtente);

cognomi.sort();

var lista = document.getElementById("lista");

for (var i = 0; i < cognomi.length; i++) {
  lista.innerHTML += "<li>" + cognomi[i] + "</li>";
}
document.getElementById("posizione").innerHTML = "sei alla posizione " + (cognomi.indexOf(cognomeUtente) + 1);

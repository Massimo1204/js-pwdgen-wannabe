const firstName = prompt( "Inserisci il tuo nome please");
const lastName = prompt( " Ed ora il cognome grazie");
const age = prompt("Quanti anni hai?");
const favColor = prompt( "Un'ultima cosa e abbiamo finito, qual è il tuo colore preferito?");

document.getElementById('first-name').innerHTML = firstName;
document.getElementById('password').innerHTML = firstName + lastName + favColor + age;
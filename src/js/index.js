/* Here goes your JS code */

           
function showpopub()
{
    this.style.display = "none";
    pop.style.display = "block";
}
function disappearpopub()
{
    showpopipform.style.display = "block";
    pop.style.display = "none";
}



var showpopipform = document.getElementById("show-popup-form");
var pop = document.getElementById("pop");
var exit = document.getElementById("exit");

showpopipform.onclick = showpopub;
exit.onclick = disappearpopub;

           
           

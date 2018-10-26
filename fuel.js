
function proracun(){
  let distanca = document.getElementById('km').value;
  let prosecnaP = document.getElementById('prosecna-potrosnja').value;
  let cenaGoriva = document.getElementById('cena-goriva').value;
  let racunicaLitri = (prosecnaP*(distanca/100)).toFixed(2);
  let potrebnoDinara = (racunicaLitri*cenaGoriva).toFixed(2);

 
  
 
  document.getElementById("racunica").innerHTML = `Poštovani, potrebno vam je ${racunicaLitri} litara goriva, što će vas koštati ${potrebnoDinara} dinara.`;
}


$('#myModal').modal(options)

function myFunction() {
  document.getElementById("myForm").reset();

}



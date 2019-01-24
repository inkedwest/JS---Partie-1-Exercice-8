//Je déclare ma fonction
function getSee(){
  var age = document.getElementById('age').value;
//Je vérifie que l'âge est écrit en chiffres
  if(isNaN(age) == false){
    //Je vérifie que l'âge est infèrieur à 114 et supérieur à 0
    if ( age < 114 && age > 0) {
      // Vérifie la majorité
      if (age >= 18){
        alert('Vous êtes majeur');
      }else{
        alert('Vous êtes mineur');
      }
    }else {
      alert('Age non valide');
    }
  }else{
    alert('En nombres stp');
  }
}

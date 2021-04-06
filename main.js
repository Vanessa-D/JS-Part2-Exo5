// Fonction qui dans le DOM va chercher la source de l'image à afficher au passage de la souris 
// puis pour un temps indéterminé jusqu'au rafraîchissement de la page
// à l'endroit de l'id image
function setNewImage1(){
    document.getElementById("image1").src="images/image1_2.jpg";
}
function setNewImage2(){
    document.getElementById("image2").src="images/image2_2.jpg";
}
function setNewImage3(){
    document.getElementById("image3").src="images/image3_2.jpg";
}
function setNewImage4(){
    document.getElementById("image4").src="images/image4_2.jpg";
}
function setNewImage5(){
    document.getElementById("image5").src="images/image5_2.jpg";
}


// Solution concentrée avec un paramètre dans la fonction :

//function setNewImage(test){
    //document.getElementById("test").src="images/" + test + "_2.jpg";
//}

// HTML :
//<img id="image1" onmouseover="setNewImage(id)" src="images/image1.jpg" alt="Couverture du livre HTML et JavaScript">
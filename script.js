window.onload = function() {

  var buttons = document.getElementsByClassName("clickable");

  
  Array.from(buttons).forEach(function(element) {
        element.onclick = function() {

  	var imageSwap = document.getElementById("image-swap");

 		var titleSwap = document.getElementById("title-swap");

 		var paragraphSwap = document.getElementById("paragraph-swap");

          switch(element.innerHTML){

          	case "Enzymes":
          	  imageSwap.setAttribute("src", "images/enzymes.svg");
              titleSwap.innerHTML = "Enzymes";
              paragraphSwap.innerHTML = document.getElementById("enzyme-paragraph").innerHTML;
          	break;

          	case "Hormones":
          	  imageSwap.setAttribute("src", "images/hormone.jpeg");
          	  titleSwap.innerHTML = "Hormones";
          	  paragraphSwap.innerHTML = document.getElementById("hormone-paragraph").innerHTML;
          	break;

          	case "Receptors":
          	  imageSwap.setAttribute("src", "images/receptors.jpg");
          	  titleSwap.innerHTML = "Receptors";
          	  paragraphSwap.innerHTML = document.getElementById("receptor-paragraph").innerHTML;
          	break;

          	case "Structural":
          	  imageSwap.setAttribute("src", "images/collagen.jpg");
          	  titleSwap.innerHTML = "Structural";
          	  paragraphSwap.innerHTML = document.getElementById("structural-paragraph").innerHTML;
          	break;
          }
        };
      });

}
window.onload = function() {

  var buttons = document.getElementsByClassName("clickable");

  //Home page selector

  if(window.location.pathname=='/home/benjamin/Projects/Week2/wk2-website/index.html') {

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
};

  //Amino Acid Selector

  if(window.location.pathname == '/home/benjamin/Projects/Week2/wk2-website/pages/aminoacids.html') {

  Array.from(buttons).forEach(function(element) {
        element.onclick = function() {

  	var imageAaSwap = document.getElementById("image-aa-swap");

 		var titleAaSwap = document.getElementById("title-aa-swap");

 		var paragraphAaSwap = document.getElementById("paragraph-aa-swap");

 		var codeAaSwap = document.getElementById("code-aa-swap");

 		var formulaAaSwap = document.getElementById("formula-aa-swap");

 		var weightAaSwap = document.getElementById("weight-aa-swap");

 		var polarityAaSwap = document.getElementById("polarity-aa-swap");

 		titleAaSwap.innerHTML = element.innerHTML;

 		imageAaSwap.setAttribute("src", "../images/" + element.innerHTML.toLowerCase() + ".png");

 		codeAaSwap.innerHTML = document.getElementById(element.innerHTML+"-code").innerHTML;

 		formulaAaSwap.innerHTML = document.getElementById(element.innerHTML+"-formula").innerHTML;

 		weightAaSwap.innerHTML = document.getElementById(element.innerHTML+"-weight").innerHTML;

 		polarityAaSwap.innerHTML = document.getElementById(element.innerHTML+"-polarity").innerHTML;

 		paragraphAaSwap.innerHTML = document.getElementById(element.innerHTML+"-paragraph").innerHTML;

   }
  });

};
}
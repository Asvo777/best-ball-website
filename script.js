let cost = 0;

function changeAnimationWidth(){ 

  if (window.innerWidth <= "630") {
    document.getElementById("myAnimationSize").style.width = "220px";
    document.getElementById("myAnimationSize").style.height = "128px";  
    document.getElementById("myAnimationSize").style.backgroundSize = "440px 256px";
  }

    else if (window.innerWidth <= "925") {
    document.getElementById("myAnimationSize").style.width = "308px";
    document.getElementById("myAnimationSize").style.height = "179.2px";  
    document.getElementById("myAnimationSize").style.backgroundSize = "308px 179.2px";
  }

  else if (window.innerWidth > "925") {
    document.getElementById("myAnimationSize").style.width = "440px";
    document.getElementById("myAnimationSize").style.height = "256px";  
    document.getElementById("myAnimationSize").style.backgroundSize = "440px 256px";
  }
}


function changeLogoSize(){

  if (window.innerWidth <= "705") {
    document.getElementById("myLogoSize").style.width = "200px";
    document.getElementById("myLogoSize").style.height = "200px"; 
  }

  else if (window.innerWidth > "705") {
    document.getElementById("myLogoSize").style.width = "300px";
    document.getElementById("myLogoSize").style.height = "300px";  
  }
}

function Required(params) {

  if (true) {
    
  }
}

function addProduct(price) {
  priceFloat = parseFloat(price);
  cost = sessionStorage.getItem("costStorage");
  cost = parseFloat(cost) + priceFloat;
  console.log(cost);
  sessionStorage.setItem("costStorage", cost);
  }

function confirmOrCancelPayment(){
  sessionStorage.setItem("costStorage", 0);
  location.reload();
}

function Payment() {
  if (document.getElementById("name").value.length >= "1" && document.getElementById("credit").value.length >= "15" && document.getElementById("expiration").value.length > "0" && document.getElementById("cvv").value.length == "3") {
        document.getElementById("confirm").disabled = false;
   }
  else{
    document.getElementById("confirm").disabled = true;
  }

  document.getElementById("items_cost").innerHTML = sessionStorage.getItem("costStorage") + "$";

let totalCost = parseFloat(sessionStorage.getItem("costStorage")) + parseFloat(210)
  
  document.getElementById("order_total").innerHTML = totalCost +"$";
}
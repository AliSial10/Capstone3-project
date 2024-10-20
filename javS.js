let bgColor = document.getElementById("btn")
bgColor.style.backgroundColor= "#5FA232";

// form sign up
function data(){

var a = document.getElementById("n1").value;
var b = document.getElementById("n2").value;
var c = document.getElementById("n3").value;
var d = document.getElementById("n4").value;

if (a == "" || b == "" || c == "" || dd == "")
{
    alert("All Field are mandatory");
    return false;
}


else if(c!=d)

{
    alert("Please enter same password");
    return false
}

else{
     true;
}
}

let cartCount = 0;
const cartCountElement = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCountElement.textContent = cartCount;
        alert('Confirm Buy Items!');
    });
});
//cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
//cart open
cartIcon.onclick = () => {
  cart.classList.add("active");
}
//cart close
closeCart.onclick = () => {
  cart.classList.remove("active");
}

//Cart working js
if (document.readyState =="loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
//Making Function
function ready(){
  //Remove Items From Cart
  var removeCartButtons = document.getElementsByClassName('cart-remon')
  console.log(removeCartButtons)
  for (var i = 0; i < removeCartButtons.length; i++){
    var button = removeCartButtons[i]
    button.addEventListener('click', removeCartItem)
  }
  //Quantity Changes
  var quantityInputs = document.getElementsByClassName("cart-quantiy");
  for (var i = 0; i < removeCartButtons.length; i++){
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  //Add to cart
  var addcart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < removeCartButtons.length; i++){
    var button = addcart[i];
    button.addEventListener("click", addcartClicked);
  }
}


  //Remove Items From Cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  Updatetotle();
}
//quantity Changed
function quantityChanged(event){
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1;
  }
 Updatetotle();
}
//add TO cart
function addcartClicked(event){
  var button = event.target
  var shopproducts = button.parentElement
  var title = shopproducts.getElementsByClassName("product-title")[0].innerText
  var price = shopproducts.getElementsByClassName("price")[0].innerText
  var productImg = shopproducts.getElementsByClassName("product-img")[0].src;
  addProductToCart(title, price, productImg);
  Updatetotle();
}
function addProductToCart(title, price, productImg) {
var cartShopBox = document.createElement("div");
//cartShopBox.classList.add("cart-box")
var cartItems = document.getElementsByClassName("cart-content")[0];
var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
for (var i = 0; i < cartItemsNames.length; i++) {
  alert("you have already add this item to cart");
  }

}
var cartContent = 

                <img src="food/Chicken-Wrapped-in-Pandan-Leaves.jpg" alt="" class="cart-img">
                <div class="datail-box">
              <div class="cart-product-title">Midtown</div>
             <div class="cart-price">50.99฿</div>
          <input type="number" value="1" class="cart-quantiy"></input>
               </div>
         <!--Remove Cart-->
          <i class='bx bxs-trash-alt cart-remon' ></i>

//Update Total
function Updatetotle() {
  var cartContent = document.getElementsByClassName("cart-content")[0]
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++){
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantiy")[0];
    var price = parseFloat(priceElement.innerText.replace("฿", ""));
    var quantiy = quantityElement.value;
    total = total + price * quantiy;
  //If price contain some cents Volue
  total = Math.round(total * 100) / 100;

    document.getElementsByClassName("totle-price")[0].innerText = "฿" + total;
  }
}
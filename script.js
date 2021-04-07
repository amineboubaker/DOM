var btnsAddTag = document.getElementsByClassName("add");
var checkTags = document.querySelectorAll(".check");

console.log(btnsAddTag);
var btnsRemoveTag = document.getElementsByClassName("remove");
console.log(btnsRemoveTag);
for (var j = 0; j < checkTags.length; j++) {
  checkTags[j].addEventListener("click", total);
}

for (var i = 0; i < btnsAddTag.length; i++) {
  // btnsAddTag[i].addEventListener("click",add)
  btnsAddTag[i].onclick = add;
}
for (var i = 0; i < btnsRemoveTag.length; i++) {
  btnsRemoveTag[i].addEventListener("click", remove);
}
function remove(event) {
  // console.log(event.target)
  var btnRemove = event.target;
  var tdElt = btnRemove.parentElement;
  // console.log(tdElt)
  var inputTag = tdElt.querySelector(".quantity");
  var quantity = Number(inputTag.value);
  if (quantity > 0) {
    quantity--;
  }
  inputTag.value = quantity;
  var trElt = btnRemove.parentElement.parentElement;
  var unitPriceTag = trElt.querySelector(".unitPrice");
  var priceTag = trElt.querySelector(".price");
  var price = Number(priceTag.innerHTML);
  var unitPrice = Number(unitPriceTag.innerHTML);
  price = quantity * unitPrice;
  priceTag.innerHTML = price;
}

function add(event) {
  // console.log(event.target)
  var btnAdd = event.target;
  var tdElt = btnAdd.parentElement;
  // console.log(tdElt)
  var inputTag = tdElt.querySelector(".quantity");
  var quantity = Number(inputTag.value);
  quantity++;
  inputTag.value = quantity;
  var trElt = btnAdd.parentElement.parentElement;
  var unitPriceTag = trElt.querySelector(".unitPrice");
  var priceTag = trElt.querySelector(".price");
  var price = Number(priceTag.innerHTML);
  var unitPrice = Number(unitPriceTag.innerHTML);
  price = quantity * unitPrice;
  priceTag.innerHTML = price;
}

function total(event) {
  var currentCheck = event.target;
  var totalTag = document.getElementById("total");
  var total = Number(totalTag.innerHTML);
  var trElt = currentCheck.parentElement.parentElement;
  var priceTag = trElt.querySelector(".price");
  var price = Number(priceTag.innerHTML);
  var btnAddTag = trElt.querySelector(".add");
  var btnRemoveTag = trElt.querySelector(".remove");

  if (currentCheck.checked === true) {
    total += price;
    btnAddTag.setAttribute("disabled", true);
    btnRemoveTag.setAttribute("disabled", true);
  } else {
    total -= price;
    btnAddTag.removeAttribute("disabled");
    btnRemoveTag.removeAttribute("disabled");
  }
  totalTag.innerHTML = total;
}
var icons = document.getElementsByClassName("icon-toggle");
for (i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", function () {
    var actives = document.querySelectorAll(".icon-toggle.selected");
    var selected = "selected";

    this.classList.toggle(selected);
  });
}
function X(e) {
    console.log(e)
//     console.log(e.target)
  var row =e.parentNode.parentNode;
//   console.log(row)
var priceTag = row.querySelector(".price")
var price = Number(priceTag.innerHTML)
var totalTag = document.getElementById("total")
var total = Number(totalTag.innerHTML)
total-=price
totalTag.innerHTML = total
  row.parentNode.removeChild(row);
//   total(e)
  
  
  
}





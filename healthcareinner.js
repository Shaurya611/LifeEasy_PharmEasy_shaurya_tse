var coviddata = JSON.parse(localStorage.getItem("healthcaredata"));

function showdata(coviddata) {
  document.querySelector("#showdatapage").innerHTML = "";

  coviddata.map(function (elem, i) {
    console.log(elem, i);
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.src = elem.img;
    var name = document.createElement("p");
    name.innerText = elem.name;
    var strikeOffPrice = document.createElement("p");
    strikeOffPrice.innerText = "MRP ₹ " + elem.strikeOffPrice;
    strikeOffPrice.style.textDecoration = "line-through";
    // var discount = document.createElement('p');
    var price = document.createElement("p");
    price.innerText = "₹ " + elem.price;
    var btn = document.createElement("button");
    btn.innerText = "Add To Cart";
    btn.style.backgroundColor = "teal";
    btn.style.color = "white";
    btn.addEventListener("click", function (elem) {
      console.log("el", elem);
      // addToCart(elem)
      alert("Product Added To The Cart");
      // window.location.href ="./cart.html"
    });
    div.append(img, name, strikeOffPrice, price, btn);
    document.querySelector("#showdatapage").append(div);
  });
}
// showdata(coviddata);
document.querySelector("#sortby").addEventListener("change", sorting);
//
//
//
let append = (coviddata) => {
  coviddata.forEach(({ img, name, strikeOffPrice, price, rating }) => {
    // console.log(strikeOffPrice)
    // console.log("----")
    // console.log(price)
    var div = document.createElement("div");
    // div.style.border = "1px solid red";
    var image = document.createElement("img");
    image.src = img;
    var na = document.createElement("p");
    na.innerText = name;
    var srOfPr = document.createElement("p");
    srOfPr.innerText = "MRP ₹ " + strikeOffPrice;
    srOfPr.style.textDecoration = "line-through";
    // var discount = document.createElement('p');
    var pr = document.createElement("p");
    pr.innerText = "₹ " + price;
    var btn = document.createElement("button");
    btn.innerText = "Add To Cart";
    btn.style.backgroundColor = "teal";
    btn.style.color = "white";
    //
    let addcart = (el) => {
      console.log(el);
      alert("Item is added to Cart");
      cartdata.push(el);
      localStorage.setItem("cartdata", JSON.stringify(cartdata));
    };
    btn.addEventListener("click", () => {
      addcart({ img, name, strikeOffPrice, price, rating });
    });
    //
    div.append(image, na  , srOfPr, pr, btn);
    document.querySelector("#showdatapage").append(div);
  });
};

append(coviddata);

function sorting() {
  var val = document.querySelector("#sortby").value;
  if (val == "pop") {
    var coviddata = JSON.parse(localStorage.getItem("healthcaredata"));
    showdata(coviddata);
  } else if (val == "h2l") {
    var coviddata = JSON.parse(localStorage.getItem("healthcaredata"));
    var sorteddata = coviddata.sort(function (a, b) {
      return b.price - a.price;
    });
    showdata(sorteddata);
  } else if (val == "l2h") {
    var coviddata = JSON.parse(localStorage.getItem("healthcaredata"));
    var sorteddata = coviddata.sort(function (a, b) {
      return a.price - b.price;
    });
    showdata(sorteddata);
  }
}
var cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];

function addToCart(elem) {
  console.log("Cart");
  console.log("elem", elem);
  // elem.qty = 1;
  // cartdata.push(elem);
  // localStorage.setItem("cartdata", JSON.stringify(cartdata));
}

document.querySelector("#mainlogo").addEventListener("click", function () {
  window.location = "index.html";
});
function gotocart() {
  window.location = "cart.html";
}

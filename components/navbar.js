
let navbar = () =>{
    return `<div id="navbar">
    <div id="left-box">
        <div class="img-logo"> <a href="./index.html">
            <img id="logoimg1112" src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0" alt="logo"></a>
        </div>
        <div class="thin-line">
        </div>
        <div class="delivery-section">
            <p>Delivery to</p>
            <select id="Select">
                <option value="">Select city</option>
                <option value="">Pune</option>
                <option value="">Goa</option>
                <option value="">Delhi</option>
                <option value="">Patna</option>
            </select>
        </div>
    </div>
    <div id="right-box">
        <div class="download-logo">
            <i class="fas fa-thin fa-mobile-button"></i>
            <h5 id="navh55">Download App</h5>
        </div>
        <div class="log-in">
            <i class="fas fa-thin fa-user"></i>
           
            <h4 id="navh4444"><a href="login.html">Hello,Log in</a></h4>
        </div>
       
        <div class="offer">
        <img id="divimg1112" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFMndwLsgATQEIaIO9TJyKkmr9EGT0xQDN0w&usqp=CAU" alt="">
            <h4 id="navh4444">Offer</h4>
        </div>
        <div class="cart">
            <i class="fas fa-cart-shopping"></i>
            <h4 id="navh4444"><a href="cart.html">Cart</a></h4>
        </div>
    </div>
   
   </div>`
}
// exported html code from this page
 export default navbar;
const header = () => {
    return ` <div id="mySidenav" class="sidenav">
    <div id="drawerID">
        <div class="site-div">
          <img src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" /><h4 onclick="closeNav()">X</h4>
        </div>
        <h3 class="drawer-link">Quick Login/ Register</h3>
        <div class="drawer-item">
          <input
            step="0.01"
            id="drawer-input"
            placeholder="Enter your phone number"
          />
        </div>
        <div id="btn-div">
          <button type="button" id="continue-btn" onclick="enterOTP()">Continue</button>
        </div>
        
        <h6>
          By clicking continue, you agree with our
          <a href="#">Privacy Policy</a>
        </h6>
      </div>
  </div>
<header id="nav-head">
    <div class="navbar">
      <div class="navbar-top">
        <div class="navbar-logo">
          <img
            src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
            alt="Pharmeasy logo"
          />
        </div>
        <div class="navbar-search">
          <div id="search-box">
            <select name="city" id="city">
              <option value="select-city">Select City</option>
              <option value="bengaluru">Bengaluru</option>
              <option value="delhi">Delhi NCR</option>
              <option value="pune">Pune</option>
              <option value="mumbai">Mumbai</option>
            </select>
            <input
              class="search-input"
              type="text"
              placeholder="Search medicines/Healthcare products @18% Off"
            /><i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div class="navbar-side">
          <button onclick="" id="nav-btn">
          </button>
        </div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-tab">
          <div id="tab-nav">
          <button class="tab1"><a href="ordermedicin.html">Order Medicines</a></button>
          <button class="tab1"><a href="health_products.html">Healthcare Products</a></button>
          <button class="tab1"><a href="labtest.html">Lab Tests</a></button>
          </div>
        </div>
        <div class="navbar-button">
          <div id="btn-nav">
          <button  class="tab2"><i class="fa-solid fa-tags"></i>&nbsp;<a href="offers.html">Offers</a></button>
          <button  class="tab2" onclick="openNav()" id="loginuser"><i class="fa-solid fa-user"></i>User</button>
          <button  class="tab2"><i class="fa-solid fa-cart-shopping"></i><a href="cart.html">Cart</a></button>
          </div>
        </div>
      </div>
    </div>
  </header>`
}


const footer = () => {
  return `    <div id="parent">
   
  <div class="frame">

  <div class="block1">
      <div class="hedding">Company</div>
      <div>Carrer</div>
      <div>Blog </div>
      <div>Patner with PharmEasy</div>
      <div>Sell at PharmEasy </div>
    </div>
    <div class="block2">
        <div class="hedding">Our Services</div>
        <div>Order Medicine</div>
        <div>Heathcare Products</div>
        <div>Diagnostic Tests</div>
    </div>
    <div class="block3">
        <div class="hedding">Covid Essentials</div>
        <div>Devices</div>
        <div>Nutrition &Fitness Supplements</div>
        <div>Personal Care</div>
        <div>Ayurvedic Care</div>
        <div>Baby and Mom Care</div>
        <div> Skin Care </div>
        <div>Deabetic Care</div>
        <div>Short Term Aliments</div>
        <div>Lifestyle Aliments</div>
        <div>Home Care</div>
        <div>Women Care</div>
    </div>
    <div class="block4">
        <div class="hedding">Need Help</div>
        <div>Browse All Medicine</div>
        <div>Browse All Molecules</div>
        <div>FAQs</div>
    </div>
    <div class="block5">
        <div class="hedding">Editorial Policy</div>
        <div>Privacy Policy</div>
        <div>Vulnerability Disclouser Policy</div>
        <div>Terms and condition</div>
        <div>Customer Support Policy</div>
        <div>Return Policy</div>
    </div>

    <div class="block6">
        <div class="hedding">FOLLOW US</div>
   <div>
    <!-- <a href="https://www.instagram.com/pharmeasyapp/" class="follow" target="_blank"><img src="https://image.flaticon.com/icons/png/128/733/733558.png" /></a>

    <a href="https://www.facebook.com/pharmeasy/"  class="follow" target="_blank"><img src="https://img-premium.flaticon.com/png/128/739/premium/739135.png?token=exp=1626776342~hmac=7bb868badd799d788e565febd363fcaa" /></a>

    <a href="https://www.youtube.com/channel/UCDats_DLX-bGZH3-KGu8JhA" class="follow" target="_blank"><img src="https://t3.ftcdn.net/jpg/01/20/86/82/240_F_120868287_B3SHmzHh7gh69OPLhcTuyzXoyuuwP0YQ.jpg" /></a>

    <a href="https://twitter.com/pharmeasyapp/" class="follow" target="_blank"><img src="https://image.flaticon.com/icons/png/128/1409/1409937.png" /></a> -->
    <i class="fa-brands fa-instagram"></i>
    <i class="fa-brands fa-youtube"></i>
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-twitter"></i>

    </div>
  
    </div>
    </div>

       <div class="block7">
        <div class="hedding" >Our Payment Partners</div>
        <div class="partners">
            <img src="https://assets.pharmeasy.in/web-assets/dist/af0c6812.svg" alt="Google pay">
            <img src="https://assets.pharmeasy.in/web-assets/dist/0e010044.svg" alt="">
            <img src="https://assets.pharmeasy.in/web-assets/dist/1066bb1f.svg" alt="">
            <img src="https://assets.pharmeasy.in/web-assets/dist/3a1a533d.svg" alt="">
            <img src="https://assets.pharmeasy.in/web-assets/dist/fbea1701.svg" alt="">
            <img src="https://assets.pharmeasy.in/web-assets/dist/4733a49d.svg" alt="">
            <img src="https://assets.pharmeasy.in/web-assets/dist/b278e536.svg" alt="">
            <img src="https://assets.pharmeasy.in/web-assets/dist/0aca2077.svg" alt="">
            <img src="https://assets.pharmeasy.in/web-assets/dist/44a51ca5.svg" alt="">
            <img src="https://assets.pharmeasy.in/web-assets/dist/d058b00d.svg" alt="">
            <img src="https://assets.pharmeasy.in/web-assets/dist/e9445364.svg" alt="">
            <img src="https://assets.pharmeasy.in/web-assets/dist/6e09c713.svg" alt="">
            <span id="pay"> © 2021 PharmEasy. All Rights Reserved</span>
        </div>
       
        
  </div>

</div>`
}

export {header, footer}
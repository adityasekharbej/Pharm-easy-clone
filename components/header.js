const header=()=>{
    return`<div id="mySidenav" class="sidenavn">
    <div id="drawerIDd">
        <div class="sites-div">
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
    <div class="navbara">
      <div class="navbara-top">
        <div class="navbara-logo">
          <img
            src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
            alt="Pharmeasy logo"
          />
        </div>
        <div class="navbara-search">
          <div id="search-boxe">
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
        <div class="navbara-side">
          <button onclick="" id="nava-btn">
          </button>
        </div>
      </div>
      <div class="navbara-menu">
        <div class="navbara-tab">
          <div id="tab-nava">
            <button class="tab1">Order Medicines</button>
            <button class="tab1">Healthcare Products</button>
            <button class="tab1">Diagonstic Tests</button>
          </div>
        </div>
        <div class="navbara-button">
          <div id="btn-nava">
            <button class="tab2"><i class="fa-solid fa-badge-percent"></i>Offers</button>
            <button class="tab2" onclick="openNav()" id="loginuser"><i class="fa-solid fa-user"></i>Login/Signup</button>
            <button class="tab2"><i class="fa-solid fa-cart-shopping"></i>Cart</button>
          </div>
        </div>
      </div>
    </div>
  </header>`
}

export default header;
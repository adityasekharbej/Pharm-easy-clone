import footer from "../component/footer.js";
var footers=document.querySelector("#bottomfooter");
footers.innerHTML=footer()

import header from "../component/header.js";
var headers=document.querySelector("#header");
headers.innerHTML=header();


let slideshow = document.querySelector("#slideshow");





  let images = [
    { image: "https://cms-contents.pharmeasy.in/banner/7e1ecad2281-SAVETAX_Cat_696x301_9.jpg" },
    { image: "https://cms-contents.pharmeasy.in/banner/d8ce2e9372a-01_Diabetes-Care_696x301_87.jpg" },
    { image: "https://cms-contents.pharmeasy.in/banner/fffc7aa71ca-02_Full-Body-Health-Checkups_Cat_696x301.jpg" },
    { image: "https://cms-contents.pharmeasy.in/banner/cc1c1aa0a16-01_Aarogyam-B-Package_Cat_696x301_36.jpg" },
    { image: "https://cms-contents.pharmeasy.in/banner/6373f407e6a-04_Full-Body-Health-Checkups_Cat_696x301.jpg" },
    { image: "https://cms-contents.pharmeasy.in/banner/db2ed01a8c3-10_Aarogyam-C-Package-_Cat_696x301_87.jpg" },

  ]
  function display(x) {
    slideshow.innerHTML = null;

    let img = document.createElement("img");

    img.setAttribute("src", x.image);
    document.querySelector("#slideshow").append(img)
  }


  let i = 0;

  setInterval(() => {
    if (i == images.length) {
      i = 0;
    }
    var x = images[i]
    display(x);



    i++
  }, 2000)


  var array = [{ image: "https://assets.pharmeasy.in/web-assets/dist/6b3d644c.svg", heading: "All Tests" },
  { image: "https://assets.pharmeasy.in/web-assets/dist/dea295a0.svg", heading: "Health Packages" },
  { image: "https://assets.pharmeasy.in/web-assets/dist/d4d62fbf.svg", heading: "Upload Prescription" },
  { image: "https://assets.pharmeasy.in/web-assets/dist/4ed59722.svg", heading: "Book on Call" },]
  const facality = (array) => {
    array.map((elem) => {
      let div = document.createElement("div")
      let item1 = document.createElement("a");
      let img = document.createElement("img");
      img.setAttribute("src", elem.image);
      let para = document.createElement("p");
      para.innerHTML = elem.heading;
      item1.append(img, para)
      div.append(item1);
      document.querySelector(".facality").append(div)
    })

  }

  facality(array)


  const test = () => {
    let div = document.createElement("div");
    let div1 = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/staging/CompanyLogo/99463817e1743ac6abad70f1008661b4.jpg");
    div1.setAttribute("id", "imag")
    div1.append(img);
    let div3 = document.createElement("div");
    let h4 = document.createElement("h5");
    h4.innerHTML = "Thyrocare"
    let div2 = document.createElement("div");
    div2.innerHTML = "NABL, CAP Certified";
    div3.append(h4, div2);
    div3.setAttribute("id", "imag1")
    div.append(div1, div3);
    document.querySelector(".test").append(div)
  }
  test()


  let slides = [{
    image: "https://assets.pharmeasy.in/web-assets/dist/dea295a0.svg",

    h1: "Aarogyam 1.1 Package",
    h2: "Available at 1 certified lab",
    h3: "Includes 57 tests", h4: "₹1,500 onwards"
  },

  {
    image: "https://assets.pharmeasy.in/web-assets/dist/dea295a0.svg",

    h1: "Aarogyam 1.2 Package",
    h2: "Available at 1 certified lab",
    h3: "Includes 87 tests", h4: "₹1,700 onwards"
  },
  {
    image: "https://assets.pharmeasy.in/web-assets/dist/dea295a0.svg",
    h1: "Aarogyam 1.3 Package",
    h2: "Available at 1 certified lab",
    h3: "Includes 94 tests", h4: "₹2,600 onwards"
  },
  {
    image: "https://assets.pharmeasy.in/web-assets/dist/dea295a0.svg",
    h1: "Aarogyam 1.4 Package",
    h2: "Available at 1 certified lab",
    h3: "Includes 100 tests", h4: "₹3,000 onwards"
  },
  {
    image: "https://assets.pharmeasy.in/web-assets/dist/dea295a0.svg",
    h1: "Aarogyam 1.4 Package",
    h2: "Available at 1 certified lab",
    h3: "Includes 100 tests", h4: "₹3,000 onwards"
  },

  ]


  const slide = (slides) => {
    slides.map((elem) => {
      let div = document.createElement("div");
      let img = document.createElement("img");
      img.setAttribute("src", elem.image);
      let div1 = document.createElement("div");
      div1.setAttribute("id", "slid1")
      let h3 = document.createElement("h3");
      h3.innerHTML = elem.h1;
      let h4 = document.createElement("h4");
      h4.innerHTML = elem.h2;
      let h5 = document.createElement("p");
      h5.innerHTML = elem.h3;
      let price = document.createElement("h5");
      price.innerHTML = elem.h4;
      div1.append(h3, h4, h5, price)
      div.append(img, div1);
      document.querySelector(".slide1").append(div)
    })
  }
  slide(slides)

  var slide2 = [{
    image: "https://assets.pharmeasy.in/web-assets/dist/dea295a0.svg",
    h1: "Aarogyam ",
    h2: "Available at 1 certified lab",
    h3: "Includes 35 tests", h4: "₹8,99 onwards"
  },]

  const slide3 = (slide2) => {
    slide2.map((elem) => {
      let div = document.createElement("div");
      let img = document.createElement("img");
      img.setAttribute("src", elem.image);
      let div1 = document.createElement("div");
      div1.setAttribute("id", "slid2")
      let h3 = document.createElement("h3");
      h3.innerHTML = elem.h1;
      let h4 = document.createElement("h4");
      h4.innerHTML = elem.h2;
      let h5 = document.createElement("p");
      h5.innerHTML = elem.h3;
      let price = document.createElement("h5");
      price.innerHTML = elem.h4;
      div1.append(h3, h4, h5, price)
      div.append(img, div1);
      document.querySelector(".slide2").append(div)
    })
  }
  slide3(slide2)



  var arr1 = [{
    image: "https://cdn01.pharmeasy.in/dam/diagnostics/review-images/a416050e0b663c6ea9af36abd4b5d181",
    name: "Siddhesh Raorane",

    para: "Booked a test from a reputed lab in Mumbai via PharmEasy, prices were competitive &amp; service is one the best I’ve encountered."
  },
  {
    image: "https://cdn01.pharmeasy.in/dam/diagnostics/review-images/29e6fcbc3236335e8333969ea018b6c0",
    name: "Sugandh Agrawal",
    para: "From slot booking to actual free blood home sample collection &amp; payment was a very smooth experience."
  },]

  const data = (arr1) => {
    arr1.map((elem) => {
      let div = document.createElement("div");
      div.setAttribute("id","careo")
      let div1 = document.createElement("div");
      let img = document.createElement("img");
      img.setAttribute("src", elem.image);
      div1.append(img)
      let div2 = document.createElement("div");
      let name = document.createElement("h3");
      name.innerHTML = elem.name;
      let p = document.createElement("p");
      p.innerHTML = elem.para;
      div2.append(name, p);
      div.append(div1, div2);
      document.querySelector(".slideshow1").append(div)
    })
  }
  data(arr1);
  var arr2 = [{
    image: "https://cdn01.pharmeasy.in/dam/diagnostics/review-images/29e6fcbc3236335e8333969ea018b6c0",
    name: "Sugandh Agrawal",
    para: "From slot booking to actual free blood home sample collection &amp; payment was a very smooth experience."
  },
  {
    image: "https://cdn01.pharmeasy.in/dam/diagnostics/review-images/378e384d5c9b3e0dad10d1faa1654fa1",
    name: "Sushila Khadsare",
    para: "I’d highly recommend this service for their sheer reason of genuine reports/labs and time commitment."
  }
  ]

  const data1 = (arr2) => {
    arr2.map((elem) => {
      let div = document.createElement("div");
      div.setAttribute("id","careo")
      let div1 = document.createElement("div");
      let img = document.createElement("img");
      img.setAttribute("src", elem.image);
      div1.append(img)
      let div2 = document.createElement("div");
      let name = document.createElement("h3");
      name.innerHTML = elem.name;
      let p = document.createElement("p");
      p.innerHTML = elem.para;
      div2.append(name, p);
      div.append(div1, div2);
      document.querySelector(".slideshow2").append(div)
    })
  }


  data1(arr2);


  var arr3 = [{
    image: "https://cdn01.pharmeasy.in/dam/diagnostics/usp-images/64664cb0cfd63f81bc200f3e1e0c755f",
    name: "Convenience",
    h3: "Get your samples collected at the comfort of your home."
  },
  {
    image: "https://cdn01.pharmeasy.in/dam/diagnostics/usp-images/55f90440a9873704a771d084cb65b909",
    name: "Accurate Reports", h3: "Get accurate and timely reports from our Certified Partner Laboratories."
  }]

  const data2 = (arr3) => {
    arr3.map((elem) => {
      let div = document.createElement("div");

      let img = document.createElement("img");
      img.setAttribute("src", elem.image);


      let name = document.createElement("h3");
      name.innerHTML = elem.name;
      let p = document.createElement("p");
      p.innerHTML = elem.h3;

      div.append(img, name, p);
      document.querySelector(".slideshow3").append(div)
    })
  }


  data2(arr3);



  var arr4 = [{
    image: "https://cdn01.pharmeasy.in/dam/diagnostics/usp-images/55f90440a9873704a771d084cb65b909",
    name: "Accurate Reports", h3: "Get accurate and timely reports from our Certified Partner Laboratories."
  },
  {
    image: "https://cdn01.pharmeasy.in/dam/diagnostics/usp-images/e916484d3a2336368ce2ecf1748437e2",
    name: "Affordable Pricing", h3: "Get the best price for tests and packages by comparing across multiple labs."
  }]

  const data3 = (arr4) => {
    arr4.map((elem) => {
      let div = document.createElement("div");

      let img = document.createElement("img");
      img.setAttribute("src", elem.image);


      let name = document.createElement("h3");
      name.innerHTML = elem.name;
      let p = document.createElement("p");
      p.innerHTML = elem.h3;

      div.append(img, name, p);
      document.querySelector(".slideshow4").append(div)
    })
  }


  data3(arr4);


  var datas = [{
    image: "https://assets.pharmeasy.in/web-assets/dist/9407515b.svg",
    name: "Trusted Labs",
    h3: "Every test booked via PharmEasy is conducted by certified labs that are 100% verified and trustworthy."
  },
  {
    image: "https://assets.pharmeasy.in/web-assets/dist/0105ddc1.svg",
    name: "Home Visit",
    h3: "With PharmEasy, you get a FREE sample pick-up* by professional phlebotomists from your home or preferred location."
  },
  {
    image: "https://assets.pharmeasy.in/web-assets/dist/fc71c500.svg",
    name: "Timely and Accurate Reports", h3: "Once collected, samples will be sent to labs for processing. Detailed reports will be shared within a stipulated timeline."
  },
  {
    image: "https://assets.pharmeasy.in/web-assets/dist/4a11ac5a.svg",
    name: "Up to 70% OFF",
    h3: "At PharmEasy, you save at every step! On diagnostic tests, get up to 70% OFF on various tests and test packages."
  }]

  const data4 = (datas) => {
    datas.map((elem) => {
      let div = document.createElement("div");

      let img = document.createElement("img");
      img.setAttribute("src", elem.image);


      let name = document.createElement("h3");
      name.innerHTML = elem.name;
      let p = document.createElement("p");
      p.innerHTML = elem.h3;

      div.append(img, name, p);
      document.querySelector(".trustedimformation").append(div)
    })
  }


  data4(datas);




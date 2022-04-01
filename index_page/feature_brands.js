console.log(brands);
    append(brands);

    function append(data){
    data.forEach(function(elem,index){

    var div= document.createElement("div");
    

    var img = document.createElement("img");
    img.setAttribute("src", elem.image);
    img.style.width="150px";
    img.setAttribute("id", "feature_brand_images");
  
    // console.log(elem.image);
    // div.append(img);
    document.querySelector(".featurebrands2").append(img);
    });
} 


const featurebrands2 = [...document.querySelectorAll('.featurebrands2')];
const nxtBtn1 = [...document.querySelectorAll('.nxt-btn1')];
const preBtn1 = [...document.querySelectorAll('.pre-btn1')];

featurebrands2.forEach((item, i) => {
    let containerDimensions1= item.getBoundingClientRect();
    let containerWidth1 = containerDimensions1.width;

    nxtBtn1[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth1;
    })

    preBtn1[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth1;
    })
})
let item = JSON.parse(localStorage.getItem('selected_product'))

document.getElementById('product-path').innerText = item.title

function displayitem(data){
    let container = document.getElementById('product-info');
    container.innerHTML = null;

    let imgdiv = document.createElement('div')
    imgdiv.id = 'imgdiv'
    let mainimg = document.createElement('div')
    let subimg = document.createElement('div')

    let img = document.createElement('img')
    img.id = 'mainimg'
    img.src = data.img1
    mainimg.append(img)

    let img1 = document.createElement('img')
    img1.className = 'subimg'
    img1.src = data.img1
    let img2 = document.createElement('img')
    img2.className = 'subimg'
    img2.src = data.img2
    let img3 = document.createElement('img')
    img3.className = 'subimg'
    img3.src = data.img3
    let img4 = document.createElement('img')
    img4.className = 'subimg'
    img4.src = data.img4
    let div1 =document.createElement('div')
    div1.appendChild(img1)
    let div2 =document.createElement('div')
    div2.appendChild(img2)
    let div3 =document.createElement('div')
    div3.append(img3)
    let div4 =document.createElement('div')
    div4.appendChild(img4)
    subimg.append(div1, div2, div3, div4)

    imgdiv.append(mainimg, subimg)


    let textdiv = document.createElement('div');
    textdiv.id = 'textdiv'
    let title = document.createElement('h3');
    title.innerText = data.title;

    let p1 = document.createElement('p')
    p1.innerText = 'Visit SUPRADYN Store'
    let p2 = document.createElement('p')
    p2.innerText = '⭐⭐⭐⭐ (277)'
    
    let subtextdiv = document.createElement('div')
    subtextdiv.id = 'subtextdiv'
    let pricediv = document.createElement('div')
    let price = document.createElement('p')
    price.innerText = `₹${data.price}`
    let mrp = document.createElement('p')
    mrp.innerText = 'MRP'
    let sprice = document.createElement('p')
    sprice.innerText = `₹${data.sprice}`
    let discount = document.createElement('p')
    discount.innerText = data.discount
    let btn = document.createElement('button')
    btn.id = 'cartbtn'
    btn.innerText = 'Add To Cart'

    pricediv.append(price, mrp, sprice, discount)
    subtextdiv.append(pricediv, btn)

    let p3 = document.createElement('p')
    p3.innerText = 'Inclusive of all taxes'

    textdiv.append(title, p1, p2, subtextdiv, p3)
    container.append(imgdiv, textdiv)
}

displayitem(item)

let cartdata = JSON.parse(localStorage.getItem('cartitems')) || [];

document.getElementById('cartbtn').addEventListener('click', () =>{
    cartdata.push(item)

    localStorage.setItem('cartitems', JSON.stringify(cartdata))
})


let smallimg = document.querySelectorAll('.subimg')
console.log(smallimg)

for(let i=0; i<smallimg.length; i++){
    smallimg[i].addEventListener('click', () =>{
        document.getElementById('mainimg').src = smallimg[i].src;
    })
}
let personalData = JSON.parse(localStorage.getItem('personal'))

const displayData = (data)=>{
    let container = document.getElementById('container');
    container.innerHTML = null;

    data.map((elem)=>{
        let div = document.createElement('div');
        div.addEventListener('click',()=>{
            localStorage.setItem('selected_product', JSON.stringify(elem))
            window.location.href = 'productdetail.html'
        })

        let img = document.createElement('img');
        img.src = elem.img1;

        let title = document.createElement('h3');
        title.innerText = elem.title;

        let offDiv = document.createElement('div')
        offDiv.id = 'offDiv';

        let mrp = document.createElement('p')
        mrp.innerText = 'MRP'
        let sprice = document.createElement('p')
        sprice.innerText = `₹${elem.sprice}`

        let disc = document.createElement('p')
        disc.innerText = elem.discount;

        offDiv.append(mrp, sprice, disc);

        let price = document.createElement('p');
        price.innerText = `₹${elem.price}`

        div.append(img, title, offDiv, price)
        container.append(div)
    })
}

displayData(personalData)


const sorter = () =>{
    let select = document.getElementById('sort-select')

    if(select.value == 'l2h'){
        personalData.sort((a,b)=>Number(a.price)-Number(b.price));
        displayData(personalData)
    }
    if(select.value == 'h2l'){
        personalData.sort((a,b)=>Number(b.price)-Number(a.price));
        displayData(personalData)
    }
}
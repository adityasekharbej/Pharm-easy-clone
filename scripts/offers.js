let offersData = JSON.parse(localStorage.getItem('offers'))

function displayCoupon(data){
    let container = document.getElementById('offers');
    container.innerHTML = null;

    data.map((elem)=>{
        let div = document.createElement('div');
        let upper = document.createElement('div');
        upper.className = 'upper'

        let lower = document.createElement('div');
        lower.className = 'lower'

        let imgDiv = document.createElement('div');
        let img = document.createElement('img')
        img.src = elem.img;
        imgDiv.append(img);

        let textDiv = document.createElement('div');
        textDiv.className = 'text'
        let title = document.createElement('p');
        title.innerText = elem.title;
        let desc = document.createElement('p');
        desc.innerText = elem.desc;
        textDiv.append(title,desc);

        let iconDiv = document.createElement('div');
        iconDiv.innerHTML = `<i class="fa-solid fa-angle-right"></i>`

        upper.append(imgDiv, textDiv, iconDiv);

        let code = document.createElement('p')

        if(elem.code==''){
            code.innerText = 'No Code Required'
        }
        else{
            code.innerHTML = `Code: <b>${elem.code}</b>`
        }
        let cbtn = document.createElement('p');
        cbtn.className = 'cbtn'
        cbtn.innerText = elem.btn;
        cbtn.addEventListener('click',()=>{
            localStorage.setItem('couponCode', elem.code)
        })

        lower.append(code, cbtn);

        div.append(upper, lower);
        container.append(div)
        
    })
}

displayCoupon(offersData)
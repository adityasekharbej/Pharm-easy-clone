const enterOTP=()=>{
    let div=document.getElementsByClassName("drawer-item");
    let name=document.getElementsByClassName("drawer-link");
    let input=document.getElementById("drawer-input").value;
    setTimeout(()=>{
        div[0].innerHTML=null;
    let i1=document.createElement("input");
    i1.setAttribute("class","otpinput");
    let i2=document.createElement("input");
    i2.setAttribute("class","otpinput")
    let i3=document.createElement("input");
    i3.setAttribute("class","otpinput")
    let i4=document.createElement("input");
    i4.setAttribute("class","otpinput")
    div[0].append(i1,i2,i3,i4);
    let heading=document.querySelector(".drawer-link");
    heading.innerHTML=`Enter OTP sent to +91-${input}`;
    heading.setAttribute("id","phoneNumber");
    let btndiv=document.getElementById("btn-div");
    btndiv.innerHTML=null;
    let btn=document.createElement("button");
    btn.innerText="Continue";
    btn.setAttribute("id","continue-btn");
    btndiv.append(btn);
    btn.addEventListener("click",()=>{
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("loginuser").innerHTML=`<i class="fa-solid fa-user"></i>User`;
    })
    
    },500);


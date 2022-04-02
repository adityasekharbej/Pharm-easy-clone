const enterOTP=()=>{
    let bt=document.getElementById("loginuser");
    bt.innerText="Proceed to Payment";
    bt.addEventListener("click",()=>{
        window.location.href="payment.html";
    })
    closeNav()
}
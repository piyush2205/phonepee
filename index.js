

function paynow(){
    return true
  
   
}

paynow()
let paymetPromise =new Promise((resolve, reject) => {
      let amount=paynow();
    setTimeout(() => {
        if(amount){
            resolve ("paymet succesful");
        }else{
            reject("try again later")
        }
    }, 5000);
    
});

let image=document.getElementById("imgphonepe");

paymetPromise.then(function(res){
    console.log(res)
    image.src="https://www.bing.com/th/id/OGC.006713b6e2d036b7f7087531495d50ef?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f917339%2fscreenshots%2f6807472%2fmoneytransfer.gif&ehk=LVxJ0gFY0QpFua5V3%2fHlpDKfOEYzLK9GiqoDPY7dKdg%3d"
});
paymetPromise.catch(function(rej){
    console.log(rej);
    image.src="https://cdn.dribbble.com/users/107759/screenshots/4594246/15_payment-error.gif"
})

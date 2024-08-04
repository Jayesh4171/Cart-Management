
let quentity = document.querySelectorAll('.quentity');
let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');

let productList = document.querySelector(".produList");
let totalPrice = document.querySelector("#totalPrice");
let total = document.querySelector(".total");

let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

quentity.forEach(ele =>{
    ele.addEventListener('click', (e)=>{
        let btn_id = e.target.id;
        if(btn_id == "p1"){
            counter1++;
            ele.children[1].value = counter1
        }
        else if(btn_id == "p2"){
            counter2++;
            ele.children[1].value = counter2
        }
        else if(btn_id == "p3"){
            counter3++;
            ele.children[1].value = counter3
        }
        if(btn_id == "m1" && counter1 > 0){
            counter1--;
            ele.children[1].value = counter1
        }
        else if(btn_id == "m2" && counter2 > 0){
            counter2--;
            ele.children[1].value = counter2
        }
        else if(btn_id == "m3" && counter3 > 0){
            counter3--;
            ele.children[1].value = counter3
        }
        productList.innerHTML = "";
        if(counter1 > 0){
            productList.innerHTML += `<div class="item">
                     <p class="produName">product1</p>
                     <p class="noumberOfUnit">${counter1}</p>
                    <p class="produPrice">100</p>
                    <button class="remove"><i class="fa-regular fa-trash-can"></i></button>
                    </div>`
        }
        if(counter2 > 0){
            productList.innerHTML += `<div class="item">
                     <p class="produName">product2</p>
                     <p class="noumberOfUnit">${counter2}</p>
                    <p class="produPrice">200</p>
                    <button class="remove"><i class="fa-regular fa-trash-can"></i></button>
                    </div>`
        }
        if(counter3 > 0){
            productList.innerHTML += `<div class="item">
                     <p class="produName">product3</p>
                     <p class="noumberOfUnit">${counter3}</p>
                    <p class="produPrice">300</p>
                    <button class="remove"><i class="fa-regular fa-trash-can"></i></button>
                    </div>`
        }


        if(counter1 > 0 || counter2 > 0 || counter3 > 0){
            let ans = (counter1 * 100) + (counter2 * 200) + (counter3 * 300);

            // totalPrice.innerText = ans;
            total.innerHTML = `<h2>Total Price:</h2> <h2>${ans}</h2>`
        }else{
            total.innerHTML = `<h3>No product added to the cart</h3>`
        }
    })
})
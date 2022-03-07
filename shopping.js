const displayLocalStorageCart = () =>{
    const cart = getCart();
    for (const name in cart){
        displayProduct(name);
    }
}

const addItem = () =>{
    const inputField = document.getElementById('product-name');
    const item = inputField.value;
    if(!item){
        return;
    }
    // display in ui 
    displayProduct(item);
    // add to local storage 
    addProductToCart(item);
    // clear 
    inputField.value = '';
}
const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}
const getCart = () =>{
    const cart = localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart);
    }
    else{
        cartObj = {};
    }
    return cartObj;
}

const addProductToCart =  name =>{
    const cart = getCart();
    if(cart[name]){
        cart[name] = cart[name +1];
        
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}
const placeOrder = () =>{
    document.getElementById('products').textContent='';
    localStorage.removeItem('cart');
}
displayLocalStorageCart();
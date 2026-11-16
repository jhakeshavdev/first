// Create a product object that stores name and price and has a method which returns the final price after discount 
let product={
    name:"aalo",
    price:5200,

    discountprice:function(){
        return this.price-(10/100 *(this.price));
    }
}; 

let a1= product.discountprice();
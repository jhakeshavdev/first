// Create two different car objects from the same class and verify that their data is different 

class car{
constructor(brand,speed){
    this.brand=brand;
    this.speed=speed;
}
};

let car1 = new car("Hyundai",180);
let car2 = new car("Maruti",120);
//Ceate a car class with the following:- 
// brand
// speed
// a drive method that prints the car brand and speed

class car{
    constructor(brand ,speed){
        this.brand=brand;
        this.speed=speed;
    }

    drive(){
        return this.brand + " - " + this.speed;
    }
}

let car1= new car ("Hyundai",180)
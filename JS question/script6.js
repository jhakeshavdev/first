//Create a student class whose constrcutor accepts name and roll number.
//Add a method introduce that prints both values.

//Inside the constructor, Set values using this.
//Then try removing this and notice what error occurs and why.

class student{
    constructor(name,roll){
        this.name=name;
        this.roll=roll;
    }
    print(){
        return (this.name + " " + this.roll);
    }
};

let a1= new student("ram" ,43);
const car: string="subaru";
const agee: number=35;
const numbers :number[]=[1,2,3,4,5,6];
console.log("Is car=='subaru'? I predict True");
console.log(car=="subaru");
console.log("Is car=='Honda'? I predict True");
console.log(car=="Honda");
console.log("Is car!='Toyota'? I predict True");
console.log(car!="Toyota");
console.log("Is car==='Honda'? I predict False");
console.log(car==="Honda");
console.log("Is car name in lower case? I predict True");
console.log(car.toLowerCase()=="subaru");
console.log("Is car name 'toyota' in lower case? I predict False");
console.log(car.toLowerCase()=="toyota");
console.log("Is age==35? I predict True ");
console.log(agee==35);
console.log("Is age !=30? I predict True");
console.log(agee!==30);
console.log("Is age>40? I predict False");
console.log(agee>40);
console.log("Is age>30? I predict true");
console.log(agee>30);
console.log("Is age>30 && age<40? I predict True");
console.log(agee>30 && agee<40);
console.log("Is 10 in numbers? I predict False" );
console.log(numbers.includes(10));
console.log("Is 4 included in numbers? I predict True");
console.log(numbers.includes(4));

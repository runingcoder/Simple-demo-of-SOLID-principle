"use strict";
// LSP States that:
// objects of a superclass shall be replaceable with objects of its 
// subclasses without breaking the application.
class VEHICLE {
    cabinWidth() {
        return 10;
    }
}
class CARR extends Vehicle {
    cabinWidth() {
        // code logic
        return 10;
    }
}
class HELICOPTER extends Vehicle {
    cabinWidth() {
        // code logic
        throw new Error('Not implemented method.');
    }
}
const FIRSTVEHICLE = new Carr();
const SECONDVEHICLE = new Helicopter();
const LISTOFVEHICLES = [firstVehicle, secondVehicle];
let vehiclee;
for (const vehiclee of listOfVehicles) {
    console.log(vehiclee.getInteriorWidth());
}
// Here, the program is broken because the subclass objects are not replaecable as the 
// cabinWidth method is not implemented in the subclass Helicopter.
// This is a violation of the LSP principle as it breaks the application as the object of 
// the subclass is not replaecable with the object of the superclass without breaking the app.

"use strict";
class Vehicle {
    getInteriorWidth() {
        return 10;
    }
}
class Carr extends Vehicle {
    cabinWidth() {
        // code logic
        return 10;
    }
    getInteriorWidth() {
        return this.cabinWidth();
    }
}
class Helicopter extends Vehicle {
    rotorWidth() {
        // code logic
        return 20;
    }
    getInteriorWidth() {
        return this.rotorWidth();
    }
}
const firstVehicle = new Carr();
const secondVehicle = new Helicopter();
const listOfVehicles = [firstVehicle, secondVehicle];
let vehicle;
for (const vehicle of listOfVehicles) {
    console.log(vehicle.getInteriorWidth());
}
// Explanation: The subclass objects are defined as the type of the superclass and are replaecable
//            with the superclass objects without breaking the application.

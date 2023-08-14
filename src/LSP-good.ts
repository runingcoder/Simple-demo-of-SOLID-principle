
class Vehicle {
    getInteriorWidth() {
        return 10;
    }
}

class Carr extends Vehicle {
    cabinWidth(): number {
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


const firstVehicle: Vehicle = new Carr();
const secondVehicle: Vehicle = new Helicopter();
const listOfVehicles: Vehicle[] = [firstVehicle, secondVehicle]; 
let vehicle: Vehicle;
for (const vehicle of listOfVehicles) { 
    console.log(vehicle.getInteriorWidth());
}

// Explanation: The subclass objects are defined as the type of the superclass and are replaecable
//            with the superclass objects without breaking the application.

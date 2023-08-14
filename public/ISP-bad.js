"use strict";
class FutureCar {
    drive() {
        return 'Driving Car.';
    }
    fly() {
        return 'Flying Car.';
    }
}
class Car {
    drive() {
        return 'Driving Car.';
    }
    fly() {
        throw new Error('Not implemented method.');
    }
}
class Airplane {
    drive() {
        throw new Error('Not implemented method.');
    }
    fly() {
        return 'Flying Airplane.';
    }
}
//   Explanation: There is unimplemented methods in both the classes Car and Airplane,
//  This makes it hard to test them later.

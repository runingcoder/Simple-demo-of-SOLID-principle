// Integration Segregation Principle states that:
// A client should not be exposed to methods it doesn't need. 
interface VehicleInterface {
    drive(): string;
    fly(): string;
  }
  
  class FutureCar implements VehicleInterface {
    public drive() : string {
      return 'Driving Car.';
    }
  
    public fly() : string {
      return 'Flying Car.';
    }
  }
  
  class Car implements VehicleInterface {
    public drive() : string {
      return 'Driving Car.';
    }
  
    public fly() : string {
      throw new Error('Not implemented method.');
    }
  }
  
  class Airplane implements VehicleInterface {
    public drive() : string {
      throw new Error('Not implemented method.');
    }
    
    public fly() : string {
      return 'Flying Airplane.';
    }
  }

//   Explanation: There is unimplemented methods in both the classes Car and Airplane,
//  This makes it hard to test them later.
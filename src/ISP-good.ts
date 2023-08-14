interface CarInterface {
    drive() : string;
  }
  
  interface AirplaneInterface {
    fly() : string;
  }
  
  class FUTURECAR implements CarInterface, AirplaneInterface {
    public drive() {
        return 'Driving Car.';
    }
  
    public fly() {
        return 'Flying Car.'
    }
  }
  
  class CAR implements CarInterface {
    public drive() {
        return 'Driving Car.';
    }
  }
  
  class AIRPLANE implements AirplaneInterface {
    public fly() {
        return 'Flying Airplane.';
    }
  }

//   Those classes only implement the interface that has the methods that it compulsorily implements
//  and that doesn't leave any room for unimplemented methods anywhere and abided by the principle.
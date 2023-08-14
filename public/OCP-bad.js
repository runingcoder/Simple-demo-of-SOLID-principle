"use strict";
// OCP : Open Closed Principle says that software component should be open for extension but
//  closed for modification.
// Example: Violation of OCP
class Player {
    constructor(name) {
        this.name = name;
    }
    playerRewardDefensive(player) {
        if (player.isMotivated()) {
            // code logic
        }
    }
    playerRewardStriker(player) {
        if (player.isMotivated()) {
            // code logic
        }
    }
}
class DefensivePLayer {
    isMotivated() {
        // code logic
        return true; // or false
    }
}
class Striker {
    isMotivated() {
        // code logic
        return true; // or false
    }
}
// Explanation: --------------------
// Now, let's say we want to add a new type of player, a "MidField."
//  According to the bad implementation, we would have to add another method in the main class like;
// class MidField {
//     isMotivated(): boolean{
//        // code logic
//        return true;// or false
//    }
// }
// class Player {
//     constructor(public name: string) {}
//     playerRewardDefensive(player : DefensivePLayer)
//     {
//         if(player.isMotivated()){
//             // code logic
//         }
//     }
//     playerRewardStriker(player : Striker)
//     {
//         if(player.isMotivated()){
//             // code logic
//         }
//     }  
//     playerMidfield(player : MidField) -- Code addition here ----
// {
//     if(player.isMotivated()){
//         // code logic
//     }
// }  
// }
// Explanation: -------
// So, since we are having to extend the main class everytime a new position comes, it is voilating 
// the Open close Principle.

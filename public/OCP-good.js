"use strict";
// Now, for good implmentation, let's take the analogy of Player class to be a PS5.
// and the new positions are the features you can add to the PS5 like, joystick, HDMI, etc.
// so, there is a port for insertion and in code, that port is interface.
class PLAYER {
    constructor(name) {
        this.name = name;
    }
    playerRewardDefensive(player) {
        if (player.isMotivated()) {
            return 100;
        }
        return 0;
    }
}
class DEFENSIVEPLAYER {
    isMotivated() {
        // code logic
        return true; // or false
    }
}
class STRIKER {
    isMotivated() {
        // code logic
        return true; // or false
    }
}
class MIDFIELDER {
    isMotivated() {
        // code logic
        return true; // or false
    }
}
// Explanation: So, in this way, we can add as many new postion/features as we want(extension)
// and we don't really have to modify the main class. 

class Ninja {
    constructor(name){
        this.name = name;
        this.hp = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log("My name is ",this.name,"!!");
    }

    showStats(){
        console.log(
            "\nname: ",this.name,
            "\nstrength: ",this.strength,
            "\nspeed: ",this.speed,
            "\nhp: ",this.hp
        );
    }

    drinkSake(){
        this.hp+=10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
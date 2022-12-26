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

/**
 *  Clase Sensei
 */

class Sensei extends Ninja{
    constructor(name){
        super(name);
        super.hp = 200;
        super.speed = 10;
        super.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
        super.drinkSake();
    }
}

// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"

class Card {
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
    play (){
        console.log("---------------------------------------------------");
        console.log("Carta " + this.name + " jugada");
        console.log("---------------------------------------------------");
    }
}

class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power = power;
        this.res = res;
    }
    attack( target ){
        console.log("---------------------------------------------------");
        console.log( this.name + " ataca a " + target.name );
        console.log("---------------------------------------------------");
        console.log("before: ");
        target.showStats();
        target.res = target.res <= this.power
                        ?
                            0
                        :
                            target.res - this.power;
        console.log("after: ");
        target.showStats();
    }
    showStats(){
        console.log(
            "name: ",this.name,
            "\tpower: ",this.power,
            "\tres: ",this.res,"\n"
        );
    }
}

class Effect extends Card{
    constructor(name,cost,stat,magnitude){
        super(name,cost);
        this.stat = stat;
        this.magnitude = magnitude;
        this.magnitude >= 0
            ?
                this.text = "Raise the target's " + this.stat + " by " + this.magnitude
            :
                this.text = "Lower the target's " + this.stat + " by " + this.magnitude*(-1);
    }
    play ( target ) {
        super.play();
        if ( target instanceof Unit ) {
            console.log("before: ");
            target.showStats();
            if ( this.stat == "resilience" ) {
                target.res += this.magnitude;
            } else if (this.stat == "power") {
                target.power += this.magnitude;
            } else {
                console.log("Not a valid stat");
            }
            console.log("after: ");
            target.showStats();
        } else {
            console.log("Target must be a Unit!");
        }
    }
}

const ninjaCinturonRojo = new Unit("Ninja Cinturon Rojo",3,3,4);
const ninjaCinturonNegro = new Unit("Ninja Cinturon Negro",4,5,4);

const algoritmoDificil = new Effect("Algoritmo Dificil",2,"resilience",3);
const rechazoPromesaNoManejado = new Effect("Rechazo de promesa no manejado",1,"resilience",-2);
const programacionPareja = new Effect("Programación en Pareja",3,"power",2);


ninjaCinturonRojo.play();
algoritmoDificil.play(ninjaCinturonRojo);

ninjaCinturonNegro.play();
rechazoPromesaNoManejado.play(ninjaCinturonRojo);

programacionPareja.play(ninjaCinturonRojo);
ninjaCinturonRojo.attack(ninjaCinturonNegro);
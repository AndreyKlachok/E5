class Device {
    constructor(name, power) {
        this.name = name
        this.status = false
        this.power = power
        this.start = 0
        this.stop = 0
    }
    changeStatus() {
        if (this.status) {
            this.status = false
            this.stop = Date.now()
            console.log(`Electricity used: ${(this.stop - this.start) * this.power}`)
            this.start = 0
            this.stop = 0
        } else {
            this.status = true
            this.start = Date.now()
        }
    }
}

class Lamp extends Device {
    constructor(name, power) {
        super(name, power);
        this.lighting = 0
    }
    turnOn (light){
        this.lighting += light
            lamp.changeStatus()
        console.log(lamp)
        setTimeout(() =>{
            lamp.changeStatus()
        console.log(lamp)
        }, 100)
    }
}

class Computer extends Device {
    constructor(name, power) {
        super(name, power)
        this.action = {'game': 123, 'work': 456, 'internet': 789}
    }
    session(act) {
        if (act in this.action) {
            super.changeStatus()
            console.log(this)
            console.log(`Start ${act}`)
            setTimeout(() => {
                super.changeStatus()
            }, this.action[act])
            console.log(this)
        }
    }
}


const computer = new Computer('PC', 1000)
console.log(computer)
computer.session('game')


const lamp = new Lamp('Philips', 200)
console.log(lamp)
lamp.turnOn(20)
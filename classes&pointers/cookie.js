class Cookie {
    constructor(color) {
        this.color = color
    }
    getColor() {
        return this.color
    }
    setColor(color) {
        this.color = color
    }
}
 
let cookieOne = new Cookie('green')
let cookieTwo = new Cookie('blue')

console.log('cookie one', cookieOne.getColor())
cookieOne.setColor('red')
console.log('cookie one after set', cookieOne.getColor())
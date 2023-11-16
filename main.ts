let x = 2
let y = 2
let accy = 0
let accx = 0
basic.forever(function on_forever() {
    
    led.plot(x, y)
    basic.pause(50)
    led.unplot(x, y)
    accx = input.acceleration(Dimension.X)
    accy = input.acceleration(Dimension.Y)
    if (accx <= 150 && x > 0) {
        x = x - 1
    }
    
    if (accx > 150 && x < 4) {
        x = x + 1
    }
    
    if (accy <= 150 && y > 0) {
        y = y - 1
    }
    
    if (accy > 150 && y < 4) {
        y = y + 1
    }
    
})

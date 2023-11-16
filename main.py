x = 2
y = 2
accy = 0
accx = 0
def on_forever():
    global x, y, accx, accy
    led.plot(x, y)
    basic.pause(50)
    led.unplot(x, y)
    accx = input.acceleration(Dimension.X)
    accy = input.acceleration(Dimension.Y)
    if accx <= 150 and x > 0:
        x = x - 1
    if accx > 150 and x < 4:
        x = x + 1
    if accy <= 150 and y > 0:
        y = y - 1
    if accy > 150 and y < 4:
        y = y + 1
basic.forever(on_forever)

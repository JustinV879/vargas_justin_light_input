while True:
    print("Light Level:" + input.light_level())
    if (input.light_level()) < 5:
        light.set_all(light.rgb(0,0,255))
    elif (input.light_level()) > 10:
            light.set_all(light.rgb(255,165,0))
    else:
        light.clear
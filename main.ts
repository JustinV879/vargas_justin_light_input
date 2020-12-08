while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (input.lightLevel() >= 1) {
        light.setAll(light.rgb(0, 0, 255))
    } else if (input.lightLevel() > 10) {
        light.clear()
    }
    
}

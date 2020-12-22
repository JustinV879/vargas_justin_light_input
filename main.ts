while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (input.lightLevel() > 10) {
        light.clear()
    } else if (input.lightLevel() >= 7) {
        light.setAll(light.rgb(0, 0, 255))
    } else {
        light.setAll(light.rgb(255, 165, 0))
    }
    
}

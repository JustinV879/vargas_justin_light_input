while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (input.lightLevel() < 5) {
        light.setAll(light.rgb(0, 0, 255))
    } else if (input.lightLevel() > 10) {
        light.setAll(light.rgb(255, 165, 0))
    } else {
        light.clear
    }
    
}

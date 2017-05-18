function coneVolume(radius, height) {
    var volume = (1 / 3) * Math.PI * radius * radius * height
    var lateralSurface = Math.PI * radius * Math.sqrt((radius * radius + height * height))
    var baseSurface = Math.PI * radius * radius

    var totalArea = lateralSurface + baseSurface
    console.log('volume = ' + volume)
    console.log('area = ' + totalArea)
}
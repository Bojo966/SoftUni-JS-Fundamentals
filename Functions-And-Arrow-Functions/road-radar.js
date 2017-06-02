function roadRadar([speed, area]) {
    let motorway = 130;
    let interstate = 90;
    let city = 50;
    let residential = 20;
    let differnce = 0;
    if (area === 'motorway' && speed > motorway) {
        differnce = speed - motorway
    } else if (area === 'interstate' && speed > interstate) {
        differnce = speed - interstate
    } else if (area === 'city' && speed > city) {
        differnce = speed - city
    } else if (area === 'residential') {
        differnce = speed - residential
    }

    if (differnce > 40) {
        console.log('reckless driving')
    } else if (differnce > 20) {
        console.log('excessive speeding')
    } else if (differnce > 0) {
        console.log('speeding')
    }
}
function leapYear(year) {
    if (Math.floor(year / 4) === year / 4 && Math.floor(year / 100) !== year / 100) {
        return 'yes'
    } else if (Math.floor(year / 400) === year / 400) {
        return 'yes'
    } else {
        return 'no'
    }
}
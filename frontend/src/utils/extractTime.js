//write a function to extract hour and minutes from a date

export function extractTime(dateString) {
    let date = new Date(dateString)
    let hours = padZero(date.getHours())
    let minutes = padZero(date.getMinutes())
    return `${hours}:${minutes}`
}

function padZero(number){
    return number.toString().padStart(2, '0')
}
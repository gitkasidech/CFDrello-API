export const convertDates = (d) =>{
    let month = '' + (d.getMonth() + 1)
    let date = '' + (d.getDate())
    let day = '' + (d.getDay())
    let year = d.getFullYear()
    if (month.length < 2) month = '0' + month;
    if (date.length < 2) date = '0' + date;
    
    const ymd = [year, month, date, day].join('-')
    return ymd
}

export const convertShortDates = (d) =>{
    let month = '' + (d.getMonth() + 1)
    let date = '' + (d.getDate())
    let year = d.getFullYear()
    if (month.length < 2) month = '0' + month;
    if (date.length < 2) date = '0' + date;
    
    const ymd = [year, month, date].join('-')
    return ymd
}
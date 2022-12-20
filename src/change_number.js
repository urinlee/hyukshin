

export const plus_comma = (number) => {
    let num_string = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return num_string
}
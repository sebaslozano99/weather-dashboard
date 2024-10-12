
export default function capitalize(string){
    let stringToRetur = string.trim().split("");

    return stringToRetur.map((letter, i) => i === 0 ? stringToRetur[i].toUpperCase() : stringToRetur[i - 1]  === " "  ? stringToRetur[i].toUpperCase() : letter )
}
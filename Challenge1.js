

function order(words) {
    const orderedWords = words.split(" ").map((word) => word.match(/\d+/) ).sort().map((number) => number.input).join("\u0020")
    
    return orderedWords
}


let words = order ("is2 Thi1s T4est 3a") 
console.log( words )

let text = document.getElementById("text")

text.append(words)
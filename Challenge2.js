

function solution(number) {
    if (number < 0) return 0
    function getRange (end) {
        const range = []
        for (let i= 0; i < end; i++) {
            range.push(i)
        }
        return range
    }

    const allMultiples = getRange(number).map((num)=> num / 3 ).filter(num => Number.isInteger(num) ).map((num)=> num * 3).concat(
        getRange(number).map((num)=> num / 5 ).filter(num => Number.isInteger(num) ).map((num)=> num * 5)
    )
    const multiplesArray = Array.from(new Set(allMultiples))
    
    const result = multiplesArray.reduce((accumulator, currentValue) => accumulator + currentValue,
    0,
  )

    return result
    
}

console.log(solution(10))

//result = multiplesOf3.reduce((accumulator, currentValue) => accumulator + currentValue, 0,) + multiplesOf5.reduce((accumulator, currentValue) => accumulator + currentValue, 0,)

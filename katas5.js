// Katas1
const reverseString = (string) => {
    return string.split("").reverse().join("")
}

const testeReverseString1 = () => {
    let result = reverseString("Kenzie Academy")
    let expected = "ymedacA eizneK"
    console.assert(result === expected, `esperado:${expected},obtido: ${result}`)
}
testeReverseString1()
const testeReverseString2 = () => {
    let result = reverseString("Socorram-me, subi no ônibus em Marrocos")

    let expected = "socorraM me subinô on ibus ,em-marrocoS"
    console.assert(result === expected, `esperado:${expected},obtido: ${result}`)
}
testeReverseString2()

//Katas 2
const reverseSetence = (string) => {
    return string.split(" ").reverse().join(" ")
}
const testeReverseSetence1 = () => {
    let result = reverseSetence("bob likes dogs")
    let expected = "dogs likes bob"

    console.assert(result === expected, `esperado:${expected},obtido: ${result}`)
}
testeReverseSetence1()
const testeReverseSetence2 = () => {
    let result = reverseSetence("Dev da Kenzie Academy")
    let expected = "Academy Kenzie da Dev"
    console.assert(result === expected, `esperado:${expected},obtido: ${result}`)
}
testeReverseSetence2()
//Katas3
const minimumValue = (menor) => {
    return (Math.min.apply(Math, menor))
}
const testMinimumValue1 = () => {
    let result = minimumValue([2321, 5, 632, 47, 338, 23, 434, 523])
    let expected = 5
    console.assert(result === expected, `esperado:${expected},obtido: ${result}`)
}
testMinimumValue1()
const testMinimumValue2 = () => {
    let result = minimumValue([23112, 43532, 11323, 655465, 45465, 7546])
    let expected = 7546
    console.assert(result === expected, `esperado:${expected},obtido: ${result}`)
}
testMinimumValue2()
//Katas4
const maximumValue = (menor) => {
    return (Math.max.apply(Math, menor))
}
const testMaximumValue1 = () => {
    let result = maximumValue([2321, 5, 632, 47, 338, 23, 434, 523])
    let expected = 2321
    console.assert(result === expected, `esperado:${expected},obtido: ${result}`)
}
testMaximumValue1()
const testMaximumValue2 = () => {
    let result = maximumValue([23112, 43532, 11323, 655465, 45465, 7546])
    let expected = 655465
    console.assert(result === expected, `esperado:${expected},obtido: ${result}`)
}
testMaximumValue2()
//katas5
const calculateRemainder = (x, y) => {
    return x % y
}
const testCalculateRemainder1 = () => {
    let result = calculateRemainder(4, 2)
    let expected = 0
    console.assert(result === expected, `esperado:${expected},obtido: ${result}`)
}
testCalculateRemainder1()
const testCalculateRemainder2 = () => {
    let result = calculateRemainder(25, 3)
    let expected = 1
    console.assert(result === expected, `esperado:${expected},obtido: ${result}`)
}
testCalculateRemainder2()
//Katas 6

const distinctValues = (values, aux) => {
    for (let i = 0; i < values.length; i++) {
        if (!aux.includes(values[i])) {
            aux.push(values[i])
        }
    }
    return aux
}
const testDistinctValues1 = () => {
    let aux = []
    let result = distinctValues("1 3 5 3 7 3 1 1 5".split(" "), aux).join(" ")
    let expected = "1 3 5 7"
    console.assert(result === expected, `esperado:${expected},obtido: ${result}`)
}
testDistinctValues1()
const testDistinctValues2 = () => {
    let aux = []
    let result = distinctValues("10 10 30 30 60 60 50 50".split(" "), aux).join(" ")
    let expected = "10 30 60 50"
    console.assert(result === expected, `esperado:${expected},obtido: ${result}`)
}
testDistinctValues2()
//katas 7
const countValues = (values) => {
    let aux = []
    let result = distinctValues(values, aux)
    let contador = 0
    for (let i = 0; i < result.length; i++) {
        contador = 0
        for (let j = 0; j < values.length; j++) {
            if (result[i] === values[j]) {
                contador++
            }
        }
        result[i] = result[i] + "(" + contador + ")"
    }
    return result.join(" ")
}
const testCountValues1 = () => {
    let result = countValues("1 3 5 3 7 3 1 1 5".split(" "))
    let expected = "1(3) 3(3) 5(2) 7(1)"
    console.assert(result === expected, `esperado:${expected},obtido: ${result}`)
}
testCountValues1()
const testCountValues2 = () => {
    let result = countValues("7 45 5 45 7 45 7 7 5 97 97".split(" "))
    let expected = "7(4) 45(3) 5(2) 97(2)"
    console.assert(result === expected, `esperado:${expected},obtido: ${result}`)
}
testCountValues2()
//Katas 8
const evaluateExpression = (arr, obj) => {
    let aux = Object.keys(obj)
    let vault = Object.values(obj)
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (aux[i] === arr[j]) {
                arr[j] = vault[i].toString()
            }
        }
    }
    return eval(arr.join(""))
}
const testEvaluateExpression1 = () => {
    let result = evaluateExpression("a + b + c - d".split(" "), {
        a: 1,
        b: 7,
        c: 3,
        d: 14
    })
    let expected = -3
    console.assert(result === expected, `esperado:${expected},obtido: ${result}`)
}
testEvaluateExpression1()
const testEvaluateExpression2 = () => {
    let result = evaluateExpression("a + b + c - d + e".split(" "), {
        a: 1,
        b: 7,
        c: 3,
        d: 14,
        e: 3
    })
    let expected = 0
    console.assert(result === expected, `esperado:${expected},obtido: ${result}`)
}
testEvaluateExpression2()
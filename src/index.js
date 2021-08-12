module.exports = function toReadable(number) {

    let beforeTen = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let afterTen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if (number < 10) {
        return beforeTen[number];
    }

    if ((number >= 10) && (number < 20)) {
        return afterTen[number - 10];
    }

    if ((number >= 20) && (number < 100)) {
        let arr = number.toString().split("")

        if (arr[1] == 0) {
        return [tens[arr[0]-2]].join(" ")
        }
        else {
        return [tens[arr[0]-2],beforeTen[arr[1]]].join(" ")
        }
    }

    if ((number >= 100) && (number < 1000)) {
        let arr = number.toString().split("")

        if ((arr[1] == 0) && (arr[2] == 0)) {
            return [beforeTen[arr[0]],[' hundred']].join('')
        }

        if ((arr[1] == '1') && (arr[2] == '0')) {
            return [beforeTen[arr[0]],[' hundred '],afterTen[arr[1] - 1]].join('')
        }

        if (arr[2] == "0") {
            return [beforeTen[arr[0]],[' hundred '],tens[arr[1] - 2]].join('')
        }

        if (arr[1] == "1") {
            return [beforeTen[arr[0]],[' hundred '],afterTen[arr[1] + arr[2] - 10]].join('')
        }
        else if (arr[1] == "0") {
            return [beforeTen[arr[0]],[' hundred '],beforeTen[arr[2]]].join('')
        }
        else {
            return [beforeTen[arr[0]],[' hundred '],tens[arr[1] - 2],[' '],beforeTen[arr[2]]].join('')
        }
    }
}

//============ Pyramide ===============

function pyramide(size) {
    for (let index = 1; index <= size; index++){
        let sizeTmp = size
        let display = ""
        while (sizeTmp > 0) {
            if(sizeTmp > index) {
                display = display.concat(' ')
            } else {
                display = display.concat('#')
            }
        sizeTmp--
        }
        console.log(display)
    }
}

pyramide(Number(prompt("Quelle taille fais ta pyramide")))

// function pyramide(size) {
//     for (let index = 1; index <= size; index++){
//         let display = ""
//         display = display.concat(' '.repeat(size - index))
//         display = display.concat('#'.repeat(index))
//         console.log(display)
//     }
// }
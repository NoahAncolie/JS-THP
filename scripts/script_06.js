let amines = {
    UCU: "Sérine", 
    UCC: "Sérine",
    UCA: "Sérine",
    UCG: "Sérine",
    AGU: "Sérine",
    AGC: "Sérine",
    CCU: "Proline",
    CCC: "Proline",
    CCA: "Proline",
    CCG: "Proline",
    UUA: "Leucine",
    UUG: "Leucine",
    UUU: "Phénylalanine",
    UUC: "Phénylalanine",
    CGU: "Arginine",
    CGC: "Arginine",
    CGA: "Arginine",
    CGG: "Arginine",
    AGA: "Arginine",
    AGG: "Arginine",
    UAU: "Tyrosine",
    UAC: "Tyrosine"
}

function nameSequence(arn) {
    let i = 0
    let answer = ""
    while (i < arn.length) {
        answer += (amines[arn.substring(i, i + 3)])
            if (i + 3 < arn.length) {
                answer += "-"
            }
        i += 3
    }
    console.log(answer)
}

console.log("==CCGUCGUUGCGCUACAGC== est : ")
nameSequence("CCGUCGUUGCGCUACAGC")
console.log("==CCUCGCCGGUACUUCUCG== est : ")
nameSequence("CCUCGCCGGUACUUCUCG")
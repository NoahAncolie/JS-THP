function teenBot() {
    let talk = "ok"

    while (talk != "exitBot") {
        talk = prompt("Quest-ce qu'il y a ?")
        if (talk[talk.length - 1] === "?") {
            alert("Ouais Ouais...")
        } else if (!(talk === "") && talk.toUpperCase() === talk) {
            alert("Pwa, calme-toi..." )
        } else if (talk.includes("Fortnite") || talk.includes("fortnite")) {
            alert("On s' fait une partie soum-soum ?")
        } else if (talk === "") {
            alert("t'es en PLS ?")
        } else {
            alert("balek")
        }
    }
}

teenBot()


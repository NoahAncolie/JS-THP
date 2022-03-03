const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// =======================================================================
//ARE THEY ALL RENTED


let allRented = (list) => {
    for (let index in list) {
        if (list[index]["rented"] === 0) {
            console.log("Un des livre n'a jamais été emprunté")
            return false
        }
    }
    console.log("Tous les livres ont étés emprunté au moins une fois")
    return true
}

// =======================================================================
//MOST RENTED

function mostRented(list) {
    let most = {title: "empty", id: 0, rented: 0 }
    for (let index in list ) {
        if (list[index].rented > most.rented) {
            most = list[index]
        }
    }
    console.log("Le livre le plus emprunté de la list est : " + most["title"])
    return most
}

// =======================================================================
//LEAST RENTED

function leastRented(list) {
    let least = mostRented(list)
    for (let index in list) {
        if (list[index].rented < least.rented) {
            least = list[index]
        }
    }
    console.log("Le livre le moins emprunté de la liste est : " + least["title"])
    return least
}

//========================================================================
//Find Book WITH ID

function find(list, id) {
    for (let index in list) {
        if (list[index].id === id) {
            console.log(`Le livre à l'id ${id} est : ` + list[index].title)
            return list[index]
            break
        }
    }
}

//========================================================================
//Destroy Book WITH ID

function destroy(list, id) {
    for (let index in list) {
        if (list[index].id === id) {
            console.log(`${list[index].title} a été supprimé`)
            list.splice(index, index + 1)
            break
        }
    }
}

//========================================================================
//Sort

function sortArray(a, b) {
    if (a.title > b.title) {
        return (1)
    } else if (a.title < b.title) {
        return (-1)
    } else {
        return (0)
    }
}

allRented(books)
mostRented(books)
leastRented(books)
find(books, 873495)
destroy(books, 133712)
console.log(books.sort(sortArray))
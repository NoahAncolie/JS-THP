const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 , inventeur: true},
    { first: 'Oprah', last: 'Winfrey', year: 1954 , inventeur: false},
    { first: 'Bill', last: 'Gates', year: 1955 , inventeur: true},
    { first: 'Sheryl', last: 'Sandberg', year: 1969 , inventeur: false},
    { first: 'Mark', last: 'Zuckerberg', year: 1984 , inventeur: true},
    { first: 'Beyonce', last: 'Knowles', year: 1981 , inventeur: false},
    { first: 'Jeff', last: 'Bezos', year: 1964 , inventeur: true},
    { first: 'Diane', last: 'Hendricks', year: 1947 , inventeur: false},
    { first: 'Elon', last: 'Musk', year: 1971 , inventeur: true},
    { first: 'Marissa', last: 'Mayer', year: 1975 , inventeur: true},
    { first: 'Walt', last: 'Disney', year: 1901 , inventeur: false},
    { first: 'Larry', last: 'Page', year: 1973 , inventeur: true},
    { first: 'Jack', last: 'Dorsey', year: 1976 , inventeur: true},
    { first: 'Evan', last: 'Spiegel', year: 1990 , inventeur: true},
    { first: 'Brian', last: 'Chesky', year: 1981 , inventeur: true},
    { first: 'Travis', last: 'Kalanick', year: 1976 , inventeur: true},
    { first: 'Marc', last: 'Andreessen', year: 1971 , inventeur: true},
    { first: 'Peter', last: 'Thiel', year: 1967 , inventeur: false}
];

for (let index in entrepreneurs) {
    if (entrepreneurs[index]["year"] < 1980 && entrepreneurs[index]["year"] > 1969) {
        console.log(entrepreneurs[index]["first"] + " " + entrepreneurs[index]["last"] + " was born in " + entrepreneurs[index]["year"])
    }
}

console.log("=====================================================")

for (let index in entrepreneurs) {
    console.log(entrepreneurs[index]["first"] + " " + entrepreneurs[index]["last"])
}

console.log("=====================================================")

for (let index in entrepreneurs) {
    if (entrepreneurs[index]["inventeur"]) {
        console.log(entrepreneurs[index]["first"] + " " + entrepreneurs[index]["last"] + " aurait aujourd'hui " + String(2022 - entrepreneurs[index]["year"]))
    }
}

console.log("=====================================================")

function compare( a, b ) {
    if ( a.last < b.last ){
        return -1;
    }
    if ( a.last > b.last ){
        return 1;
    }
    return 0;
}

sorted = entrepreneurs.sort( compare );

for (let index in sorted) {
    console.log(sorted[index]["first"] + " " + sorted[index]["last"])
}
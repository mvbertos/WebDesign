var games = [
    {
        "name": "Metal Gear",
        "year": 1987,
        "author": "Hideo Kojima"
    }
];

var jujuba = [
    {
        "name": "jujuba morango"
    }
];

function submitGame() {
    var year = document.getElementById("gameYear").value;
    var name = document.getElementById("gameName").value;
    var author = document.getElementById("gameAuthor").value;

    games.push(
        {
            "name": name,
            "year": parseInt(year),
            "author": author
        }
    );

    // games.forEach(printValues); //ForEach example
    for (var i in games) {
        printValue(games[i].name, games[i].year, games[i].author);
    }

}

function printValues(item, index, arr) {
    printValue(games[index].name, games[index].year, games[index].author);
}

function printValue(name, year, author) {
    document.getElementById("gameContent").innerHTML += ""+
    "<div class='card'>"+
        "<div class='cardContent'>"+
            "<div class='gameName'>"+name+"</div>"+
            "<div class='gameInfo'>"+year+"</div>"+
            "<div class='gameInfo'>"+author+"</div>"+
            // "<div class='gamePhoto'>Photo</div>"+
        "</div>";
    "</div>"
}
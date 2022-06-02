function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,

                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,

                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,

                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,

                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 2,
                    blocks: 11,
                    slamDunks: 1,

                }
            }

        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,

                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,

                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,

                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,

                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,

                }
            }

        }
    }
}


function numPointsScored(playerName) {
    const game = gameObject();
    for (team in game) {
        for (player in game[team].players) {
            if (player === playerName) {
                return game[team].players[player].points;
            }

        }

    }
}

function shoeSize(playerName) {
    const game = gameObject();
    for (team in game) {
        for (player in game[team].players) {
            if (player === playerName) {
                return game[team].players[player].shoe;
            }

        }

    }
}

function teamColors(nameOfTeam) {
    const game = gameObject();
    for (team in game) {
        if (game[team].teamName === nameOfTeam) {
            return game[team].colors;
        }

    }
}

function teamNames() {
    const game = gameObject();
    const teamNames = []
    for (const team in game) {
        teamNames.push(game[team].teamName)
    }
    return teamNames
}

function playerNumbers(nameOfTeam) {
    const game = gameObject();
    const jerseyNumbers = []
    for (const team in game) {
        if (game[team].teamName === nameOfTeam) {
            for (const player in game[team].players) {
                jerseyNumbers.push(game[team].players[player].number)
            }
        }
    }
    return jerseyNumbers
}

function playerStats(playerName) {
    const game = gameObject();
    for (const team in game) {
        for (const player in game[team].players) {
            if (player === playerName) {
                return game[team].players[player];
            }
        }
    }
}

function bigShoeRebounds() {
    const game = gameObject();
    let biggestShoe = 0;
    let biggestShoePlayer;
    let biggestShoeTeam;
    for (const team in game) {
        for (const player in game[team].players) {
            if (game[team].players[player].shoe > biggestShoe) {
                biggestShoe = game[team].players[player].shoe;
                biggestShoePlayer = player;
                biggestShoeTeam = team;
            }
        }
    }
    return game[biggestShoeTeam].players[biggestShoePlayer].rebounds;
}

function mostPointsScored() {
    const game = gameObject();
    let highestScore = 0;
    let highestScorePlayer;
    for (const team in game) {
        for (const player in game[team].players) {
            if (game[team].players[player].points > highestScore) {
                highestScore = game[team].players[player].points;
                highestScorePlayer = player;
            }
        }
    }
    return highestScorePlayer;
}

function winningTeam() {
    const game = gameObject();

    let homeScore = () => {
        let x = 0;
        for (const player in game.home.players) {
            x += game.home.players[player].points
        } return x
    }
    let awayScore = () => {
        let x = 0;
        for (const player in game.away.players) {
            x += game.away.players[player].points
        } return x
    }
    if (homeScore() > awayScore()) {
        return game.home.teamName
    } else if (homeScore() < awayScore()) {
        return game.away.teamName
    } else {
        return "It's a tie!"
    }

}

function playerWithLongestName() {
    const game = gameObject();
    let nameLength = 0;
    let longestNamePlayer;
    for (const team in game) {
        for (const player in game[team].players) {
            if (player.length > nameLength) {
                nameLength = player.length
                longestNamePlayer = player;
            }
        }
    }
    return longestNamePlayer
}

function doesLongNameStealATon() {
    const game = gameObject();
    const longestNamePlayer = playerWithLongestName()
    const longestNamePlayerSteals = () => {
        for (const team in game) {
            for (const player in game[team].players) {
                if (longestNamePlayer === player) {
                    return game[team].players[player].steals
                }
            }
        }
    }
    for (const team in game) {
        for (const player in game[team].players) {
            if (game[team].players[player].steals > longestNamePlayerSteals()) {
                return false
            }
        }

    }
    return true
}
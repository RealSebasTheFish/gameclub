class match
{
    constructor(pTimePlayed, pParticipants, pGame, pCustomData)
    {
        this.id = 87231948263998172364978; // Make this actually generatable
        this.timePlayed = pTimePlayed;

        var pMatchData = {}
        pMatchData.game = pGame;
        pMatchData.participants = pParticipants;
        this.matchData = pMatchData;

        this.customData = pCustomData; // pCustomData includes stats, teams, results, etc.. (All otehr info you need)
    }
}

matches = [
    {
        matchid: "734623948723",
        matchData: {
            game: "Smash Bros",
            participants: ["7482937489", "34623478263489", "238473284973439"],
            customData: {
                stats: {
                    "7482937489": {
    
                    },
                    "34623478263489": {
    
                    },
                    "238473284973439": {
    
                    }
                },
                teams: {},
                results: {}
            }
        }    
    }
]



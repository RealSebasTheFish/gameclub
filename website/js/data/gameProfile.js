games = [
    {
        id: "87465416541261",
        gameName: "Smash Bros",
		pointsPerPlay: 3,
		pointsByPlace: [10,5,3,0],
		playerPerTeam: 1,
		teamPerMatch: 4
    }
]

class gameProfile
{
    constructor(pName, pPointsPerPlay, pPointsByPlace, pPlayerPerTeam, pTeamPerMatch)
    {
        this.id = 87231948263998; // Make this actually generatable
		
        this.gameName = pName;
		this.pointsPerPlay = pPointsPerPlay;
		this.pointsByPlace = pPointsByPlace;
		this.playerPerTeam = pPlayerPerTeam;
		this.teamPerMatch = pTeamPerMatch;
    }
}
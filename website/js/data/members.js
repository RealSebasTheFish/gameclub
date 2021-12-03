playerData = [ // A list of members
    {
        id: "73465834975",
        displayName: "Jim",
        // Using custom data so content of the json object can be changed dynamically if needed
        // If we need to add a new stat or smth, we can update everyone's custom data object and add it
        customData: {
            discordId: "28397423809",
            points: {
                pointsHistory: [], // List of point totals at the end of seasons
                pointTransactions: [] // List of point transaction objects
            },
            matches: [216321736, 2189371283, 2198391273, 28371938237], // List of match objects
            attedance: { // JSON object with keys as the dates in MM/DD/YYYY format and boolean for attended or not as the value
                "12/01/2021": true
            }
        }
    }
]

class member
{
    constructor(pDisplayName, pDiscordId)
    {
        this.displayName = pDisplayName;
        this.id = createId(); // Generate ID

        this.customData = {};
        this.customData.discordId = pDiscordId;

        var pointsObject = {};
        pointsObject.pointsHistory = [];
        pointsObject.pointTransactions = [];
        this.customData.points = pointsObject;

        this.customData.matches = [];
        this.customData.attedance = {};
    }
}

class pointTransaction
{
    constructor(pAmount, pTime, pRecipient){

    }
}
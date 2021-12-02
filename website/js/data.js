playerData = [
    {
        id: "73465834975",
        displayName: "Jim",
        // Using custom data so content of the json object can be changed dynamically if needed
        // If we need to add a new stat or smth, we can update everyone's custom data object and add it
        customData: {
            discordId: "28397423809",
            points: {
                pointsHistory: [], // List of point totals at the end of seasons
                pointTransactions: { // List of point transaction objects

                }
            },
            matches: [216321736, 2189371283, 2198391273, 28371938237],
            attedance: []
        }
    }
]

class member
{
    constructor(pDisplayName, pDiscordId)
    {
        this.displayName = pDisplayName;
        this.id = ""; // Generate ID
    }
}

class pointTransaction
{
    constructor(pAmount, pTime, pRecipient){

    }
}
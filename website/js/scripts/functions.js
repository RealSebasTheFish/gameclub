function createId()
{
    var randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var result = '';
    for (var i = 0; i < 30; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

function importData()
{
    var dataScripts = ["gameProfile", "matches", "members", "tournaments"];

    for (var i = 0; i < scripts.length; i++)
    {
        var currNode = document.createElement("script");
        currNode.src = "https://gameclub.sacredheart.tech/js/data/" + scripts[i] + ".js";
        document.head.appendChild();
    }
}

function showMatch()
{
    // TODO
}

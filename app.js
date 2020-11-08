const Discord = require('discord.js');
const config = require("./config.json");

let prefix = config.prefix; //BOT PREFIX

var roleGame = {
    "VALORANT": {
        name: "valorant", //NAME ROLE TOLOWERCASE
        id: '735224527851618396' //ROLE ID
    },
    "League of Legends": {
        name: "league of legends",
        id: '735224422796886018'
    },
    "Rust": {
        name: "rust",
        id: '736050308895080548'
    },
    "Minecraft": {
        name: "minecraft",
        id: "735224613562482799"
    },
    "Stardew Valley": {
        name: "Stardew Valley",
        id: "735673058165129345"
    },
    "Counter-Strike: Global Offensive": {
        name: "counter-strike: global offensive",
        id: "735692750967668841"
    },
    "Visual Studio Code": {
        name: "visual studio code",
        id: "736053509992218632"
    },
    "DBD": {
        name: "dead by daylight",
        id: "736338382178746389"
    },
    "Dota": {
        name: "dota 2",
        id: "736392959850709084"
    },
    "Among Us": {
        name: "among us",
        id: "755044556038340722"
    },
    "Fall Guys": {
        name: "fall guys",
        id: "755053364047380571"
    }

};


var blackListUsers = ["297153970613387264", "240482527695994880", "168331481024823296"]; //OTHER BOTS
var blackListWords = ["spotify", "custom", "status", "noxplayer"]; //BLACKLIST ROLES UPDATE


var client = new Discord.Client({ ws: { intents: 'GUILD_PRESENCES' }});

function collectRoleIds() {
    client.guilds.cache.forEach(function(server) {
        server.roles.cache.forEach(function(role) {
            for (var gKey in roleGame) {
                if (prefix + gKey === role.name) {
                    roleGame[gKey]['id'] = role.id;
                }
            }
        });
    });
}

function registeredGame(game) {
    game.toString();
    for (var gKey in roleGame) {
        if ((game !== null && game !== undefined) && roleGame[gKey].name === game.toString().toLowerCase()) {
            return gKey;
        }
    }

    return false;
}

function removeWords(text) {
    var str2 = text.replace(/,/g, " ");
    var str3 = str2.toLowerCase();
    str = str3.split(" ");

    for (var i = 0; i < blackListWords.length; i++) {
        for (var j = 0; j < str.length; j++) {
            if (str[j].toLowerCase() === blackListWords[i]) {
                str.splice(j, 1);
            }
        }
    }
    return text = str.join(" ");
}


client.on('presenceUpdate', (oldPresence, newPresence) => {
    //if (JSON.stringify(oldPresence) == 'undefined') {return};

    if (JSON.stringify(oldPresence) == undefined) {
        return
    };
    if (oldPresence == 'undefined') {
        return
    };
    if (oldPresence == null && newPresence == null) {
        return
    }
    if (oldPresence == 'undefined' && newPresence == 'undefined') {
        return
    }
    if (oldPresence.activities == 'undefined' && newPresence.activities == 'undefined') {
        return
    }

    //REMOVE BOTS UPDATE
    for (var ii in blackListUsers) {
        if (oldPresence.userID.includes(blackListUsers[ii].toLowerCase())) {
            return
        }
    }


    var oldActivities = oldPresence.activities.toString();
    var newActivities = newPresence.activities.toString();

    //REMOVE WORDS
    var oldActivities = removeWords(oldActivities);
    var newActivities = removeWords(newActivities);

    if (oldActivities == newActivities) {
        return
    };



    console.log('\n########################################################################################################################\n');
    console.log('Atividade antiga: ' + oldActivities + '\nNova atividade: ' + newActivities + '\nUser: ' + newPresence.member.displayName);

    var oldGame = registeredGame(oldActivities);
    if (oldGame) {
        newPresence.member.roles.remove(roleGame[oldGame].id).catch(e => {
            console.error(e)
        });
        console.log('Removido Role');
    }

    var gameId = registeredGame(newActivities);
    if (gameId) {
        newPresence.member.roles.add(roleGame[gameId].id).catch(e => {
            console.error(e)
        });
        console.log('Atribuido Role');
    }


});

client.on('ready', () => {
    console.log('Bot serving. Setting status...');
    client.user.setStatus('online');

    collectRoleIds();
});

client.login(config.token);

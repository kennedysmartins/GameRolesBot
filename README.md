# Discord Game Roles Bot

A simple bot that gives users roles according to the activity they are doing.

The idea of the bot is simple and useful, when a user starts playing a game, the bot automatically gives the user the role. Once a user stops playing a game, the role is removed.

<a href="https://i.imgur.com/VpkfmWl.gif"><img src="https://i.imgur.com/VpkfmWl.gif" title="Games Role Bot Preview"/></a>




## Requirements

- [Node](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/kennedysmartins/GameRolesBot.git

# Enter into the directory
cd GameRolesBot/

# Install the dependencies
npm install
```

### Configuration



After cloning the project and installing all dependencies, you need to add your Discord API token in the config.json file.

In app.js, there is a part that you must add the game you want to monitor, and put the role ID you created in your discord server.

```bash
"VALORANT": {
        name: "valorant",             //NAME ROLE TOLOWERCASE
        id: '735224527851618396'      //ROLE ID
 },
 ```
 ![alt text](https://github.com/KillerDogs/images/blob/master/copyid.png?raw=true)
 
 ### Intents
 You must manually enable the intents from the Discord Developer site (https://discord.com/developers/applications/). Select your app, and find the "bot" tab on the sidebar. Then you can scroll down until you see this:
 ![alt text](https://github.com/KillerDogs/images/blob/master/botcheck.png?raw=true)
 

### Starting the application

```bash
node app.js

or

run #start.bat
```

## Author

Kennedy Martins
(KillerDogs)

## Support me

<a href="https://www.buymeacoffee.com/kennedymartins" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>


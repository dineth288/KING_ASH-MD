const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/nfX5yZ6/IMG-20241101-WA0114.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello,🖐️ I' am Ash Md I Am Alive Now ⚜🌸👀",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",



};

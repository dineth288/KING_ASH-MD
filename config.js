const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ZDc2VZqA#47tgLjAewJLgEn_GTdnhgIF7_mAnSUPQ4rIrMfCoV5c",
ALIVE_IMG: process.env.ALIVE_IMG || "https://avatars.githubusercontent.com/u/106251140?v=4",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello, I am KING ASH MD i am alive now!",
};

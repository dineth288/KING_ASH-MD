const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "vZNm1KiY#bB_yaiizSp_za_jOE98_h7mrRp_m_j32cmWqz0I4LWI",
ALIVE_IMG: process.env.ALIVE_IMG || "",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello, I ᴀᴍ Aʟɪᴠᴇ ɴᴏᴡ I ᴀᴍ ᴋɪɴɢ ᴀꜱʜ ᴍᴅ 😼✅",
};

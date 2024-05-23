//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "luciferdevilyt007@gmail.com";
global.location = "kolkata,india.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "india/Kolkata";
global.github = process.env.GITHUB || "https://github.com/luciyaaa/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VyaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUayDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fee7af11b4edf8eb7c272.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "916307965352,916307965352";
global.owner = process.env.OWNER_NUMBER || "916307965352";
global.style = process.env.STYLE || "7";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0hLQStROHE0cFprK2VMV0JMQThQOUdCd2VldkQwY3BZNVJjbThPbmhuQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUk0bGwyUzRKTWVaTG5RVmsvRExJeFdGWHpNLzJOZzNic1l1ZTN6SlJHYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSGFhTFgzd0YxK0pIR3RFK2tDK1VyR2pQS0R1V3lST2FVeHZQdmZwNG5jPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmeGZXMTcvTytSenhBcS9ZaVJ2blNUZ20wNDJ5US9mK2FITHFJVXpNWkVvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJEbmVQaXRKYTQ3TlZLWVZpUjJCOEpvQ054dVIyUG45RTl2KzZxQWViV1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBSaktJUWVGMm1YaVpucC9FVVBnOHA4eS9UcVp2K3dpS3Ruc1ErNXpSVjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1BxaHRLa0VCK2RpdEh0bDV1cW9hY0dIdGtVNys4VldpaGJVa2FvV24wND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSjZ1VVVBNCtsMEtLeTZLVjZEdU5wVUlLd0xNc3VnS2dsZWJMUzRIOGtTdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik8way92UjFsL3dSWnpYM2EyRHA2enBPQ3dKbU5mREZxSVZMeTEyOU9sc1NGMDUrcytYbHVCTCtZSkM5azBZZTU0SnhONG5pcU9YT0d6Mm80Vkc2aWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUsImFkdlNlY3JldEtleSI6IjUwNlpXRzJpcGJVN1NhdE5yS1JsaHhMWUpkYkNBQ05HQ2tXTk9Ba3pXNWc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNjI4NzczODg2NDYzN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFQjFCMUY2MTJEMUEwMjUyRDRFMzJDN0Q0QzA2NDZGRSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE2NDg4NTA4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpNUgwSEJ3UFIwbVQ5Z1R6Z3BSbWlnIiwicGhvbmVJZCI6IjRjYmI2OTFjLWZhNjctNDhkYy1hMzUzLWNkOGJhNjMwZDM3NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwSTduV3RIZ0NaVkppUXZhN1pxVHBTbXc2ZUU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGlOYzc2a0lDSkEvakVJN2NSemhTeXBITlF3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1QWUVOOVpTIiwibWUiOnsiaWQiOiI2Mjg3NzM4ODY0NjM3OjE3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuS6l8mi4bSPypzhtIDJtCDCsifigbDDl82cw5cifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01tejlSZ1FySksrc2dZWUNDQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkxUQXlYNm5qMjBxUW5uRGs5NXlhOHZOZHVPb2E5ODJiOUlEQ0E3N1RYaFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ind5VmlxM0k4YTJ2dHJJREZmVkYydXJJWC9JSnFWbjMzdGNPY205TjRZR1lmSUNLSUNYbWpxdzFiWlVZTk9jV1c1WVo1NjJWZHZOTysvRHhrZlk4MUFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJEOGQrNFFJeGYzYklGVnhjQ0ZJWm4vSW9UOFpyMTZ0c0lCcXZheUI3Y1djU05JM2NtdWh0dTk3TVh3Z1NIb0hCbEhzZGFud2Z6UWlobTNHUkRzOFhodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjYyODc3Mzg4NjQ2Mzc6MTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUzB3TWwrcDQ5dEtrSjV3NVBlY212THpYYmpxR3ZmTm0vU0F3Z08rMDE0VSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNjQ4ODUwNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDOXAifQ==|
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

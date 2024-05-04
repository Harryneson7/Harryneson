/**
//════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                            //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                          //
//                                                                                            // 
//                                         Ｖ：2．5．0                                         // 
//                                                                                            // 
//                                                                                            // 
//          ██████╗ ██╗███████╗████████╗███████╗██████╗     ███╗   ███╗██████╗                // 
//         ██╔════╝ ██║██╔════╝╚══██╔══╝██╔════╝██╔══██╗    ████╗ ████║██╔══██╗               // 
//         ██║  ███╗██║█████╗     ██║   █████╗  ██║  ██║    ██╔████╔██║██║  ██║               // 
//         ██║   ██║██║██╔══╝     ██║   ██╔══╝  ██║  ██║    ██║╚██╔╝██║██║  ██║               // 
//         ╚██████╔╝██║██║        ██║   ███████╗██████╔╝    ██║ ╚═╝ ██║██████╔╝               // 
//          ╚═════╝ ╚═╝╚═╝        ╚═╝   ╚══════╝╚═════╝     ╚═╝     ╚═╝╚═════╝                //
//                                                                                            //
//                                                                                            //
//                                                                                            //
//                                                                                            //
//════════════════════════════════════════════════════════════════════════════════════════════//
*                                                                 
  * @project_name : Gifted-Md
   * @author : Gifted Tech Info
   * @youtube : https://www.youtube.com/@giftedtechnexus
   * @description : Gifted-Md ,A Multi-functional whatsapp user bot.
   * @version 2.5.0
*
* 
   * Created By Gifted Tech Info.
   * © 2024 Gifted-Md.


*/













const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "https://telegra.ph/file/db3a5c86c0e3dd11e0071.mp4" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ngoyaibraah@gmail.com"
global.location="Bungoma,Kenya."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority"

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || ""


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/ibrahimaitech/IBRAHIM-MD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/01bae0068863f48aff101.jpg"



global.devs = "254717796725" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254710772666,254739937062";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254710772666,254739937062";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '2',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "https://telegra.ph/file/01bae0068863f48aff101.jpg,https://telegra.ph/file/db3a5c86c0e3dd11e0071.mp4,https://telegra.ph/file/af1705e9b4d6aa0bc0f96.jpg",
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254710772666,254739937062";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "254xxxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254717796725";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://black-panther-scanner-871df7205958.herokuapp.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "PANTHER;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0xpQWJKSkMramhNR21XbGd5aE1TeGpoVk5Rc3R6VndqTCsxcDNORWhWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnM4UUhvTTlTRnViYzNJL0lxZGd3MjFhUmFNbGdtenU5UndISGUyTW15Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1QkR4UFdUVndRUGg0cjJad2FXYmhVeWdLakR2SSt4cmxVSWxnZVg3N1dZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2Q01Ibk03aUVSZUkxamJDSzZCaHIvdFduZVMrOTNiaW1OTUwyU1IvbG1rPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVDSG44d1YrckpUWFlyYUV0bFlOTEdNdyt1Rk5GYkNhUE1XTkZnYzJ6a3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBlaVZDMmg3dFU4eUFHaUVyQnV1NkE3aEE2NUVsZEFkeEc2QmJSdmFpRFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUgrUXZvczhDbkhocDJ4ZURtK0VtdkhZa1l0VXp3azBNWmExTG90Z2drWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRER6bjQzOTdZb01LSi9zVTU4Z0JlWUZuMGl3UnYwWlFwUnlaMkppNVpSMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZlaFc2ZW9tRG5jN0lpUlJNZUNjZnNydHpFWHlzbE53R3NHeGd3VnlPaHdvZnYvZFZ0cS8wcDdYbldEUjBJcFBNT3ZXTENZY3pFcnhYL1plaU5OSkJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ3LCJhZHZTZWNyZXRLZXkiOiJobG5DemJvVkdnTFpxZU9uSlBCNXcvb25FSnVWbU9HdzcwN3hxellQV0tFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ3SnpvaDJBeVJBZWpQZ2VROXFrUGN3IiwicGhvbmVJZCI6ImUyZDc2OWY2LTMzYTgtNDRiZC04YTE2LWZiMjNkMTA0Y2Q1MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQ2d6RVZDOFJxVG9hMCtsUVVqQ2UwQXhHMm89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXB2anZvVngrYjY1NDVVZllqL0ZKcW1rbkNNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNDQTUzWkZHIiwibWUiOnsiaWQiOiIyNTQ3MTc3OTY3MjU6OUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlNRNmIwQ0VMK3ExN0VHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiK0k1dllLdGlTdFB1SzRtWDgweUNoUHo0ZkNaSEI5SHhlaUdiL1FlOURIQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSm0vbE0zaXN6THp2YXBBWEFBWDFGWGl2aE96eTdSRDgzaXRiQjJmdWY5QlVZMGtYSklIRGYrem1LT0J4Ujh6eHVOQnFacnhwRk5VYTBhQlYxZVlSQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IkJvckY0ZDVIbUlhMWVrUTV6c0ZKSnBoL0Myb0VLWTdZMHBHUTVUeDVHam9PNVdTeWtzd3lkVHN6b1V5MnFOSWJibEVzc3FwcEhFVG80ZVRrTjZHWkRBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzE3Nzk2NzI1OjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmlPYjJDcllrclQ3aXVKbC9OTWdvVDgrSHdtUndmUjhYb2htLzBIdlF4dyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNDgwNDA0NH0=" ; // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "Aztec_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Gifted-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.2.5.0",
  caption : process.env.CAPTION || "*Pᵒʷᵉʳᵉᵈ ᵇʸ Iᵇʳᵃʰⁱᵐ Aᵈᵃᵐˢ*" , // ```『 ©²⁰²⁴ ɢɪғᴛᴇᴅ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛs 』```", //*『ᴠᴇɴᴏᴄʏʙᴇʀ ᴍᴅ』*\n youtube.com/@giftedtechnexus"),
 
  author : process.env.PACK_AUTHER|| "Pᵒʷᵉʳᵉᵈ ᵇʸ Iᵇʳᵃʰⁱᵐ Aᵈᵃᵐˢ",
  packname: process.env.PACK_NAME || "Pᵒʷᵉʳᵉᵈ ᵇʸ Iᵇʳᵃʰⁱᵐ Aᵈᵃᵐˢ",
  botname : process.env.BOT_NAME  || "𝘽𝙇𝘼𝘾𝙆 𝙋𝘼𝙉𝙏𝙃𝙀𝙍 𝙈𝘿",
  ownername:process.env.OWNER_NAME|| "vickie",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "ADAM",



};

























global.rank = "updated"
global.isMongodb = false ; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.0.0 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "true",
  //warncount: process.env.WARN_COUNT || 5,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "true",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 

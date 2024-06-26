const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_28_06_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NixcbiAgICAgICAgMzEsXG4gICAgICAgIDM0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMwLFxuICAgICAgICA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDMwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI4LFxuICAgICAgICA2OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDUxLFxuICAgICAgICAzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwLFxuICAgICAgICA2MixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTkyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDksXG4gICAgICAgIDExNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDg2LFxuICAgICAgICAyOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDk4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NyxcbiAgICAgICAgODYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzMCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJsOC9ISlUzU0JPU3ZtT1Rsa0M3emhYeCt6T1F6TDArTC9PYUt1WHlqME1JPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiazN2bTFuNFNaeVdNWEpYSjFaQ1RBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjUzNWY2M2NkLWRjM2MtNDZlNi1hY2Y1LWMxZmFhMmYyYWYyMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTcsXG4gICAgICAxNTEsXG4gICAgICA2MSxcbiAgICAgIDE4LFxuICAgICAgMjA3LFxuICAgICAgNjQsXG4gICAgICAyNyxcbiAgICAgIDIxMCxcbiAgICAgIDkyLFxuICAgICAgODEsXG4gICAgICAxNzYsXG4gICAgICA1NyxcbiAgICAgIDE0OCxcbiAgICAgIDIzOCxcbiAgICAgIDY0LFxuICAgICAgMTgwLFxuICAgICAgMTQ3LFxuICAgICAgMTY3LFxuICAgICAgNzIsXG4gICAgICAyMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc4LFxuICAgICAgNDgsXG4gICAgICAyMTEsXG4gICAgICA3LFxuICAgICAgMTY2LFxuICAgICAgMzIsXG4gICAgICAxNTksXG4gICAgICAxMjQsXG4gICAgICAyMTIsXG4gICAgICAxNzAsXG4gICAgICAyNSxcbiAgICAgIDc3LFxuICAgICAgMTQ0LFxuICAgICAgOTAsXG4gICAgICAyNDEsXG4gICAgICAyNDEsXG4gICAgICAxODgsXG4gICAgICA3NixcbiAgICAgIDc4LFxuICAgICAgMTc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjU5VDY0RlFKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDU0Njk5NTQxOjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTU5NjQ1MTk2NTc1MTQ6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0hpcXRzSEVKV0Q4Yk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjTVFQUHNZK2s3MVhJWnB2UE10RFZacmNycGFra2VId0NmaGpDWjlPU3dnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInpVSlZKN0NuZ2NJMEQ1V0VUOU1Yc3BOcmZEajN1S2txVCtLWk5wbkpPZTM5Y3gzZXhYcDVpSUhqMDdFYkpZNzQxVmJPU1RPUnFuWVZzT3ViYjJGcEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkEzamE2YW9qS040ZW1rN1lyT0xLUUJNV1ZLcnJKZGRVWUdwb2pUQ0FkWHBkRFl4MUJhbE41b1Y3RGZkdCtiWXkxYVl0V29NdGR4ZFBTdko2alJma2dnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNTQ2OTk1NDE6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NDE5MjkwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQURpXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBRGkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCT3FNcUhuTmlFemtiMW00eEUrOS8rRkVEMlgrb0k4d2pHNTlaUjJRR1JnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNzA1ODk3MjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk0MTkyNDExMjJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

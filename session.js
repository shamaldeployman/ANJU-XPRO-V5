//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUpTc0NjWURpenlRTEp1TThIV3p3VTJ1TUZqOE9YRTk0dnZ0S0xsWGtVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVNqd2NnWGJaRUdCNUJxek5BUHJHTnlXSWl6K0dZSVdwUkpINlkrQkx3MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSllzS2FuUDRUVnNxTzFsRVlKK2FMWEt5ekhrY1Rvbm56U2NhRUVxcVdRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoY2QzdUVWWWFXNkZLK1BlVzVTcE5YK0N5SjZ2TUF1MWxkak9TNlJ2b213PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9MZS92L3hwcnpwU0dXL3lDQmNINDd4R21XTFh3UC9SNUpiaW5PUFZzSGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVvWkRjYXU2Ujh6WU5LZHdadWdmbXFpUkhKakZzRERmbDcyM3hTeVRvUVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUI1bDJBSWhGVXozVHNQMHIxQjJneElEdCtOL1M4WXVRb2R5NDVYTVRGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1lHeElyWjJGNTNaUXRwNVJRb0ZkeHlKSzk4YzNVQTBrazQ5YUJ4ditsTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikp6bUhneXlrK3ptRHpRR3c1OW9BZmg5ZmxoOTFkSzl3TkJkWWozekkwMDYvK1RRMTdJZ3pGdTdhc3dXb0JMYVVOQzdjRlp0WE1hT0FpMGdxeTJRamdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzAsImFkdlNlY3JldEtleSI6ImZrTTkwSjc4Sko5Q085aldlaVBuTnJvZW1vVGNTYkhGTndSMHBnOXZaYlk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik5WSGxnSDJhUUlxNEZYdmdBczlMWXciLCJwaG9uZUlkIjoiY2YyMjQ2NTEtODJlMC00MDkxLWI5MDQtZmQwYWFlOTE4MmM1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJndzRMOHBDblBSRElEZGNlcXg1SmEvL2I2ND0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0F4aVhyMzFESXhjb0Z5OGN0Wi9oRkRQUWJrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS25PNDZnR0VQcmpqc01HR0FjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSHEvM0pCOTlvUHVPbkN6NUpNZE9rR2M0R2JwY2FTNWwvNUpSN3lSeHZ6TT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRWdBOVVNL3pGcE03SEV1b1ZPcElyVXl1cXkyLzFISVBtWVhhWlJYWWx5QlRQTmFyNldZUUozYVBXRmNHNXVVR2ZrUEpyN0RMQVJmQ3J6VVRUTS82Qnc9PSIsImRldmljZVNpZ25hdHVyZSI6IjlzeHhZTXkvSy84M1oyQThjMm5iN2xOcFR0R21QT3A3d0NNUlV0UTA0YUsyYTB2QWRocHVVcFNJMDhKT21uYWNtZ1B4Q0Q3endJU05lTXJrc2wyRmpRPT0ifSwibWUiOnsiaWQiOiI5NDc3ODU3OTExMzo2NkBzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijc3MTQxNDcxNzY1MTM6NjZAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc4NTc5MTEzOjY2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlI2djl5UWZmYUQ3anB3cytTVEhUcEJuT0JtNlhHa3VaZitTVWU4a2NiOHoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MTM2NDA5NCwibGFzdFByb3BIYXNoIjoiUFdrNUIifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "+94778579113",
  PASSWORD: 
    process.env.PASSWORD || "wUH@65022",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};

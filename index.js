const qrcode = require('qrcode-terminal');
const { Client, LocalAuth,MessageMedia } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});
const data = require('./person.json')
const cron = require("node-cron");
client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});
var d = new Date();
var m = d.getMonth();
d.setMonth(d.getMonth() - 1);

// If still in same month, set date to last day of 
// previous month
if (d.getMonth() == m) d.setDate(0);
d.setHours(0, 0, 0, 0);

// Get the time value in milliseconds and convert to seconds
console.log(d/1000 | 0);
// https://products.aspose.app/cells/conversion/excel-to-json
client.on('ready', () => {
    console.log('Client is ready!');
    // desplegad()

    // Number where you want to send the message.
//  const number = "+8562054048008"; 8562022881341@c.us
//  const number = "false_120363031615204894";

 // Your message.
// const text = "Hey john";

//  // Getting chatId from the number.
//  // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
// // const chatId = number.substring(1) + "@c.us";
// const chatId = "120363031615204894@g.us";
// const chatId = "120363029573447476@g.us";

// // Sending message.
// client.sendMessage(chatId, text);
  for (let i = 0; i < Object.keys(data).length; i++) {
    const element = data[i];
    // console.log(element.FullNames+".pdf")
    // console.log(element.CodesTel.substring(1)+"@c.us")
    var phoneNumber=element.CodesTel.substring(1)+"@c.us"
    
    // client.sendMessage(phoneNumber,TextMessage)
    // client.sendMessage("85620"+element.tel+"@c.us",element.name+"\n"+element.salary.toLocaleString("en-US")+"\nສະບາຍດີ");
    // client.sendMessage(phoneNumber,"ສະບາຍດີ " + element.FullNames + "ນີ້ແມ່ນເອກະສານໃບແຈ້ງຢອດລວມເງິນເດືອນປະຈຳ"+ d.setMonth(d.getMonth() - 1) + "\nຖ້າມີຂໍ້ມູນໃດບໍ່ຖືກຕ້ອງ ກະລຸນາແຈ້ງຂໍ້ມູນປະໄວ້ ທາງຝ່າຍເຮົາຈະໃຫ້ຄຳຕອບໃນໄວໆນີ້");
    // const attachmentPdf = MessageMedia.fromFilePath("salary/"+element.FullNames+".pdf");
    // client.sendMessage(phoneNumber, attachmentPdf); 
  }
// client.sendMessage("8562022881341@c.us", "Hello");

// cron.schedule("0 0 9 * * *", function () {
//     console.log("---------------------");
//     console.log("running a task every 09:00");
//     const text = "ສະບາຍດີ\nມີເອກະສານໄປເຊັນຢູ່ຫ້ອງການໃໝ່ບໍ?";
//  // Getting chatId from the number.
//  // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
// // const chatId = number.substring(1) + "@c.us";
// // const chatId = "120363031615204894@g.us";
// const chatId = "120363029573447476@g.us";
// // Sending message.
// client.sendMessage(chatId, text);
//   });

//   cron.schedule("0 0 14 * * *", function () {
//     console.log("---------------------");
//     console.log("running a task every 14:00");
//     const text = "ສະບາຍດີ\nມີເອກະສານໄປເຊັນຢູ່ຫ້ອງການໃໝ່ບໍ?";

//  // Getting chatId from the number.
//  // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
// // const chatId = number.substring(1) + "@c.us";
// // const chatId = "120363031615204894@g.us";
// // const chatId = "120363029573447476@g.us";

// // Sending message.
// client.sendMessage(chatId, text);
//   });



});



client.on('message', async message => {

    // console.log(`Message received from ${message.from}: ${message.body}`);
	// if(message.body.includes("ຂໍເພງ") ) {
		
    //         message.reply('ສະບາຍດີ ຂ້ອຍຊື່ຊານເດິ');

	// }
    // if(message.body === "ບໍ່ມີ" || message.body === "ບໍ່" ) {
		
    //         message.reply('ໂອເຄ');

	// }
    // console.log(message)
//     const groupName = 'ກຸ່ມເອົາເອກະສານໄປເຊັນ'
// const chats = await client.getChats()
// const groups = chats
//     .filter(chat => chat.isGroup && chat.name == groupName)
//     .map(chat => {
//         return {
//             id: chat.id._serialized, // ***********-**********@g.us
//             name: chat.name // Your Group Name
//         }
//     })
    // console.log(groups)
});
 

    

 
 

client.initialize();

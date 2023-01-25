const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

const cron = require("node-cron");

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
    // desplegad()
    // Number where you want to send the message.
//  const number = "+8562054048008";
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
cron.schedule("0 0 9 * * *", function () {
    console.log("---------------------");
    console.log("running a task every 09:00");
    const text = "ສະບາຍດີ ນີ້ແມ່ນຂໍ້ຄວາມອັດຕະໂນມັດ/n ມີເອກະສານໄປເຊັນຢູ່ຫ້ອງການໃໝ່ບໍ?";
 // Getting chatId from the number.
 // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
// const chatId = number.substring(1) + "@c.us";
// const chatId = "120363031615204894@g.us";
const chatId = "120363029573447476@g.us";
// Sending message.
client.sendMessage(chatId, text);
  });

  cron.schedule("0 0 14 * * *", function () {
    console.log("---------------------");
    console.log("running a task every 14:00");
    const text = "ສະບາຍດີ ນີ້ແມ່ນຂໍ້ຄວາມອັດຕະໂນມັດ/n ມີເອກະສານໄປເຊັນຢູ່ຫ້ອງການໃໝ່ບໍ?";

 // Getting chatId from the number.
 // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
// const chatId = number.substring(1) + "@c.us";
// const chatId = "120363031615204894@g.us";
const chatId = "120363029573447476@g.us";
// Sending message.
client.sendMessage(chatId, text);
  });
});



client.on('message', async message => {

    // console.log(`Message received from ${message.from}: ${message.body}`);
	if(message.body.includes("ສະບາຍດີ") ) {
		
            message.reply('ສະບາຍດີ ຂ້ອຍຊື່ຊານເດິ');

	}
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

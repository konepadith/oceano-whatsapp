const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

const cron = require("node-cron");

// setInterval(() => {
//     console.log('HELLO GEEK');
//   }, 1000);
 





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
// // Sending message.
// client.sendMessage(chatId, text);
cron.schedule("0 35 9 * * *", function () {
    console.log("---------------------");
    console.log("running a task every 09:25");
    const text = "message 09:35";

 // Getting chatId from the number.
 // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
// const chatId = number.substring(1) + "@c.us";
const chatId = "120363031615204894@g.us";
// Sending message.
client.sendMessage(chatId, text);
  });

  cron.schedule("0 40 9 * * *", function () {
    console.log("---------------------");
    console.log("running a task every 09:25");
    const text = "Message 09:40";

 // Getting chatId from the number.
 // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
// const chatId = number.substring(1) + "@c.us";
const chatId = "120363031615204894@g.us";
// Sending message.
client.sendMessage(chatId, text);
  });



});



client.on('message', async message => {

    // console.log(`Message received from ${message.from}: ${message.body}`);
	// if(message.body == "ແຈ້ງປະຊຸມ") {
		
    //         message.reply('pong');

	// }
    // console.log(message)
    const groupName = 'Bush'
const chats = await client.getChats()
const groups = chats
    .filter(chat => chat.isGroup && chat.name == groupName)
    .map(chat => {
        return {
            id: chat.id._serialized, // ***********-**********@g.us
            name: chat.name // Your Group Name
        }
    })
    console.log(groups)
});
 

    

 
 

client.initialize();

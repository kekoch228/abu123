const Discord = require('discord.js');
const fs = require("fs");
const weather = require('weather-js');
const forEachTimeout = require('foreach-timeout');
const bot = new Discord.Client();
const colors = ["FF0D00","FF2800","FF3D00","FF4F00","FF5F00","FF6C00","FF7800","FF8300","FF8C00","FF9500","FF9E00","FFA500","FFAD00","FFB400","FFBB00","FFC200","FFC900","FFCF00","FFD600","FFDD00","FFE400","FFEB00","FFF200","FFFA00","F7FE00","E5FB00","D5F800","C6F500","B7F200","A8F000","98ED00","87EA00","74E600","5DE100","41DB00","1DD300","00C618","00BB3F","00B358","00AC6B","00A67C","009E8E","028E9B","06799F","0969A2","0C5DA5","0E51A7","1047A9","133CAC","1531AE","1924B1","1F1AB2","2A17B1","3415B0","3C13AF","4512AE","4E10AE","560EAD","600CAC","6A0AAB","7608AA","8506A9","9702A7","AD009F","BC008D","C7007D","D0006E","D8005F","DF004F","E7003E","EF002A","F80012"];
const stop = []
const prefix = "s!";

async function color () {
    forEachTimeout(colors, (color) => {
        bot.guilds.forEach((guild) => {
                if (!stop.includes(guild.id)) {
                let role = guild.roles.find('name', '✬ ›› Радужная');
                if (role && role.editable) 
                    role.setColor(color);
            }  
        })
    }, 1500).then(color);
}
bot.on('ready', () => {
    color();
    bot.user.setPresence({ game: { name: `На ноги Сео`, type: 3 } }).catch();
});


bot.on('message', (message) => {


    
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if(command === "say" && ['248521740945195008', '301020093247127552'].includes(message.author.id)){
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
  }
if(command === "smile" && ['248521740945195008'].includes(message.author.id)){
    message.channel.send(bot.emojis.find("name", args[0]).id)
    }
 if (message.content.startsWith(`${prefix}gay`)){
   message.delete();
   
   let member = message.mentions.members.first();
   if(!member) member = message.member;

   let replies = [`${member} не гей(натурал) `, `${member} на 1% гей 🌈`, `${member} на 2% гей 🌈`, `${member} на 3% гей 🌈`, `${member} на 4% гей 🌈`, `${member} на 5% гей 🌈`, `${member} на 10% гей 🌈`, `${member} на 15% гей 🌈`,  `${member} на 20% гей 🌈`, `${member} на 25% гей 🌈`, `${member} на 30% гей 🌈`, `${member} на 35% гей 🌈`, `${member} на 40% гей 🌈`, `${member} на 45% гей 🌈`, `${member} на 50% гей 🌈`, `${member} на 55% гей 🌈`, `${member} на 60% гей 🌈`, `${member} на 65% гей 🌈`, `${member} на 70% гей 🌈`, `${member} на 75% гей 🌈`, `${member} на 80% гей 🌈`, `${member} на 85% гей 🌈`, `${member} на 90% гей 🌈`, `${member} на 95% гей 🌈`, `${member} на 100% гей 🌈`, `${member} на 1488% гей 🌈`];
   let result = Math.floor((Math.random() * replies.length));
   let question = args.join(" "); 

   let gayembed = new Discord.RichEmbed()

   .setColor('RANDOM')
   .addField("Тест на хея", replies[result])
   .setFooter('►СВЕРХКОНФА | s!gay @user', 'https://media.discordapp.net/attachments/428223641961103360/695322659700998194/FunDZNs_4.png?width=474&height=474')
   .setTimestamp(); 
   return message.channel.send(gayembed)
}
if (message.content.startsWith(`${prefix}ship`)) {

    message.delete();
  
     var bondLevel = Math.floor(Math.random() * 102);
     let user1 = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     let user2 = message.guild.member(message.guild.members.get(args[1]));
     let user3 = message.guild.member(message.guild.members.get(args[2]));
  
     if (bondLevel > 100 ) {
        var ship = 'Идеальная пара ♥ :ok_hand:'
        var bondLevelResults = `♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥`
    } else
    if (bondLevel == 100) {
        var ship = 'Ммм. yже не так плоxо <3 :ok_hand:'
        var bondLevelResults = `♥♥♥♥♥♥♥♥♥♥`
    } else
    if (bondLevel >= 90 && bondLevel < 100) {
        var ship = 'Отличная пара <3'
        var bondLevelResults = `♥♥♥♥♥♥♥♥♥🖤`
    } else
    if (bondLevel >= 80 && bondLevel < 90) {
        var ship = 'Отличная пара <3'
        var bondLevelResults = `♥♥♥♥♥♥♥♥🖤🖤`
    } else
    if (bondLevel >= 75 && bondLevel < 80) {
        var ship = 'Отличная пара <3'
        var bondLevelResults = `♥♥♥♥♥♥♥🖤🖤🖤`
    } else
    if (bondLevel >= 70 && bondLevel < 75) {
        var ship = 'Немного рискованно, но может работать! '
        var bondLevelResults = '♥♥♥♥♥♥♥🖤🖤🖤'
    } else
    if (bondLevel >= 60 && bondLevel < 70) {
        var ship = 'не все потеряно.'
        var bondLevelResults = '♥♥♥♥♥♥🖤🖤🖤🖤'
    } else
    if (bondLevel >= 50 && bondLevel < 60) {
        var ship = '=/. '
        var bondLevelResults = `♥♥♥♥♥🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 40 && bondLevel < 50) {
        var ship = '... '
        var bondLevelResults = `♥♥♥♥🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 30 && bondLevel < 40) {
        var ship = 'Все плохо.'
        var bondLevelResults = `♥♥♥🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 25 && bondLevel < 30) {
        var ship = 'я не бyдy комментировать'
        var bondLevelResults = `♥♥🖤🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 20 && bondLevel < 25) {
        var ship = 'Rip'
        var bondLevelResults = `♥♥🖤🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 10 && bondLevel < 20) {
        var ship = 'Rip'
        var bondLevelResults = `​♥🖤🖤🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 0 && bondLevel < 10) {
        var ship = 'Невозможно...'
        var bondLevelResults = `🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤`
    }
  
      if(!args[1]){
          var bondEmbed = new Discord.RichEmbed()
  
          .setColor('RANDOM')
          .setDescription(`${message.author} & ${args[0]}`)
          .addField("Процент соместимости", `${bondLevel}%`)
          .addField("Любовь..", bondLevelResults)
          .addField("Ответ", ship)
          .setFooter('►СВЕРХКОНФА | s!ship @user', 'https://media.discordapp.net/attachments/428223641961103360/695322659700998194/FunDZNs_4.png?width=474&height=474')
          .setTimestamp(); 
  
  
          return message.channel.send(bondEmbed)
      }
      if(!args[2]){
          var bondEmbed2 = new Discord.RichEmbed()
  
          .setColor('RANDOM')
          .setDescription(`${args[0]} & ${args[1]}`)
          .addField("Процент соместимости", `${bondLevel}%`)
          .addField("Любовь..", bondLevelResults)
          .addField("Ответ", ship)
          .setFooter('►СВЕРХКОНФА | s!ship @user', 'https://media.discordapp.net/attachments/428223641961103360/695322659700998194/FunDZNs_4.png?width=474&height=474')
          .setTimestamp(); 
  
  
          return message.channel.send(bondEmbed2)
      }
  
  
      if(!args[3]) {
  
          var bondEmbed3 = new Discord.RichEmbed()
  
          .setColor('RANDOM')
          .setDescription(`${args[0]} и ${args[1]} & ${args[2]}`)
          .addField("Процент соместимости", `${bondLevel}%`)
          .addField("Любовь..", bondLevelResults)
          .addField("Ответ", ship)
          .setFooter('►СВЕРХКОНФА | s!ship @user', 'https://media.discordapp.net/attachments/428223641961103360/695322659700998194/FunDZNs_4.png?width=474&height=474')
          .setTimestamp(); 
  
  
          return message.channel.send(bondEmbed)
      }
  }
if (message.content.startsWith(`${prefix}help`)){
    
    let helpEmbed = new Discord.RichEmbed()
    .setTitle("**КОМАНДЫ БОТА**")
    .setColor('RANDOM')
    .addField("Спиздить аву:", "`s!avatar <Пользователь>`")
    .addField("Реакции:", "`s!kiss <Пользователь>;`\n`s!slap <Пользователь>;`\n`s!hug <Пользователь>;`\n`s!kill <Пользователь>;`\n`s!suicide;`\n`s!cry;`\n`s!happy.`")
    .addField("Тест на гея:", "`s!gay <Пользователь>`")
    .addField("Совместимость:", "`s!ship <Пользователь>`")
    .addField("Измерить пенис:", "`s!penis <Пользователь>`")
    .addField("Призвать участника:", "`s!summon <Пользователь>`")
   .setFooter('►СВЕРХКОНФА | s!help', 'https://media.discordapp.net/attachments/428223641961103360/695322659700998194/FunDZNs_4.png?width=474&height=474')
   .setTimestamp(); 
    return message.channel.send(helpEmbed)
    }
//-----------------------------------------------------

if (message.content.startsWith(`${prefix}penis`)){

  let user = message.mentions.users.first();
  
  if(!user) user = message.author;
  
  let idarr = user.id.split('');

  let sum = 0;
  for (var i = 0; i < idarr.length; i++){
     sum += Number(idarr[i])
  };

  let x = 0;
  x = sum % 69;

  if(x > 30){
    x = x % 33
    if(x > 30){
      x = 30
    };
  };

  message.channel.send('8'+'='.repeat(x)+'D');
}

if (message.content.startsWith(`${prefix}summon`)){
  message.delete().catch(O_o => {});
    
  let member = message.mentions.members.first(),
  reason = args.slice(1).join(' ');
  
  if(!reason) reason = 'Причина не указана 🤔';
  
  if(member){
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor('RANDOM')
    .addField('Призыватель:', `${message.member} (${message.author.tag})`)
    .addField('Причина призыва:', reason)
    .addField('Канал:', `<#${message.channel.id}>`)
    
    member.send('**Вас призвали на сервере**', embed);
  }
}

if (message.content.startsWith(`${prefix}slap`)) {
    if(!args[0]) return message.channel.send('```s!slap @user\n\nПиздануть пользователя.```');
    let user = message.author;
    let user1 = message.mentions.users.first();
    if (!user1 || user1.id === user.id) {
        user = bot.user;
        user1 = message.author;
    }
        message.channel.send(`Загрузка...`).then(msg => {
        const urls = ['https://i.pinimg.com/originals/fc/e1/2d/fce12d3716f05d56549cc5e05eed5a50.gif', 'https://31.media.tumblr.com/399235995598189fae61fac0e6fbd9aa/tumblr_n5okegPgd91sfyp69o1_500.gif', 'https://cdn.weeb.sh/images/SkZTQkKPZ.gif', 'https://cdn.weeb.sh/images/r1VF-lcyz.gif', 'https://cdn.weeb.sh/images/BkxEo7ytDb.gif', 'https://cdn.weeb.sh/images/ByTR7kFwW.gif', 'https://cdn.weeb.sh/images/ry2tWxcyf.gif', 'https://cdn.weeb.sh/images/SkKn-xc1f.gif', 'https://i.imgur.com/o2SJYUS.gif', 'https://reallifeanime.files.wordpress.com/2014/06/akari-slap.gif', 'https://cdn.weeb.sh/images/BkzyEktv-.gif'];
                let embed = new Discord.RichEmbed()
                    .setDescription(`${user} Пизданул(а) ${user1}.`)
                    .setImage(urls[Math.floor(Math.random() * urls.length)])
                    .setFooter('►СВЕРХКОНФА | z!slap @user', 'https://media.discordapp.net/attachments/428223641961103360/695322659700998194/FunDZNs_4.png?width=474&height=474')
                    .setColor('RANDOM')
                    .setTimestamp(); 
                    msg.edit({embed});   
        });
}
if (message.content.startsWith(`${prefix}kiss`)) {
    if(!args[0]) return message.channel.send('```s!kiss @user\n\n Поцеловать пользователя.```');
    let user = message.author;
    let user1 = message.mentions.users.first();
    if (!user1 || user1.id === user.id) {
        user = bot.user;
        user1 = message.author;
    }
        message.channel.send(`Загрузка...`).then(msg => {
        const urls = ['https://cdn.discordapp.com/attachments/687741386510172184/687743383644668045/kiss_18.gif','https://cdn.discordapp.com/attachments/687741386510172184/687743591988330569/kiss_39.gif','https://cdn.discordapp.com/attachments/687741386510172184/687744159280660674/kiss_23.gif','https://cdn.discordapp.com/attachments/687741386510172184/687744532636368956/kiss_9.gif','https://cdn.discordapp.com/attachments/687741386510172184/687744632800673828/kiss_40.gif','https://cdn.discordapp.com/attachments/687741386510172184/687744798475550783/kiss_59.gif','https://cdn.discordapp.com/attachments/687741386510172184/687744917438464005/kiss_4.gif','https://cdn.discordapp.com/attachments/687741386510172184/687744989845127189/kiss_26.gif','https://cdn.discordapp.com/attachments/687741386510172184/687745115749351510/kiss_58.gif','https://cdn.discordapp.com/attachments/687741386510172184/687745327641526279/kiss_28.gif'];
                let embed = new Discord.RichEmbed()
                    .setDescription(`${user} Поцеловал(а) ${user1}.`)
                    .setImage(urls[Math.floor(Math.random() * urls.length)])
                    .setFooter('►СВЕРХКОНФА | z!kiss @user', 'https://media.discordapp.net/attachments/428223641961103360/695322659700998194/FunDZNs_4.png?width=474&height=474')
                    .setColor('RANDOM')
                    .setTimestamp(); 
                    msg.edit({embed});   
        });
}
if (message.content.startsWith(`${prefix}hug`)) {
    if(!args[0]) return message.channel.send('```s!hug @user\n\nОбнять пользователя.```');
    let user = message.author;
    let user1 = message.mentions.users.first();
    if (!user1 || user1.id === user.id) {
        user = bot.user;
        user1 = message.author;
    }
        message.channel.send(`Загрузка...`).then(msg => {
        const urls = ['https://i.gifer.com/WDf.gif','https://cdn.weeb.sh/images/B11CDkhqM.gif', 'https://cdn.weeb.sh/images/BJCCd_7Pb.gif', 'https://cdn.weeb.sh/images/HkRwnuyuW.gif', 'https://cdn.weeb.sh/images/SJByY_QwW.gif', 'https://cdn.weeb.sh/images/BkBs2uk_b.gif', 'https://cdn.weeb.sh/images/rkYetOXwW.gif', 'https://cdn.weeb.sh/images/Bk5haAocG.gif', 'https://cdn.weeb.sh/images/ry6o__7D-.gif', 'https://cdn.weeb.sh/images/r1bAksn0W.gif', 'https://cdn.weeb.sh/images/ryg2dd7wW.gif', 'https://cdn.weeb.sh/images/rk6PsvOUM.gif'];
                let embed = new Discord.RichEmbed()
                    .setDescription(`${user} Обнял(а) ${user1}.`)
                    .setImage(urls[Math.floor(Math.random() * urls.length)])
                    .setFooter('►СВЕРХКОНФА | s!hug @user', 'https://media.discordapp.net/attachments/428223641961103360/695322659700998194/FunDZNs_4.png?width=474&height=474')
                    .setColor('RANDOM')
                    .setTimestamp(); 
                    msg.edit({embed});
    });
}
if (message.content.startsWith(`${prefix}suicide`)) {
        message.channel.send(`Загрузка...`).then(msg => {
        const urls = ['https://cdn60.picsart.com/182542841000202.gif?r1024x1024', 'https://images-ext-2.discordapp.net/external/PVHDexd-zGtZwfUY_ivDzIR7bDaHDygKZ8XmR9jUOd8/https/i.imgur.com/cp9ZF1A.gif?width=360&height=203', 'https://i.pinimg.com/originals/a5/f1/96/a5f196464ed42f493b95a600099e83b9.gif', 'https://media.giphy.com/media/WsWJZcJoxmLUk/giphy.gif', 'https://media1.tenor.com/images/47892bb88afc132a3afb775988208240/tenor.gif?itemid=5505166', 'https://data.whicdn.com/images/290510883/original.gif', 'https://78.media.tumblr.com/6824d7afa9302623f7d9956ccb68778d/tumblr_mp7y69GFbW1s9t463o1_500.gif', 'https://media1.tenor.com/images/a5db1c26b710b8b834d8265bf97a6c79/tenor.gif?itemid=5091706', 'http://data.whicdn.com/images/107593752/large.gif', 'https://i.pinimg.com/originals/03/43/e6/0343e651eded6629041d165f9c0d7cf7.gif', 'https://zippy.gfycat.com/EquatorialGleefulArabianhorse.gif', 'https://i.imgur.com/ysphsEK.gif', 'https://i.imgur.com/WSioKga.gif', 'https://i.imgur.com/4Bw9XTs.gif', 'https://i.imgur.com/Q0H6LO2.gif'];
                        let user1 = message.author;
                        let embed = new Discord.RichEmbed()
                        .setDescription(`${user1} Сделал суицид.`)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setFooter('►СВЕРХКОНФА | s!suicide', 'https://media.discordapp.net/attachments/428223641961103360/695322659700998194/FunDZNs_4.png?width=474&height=474')
                        .setColor('RANDOM')
                        .setTimestamp(); 
                        msg.edit({embed});
                });
            }
    if (message.content.startsWith(`${prefix}kill`)) {
        if(!args[0]) return message.channel.send('```s!kill @user\n\nУбить пользователя.```');
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = bot.user;
            user1 = message.author;
        }
            message.channel.send(`Загрузка...`).then(msg => {
                const urls = ['http://gifimage.net/wp-content/uploads/2017/09/anime-kill-gif.gif', 'https://cdn.discordapp.com/attachments/438289167525347328/471199251230228510/3.gif', 'https://cdn.discordapp.com/attachments/438280799448727552/471207587254108161/1.gif', 'https://cdn.weeb.sh/images/B1qosktwb.gif', 'https://cdn.weeb.sh/images/B1VnoJFDZ.gif', 'https://cdn.discordapp.com/attachments/438280799448727552/471279823537569794/2.gif', 'https://cdn.discordapp.com/attachments/438280799448727552/471280185996476426/1.gif', 'https://cdn.discordapp.com/attachments/438289167525347328/471280517560664066/3.gif', 'https://cdn.discordapp.com/attachments/438289167525347328/471280729175883796/1.gif'];
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${user} Убил(а) ${user1}.`)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setFooter('►СВЕРХКОНФА | s!kill @user', 'https://media.discordapp.net/attachments/428223641961103360/695322659700998194/FunDZNs_4.png?width=474&height=474')
                        .setColor('RANDOM')
                        .setTimestamp(); 
                        msg.edit({embed});
            });
        }
        if (message.content.startsWith(`${prefix}cry`)) {
                message.channel.send(`Загрузка...`).then(msg => {
                const urls = ['https://i.gifer.com/84OP.gif','https://media2.giphy.com/media/ROF8OQvDmxytW/giphy.gif', 'https://cdn.weeb.sh/images/HyO7mIXvW.gif','https://i.pinimg.com/originals/ce/cd/c0/cecdc0584e01e1fc3cd9dd9f36adfaa9.gif', 'https://i.skyrock.net/3403/91613403/pics/3227155489_1_2_1EU0NjzW.gif', 'http://gif-finder.com/wp-content/uploads/2015/07/Anime-girl-crying.gif', 'https://i.pinimg.com/originals/19/42/07/194207dd9df329dcc66bf0bc07eefe8c.gif', 'https://i.gifer.com/HNHc.gif', 'http://mrwgifs.com/wp-content/uploads/2013/05/Dramatic-Crying-In-Anime-Gif.gif', 'https://i.imgur.com/5qw84ue.gif', 'https://data.whicdn.com/images/307228077/original.gif', 'http://gifimage.net/wp-content/uploads/2017/07/anime-cry-gif-9.gif', 'https://media1.tenor.com/images/d5668af606ca4d0332a6507418cabbce/tenor.gif?itemid=4952249', 'https://media.giphy.com/media/3fmRTfVIKMRiM/giphy.gif', 'https://media1.tenor.com/images/75edc9882e5175f86c2af777ffbb14a6/tenor.gif?itemid=5755232', 'http://gifimage.net/wp-content/uploads/2017/07/anime-cry-gif-28.gif'];
                                let user1 = message.author;
                                let embed = new Discord.RichEmbed()
                                .setDescription(`${user1} Заплакал(а).`)
                                .setImage(urls[Math.floor(Math.random() * urls.length)])
                                .setFooter('►СВЕРХКОНФА | s!cry', 'https://media.discordapp.net/attachments/428223641961103360/695322659700998194/FunDZNs_4.png?width=474&height=474')
                                .setColor('RANDOM')
                                .setTimestamp(); 
                                msg.edit({embed});
                        });
                    }
             if (message.content.startsWith(`${prefix}happy`)) {
                    message.channel.send(`Загрузка...`).then(msg => {
                    const urls = ['https://media.giphy.com/media/3Cm8cxtSHqu6Q/giphy.gif', 'https://thumbs.gfycat.com/BrilliantScaryAmethystsunbird-max-14mb.gif','https://cdn72.picsart.com/186168594000202.gif?r1024x1024', 'https://gifimage.net/wp-content/uploads/2017/10/happy-anime-girl-gif-4.gif', 'https://i.gifer.com/FPU2.gif', 'https://data.whicdn.com/images/174338297/original.gif', 'https://data.whicdn.com/images/220182469/original.gif', 'https://media.giphy.com/media/MgJAxaf1mjn56/giphy.gif', 'https://i.kym-cdn.com/photos/images/original/001/154/308/a68.gif', 'https://media2.giphy.com/media/CNUb51EbTxuRG/giphy.gif'];
                                    let user1 = message.author;
                                    let embed = new Discord.RichEmbed()
                                    .setDescription(`${user1} Счастлив(а).`)
                                    .setImage(urls[Math.floor(Math.random() * urls.length)])
                                    .setFooter('►СВЕРХКОНФА | s!happy', 'https://media.discordapp.net/attachments/428223641961103360/695322659700998194/FunDZNs_4.png?width=474&height=474')
                                    .setColor('RANDOM')
                                    .setTimestamp(); 
                                    msg.edit({embed});
                            });
                        }
    if (message.channel.type !== 'text') return;
    if (message.member.hasPermission('MANAGE_GUILD') || message.member.hasPermission('ADMINISTRATOR') || message.member.id === message.guild.owner.id) {
        if (message.content === 'z!stop') {stop.push(message.guild.id); return message.channel.send('Готово');}
        if (message.content === 'z!start') {stop.splice(stop.indexOf(message.guild.id),1); return message.channel.send('Готово');}

if (message.content.startsWith("бот писать")){
    message.delete();
    //Отвечает за то чтобы бот начал писать в вызваном чате.
    message.channel.startTyping();
}
if (message.content.startsWith("бот не писать")) {
    message.delete();
    //Отвечает за то чтобы бот перестал писать в вызваном чате.
    message.channel.stopTyping();
}
    if (message.content.startsWith(`${prefix}avatar`)) {
        message.delete();
        let user = message.mentions.users.first();
        if (!user) user = message.author;
        let embed = new Discord.RichEmbed()
            .setAuthor(user.username,user.avatarURL)
            .setDescription(`Аватарка ${user}`)
            .setTimestamp()
            .setColor('RANDOM')
            .setImage(user.avatarURL)
            .setFooter('►СВЕРХКОНФА | s!avatar', 'https://media.discordapp.net/attachments/428223641961103360/695322659700998194/FunDZNs_4.png?width=474&height=474')
            .setTimestamp(); 
        message.channel.send({embed});
  }

if (message.content.startsWith(`${prefix}info`)){
    
    let infoEmbed = new Discord.RichEmbed()
    .setTitle("**:blue_heart: Приветствуем тебя, дорогой друг! :blue_heart:**")
    .setColor("397DEE")
	.setThumbnail('https://media.discordapp.net/attachments/428223641961103360/695322659700998194/FunDZNs_4.png?width=474&height=474')
	.setDescription("__**«►СВЕРХКОНФА»**__ является русскоязычным и многофункциональным сервером Discord. Сервер создан с целью создать уютное место с ламповым общением, в котором можно найти друзей, тиммейтов для различных игр или просто хороших собеседников. Администрация всеми силами старается не превратить это место в помойку. Будем очень рады, если пригласите своих друзей! Перед тем как начать общение с участниками нашего сервера, обязательно прочитай правила.\n\n**Приятного времяпровождения!** \n\n _**Беседа в VK -**_ \n **https://vk.me/join/AJQ1d0glkwYj6XP2IXswN6tz** \n\n_**Беседа в Telegram**_ -\n **https://t.me/CBEPXKOHFA**")
   .setFooter('►INFORMATION', 'https://media.discordapp.net/attachments/428223641961103360/695322659700998194/FunDZNs_4.png?width=474&height=474')
   .setTimestamp(); 
    return message.channel.send(infoEmbed)
    }
if (message.content.startsWith(`${prefix}ii`)){
    
    let iiEmbed = new Discord.RichEmbed()
    .setTitle("➡️ ***ПРАВИЛА***")
    .setColor("397DEE")
	.setThumbnail('https://media.discordapp.net/attachments/428223641961103360/695322659700998194/FunDZNs_4.png?width=474&height=474')
	.setDescription("```Markdown
#Общие:```⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀🔷** Запрещено:** 🔷\n🔹Чересчур токсичное и неадекватное поведение.\n🔹Спам и реклама в любой форме.\n🔹Заниматься вымогательством и мошенничеством.\n🔹Распространение чьей-либо личной информации.
     "```Markdown
#Голосовой чат:```⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀🔷 **Запрещено: **🔷\n🔹Создание сторонних шумов и звуков.\n🔹Переключаться между каналами, создавая многочисленные звуки  подключения и отключения.\n🔹Использование программ для изменения голоса, собственная музыка тоже запрещается.\n\n**Если у вас плохой микрофон, то выключайте его или ставьте — Push to Talk.**",
    "```Markdown
#Текстовый чат:```⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀🔷 **Запрещено:** 🔷\n🔹Отправлять шок-контент во всех чатах.\n🔹Отправлять порнографию во всех чатах кроме <#428290347534123008>.\n🔹Злоупотребление упоминаний через @.\n\n**Если вам мешают уведомления, то всё это можно отключить в настройках.**",
     ."```Markdown
#Примечания:```\n**Незнание правил не освобождает вас от ответственности!\nАдминистратор вас забанит, если по его мнению вы приносите вред серверу.\nНе прикрывайтесь недочетами правил, этот список всегда можно дополнить.\nЕсли админ вас о чем-то просит, значит в этом есть необходимость.**")
   .setFooter('►INFORMATION', 'https://media.discordapp.net/attachments/428223641961103360/695322659700998194/FunDZNs_4.png?width=474&height=474')
   .setTimestamp(); 
    return message.channel.send(iiEmbed)
    }
	

    }    
});

bot.login(process.env.BOT_TOKEN);

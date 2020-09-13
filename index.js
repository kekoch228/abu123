const Discord = require('discord.js');
const fs = require("fs");
const bot = new Discord.Client();
const { RichEmbed } = require('discord.js');
const prefix = "s!";


bot.on('message', (message) => {


    
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if(command === "say" && ['248521740945195008', '301020093247127552', '421650839648731136'].includes(message.author.id)){
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

   let replies = [`${member} не гей (натурал) `, `${member} на 1% гей 🌈`, `${member} на 2% гей 🌈`, `${member} на 3% гей 🌈`, `${member} на 4% гей 🌈`, `${member} на 5% гей 🌈`, `${member} на 10% гей 🌈`, `${member} на 15% гей 🌈`,  `${member} на 20% гей 🌈`, `${member} на 25% гей 🌈`, `${member} на 30% гей 🌈`, `${member} на 35% гей 🌈`, `${member} на 40% гей 🌈`, `${member} на 45% гей 🌈`, `${member} на 50% гей 🌈`, `${member} на 55% гей 🌈`, `${member} на 60% гей 🌈`, `${member} на 65% гей 🌈`, `${member} на 70% гей 🌈`, `${member} на 75% гей 🌈`, `${member} на 80% гей 🌈`, `${member} на 85% гей 🌈`, `${member} на 90% гей 🌈`, `${member} на 95% гей 🌈`, `${member} на 100% гей 🌈`, `${member} на 1488% гей 🌈`];
   let result = Math.floor((Math.random() * replies.length));
   let question = args.join(" "); 

   let gayembed = new Discord.RichEmbed()

   .setColor('RANDOM')
   .addField("Тест на гея", replies[result])
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
    .addField("Реакции:", "`s!kiss <Пользователь>;`\n`s!slap <Пользователь>;`\n`s!hug <Пользователь>;`\n`s!kill <Пользователь>;`\n`s!bite <Пользователь>;`\n`s!lick <Пользователь>;`\n`s!poke <Пользователь>;`\n`s!pat <Пользователь>;`\n`s!dance;`\n`s!smug;`\n`s!nom;`\n`s!suicide;`\n`s!cry;`\n`s!happy.`")
    .addField("Тест на гея:", "`s!gay <Пользователь>`")
    .addField("Совместимость:", "`s!ship <Пользователь>`")
    .addField("Измерить пенис:", "`s!penis <Пользователь>`")
    .addField("Призвать участника:", "`s!summon <Пользователь>`")
    .addField("Оформить вкид:",  "`s!vkid`")
    .addField("Прикурить калик:", "`s!kalik`")
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
if (message.content.startsWith(`${prefix}bite`)) {
    if(!args[0]) return message.channel.send('```s!bite @user\n\n Укусить участника.```');
    let user = message.author;
    let user1 = message.mentions.users.first();
    if (!user1 || user1.id === user.id) {
        user = bot.user;
        user1 = message.author;
    }
        message.channel.send(`Загрузка...`).then(msg => {
        const urls = ['https://pa1.narvii.com/6658/90444c213915b4bfcdb21a95d44de80f1366c3a9_hq.gif' ,'https://i.gifer.com/5Tl0.gif' ,'https://pa1.narvii.com/7108/db6928dceb85378d9dd45bd041bade660cf3953ar1-500-280_hq.gif' ,'https://i.gifer.com/7ULB.gif' ];
                let embed = new Discord.RichEmbed()
                    .setDescription(`${user} Укусил(а) ${user1}.`)
                    .setImage(urls[Math.floor(Math.random() * urls.length)])
                    .setFooter('►СВЕРХКОНФА | s!bite @user', 'https://media.discordapp.net/attachments/428223641961103360/695322659700998194/FunDZNs_4.png?width=474&height=474')
                    .setColor('RANDOM')
                    .setTimestamp(); 
                    msg.edit({embed});   
        });
}


if (message.content.startsWith(`${prefix}lick`)) {
    if(!args[0]) return message.channel.send('```s!lick @user\n\n Облизать участника.```');
    let user = message.author;
    let user1 = message.mentions.users.first();
    if (!user1 || user1.id === user.id) {
        user = bot.user;
        user1 = message.author;
    }
        message.channel.send(`Загрузка...`).then(msg => {
        const urls = ['https://pa1.narvii.com/6392/81c1903de9fc160246b3636beed16ab19081dfe7_hq.gif' ,'https://tenor.com/view/bruno-bucciarati-lick-face-anime-jjba-jojos-bizzare-adventures-gif-15031088' ,'https://gifs.gachi.ru/lick/55.gif' ,'https://gifs.gachi.ru/lick/53.gif'];
                let embed = new Discord.RichEmbed()
                    .setDescription(`${user} Облизал(а) ${user1}.`)
                    .setImage(urls[Math.floor(Math.random() * urls.length)])
                    .setFooter('►СВЕРХКОНФА | s!lick @user', 'https://media.discordapp.net/attachments/428223641961103360/695322659700998194/FunDZNs_4.png?width=474&height=474')
                    .setColor('RANDOM')
                    .setTimestamp(); 
                    msg.edit({embed});   
        });
}


if (message.content.startsWith(`${prefix}poke`)) {
    if(!args[0]) return message.channel.send('```s!poke @user\n\n Тыкать в участника.```');
    let user = message.author;
    let user1 = message.mentions.users.first();
    if (!user1 || user1.id === user.id) {
        user = bot.user;
        user1 = message.author;
    }
        message.channel.send(`Загрузка...`).then(msg => {
        const urls = ['https://i.gifer.com/OWba.gif' ,'https://i.gifer.com/JTRm.gif' ,'https://i.gifer.com/S00v.gif' ,'https://i.gifer.com/8xtR.gif'];
                let embed = new Discord.RichEmbed()
                    .setDescription(`${user} Тыкнул(а) ${user1}.`)
                    .setImage(urls[Math.floor(Math.random() * urls.length)])
                    .setFooter('►СВЕРХКОНФА | s!poke @user', 'https://media.discordapp.net/attachments/428223641961103360/695322659700998194/FunDZNs_4.png?width=474&height=474')
                    .setColor('RANDOM')
                    .setTimestamp(); 
                    msg.edit({embed});   
        });
}
if (message.content.startsWith(`${prefix}pat`)) {
    if(!args[0]) return message.channel.send('```s!pat @user\n\nПогладить участника.```');
    let user = message.author;
    let user1 = message.mentions.users.first();
    if (!user1 || user1.id === user.id) {
        user = bot.user;
        user1 = message.author;
    }
        message.channel.send(`Загрузка...`).then(msg => {
        const urls = ['https://pa1.narvii.com/6570/403a1b651aac3b0ab43cea521770c201ab6e2374_hq.gif' ,'https://99px.ru/sstorage/86/2016/12/image_860712161436018147981.gif', 'https://animegif.ru/up/photos/album/oct17/171021_2326.gif', 'https://lh3.googleusercontent.com/proxy/_UPSaqjqWySrAEQ46PwXmSzzJgJXbAvKbLBUSDfnGz004OH8fAhtpsOzNPg1H6fXdOY=s0-d'];
                let embed = new Discord.RichEmbed()
                    .setDescription(`${user} Погладил(а) ${user1}.`)
                    .setImage(urls[Math.floor(Math.random() * urls.length)])
                    .setFooter('►СВЕРХКОНФА | s!pat @user', 'https://media.discordapp.net/attachments/428223641961103360/695322659700998194/FunDZNs_4.png?width=474&height=474')
                    .setColor('RANDOM')
                    .setTimestamp(); 
                    msg.edit({embed});   
        });
}	
	
	
if (message.content.startsWith(`${prefix}dance`)) {
        message.channel.send(`Загрузка...`).then(msg => {
        const urls = ['https://media1.tenor.com/images/8fdcda26512797826631511017a11f93/tenor.gif?itemid=9765182', 'https://thumbs.gfycat.com/SolidAliveGreyhounddog-small.gif' ,'https://i.kym-cdn.com/photos/images/newsfeed/001/115/816/936.gif' ,'https://i.gifer.com/Afdv.gif'];
                        let user1 = message.author;
                        let embed = new Discord.RichEmbed()
                        .setDescription(`${user1} Танцует.`)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setFooter('►СВЕРХКОНФА | s!dance', 'https://media.discordapp.net/attachments/428223641961103360/695322659700998194/FunDZNs_4.png?width=474&height=474')
                        .setColor('RANDOM')
                        .setTimestamp(); 
                        msg.edit({embed});
                });
            }
if (message.content.startsWith(`${prefix}kalik`)) {
        message.channel.send(`Загрузка...`).then(msg => {
        const urls = ['https://cdn.discordapp.com/attachments/428223641961103360/699308836019765288/zQHpfjWrWnY.png' ,'https://cdn.discordapp.com/attachments/428223641961103360/699308869922324520/7xsWyoT-NN4.png' ,'https://cdn.discordapp.com/attachments/428223641961103360/699309197229162506/-HopKjP_I-w.png'];
                        let user1 = message.author;
                        let embed = new Discord.RichEmbed()
                        .setDescription(`${user1} 😋 словил кайфарик от плотной забивочки с двойным яблочком! 🍎🍏 `)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setFooter('►СВЕРХКОНФА | s!kalik', 'https://media.discordapp.net/attachments/428223641961103360/695322659700998194/FunDZNs_4.png?width=474&height=474')
                        .setColor('RANDOM')
                        .setTimestamp(); 
                        msg.edit({embed});
                });
            }
	
if (message.content.startsWith(`${prefix}smug`)) {
        message.channel.send(`Загрузка...`).then(msg => {
        const urls = ['https://i.pinimg.com/originals/70/cc/98/70cc98296034768f8eee9ad124827ba2.gif', 'https://i.pinimg.com/originals/1f/e9/35/1fe93596a8a0f84078b936305b319c55.gif', 'https://steamuserimages-a.akamaihd.net/ugc/822313860013003060/A78582EDF025EE6C1B8563C3402315DEF506D9BF/', 'https://i.kym-cdn.com/photos/images/original/001/087/562/93c.gif'];
                        let user1 = message.author;
                        let embed = new Discord.RichEmbed()
                        .setDescription(`${user1} Ухмыльнулся.`)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setFooter('►СВЕРХКОНФА | s!smug', 'https://media.discordapp.net/attachments/428223641961103360/695322659700998194/FunDZNs_4.png?width=474&height=474')
                        .setColor('RANDOM')
                        .setTimestamp(); 
                        msg.edit({embed});
                });
            }
	
	
	
	
	if (message.content.startsWith(`${prefix}nom`)) {
        message.channel.send(`Загрузка...`).then(msg => {
        const urls = ['https://thumbs.gfycat.com/AnchoredBriskIcterinewarbler-size_restricted.gif', 'https://i.imgur.com/9AGURfF.gif', 'https://s020.radikal.ru/i710/1403/c4/79c1f80cdae7.gif', 'https://data.whicdn.com/images/50502591/original.gif'];
                        let user1 = message.author;
                        let embed = new Discord.RichEmbed()
                        .setDescription(`${user1} Покушал.`)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setFooter('►СВЕРХКОНФА | s!nom', 'https://media.discordapp.net/attachments/428223641961103360/695322659700998194/FunDZNs_4.png?width=474&height=474')
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
if (message.content.startsWith(`${prefix}vkid`)) {
    let user1 = message.author;
	let embed = new Discord.RichEmbed()
     .setDescription(`${user1} Оформил вкид.`)
     .setColor('RANDOM')
     .setImage('https://cdn.discordapp.com/attachments/428252979280478228/717156092861350018/hqdefault.png')
     message.channel.send(embed)
	 }
});

bot.login(process.env.BOT_TOKEN);

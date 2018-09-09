console.log('@someone is here to pick you back up!');

const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const ffmpeg = require('ffmpeg');

var kaomojis = [
    '(* ^ ω ^)',
    '(^^)ｂ',
    'ﾟ･:*｡(ꈍᴗꈍ)ε｀*)~｡*:･ﾟ',
    '(´・ω・｀)',
    '(◕‿◕✿)',
    'ʕ •ᴥ•ʔ',
    '((╬ಠิ﹏ಠิ))',
    '☆*:.｡.o(≧▽≦)o.｡.:*☆',
    '(◕‿◕)',
    '(*≧ω≦*)',
    '(─‿‿─)',
    'ヽ(°〇°)ﾉ',
    '(づ ◕‿◕ )づ',
    'ヽ(∀° )人( °∀)ノ',
    '(ﾉ>ω<)ﾉ :｡･:*:･ﾟ’★,｡･:*:･ﾟ’☆',
    '(ノ°∀°)ノ⌒･*:.｡. .｡.:*･゜ﾟ･*☆',
    'd=（＾o＾）=b　イエイ',
    'ヾ（´▽｀；；）ゝ エヘヘ',
    '＼（*´∇｀*）／ イエィ',
    '＼ （ ＠＾◇ ＾＠）／',
    '(●^ｏ^●）',
    'ヽ　(　　´　　▽　　｀　　)　/ ワーイ',
    '(=￣▽￣=)Ｖ やったね',
    '(✿ ◕‿◕) ᓄ✂╰U╯',
    'ᕕ( ՞ ᗜ ՞ )ᕗ',
    'ლ ( ◕  ᗜ  ◕ ) ლ',
    '(✿ ◕ᗜ◕)━♫.*･｡ﾟ',
    '( ͡° ͜ʖ ͡°)',
    '(ﾉ≧∀≦)ﾉ・‥…━━━★	',
    '╰( ͡° ͜ʖ ͡° )つ──☆*:・ﾟ',
    '(∩｀-´)⊃━☆ﾟ.*･｡ﾟ',
    '(∩,,◕◞౪◟◕)⊃━☆+ ﾟ .+ .ﾟ.ﾟ｡ ﾟ ｡. +ﾟ ｡ﾟ.ﾟ｡☆*｡｡ . ｡ o .｡ﾟ｡.o｡* ｡ .｡',
    '༼つಠ益ಠ༽つ ─=≡ΣO))',

];

var anime = [
    './images/anime/life.gif',
    './images/anime/chichi.gif',
    './images/anime/chainsaw.jpg',
    './images/anime/wth.gif',
    './images/anime/demon.gif',
    './images/anime/squidward.jpg',
    './images/anime/leek.gif',
    './images/anime/corn.gif',
    './images/anime/boxing.gif',
    './images/anime/computer.gif',
    './images/anime/meirl.gif',
    './images/anime/cat.gif',
    './images/anime/missle.gif',
    './images/anime/cake.gif',
    './images/anime/darude.gif',
    './images/anime/bear.gif',
    './images/anime/hmmmm.gif',
    './images/anime/russian.gif',
    './images/anime/alsomeirl.gif',
    './images/anime/ket.gif',
    './images/anime/ihavethepower.png',
    './images/anime/shockedcat.gif',
    './images/anime/popcorn.gif',
    './images/anime/running.gif',
    './images/anime/catgun.gif',
    './images/anime/flycat.gif',
    './images/anime/lungcancer.gif',
    './images/anime/goat.gif',
    './images/anime/ship.gif',
    './images/anime/nom.gif',
    './images/anime/jump.gif',
    './images/anime/yarn.gif',
    './images/anime/lenny.gif',
    './images/anime/cozy.gif',
    './images/anime/whip.gif',
    './images/anime/yay.gif',
    './images/anime/hill.gif',
    './images/anime/dwhill.jpg',
    './images/anime/omae.jpg',
];

var cursed = [
    './images/cursed/baldidance.gif',
    './images/cursed/batobama.jpg',
    './images/cursed/bear.jpg',
    './images/cursed/bigmouth.jpg',
    './images/cursed/bike.jpg',
    './images/cursed/black.jpg',
    './images/cursed/blacktwocat.jpg',
    './images/cursed/cardate.jpg',
    './images/cursed/catassassination.jpg',
    './images/cursed/catparty.jpg',
    './images/cursed/cats.jpg',
    './images/cursed/chinathanos.jpg',
    './images/cursed/cocacola.mp4',
    './images/cursed/coldairballoon.jpg',
    './images/cursed/cow.png',
    './images/cursed/crimes.jpg',
    './images/cursed/cursedgun.mp4',
    './images/cursed/dancingbaby.jpg',
    './images/cursed/deerwrestling.jpg',
    './images/cursed/demonchild.jpg',
    './images/cursed/devito.jpg',
    './images/cursed/elfarrest.jpg',
    './images/cursed/elonmine.mp4',
    './images/cursed/fight.jpg',
    './images/cursed/hair.jpg',
    './images/cursed/highcat.jpg',
    './images/cursed/infinitydiabeties.png',
    './images/cursed/joe.jpg',
    './images/cursed/kermitface.jpg',
    './images/cursed/lemmeget.png',
    './images/cursed/lifeover.jpg',
    './images/cursed/mascots.jpg',
    './images/cursed/massextinction.jpg',
    './images/cursed/mayospray.jpg',
    './images/cursed/obama.jpg',
    './images/cursed/peppapig.jpg',
    './images/cursed/ronald.jpg',
    './images/cursed/smooshdog.jpg',
    './images/cursed/sniperclean.jpg',
    './images/cursed/spideyboy.jpg',
    './images/cursed/spongebob.png',
    './images/cursed/spongeerection.jpg',
    './images/cursed/squidnos.png',
    './images/cursed/sushidog.jpg',
    './images/cursed/thicccat.jpg',
    './images/cursed/thief.jpg',
    './images/cursed/thisissosad.png',
    './images/cursed/toiletred.jpg',
    './images/cursed/trump.jpg',
    './images/cursed/tuba.jpg',
    './images/cursed/villager.png',
    './images/cursed/violindance.mp4',
    './images/cursed/vsauce.png',
    './images/cursed/waldo.jpg',
    './images/cursed/weirdshrek.jpg',
    './images/cursed/winnie.jpg',
    './images/cursed/wth.jpg',
];

var neo = './neopets.mp3'

function play(connection) {
    const dispatcher = connection.playFile(neo);
    dispatcher.on("end", end => {connection.leave();
    });
}



//When mentioned//
bot.on('message', (message) => {

//Command Functions//
function Anime() {
    message.channel.send({files: [anime[Math.floor(Math.random() * anime.length)]]})
}

function Egg() {
	message.channel.send({files:['./images/egg.png']})
}

function Neopets() {
	if (message.member.voiceChannel) {
		if (!message.guild.voiceConnection) message.member.voiceChannel.Join().then(function(connection) {
			play(connection);
		});
		
		} else {
                message.channel.send('Please join a voice channel' + kaomojis[Math.floor(Math.random() * kaomojis.length)]);
				return;
		}
		
	}
	
function Someone() {
            message.channel.send('**' + message.guild.members.random() + ' ' + kaomojis[Math.floor(Math.random() * kaomojis.length)] + '**');
}

function Cursed() {
    message.channel.send({files: [cursed[Math.floor(Math.random() * cursed.length)]]})
}

if (message.author.bot) return;

if (message.isMentioned(bot.user)) {
		if (message.content.includes('anime')) {
		Anime();
	}
	if (message.content.includes('egg')) {
		Egg();
	}
		if (message.content.includes('neopets')) {
		Neopets();
	}
	
	if (message.content.includes('random')) {
		Someone();
    }
    
	if (message.content.includes('cursed')) {
		Cursed();
	}

};
});



bot.login(process.env.token);

// 部署完成后在网址后面加上这个，获取订阅器默认节点，/auto

let mytoken= ['rx'];//快速订阅访问入口, 留空则不启动快速订阅

// 设置优选地址，不带端口号默认443，TLS订阅生成
let addresses = [
	'rxrx.cf.090227.xyz#自改域名',
];

// 设置优选地址api接口
let addressesapi = [
	'https://raw.githubusercontent.com/rxsweet/cfip/main/ipALL.txt',//自用扫描IP
	//'https://raw.githubusercontent.com/rxsweet/CM_Vmess/main/goodDomain.txt',//自用域名
	//'https://raw.githubusercontent.com/rxsweet/CM_Vmess/main/addressesapi.txt',//自用更新ip
	//'https://raw.githubusercontent.com/cmliu/WorkerVless2sub/main/addressesapi.txt', //可参考内容格式 自行搭建。
	//'https://raw.githubusercontent.com/cmliu/WorkerVless2sub/main/addressesipv6api.txt', //IPv6优选内容格式 自行搭建。
];

// 设置优选地址，不带端口号默认80，noTLS订阅生成
let addressesnotls = [
	'cloudflare.cfgo.cc#域名',
];

// 设置优选noTLS地址api接口
let addressesnotlsapi = [
	'https://raw.githubusercontent.com/rxsweet/CM_Vmess/main/addressesapi.txt',//自用ip地址
	//'https://raw.githubusercontent.com/cmliu/CFcdnVmess2sub/main/addressesapi.txt',
];

let DLS = 8;//速度下限
let addressescsv = [
	//'https://raw.githubusercontent.com/cmliu/WorkerVless2sub/main/addressescsv.csv', //iptest测速结果文件。
];

let subconverter = "SUBAPI.fxxk.dedyn.io"; //在线订阅转换后端，目前使用肥羊的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/rxsweet/all/main/githubTools/cfClashConfig_cn.ini"; //订阅配置文件
//let subconfig = https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_Full_MultiMode.ini"; //原订阅配置文件
let noTLS = 'true'; // false
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let vmessLinks = [ //本地CFcdnVmess节点池
	//'vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIk5MIiwNCiAgImFkZCI6ICJjZi4wOTAyMjcueHl6IiwNCiAgInBvcnQiOiAiNDQzIiwNCiAgImlkIjogIjA2MTk1YjViLTM4MTUtNGEwNy05NmY3LTQ3ZWVmYmIxYjE0MyIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAidXJueGV3enZoLnNpdGUiLA0KICAicGF0aCI6ICIva3dobXZ3cyIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICJ1cm54ZXd6dmguc2l0ZSIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9',
];
//let vmessLinksURL = 'https://raw.githubusercontent.com/cmliu/CFcdnVmess2sub/main/vmesslinks';//CFcdnVmess节点池URL
let vmessLinksURL = 'https://raw.githubusercontent.com/rxsweet/CM_Vmess/main/vmesslinks';//自用节点
let proxyhosts = [//本地代理域名池
	//'ppfv2tl9veojd-maillazy.pages.dev',
];
let proxyhostsURL = 'https://raw.githubusercontent.com/cmliu/CFcdnVmess2sub/main/proxyhosts';//在线代理域名池URL
let FileName = 'rxVmess';
let SUBUpdateTime = 6; 
let total = 99;//PB
//let timestamp = now;
let timestamp = 4102329600000;//2099-12-31
const regex = /^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\[.*\]):?(\d+)?#?(.*)?$/;
// 虚假uuid和hostname，用于发送给配置生成服务
let fakeUserID ;
let fakeHostName ;

/*Obfuscate-rx*/
const _0xa00c3c=_0x4505;(function(_0x3067a2,_0x53c95c){const _0x756e90=_0x4505,_0x27c8ff=_0x3067a2();while(!![]){try{const _0x2b4aa1=-parseInt(_0x756e90(0xff))/0x1+-parseInt(_0x756e90(0xe1))/0x2+parseInt(_0x756e90(0xcd))/0x3+parseInt(_0x756e90(0x103))/0x4*(-parseInt(_0x756e90(0xbe))/0x5)+-parseInt(_0x756e90(0xf0))/0x6*(-parseInt(_0x756e90(0xc0))/0x7)+-parseInt(_0x756e90(0xe8))/0x8+-parseInt(_0x756e90(0xd4))/0x9*(-parseInt(_0x756e90(0xa6))/0xa);if(_0x2b4aa1===_0x53c95c)break;else _0x27c8ff['push'](_0x27c8ff['shift']());}catch(_0x1d91d1){_0x27c8ff['push'](_0x27c8ff['shift']());}}}(_0xdfd7,0x4fde2));function _0xdfd7(){const _0x178209=['false','\x0a<tg-spoiler>入口:\x20','9396171vKhImI','text/html;\x20charset=UTF-8','search','city','http://ip-api.com/json/','DLS','TLS','\x0a\x09<!DOCTYPE\x20html>\x0a\x09<html>\x0a\x09<head>\x0a\x09<title>Welcome\x20to\x20nginx!</title>\x0a\x09<style>\x0a\x09\x09body\x20{\x0a\x09\x09\x09width:\x2035em;\x0a\x09\x09\x09margin:\x200\x20auto;\x0a\x09\x09\x09font-family:\x20Tahoma,\x20Verdana,\x20Arial,\x20sans-serif;\x0a\x09\x09}\x0a\x09</style>\x0a\x09</head>\x0a\x09<body>\x0a\x09<h1>Welcome\x20to\x20nginx!</h1>\x0a\x09<p>If\x20you\x20see\x20this\x20page,\x20the\x20nginx\x20web\x20server\x20is\x20successfully\x20installed\x20and\x0a\x09working.\x20Further\x20configuration\x20is\x20required.</p>\x0a\x09\x0a\x09<p>For\x20online\x20documentation\x20and\x20support\x20please\x20refer\x20to\x0a\x09<a\x20href=\x22http://nginx.org/\x22>nginx.org</a>.<br/>\x0a\x09Commercial\x20support\x20is\x20available\x20at\x0a\x09<a\x20href=\x22http://nginx.com/\x22>nginx.com</a>.</p>\x0a\x09\x0a\x09<p><em>Thank\x20you\x20for\x20using\x20nginx.</em></p>\x0a\x09</body>\x0a\x09</html>\x0a\x09','SUBCONFIG','&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true','CF-Connecting-IP','subconverter','toLowerCase','758748rCOlKE','digest','\x22,\x0a\x22add\x22:\x20\x22','toString','replace','trim','auto','751072wqXitn',';\x20total=','country','text/html,application/xhtml+xml,application/xml;','User-Agent','?lang=zh-CN','security','random','11022YnnLXh','NOTLS','\x22,\x0a\x22path\x22:\x20\x22','notls','\x0a<tg-spoiler>城市:\x20','host','path',';\x20download=','sni','\x22,\x0a\x22id\x22:\x20\x22','URL','\x0aIP:\x20','/sub?target=clash&url=','\x22,\x0a\x22aid\x22:\x20\x22','ADDAPI','570282srCKUh','then','URL302','origin','1124QBZjhm','split','get','toUpperCase','#VMess订阅','\x22\x0a}','headers','.xyz','upload=','join','pathname','searchParams','some','filter','subtle','?cc=[vmess\x20name]&host=[your\x20host]&uuid=[your\x20uuid]&path=[your\x20path]\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09https://github.com/cmliu/CFcdnVmess2sub\x0a\x09\x09\x09\x09','alterid','slice','attachment;\x20filename*=utf-8\x27\x27','org','text','UA:\x20','map','port','from','LINK','TRUE','\x0a组织:\x20','signal','Error\x20fetching\x20subconverterUrl:\x20','charAt','&insert=false&config=','ADDCSV','vmess://','sing-box','text/plain;\x20charset=utf-8','floor','getTime','clash','length','cf-workers-sub','reject','concat','null','test','singbox','/sub','push','10WhwjCV','padStart','/?ed=2560','json','fulfilled','true','redirect','TOKEN','https://','\x22,\x0a\x22net\x22:\x20\x22ws\x22,\x0a\x22type\x22:\x20\x22none\x22,\x0a\x22host\x22:\x20\x22','\x0aASN:\x20','trycloudflare','ADDNOTLS','\x22,\x0a\x22port\x22:\x20\x22','statusText','match','\x0a\x09\x09\x09缺少必填参数：host\x20和\x20uuid\x0a\x09\x09\x09Missing\x20required\x20parameters:\x20host\x20and\x20uuid\x0a\x09\x09\x09پارامترهای\x20ضروری\x20وارد\x20نشده:\x20هاست\x20و\x20یوآی‌دی\x0a\x09\x09\x09\x0a\x09\x09\x09','nekobox','startsWith','twitter','status','MD5','ceil','获取地址时出错:','6815ZTyNnd',';\x20filename=','2065cVqKvZ','获取CSV地址时出错:','encode','includes',';\x20expire=','indexOf','SUBNAME','format','cmliu/WorkerVless2sub','https://api.telegram.org/bot','\x22,\x0a\x22tls\x22:\x20\x22\x22,\x0a\x22sni\x22:\x20\x22\x22\x0a}','ADDNOTLSAPI','{\x0a\x22v\x22:\x20\x222\x22,\x0a\x22ps\x22:\x20\x22','503241oDlrKn','abort','telegram','error','href'];_0xdfd7=function(){return _0x178209;};return _0xdfd7();}function utf8ToBase64(_0x5d68c1){return btoa(unescape(encodeURIComponent(_0x5d68c1)));}async function sendMessage(_0x134085,_0x10e98f,_0x140712=''){const _0x141c4d=_0x4505;if(BotToken!==''&&ChatID!==''){let _0x40299e='';const _0x4d2346=await fetch(_0x141c4d(0xd8)+_0x10e98f+'?lang=zh-CN');if(_0x4d2346[_0x141c4d(0xba)]==0xc8){const _0x5dea42=await _0x4d2346[_0x141c4d(0xa9)]();_0x40299e=_0x134085+_0x141c4d(0xfb)+_0x10e98f+'\x0a国家:\x20'+_0x5dea42[_0x141c4d(0xea)]+_0x141c4d(0xf4)+_0x5dea42['city']+_0x141c4d(0x91)+_0x5dea42[_0x141c4d(0x89)]+_0x141c4d(0xb0)+_0x5dea42['as']+'\x0a'+_0x140712;}else _0x40299e=_0x134085+'\x0aIP:\x20'+_0x10e98f+'\x0a<tg-spoiler>'+_0x140712;let _0x1a64a0=_0x141c4d(0xc9)+BotToken+'/sendMessage?chat_id='+ChatID+'&parse_mode=HTML&text='+encodeURIComponent(_0x40299e);return fetch(_0x1a64a0,{'method':_0x141c4d(0x105),'headers':{'Accept':_0x141c4d(0xeb),'Accept-Encoding':'gzip,\x20deflate,\x20br','User-Agent':'Mozilla/5.0\x20Chrome/90.0.4430.72'}});}}let MamaJustKilledAMan=[_0xa00c3c(0xcf),_0xa00c3c(0xb9),'miaoko'];async function getAddressesapi(_0x478b24){const _0x367115=_0xa00c3c;if(!_0x478b24||_0x478b24['length']===0x0)return[];let _0x462965='';const _0x3c95bd=new AbortController(),_0x3f779b=setTimeout(()=>{const _0x3f150c=_0x4505;_0x3c95bd[_0x3f150c(0xce)]();},0x7d0);try{const _0x4c5237=await Promise['allSettled'](_0x478b24[_0x367115(0x8c)](_0x2c7374=>fetch(_0x2c7374,{'method':_0x367115(0x105),'headers':{'Accept':_0x367115(0xeb),'User-Agent':_0x367115(0xc8)},'signal':_0x3c95bd[_0x367115(0x92)]})[_0x367115(0x100)](_0x510ea0=>_0x510ea0['ok']?_0x510ea0['text']():Promise[_0x367115(0x9f)]())));for(const _0x40d5fb of _0x4c5237){if(_0x40d5fb[_0x367115(0xba)]===_0x367115(0xaa)){const _0x2d153c=await _0x40d5fb['value'];_0x462965+=_0x2d153c+'\x0a';}}}catch(_0x2aceea){console[_0x367115(0xd0)](_0x2aceea);}finally{clearTimeout(_0x3f779b);}const _0x49ac26=await ADD(_0x462965);return _0x49ac26;}async function getAddressescsv(_0x5c1895){const _0x13fb96=_0xa00c3c;if(!addressescsv||addressescsv[_0x13fb96(0x9d)]===0x0)return[];let _0x1c77e5=[];for(const _0x2f0d30 of addressescsv){try{const _0xfbbccd=await fetch(_0x2f0d30);if(!_0xfbbccd['ok']){console[_0x13fb96(0xd0)](_0x13fb96(0xc1),_0xfbbccd['status'],_0xfbbccd[_0x13fb96(0xb4)]);continue;}const _0x217463=await _0xfbbccd['text']();let _0x1bced1;_0x217463['includes']('\x0d\x0a')?_0x1bced1=_0x217463['split']('\x0d\x0a'):_0x1bced1=_0x217463[_0x13fb96(0x104)]('\x0a');const _0x22bb80=_0x1bced1[0x0][_0x13fb96(0x104)](','),_0x1d3abb=_0x22bb80[_0x13fb96(0xc5)](_0x13fb96(0xda)),_0x49f868=0x0,_0x4b183e=0x1,_0x445c23=_0x1d3abb+0x1;if(_0x1d3abb===-0x1){console['error']('CSV文件缺少必需的字段');continue;}for(let _0x30d25d=0x1;_0x30d25d<_0x1bced1[_0x13fb96(0x9d)];_0x30d25d++){const _0x5d7369=_0x1bced1[_0x30d25d]['split'](','),_0x1630b5=_0x5d7369['length']-0x1;if(_0x5d7369[_0x1d3abb][_0x13fb96(0x106)]()===_0x5c1895&&parseFloat(_0x5d7369[_0x1630b5])>DLS){const _0x34e179=_0x5d7369[_0x49f868],_0x4f3cd5=_0x5d7369[_0x4b183e],_0x325ee3=_0x5d7369[_0x445c23],_0x28d678=_0x34e179+':'+_0x4f3cd5+'#'+_0x325ee3;_0x1c77e5[_0x13fb96(0xa5)](_0x28d678);}}}catch(_0x199305){console[_0x13fb96(0xd0)](_0x13fb96(0xc1),_0x199305);continue;}}return _0x1c77e5;}async function ADD(_0x3ca751){const _0x492d04=_0xa00c3c;var _0xe28ccc=_0x3ca751['replace'](/[	|"'\r\n]+/g,',')['replace'](/,+/g,',');if(_0xe28ccc[_0x492d04(0x94)](0x0)==',')_0xe28ccc=_0xe28ccc[_0x492d04(0x87)](0x1);if(_0xe28ccc[_0x492d04(0x94)](_0xe28ccc[_0x492d04(0x9d)]-0x1)==',')_0xe28ccc=_0xe28ccc['slice'](0x0,_0xe28ccc[_0x492d04(0x9d)]-0x1);const _0x4a7dea=_0xe28ccc[_0x492d04(0x104)](',');return _0x4a7dea;}async function nginx(){const _0x490f2d=_0xa00c3c,_0x5a9d8a=_0x490f2d(0xdb);return _0x5a9d8a;}export default{async 'fetch'(_0x316233,_0x2f8b8e){const _0x93a3c3=_0xa00c3c;if(_0x2f8b8e[_0x93a3c3(0xad)])mytoken=await ADD(_0x2f8b8e['TOKEN']);BotToken=_0x2f8b8e['TGTOKEN']||BotToken,ChatID=_0x2f8b8e['TGID']||ChatID,subconverter=_0x2f8b8e['SUBAPI']||subconverter,subconfig=_0x2f8b8e[_0x93a3c3(0xdc)]||subconfig,FileName=_0x2f8b8e[_0x93a3c3(0xc6)]||FileName;const _0x1eb3f0=_0x316233[_0x93a3c3(0x109)][_0x93a3c3(0x105)](_0x93a3c3(0xec))||_0x93a3c3(0xa1),_0x32b42d=_0x1eb3f0[_0x93a3c3(0xe0)](),_0x3646d0=new URL(_0x316233['url']),_0x12ebe7=_0x3646d0['searchParams']['get'](_0x93a3c3(0xc7))?_0x3646d0[_0x93a3c3(0x81)][_0x93a3c3(0x105)]('format')[_0x93a3c3(0xe0)]():_0x93a3c3(0xa1);let _0x1f988c='',_0x595f60='',_0xaab1e0='',_0x226673='',_0x28f9e6='',_0xdf040e='',_0x573d38='',_0x51768a=Math['floor']((timestamp-Date['now']())/timestamp*0x63*0x10000000000*0x400/0x2);if(_0x2f8b8e['UA'])MamaJustKilledAMan=MamaJustKilledAMan[_0x93a3c3(0xa0)](await ADD(_0x2f8b8e['UA']));const _0x325339=new Date(),_0x3a420f=await MD5MD5(Math[_0x93a3c3(0xbc)](_0x325339[_0x93a3c3(0x9b)]()));fakeUserID=_0x3a420f[_0x93a3c3(0x87)](0x0,0x8)+'-'+_0x3a420f[_0x93a3c3(0x87)](0x8,0xc)+'-'+_0x3a420f[_0x93a3c3(0x87)](0xc,0x10)+'-'+_0x3a420f[_0x93a3c3(0x87)](0x10,0x14)+'-'+_0x3a420f[_0x93a3c3(0x87)](0x14),fakeHostName=_0x3a420f[_0x93a3c3(0x87)](0x6,0x9)+'.'+_0x3a420f[_0x93a3c3(0x87)](0xd,0x13)+_0x93a3c3(0x7d),total=total*0x10000000000*0x400;let _0x17632c=Math[_0x93a3c3(0x9a)](timestamp/0x3e8);if(_0x2f8b8e[_0x93a3c3(0x8f)])vmessLinks=await ADD(_0x2f8b8e['LINK']);else{if(_0x2f8b8e['VMESS'])vmessLinks=await ADD(_0x2f8b8e['VMESS']);}if(_0x2f8b8e['ADD'])addresses=await ADD(_0x2f8b8e['ADD']);if(_0x2f8b8e['ADDAPI'])addressesapi=await ADD(_0x2f8b8e[_0x93a3c3(0xfe)]);if(_0x2f8b8e[_0x93a3c3(0xb2)])addressesnotls=await ADD(_0x2f8b8e['ADDNOTLS']);if(_0x2f8b8e[_0x93a3c3(0xcb)])addressesnotlsapi=await ADD(_0x2f8b8e[_0x93a3c3(0xcb)]);if(_0x2f8b8e[_0x93a3c3(0x96)])addressescsv=await ADD(_0x2f8b8e[_0x93a3c3(0x96)]);DLS=_0x2f8b8e[_0x93a3c3(0xd9)]||DLS;if(mytoken[_0x93a3c3(0x9d)]>0x0&&mytoken[_0x93a3c3(0x82)](_0x315606=>_0x3646d0[_0x93a3c3(0x80)][_0x93a3c3(0xc3)](_0x315606))){if(vmessLinksURL&&vmessLinks[_0x93a3c3(0x9d)]==0x0)try{const _0x44be06=await fetch(vmessLinksURL);if(!_0x44be06['ok']){console[_0x93a3c3(0xd0)]('获取地址时出错:',_0x44be06[_0x93a3c3(0xba)],_0x44be06['statusText']);return;}const _0x173eb4=await _0x44be06['text'](),_0x20c563=_0x173eb4['split']('\x0a'),_0x12cadd=_0x20c563[_0x93a3c3(0x83)](_0x378bfb=>_0x378bfb[_0x93a3c3(0xb8)](_0x93a3c3(0x97)));vmessLinks=vmessLinks[_0x93a3c3(0xa0)](_0x12cadd);}catch(_0x42b5b7){console[_0x93a3c3(0xd0)]('获取地址时出错:',_0x42b5b7);}const _0x358464=[...new Set(vmessLinks)],_0xfb67d9=_0x358464[Math['floor'](Math['random']()*_0x358464[_0x93a3c3(0x9d)])];noTLS=_0x93a3c3(0xd2);const _0x3542d3=_0xfb67d9[_0x93a3c3(0x87)](0x8),_0x290e39=atob(_0x3542d3),_0x33505b=JSON['parse'](_0x290e39);_0xaab1e0=_0x33505b['id'],_0x28f9e6=_0x33505b['aid'],_0xdf040e=_0x33505b['scy'];const _0x49ba0a=/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;_0x1f988c='未知';let _0x18a148=_0x93a3c3(0xd8)+_0x33505b[_0x93a3c3(0xf5)]+_0x93a3c3(0xed);if(_0x49ba0a[_0x93a3c3(0xa2)](_0x33505b['ps']))_0x18a148=_0x93a3c3(0xd8)+_0x33505b['ps']+'?lang=zh-CN';const _0x5f1086=await fetch(_0x18a148);if(_0x5f1086[_0x93a3c3(0xba)]==0xc8){const _0x1a206d=await _0x5f1086['json']();_0x1f988c=_0x1a206d['country']+'\x20'+_0x1a206d[_0x93a3c3(0xd7)];}if(proxyhostsURL)try{const _0x135dbf=await fetch(proxyhostsURL);if(!_0x135dbf['ok']){console[_0x93a3c3(0xd0)]('获取地址时出错:',_0x135dbf[_0x93a3c3(0xba)],_0x135dbf['statusText']);return;}const _0x45fcd8=await _0x135dbf[_0x93a3c3(0x8a)](),_0x18c7a1=_0x45fcd8[_0x93a3c3(0x104)]('\x0a'),_0x3380b7=_0x18c7a1['filter'](_0x4a3b3e=>_0x4a3b3e[_0x93a3c3(0xe6)]()!=='');proxyhosts=proxyhosts[_0x93a3c3(0xa0)](_0x3380b7);}catch(_0x5774c1){console[_0x93a3c3(0xd0)](_0x93a3c3(0xbd),_0x5774c1);}const _0x4a5f20=[...new Set(proxyhosts)];_0x4a5f20[_0x93a3c3(0x9d)]>0x0?(_0x226673='/'+_0x33505b[_0x93a3c3(0xf5)]+':'+_0x33505b[_0x93a3c3(0x8d)]+_0x33505b[_0x93a3c3(0xf6)],_0x595f60=_0x4a5f20[Math[_0x93a3c3(0x9a)](Math[_0x93a3c3(0xef)]()*_0x4a5f20[_0x93a3c3(0x9d)])],_0x573d38=_0x595f60):(_0x226673=_0x33505b[_0x93a3c3(0xf6)],_0x595f60=_0x33505b[_0x93a3c3(0xf5)],_0x573d38=_0x595f60),await sendMessage(_0x93a3c3(0x107),_0x316233['headers'][_0x93a3c3(0x105)](_0x93a3c3(0xde)),_0x93a3c3(0x8b)+_0x1eb3f0+'</tg-spoiler>\x0a域名:\x20'+_0x3646d0['hostname']+_0x93a3c3(0xd3)+(_0x3646d0['pathname']+_0x3646d0[_0x93a3c3(0xd6)])+'</tg-spoiler>');}else{_0x595f60=_0x3646d0[_0x93a3c3(0x81)][_0x93a3c3(0x105)](_0x93a3c3(0xf5)),_0xaab1e0=_0x3646d0[_0x93a3c3(0x81)][_0x93a3c3(0x105)]('uuid'),_0x226673=_0x3646d0[_0x93a3c3(0x81)][_0x93a3c3(0x105)](_0x93a3c3(0xf6))||_0x93a3c3(0xa8),_0x226673=_0x226673[0x0]==='/'?_0x226673:'/'+_0x226673,_0x28f9e6=_0x3646d0[_0x93a3c3(0x81)][_0x93a3c3(0x105)](_0x93a3c3(0x86))||'0',_0xdf040e=_0x3646d0['searchParams']['get'](_0x93a3c3(0xee))||_0x93a3c3(0xe7),_0x573d38=_0x3646d0[_0x93a3c3(0x81)]['get'](_0x93a3c3(0xf8))||_0x595f60,_0x1f988c=_0x3646d0[_0x93a3c3(0x81)]['get']('cc')||'未知';const _0x4c088f=_0x3646d0['pathname'][_0x93a3c3(0xe5)](/^\/|\/$/g,'');if(_0x4c088f&&!_0x3646d0[_0x93a3c3(0x80)][_0x93a3c3(0xc3)](_0x93a3c3(0xa4))){const _0x157e94=new URL('https://'+_0x4c088f+_0x3646d0[_0x93a3c3(0xd6)]);return fetch(new Request(_0x157e94,_0x316233));}else{if(!_0x3646d0[_0x93a3c3(0x80)][_0x93a3c3(0xc3)](_0x93a3c3(0xa4))){const _0x324264=_0x2f8b8e[_0x93a3c3(0x101)]?_0x93a3c3(0x101):_0x2f8b8e[_0x93a3c3(0xfa)]?_0x93a3c3(0xfa):null;if(_0x324264){const _0x18579b=await ADD(_0x2f8b8e[_0x324264]),_0x5b2e84=_0x18579b[Math[_0x93a3c3(0x9a)](Math[_0x93a3c3(0xef)]()*_0x18579b[_0x93a3c3(0x9d)])];return _0x324264==='URL302'?Response[_0x93a3c3(0xac)](_0x5b2e84,0x12e):fetch(new Request(_0x5b2e84,_0x316233));}return new Response(await nginx(),{'headers':{'Content-Type':_0x93a3c3(0xd5)}});}}if(_0x1f988c=='未知'){let _0x164e19=_0x93a3c3(0xd8)+_0x573d38+_0x93a3c3(0xed);const _0x133372=await fetch(_0x164e19);if(_0x133372[_0x93a3c3(0xba)]==0xc8){const _0x2b20b9=await _0x133372['json']();_0x1f988c=_0x2b20b9[_0x93a3c3(0xea)]+'\x20'+_0x2b20b9['city'];}}if(!_0x595f60||!_0xaab1e0){const _0x5d5c03=_0x3646d0[_0x93a3c3(0x102)]+_0x3646d0[_0x93a3c3(0x80)],_0x381307=_0x93a3c3(0xb6)+_0x5d5c03+_0x93a3c3(0x85);return new Response(_0x381307,{'status':0x190,'headers':{'content-type':_0x93a3c3(0x99)}});}}if(_0x595f60['toLowerCase']()[_0x93a3c3(0xc3)](_0x93a3c3(0xf3))||_0x595f60[_0x93a3c3(0xe0)]()['includes'](_0x93a3c3(0xb1)))noTLS=_0x93a3c3(0xab);noTLS=_0x2f8b8e[_0x93a3c3(0xf1)]||noTLS;let _0xbe207e=generateFakeInfo(_0x3646d0[_0x93a3c3(0xd1)],_0xaab1e0,_0x595f60);if(!_0x32b42d[_0x93a3c3(0xc3)](_0x93a3c3(0xdf))&&MamaJustKilledAMan[_0x93a3c3(0x82)](_0x534e15=>_0x1eb3f0[_0x93a3c3(0xe0)]()[_0x93a3c3(0xc3)](_0x534e15))&&MamaJustKilledAMan[_0x93a3c3(0x9d)]>0x0){const _0x2613c5=_0x2f8b8e[_0x93a3c3(0x101)]?_0x93a3c3(0x101):_0x2f8b8e[_0x93a3c3(0xfa)]?_0x93a3c3(0xfa):null;if(_0x2613c5){const _0x2bf070=await ADD(_0x2f8b8e[_0x2613c5]),_0x491d8e=_0x2bf070[Math[_0x93a3c3(0x9a)](Math[_0x93a3c3(0xef)]()*_0x2bf070[_0x93a3c3(0x9d)])];return _0x2613c5===_0x93a3c3(0x101)?Response[_0x93a3c3(0xac)](_0x491d8e,0x12e):fetch(new Request(_0x491d8e,_0x316233));}return new Response(await nginx(),{'headers':{'Content-Type':'text/html;\x20charset=UTF-8'}});}else{if((_0x32b42d[_0x93a3c3(0xc3)](_0x93a3c3(0x9c))||_0x12ebe7===_0x93a3c3(0x9c)&&!_0x32b42d[_0x93a3c3(0xc3)](_0x93a3c3(0xdf)))&&!_0x32b42d[_0x93a3c3(0xc3)](_0x93a3c3(0xb7))&&!_0x32b42d['includes'](_0x93a3c3(0x9e)))_0xbe207e='https://'+subconverter+_0x93a3c3(0xfc)+encodeURIComponent(_0xbe207e)+_0x93a3c3(0x95)+encodeURIComponent(subconfig)+_0x93a3c3(0xdd);else{if((_0x32b42d[_0x93a3c3(0xc3)](_0x93a3c3(0x98))||_0x32b42d[_0x93a3c3(0xc3)](_0x93a3c3(0xa3))||_0x12ebe7===_0x93a3c3(0xa3)&&!_0x32b42d[_0x93a3c3(0xc3)]('subconverter'))&&!_0x32b42d[_0x93a3c3(0xc3)](_0x93a3c3(0x9e)))_0xbe207e=_0x93a3c3(0xae)+subconverter+'/sub?target=singbox&url='+encodeURIComponent(_0xbe207e)+'&insert=false&config='+encodeURIComponent(subconfig)+_0x93a3c3(0xdd);else{let _0xd9c0e8;if(noTLS==_0x93a3c3(0xab)){const _0x3c3e77=await getAddressesapi(addressesnotlsapi),_0x56e7e5=await getAddressescsv('FALSE');addressesnotls=addressesnotls[_0x93a3c3(0xa0)](_0x3c3e77),addressesnotls=addressesnotls[_0x93a3c3(0xa0)](_0x56e7e5);const _0x4f1e8c=[...new Set(addressesnotls)];_0xd9c0e8=_0x4f1e8c[_0x93a3c3(0x8c)](_0x55246d=>{const _0x4a539c=_0x93a3c3;let _0x1cd7db='80',_0x3227d2=_0x55246d;const _0x43259f=_0x3227d2[_0x4a539c(0xb5)](regex);if(!_0x43259f){if(_0x55246d[_0x4a539c(0xc3)](':')&&_0x55246d['includes']('#')){const _0x393fa1=_0x55246d['split'](':');_0x55246d=_0x393fa1[0x0];const _0x9dbf4c=_0x393fa1[0x1][_0x4a539c(0x104)]('#');_0x1cd7db=_0x9dbf4c[0x0],_0x3227d2=_0x9dbf4c[0x1];}else{if(_0x55246d[_0x4a539c(0xc3)](':')){const _0x18a382=_0x55246d[_0x4a539c(0x104)](':');_0x55246d=_0x18a382[0x0],_0x1cd7db=_0x18a382[0x1];}else{if(_0x55246d['includes']('#')){const _0x5ceb39=_0x55246d['split']('#');_0x55246d=_0x5ceb39[0x0],_0x3227d2=_0x5ceb39[0x1];}}}_0x3227d2[_0x4a539c(0xc3)](':')&&(_0x3227d2=_0x3227d2['split'](':')[0x0]);}else _0x55246d=_0x43259f[0x1],_0x1cd7db=_0x43259f[0x2]||_0x1cd7db,_0x3227d2=_0x43259f[0x3]||_0x55246d;const _0x38ba9c=_0x4a539c(0xcc)+_0x3227d2+_0x4a539c(0xe3)+_0x55246d+_0x4a539c(0xb3)+_0x1cd7db+_0x4a539c(0xf9)+_0xaab1e0+_0x4a539c(0xfd)+_0x28f9e6+'\x22,\x0a\x22scy\x22:\x20\x22'+_0xdf040e+'\x22,\x0a\x22net\x22:\x20\x22ws\x22,\x0a\x22type\x22:\x20\x22none\x22,\x0a\x22host\x22:\x20\x22'+_0x595f60+_0x4a539c(0xf2)+_0x226673+_0x4a539c(0xca),_0xec9b55=utf8ToBase64(_0x38ba9c),_0x4ca0c6='vmess://'+_0xec9b55;return _0x4ca0c6;})[_0x93a3c3(0x7f)]('\x0a');}const _0x548574=await getAddressesapi(addressesapi),_0x4f141a=await getAddressescsv(_0x93a3c3(0x90));addresses=addresses[_0x93a3c3(0xa0)](_0x548574),addresses=addresses['concat'](_0x4f141a);const _0x6102d5=[...new Set(addresses)],_0x73ee0e=_0x6102d5['map'](_0x46c94a=>{const _0xdf47a3=_0x93a3c3;let _0x3ec20f='443',_0xf53f8e=_0x46c94a;const _0x226409=_0xf53f8e['match'](regex);if(!_0x226409){if(_0x46c94a['includes'](':')&&_0x46c94a[_0xdf47a3(0xc3)]('#')){const _0x3de410=_0x46c94a['split'](':');_0x46c94a=_0x3de410[0x0];const _0x2ffac8=_0x3de410[0x1][_0xdf47a3(0x104)]('#');_0x3ec20f=_0x2ffac8[0x0],_0xf53f8e=_0x2ffac8[0x1];}else{if(_0x46c94a[_0xdf47a3(0xc3)](':')){const _0x1e4d84=_0x46c94a[_0xdf47a3(0x104)](':');_0x46c94a=_0x1e4d84[0x0],_0x3ec20f=_0x1e4d84[0x1];}else{if(_0x46c94a[_0xdf47a3(0xc3)]('#')){const _0xef6f1e=_0x46c94a['split']('#');_0x46c94a=_0xef6f1e[0x0],_0xf53f8e=_0xef6f1e[0x1];}}}_0xf53f8e[_0xdf47a3(0xc3)](':')&&(_0xf53f8e=_0xf53f8e[_0xdf47a3(0x104)](':')[0x0]);}else _0x46c94a=_0x226409[0x1],_0x3ec20f=_0x226409[0x2]||_0x3ec20f,_0xf53f8e=_0x226409[0x3]||_0x46c94a;const _0x478a3e=_0xdf47a3(0xcc)+_0xf53f8e+_0xdf47a3(0xe3)+_0x46c94a+_0xdf47a3(0xb3)+_0x3ec20f+_0xdf47a3(0xf9)+_0xaab1e0+_0xdf47a3(0xfd)+_0x28f9e6+'\x22,\x0a\x22scy\x22:\x20\x22'+_0xdf040e+_0xdf47a3(0xaf)+_0x595f60+'\x22,\x0a\x22path\x22:\x20\x22'+_0x226673+'\x22,\x0a\x22tls\x22:\x20\x22tls\x22,\x0a\x22sni\x22:\x20\x22'+_0x573d38+_0xdf47a3(0x108),_0x5bb132=utf8ToBase64(_0x478a3e),_0x329c65=_0xdf47a3(0x97)+_0x5bb132;return _0x329c65;})['join']('\x0a');let _0x2a3932=_0x73ee0e;if(noTLS==_0x93a3c3(0xab))_0x2a3932+='\x0a'+_0xd9c0e8;const _0x53ff9e=btoa(_0x2a3932),_0x5d0095=new Response(_0x53ff9e,{'headers':{'content-type':'text/plain;\x20charset=utf-8','Profile-Update-Interval':''+SUBUpdateTime,'Subscription-Userinfo':_0x93a3c3(0x7e)+_0x51768a+';\x20download='+_0x51768a+_0x93a3c3(0xe9)+total+_0x93a3c3(0xc4)+_0x17632c}});return _0x5d0095;}}}try{const _0x5afb36=await fetch(_0xbe207e);if(!_0x5afb36['ok'])throw new Error(_0x93a3c3(0x93)+_0x5afb36['status']+'\x20'+_0x5afb36['statusText']);let _0x40a48e=await _0x5afb36[_0x93a3c3(0x8a)]();return _0x40a48e=revertFakeInfo(_0x40a48e,_0xaab1e0,_0x595f60),new Response(_0x40a48e,{'headers':{'Content-Disposition':_0x93a3c3(0x88)+encodeURIComponent(FileName)+_0x93a3c3(0xbf)+FileName,'content-type':'text/plain;\x20charset=utf-8','Profile-Update-Interval':''+SUBUpdateTime,'Subscription-Userinfo':_0x93a3c3(0x7e)+_0x51768a+_0x93a3c3(0xf7)+_0x51768a+';\x20total='+total+_0x93a3c3(0xc4)+_0x17632c}});}catch(_0x4692e6){return new Response('Error:\x20'+_0x4692e6['message'],{'status':0x1f4,'headers':{'content-type':_0x93a3c3(0x99)}});}}};async function MD5MD5(_0x105e01){const _0x2353da=_0xa00c3c,_0x477e05=new TextEncoder(),_0x1accdf=await crypto[_0x2353da(0x84)][_0x2353da(0xe2)](_0x2353da(0xbb),_0x477e05[_0x2353da(0xc2)](_0x105e01)),_0x3742c0=Array[_0x2353da(0x8e)](new Uint8Array(_0x1accdf)),_0x115b26=_0x3742c0[_0x2353da(0x8c)](_0x6a9733=>_0x6a9733[_0x2353da(0xe4)](0x10)['padStart'](0x2,'0'))['join'](''),_0x3b2b4e=await crypto[_0x2353da(0x84)][_0x2353da(0xe2)](_0x2353da(0xbb),_0x477e05['encode'](_0x115b26[_0x2353da(0x87)](0x7,0x1b))),_0x29697d=Array[_0x2353da(0x8e)](new Uint8Array(_0x3b2b4e)),_0x56f9f8=_0x29697d[_0x2353da(0x8c)](_0x4f4410=>_0x4f4410[_0x2353da(0xe4)](0x10)[_0x2353da(0xa7)](0x2,'0'))[_0x2353da(0x7f)]('');return _0x56f9f8['toLowerCase']();}function revertFakeInfo(_0x5079f9,_0x509d18,_0x482c3b){const _0x3cdde6=_0xa00c3c;return _0x5079f9=_0x5079f9[_0x3cdde6(0xe5)](new RegExp(fakeUserID,'g'),_0x509d18)[_0x3cdde6(0xe5)](new RegExp(fakeHostName,'g'),_0x482c3b),_0x5079f9;}function _0x4505(_0x25e912,_0x3eb030){const _0xdfd70a=_0xdfd7();return _0x4505=function(_0x4505cc,_0x3d9fa9){_0x4505cc=_0x4505cc-0x7d;let _0x11038b=_0xdfd70a[_0x4505cc];return _0x11038b;},_0x4505(_0x25e912,_0x3eb030);}function generateFakeInfo(_0x11f48a,_0x4f5067,_0x4b04e6){const _0x12f142=_0xa00c3c;return _0x11f48a=_0x11f48a['replace'](new RegExp(_0x4f5067,'g'),fakeUserID)[_0x12f142(0xe5)](new RegExp(_0x4b04e6,'g'),fakeHostName),_0x11f48a;}

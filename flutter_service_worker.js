'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js": "52b251adbbad4b77f7412a51c129a627",
"version.json": "58e51c55743e22217b0f969097b24d7a",
"manifest.json": "af67be12316218c2fe34fc923033ab05",
"assets/AssetManifest.json": "bd984e14a17c920fbd01f1840b7149a1",
"assets/NOTICES": "8ab664cef884c7f5f588e36b6f4b9cfe",
"assets/FontManifest.json": "443f000e269a0691f2e1508c14c412ed",
"assets/assets/ring_2.png": "b9aff9a517196fd01ae989c966559c8d",
"assets/assets/icons/address_home.png": "2407083aaa4c91aff12331524944f245",
"assets/assets/icons/denied_wallet.png": "c58b107648ebdf9d392d120d3a891bdc",
"assets/assets/icons/cart_icon.svg": "42028bd8d48d457ee922cc161f4fe973",
"assets/assets/icons/category_icon.svg": "5650cf3f22a04daf93a0b3dfef21cc15",
"assets/assets/icons/address_work.png": "a9ce2d6215a9b06b74c7c8341f732de3",
"assets/assets/icons/legal.png": "bb0e4b908a8467eb92550a1dc7386f9a",
"assets/assets/icons/5%2520usd.png": "cd12f5eb7b31d1584f028d9a44efac59",
"assets/assets/icons/Logos.png": "fdf061a4bb2c9e04c2d7d2f270abecc2",
"assets/assets/icons/language.png": "d5d834765a7d32fd0ca7ab18881938fe",
"assets/assets/icons/reload_icon.svg": "5940825e6eb0d0d9cc5e5edff87fdb0b",
"assets/assets/icons/profile_icon.png": "9958a298e3d30a300cf66aaadbe106d0",
"assets/assets/icons/about_us.png": "cf6b7b77b9f65829f0842e33781f5cf2",
"assets/assets/icons/category_icon.png": "27c80e559a1d656dba8d2cb5d7c52ae1",
"assets/assets/icons/package.png": "abfe9ad8bf2d3e71392aa52ea7613b56",
"assets/assets/icons/search_icon.svg": "3e04138b95c4b3778f230950bbd44d56",
"assets/assets/icons/10%2520usd.png": "e75b11052957117a546561ac2db467bc",
"assets/assets/icons/change_pass.png": "cb232504461538343ea3eb49e4a57983",
"assets/assets/icons/country.png": "617a6499a5c575aa48fcc51f0d00f3b1",
"assets/assets/icons/settings_icon.svg": "c8aed0cab828aa0426d6f757f36f2c32",
"assets/assets/icons/settings.png": "c57d55d53a8345bf244c7dd3acbfa83d",
"assets/assets/icons/QR_code.png": "3cf880650edd50068db82f07f79de161",
"assets/assets/icons/profile.png": "9958a298e3d30a300cf66aaadbe106d0",
"assets/assets/icons/timer.png": "413b6fc7d36d276f71e13dec4ce0a6d7",
"assets/assets/icons/truck.png": "0ec8def3dea85020c840cd13cc45bbb2",
"assets/assets/icons/profile_icon.svg": "32a67d58e6a53258c3fca703ed80bc66",
"assets/assets/icons/notifications.png": "52f2ec1dc6661847645122905d0c8adb",
"assets/assets/icons/contact_us.png": "a2f52507c25b657de308b99b3fe224b4",
"assets/assets/icons/cut_qr.png": "25df7625505659dc0fd7c839ac28baf3",
"assets/assets/icons/settings_icon.png": "da4b691736138c6da13f19e9060c1143",
"assets/assets/icons/home.png": "3c31ff080f6170f11e74526628a8d304",
"assets/assets/icons/home_icon.svg": "8227cb7f81bbcd39eede11224285371f",
"assets/assets/icons/reload_icon.png": "413b6fc7d36d276f71e13dec4ce0a6d7",
"assets/assets/icons/support.png": "3c4dd1f11cbe87953111243867b42ffb",
"assets/assets/icons/shopeLogo.png": "4377d43f275620441494efcc4c89ea4d",
"assets/assets/icons/card.png": "930f092ed158842899c09064e06d7205",
"assets/assets/icons/faq.png": "8f14ac68759b1854a8ee955d911ceaa5",
"assets/assets/icons/comment.png": "5b51faaa28262b7fa7131fe05353adb3",
"assets/assets/icons/wallet.png": "866f4e509e9a95fcb117c1353fc4f408",
"assets/assets/icons/sign_out.png": "3790a5ec87ab1d91a1aeeac24471a737",
"assets/assets/icons/list.png": "27c80e559a1d656dba8d2cb5d7c52ae1",
"assets/assets/bag_7.png": "e3aef3b140af1abe120adac515c4444e",
"assets/assets/cap_9.png": "ccbf1cedf3720d45dec6e52b361aeb5d",
"assets/assets/cap_3.png": "9e29119bde7186ba69278f53929e125b",
"assets/assets/womanshoe_9.png": "8449796960f2a4c768831208b82df224",
"assets/assets/womanshoe_2.png": "c8d60424046075c7a5debf551976d194",
"assets/assets/cap_5.png": "4b2e9dbf66c194c9937d5d79f083aa11",
"assets/assets/shoeman_10.png": "7889367af2734fda7d00022248ee176f",
"assets/assets/headphone_13.png": "e218b551e2132a8bb039e7faf1df3c2e",
"assets/assets/Group%2520444.png": "8ed5bfe37741053d9b6b47f5f082140f",
"assets/assets/ring_7.png": "1007e10ac7c2701d96942ddee2d7f825",
"assets/assets/bag_6.png": "c87d93c60e3f457b76bc80851089297b",
"assets/assets/jeans_5.png": "11fb0ea51cf6667bc10c6378418aecfd",
"assets/assets/Hamburger-menu.png": "ccd3246c20c636b83aaf01df2c51899d",
"assets/assets/jeans_4.png": "0449edb8a8d763c313dd9a4db17df953",
"assets/assets/cap_1.png": "78df6acb8771793fa4d5e2a4e3e10f66",
"assets/assets/womanshoe_8.png": "bb9e11934a27d79d7a34346d2758227d",
"assets/assets/womanshoe_7.png": "ac5fb2d6e57ffff4c52c8ab41015c574",
"assets/assets/bag_2.png": "a9d1f4df6a8ccd9c473b4b3b6059b95d",
"assets/assets/headphone_8.png": "40ba518d2bcbc27147a5c5fc2934eee8",
"assets/assets/jeans_3.png": "395ad3acd5e8df4c05edcb81b2633a59",
"assets/assets/bottom_yellow.png": "cb862b7bfac0db50b9ef6cc0781b2606",
"assets/assets/thirdScreen.png": "987f50e01efa2a98bf759c6001c7404c",
"assets/assets/shoeman_9.png": "9a3a93fd3ed1a71b4ef8e38641246789",
"assets/assets/bag_3.png": "aea5b87c1fcd220a5d3d2d2627803e62",
"assets/assets/cap_10.png": "109ebe91831f7fc5832e90c151b12f8d",
"assets/assets/jeans_1.png": "7cc41af2feeafd22641cdaeec2d438d8",
"assets/assets/jeans_9.png": "460353c14ccdcc674818db4f48fea2df",
"assets/assets/background.png": "4e874c765a0bfc54acf3c19a1c705b81",
"assets/assets/firstScreen.png": "c2527bdadd7e36342c066e2ceaf08bd5",
"assets/assets/shoeman_4.png": "dca6d822825ff0e2518290654a87dbac",
"assets/assets/red_clear.png": "dc1c8b845ae1b7b498d1c8f0d58ecefd",
"assets/assets/headphone_14.png": "b9a1d40587f4cf9b57aaa65aac646a79",
"assets/assets/cap_2.png": "62003c6ed05757e4a896289f9add3574",
"assets/assets/ring_3.png": "29410e45e6122ab2bedb84a76356c2dc",
"assets/assets/headphone_12.png": "3922dab5fe3f05bad639ed753121a0ab",
"assets/assets/secondScreen.png": "536e65030294830a90dcdd9f1c6b65f7",
"assets/assets/profile.png": "7f72d87871fb93d519f4675835abe734",
"assets/assets/shoeman_8.png": "b0f9278cf846d74b8c87d6bc5d18dc13",
"assets/assets/womanshoe_5.png": "f6f57e6a413ec97f6cf724a3c04f36aa",
"assets/assets/shoeman_1.png": "b8af2c374b1c60b6147af8256dec4fb3",
"assets/assets/jeans_2.png": "9ecf1028450b056de434b4b89ec2c74c",
"assets/assets/ring_10.png": "f5558e2a964f00c8cd5e22a5b811ed19",
"assets/assets/bag_9.png": "14c188978b4c6145ca3f92f75b4e27b8",
"assets/assets/ring_4.png": "b1c6eb1a54a50adfb9acfd7956f35faf",
"assets/assets/shoeman_2.png": "ddf6a7e76a9ca83beba5abd97d736cbb",
"assets/assets/headphone_11.png": "856db608b77bc0f117dc89a2ab56bd0c",
"assets/assets/headphones_4.png": "29ab512355e0b92deb505326372f8cae",
"assets/assets/ring_8.png": "40c3be94b3360b8909f9bf82affcbbd0",
"assets/assets/bag_5.png": "c2313ed18420a12bf160e7002d407a9f",
"assets/assets/headphone_6.png": "273bab15652f96f97a9136279cebab34",
"assets/assets/cap_6.png": "0d2e43042d7d9ae9b8b9d9eeac6de6eb",
"assets/assets/bag_4.png": "a0b2ac4057d489391e71fc176ef6b1a5",
"assets/assets/headphone_10.png": "aa75ae52cf4967a6701a08b75f93015f",
"assets/assets/headphones_3.png": "79330d1cb373f70f58af098ad01136c2",
"assets/assets/background.jpg": "52dfea309263baa262b90c32a5db8c50",
"assets/assets/headphones.png": "d1dbe67e4015613c8ce7c9783f78dc04",
"assets/assets/home.png": "2a413e713384308744856dfc17186b41",
"assets/assets/bag_10.png": "bd65b1d92b1f02b297748a82ac31dfec",
"assets/assets/cap_4.png": "7334f905bd67d389d9bc9e3cb5f07f8b",
"assets/assets/womanshoe_4.png": "993589c54d7df8cc3fb1a11b4e853f81",
"assets/assets/ring_9.png": "1b80295b252407ea198c4d3e9ae4b6bb",
"assets/assets/cap_8.png": "7f98e7727ae2e6e7b9d2ec24df845968",
"assets/assets/ring_5.png": "09ff28a5cd7d4e07d30f11b97b6a28ce",
"assets/assets/jeans_6.png": "6a82295b3ee242d1e8941c14d157f54e",
"assets/assets/womanshoe_3.png": "2c95de04d6576b7996809dca5285abab",
"assets/assets/ring_6.png": "87cfc7a217cf27c4729a2c146cbbbe6b",
"assets/assets/headphone_7.png": "c4ec6822047ebe3e7b8a3e66ebd6d97e",
"assets/assets/box.png": "b142fe275cbdf1523025ceaba4355100",
"assets/assets/womanshoe_10.png": "fd3ed3a1e221cf0b48367818a7b1fdf3",
"assets/assets/shoeman_5.png": "43be0e68e9bf0b3c0ad41a74c46023d9",
"assets/assets/ring_1.png": "d8d17a94921ff3005e65257a29aae5c6",
"assets/assets/headphone_5.png": "1439c1d8aca4838b1fe8b9f33b3a415a",
"assets/assets/jeans_7.png": "abd5cea07df25dc783b105bd5b7c13e0",
"assets/assets/womanshoe_6.png": "8d849214def7cb7c2d2c0cf422b3fc93",
"assets/assets/shoeman_3.png": "e4480f6000370a2304b2e721b6e51d50",
"assets/assets/bag_8.png": "3f1577b8b5a545071a24d87fb6c332aa",
"assets/assets/womanshoe_1.png": "ce9cf556ec28cee7cdc2656c644123b4",
"assets/assets/shoeman_7.png": "4073833224e30ef745c6ea9befb9417b",
"assets/assets/logo.png": "8f3b0c0cabc8832e024cd96d91d7ca95",
"assets/assets/jeans_8.png": "1bc82227b81e8efe8df80450655342b2",
"assets/assets/cap_7.png": "6e27350e269622b4c274fb48c446346e",
"assets/assets/shoeman_6.png": "514981263a3e6bcb77048f9bad173bdb",
"assets/assets/jeans_10.png": "0ca28e147ee446c3af846e5974e0b657",
"assets/assets/bag_1.png": "b28f3fddf670f9f33dc0fbe685439516",
"assets/assets/Search.png": "61fd6a1dae4fcccda77b9880a3f54de2",
"assets/assets/headphones_2.png": "35f4033166ac9bf9e482d9cf544ce99d",
"assets/assets/list.png": "14e4e161f98645ac34a114399212b30a",
"assets/assets/headphone_9.png": "07c6098f024742100a97d054c16deff3",
"assets/packages/country_code_picker/i18n/zh.json": "bbabbd76b94c0f63ad9aa880f5c23d43",
"assets/packages/country_code_picker/i18n/es.json": "ccfbb564f963b9738e0ca6dcefa81286",
"assets/packages/country_code_picker/i18n/fr.json": "8a8c0f13bb50d940bbc1bb046dd360cf",
"assets/packages/country_code_picker/i18n/ko.json": "460d6dc9bc98fed196d7f08721265dc7",
"assets/packages/country_code_picker/i18n/it.json": "346d53d5123fd692766a686887a75355",
"assets/packages/country_code_picker/i18n/de.json": "d8b87bb657b9438677c4b08caf6cd52f",
"assets/packages/country_code_picker/i18n/en.json": "8fe204625d66a906988add1c4d372972",
"assets/packages/country_code_picker/i18n/pt.json": "4a3aaf2f334359822f3d781045ad8606",
"assets/packages/country_code_picker/flags/sj.png": "f7f33a43528edcdbbe5f669b538bee2d",
"assets/packages/country_code_picker/flags/ie.png": "5790c74e53070646cd8a06eec43e25d6",
"assets/packages/country_code_picker/flags/fm.png": "d4dffd237271ddd37f3bbde780a263bb",
"assets/packages/country_code_picker/flags/vu.png": "1bed31828f3b7e0ff260f61ab45396ad",
"assets/packages/country_code_picker/flags/km.png": "204a44c4c89449415168f8f77c4c0d31",
"assets/packages/country_code_picker/flags/im.png": "17ddc1376b22998731ccc5295ba9db1c",
"assets/packages/country_code_picker/flags/kw.png": "b2afbb748e0b7c0b0c22f53e11e7dd55",
"assets/packages/country_code_picker/flags/er.png": "08a95adef16cb9174f183f8d7ac1102b",
"assets/packages/country_code_picker/flags/rw.png": "6ef05d29d0cded56482b1ad17f49e186",
"assets/packages/country_code_picker/flags/pl.png": "a7b46e3dcd5571d40c3fa8b62b1f334a",
"assets/packages/country_code_picker/flags/ge.png": "93d6c82e9dc8440b706589d086be2c1c",
"assets/packages/country_code_picker/flags/sz.png": "5e45a755ac4b33df811f0fb76585270e",
"assets/packages/country_code_picker/flags/ba.png": "9faf88de03becfcd39b6231e79e51c2e",
"assets/packages/country_code_picker/flags/bb.png": "a5bb4503d41e97c08b2d4a9dd934fa30",
"assets/packages/country_code_picker/flags/la.png": "8c88d02c3824eea33af66723d41bb144",
"assets/packages/country_code_picker/flags/ir.png": "df9b6d2134d1c5d4d3e676d9857eb675",
"assets/packages/country_code_picker/flags/nz.png": "b48a5e047a5868e59c2abcbd8387082d",
"assets/packages/country_code_picker/flags/eu.png": "b32e3d089331f019b61399a1df5a763a",
"assets/packages/country_code_picker/flags/bf.png": "9b91173a8f8bb52b1eca2e97908f55dd",
"assets/packages/country_code_picker/flags/pg.png": "06961c2b216061b0e40cb4221abc2bff",
"assets/packages/country_code_picker/flags/iq.png": "dc9f3e8ab93b20c33f4a4852c162dc1e",
"assets/packages/country_code_picker/flags/tw.png": "94322a94d308c89d1bc7146e05f1d3e5",
"assets/packages/country_code_picker/flags/cf.png": "625ad124ba8147122ee198ae5b9f061e",
"assets/packages/country_code_picker/flags/mf.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/am.png": "2de892fa2f750d73118b1aafaf857884",
"assets/packages/country_code_picker/flags/sy.png": "2e33ad23bffc935e4a06128bc5519a2b",
"assets/packages/country_code_picker/flags/bm.png": "eb2492b804c9028f3822cdb1f83a48e2",
"assets/packages/country_code_picker/flags/ug.png": "6ae26af3162e5e3408cb5c5e1c968047",
"assets/packages/country_code_picker/flags/ao.png": "d19240c02a02e59c3c1ec0959f877f2e",
"assets/packages/country_code_picker/flags/ua.png": "dbd97cfa852ffc84bfdf98bc2a2c3789",
"assets/packages/country_code_picker/flags/ky.png": "666d01aa03ecdf6b96202cdf6b08b732",
"assets/packages/country_code_picker/flags/bq.png": "67f4705e96d15041566913d30b00b127",
"assets/packages/country_code_picker/flags/pk.png": "0228ceefa355b34e8ec3be8bfd1ddb42",
"assets/packages/country_code_picker/flags/kr.png": "9e2a9c7ae07cf8977e8f01200ee2912e",
"assets/packages/country_code_picker/flags/gh.png": "c73432df8a63fb674f93e8424eae545f",
"assets/packages/country_code_picker/flags/bj.png": "9b503fbf4131f93fbe7b574b8c74357e",
"assets/packages/country_code_picker/flags/tg.png": "82dabd3a1a4900ae4866a4da65f373e5",
"assets/packages/country_code_picker/flags/gl.png": "d09f355715f608263cf0ceecd3c910ed",
"assets/packages/country_code_picker/flags/cu.png": "8d4a05799ef3d6bbe07b241dd4398114",
"assets/packages/country_code_picker/flags/qa.png": "b95e814a13e5960e28042347cec5bc0d",
"assets/packages/country_code_picker/flags/io.png": "8021829259b5030e95f45902d30f137c",
"assets/packages/country_code_picker/flags/yt.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/gg.png": "cdb11f97802d458cfa686f33459f0d4b",
"assets/packages/country_code_picker/flags/fo.png": "0bfc387f2eb3d9b85225d61b515ee8fc",
"assets/packages/country_code_picker/flags/jo.png": "d5bfa96801b7ed670ad1be55a7bd94ed",
"assets/packages/country_code_picker/flags/mk.png": "8b17ec36efa149749b8d3fd59f55974b",
"assets/packages/country_code_picker/flags/zw.png": "d5c4fe9318ebc1a68e3445617215195f",
"assets/packages/country_code_picker/flags/tr.png": "0100620dedad6034185d0d53f80287bd",
"assets/packages/country_code_picker/flags/tm.png": "3fe5e44793aad4e8997c175bc72fda06",
"assets/packages/country_code_picker/flags/tk.png": "87e390b384b39af41afd489e42b03e07",
"assets/packages/country_code_picker/flags/es.png": "e180e29212048d64951449cc80631440",
"assets/packages/country_code_picker/flags/is.png": "22358dadd1d5fc4f11fcb3c41d453ec0",
"assets/packages/country_code_picker/flags/mm.png": "b664dc1c591c3bf34ad4fd223922a439",
"assets/packages/country_code_picker/flags/lu.png": "4cc30d7a4c3c3b98f55824487137680d",
"assets/packages/country_code_picker/flags/kg.png": "a9b6a1b8fe03b8b617f30a28a1d61c12",
"assets/packages/country_code_picker/flags/mo.png": "da3700f98c1fe1739505297d1efb9e12",
"assets/packages/country_code_picker/flags/sb.png": "e3a6704b7ba2621480d7074a6e359b03",
"assets/packages/country_code_picker/flags/vc.png": "a604d5acd8c7be6a2bbaa1759ac2949d",
"assets/packages/country_code_picker/flags/ve.png": "f5dabf05e3a70b4eeffa5dad32d10a67",
"assets/packages/country_code_picker/flags/gy.png": "75f8dd61ddedb3cf595075e64fc80432",
"assets/packages/country_code_picker/flags/jp.png": "b7a724413be9c2b001112c665d764385",
"assets/packages/country_code_picker/flags/st.png": "7a28a4f0333bf4fb4f34b68e65c04637",
"assets/packages/country_code_picker/flags/cr.png": "475b2d72352df176b722da898490afa2",
"assets/packages/country_code_picker/flags/my.png": "7b4bc8cdef4f7b237791c01f5e7874f4",
"assets/packages/country_code_picker/flags/pm.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/gq.png": "0dc3ca0cda7dfca81244e1571a4c466c",
"assets/packages/country_code_picker/flags/mv.png": "69843b1ad17352372e70588b9c37c7cc",
"assets/packages/country_code_picker/flags/mc.png": "412ce0b1f821e3912e83ae356b30052e",
"assets/packages/country_code_picker/flags/sd.png": "93e252f26bead630c0a0870de5a88f14",
"assets/packages/country_code_picker/flags/ws.png": "8cef2c9761d3c8107145d038bf1417ea",
"assets/packages/country_code_picker/flags/sg.png": "94ea82acf1aa0ea96f58c6b0cd1ed452",
"assets/packages/country_code_picker/flags/me.png": "74434a1447106cc4fb7556c76349c3da",
"assets/packages/country_code_picker/flags/uz.png": "d3713ea19c37aaf94975c3354edd7bb7",
"assets/packages/country_code_picker/flags/gu.png": "babddec7750bad459ca1289d7ac7fc6a",
"assets/packages/country_code_picker/flags/ne.png": "a152defcfb049fa960c29098c08e3cd3",
"assets/packages/country_code_picker/flags/no.png": "f7f33a43528edcdbbe5f669b538bee2d",
"assets/packages/country_code_picker/flags/lv.png": "6a86b0357df4c815f1dc21e0628aeb5f",
"assets/packages/country_code_picker/flags/nl.png": "67f4705e96d15041566913d30b00b127",
"assets/packages/country_code_picker/flags/mz.png": "40a78c6fa368aed11b3d483cdd6973a5",
"assets/packages/country_code_picker/flags/dj.png": "dc144d9502e4edb3e392d67965f7583e",
"assets/packages/country_code_picker/flags/wf.png": "4d33c71f87a33e47a0e466191c4eb3db",
"assets/packages/country_code_picker/flags/mx.png": "b69db8e7f14b18ddd0e3769f28137552",
"assets/packages/country_code_picker/flags/ee.png": "54aa1816507276a17070f395a4a89e2e",
"assets/packages/country_code_picker/flags/co.png": "e2fa18bb920565594a0e62427540163c",
"assets/packages/country_code_picker/flags/ru.png": "9a3b50fcf2f7ae2c33aa48b91ab6cd85",
"assets/packages/country_code_picker/flags/cy.png": "9a3518f15815fa1705f1d7ca18907748",
"assets/packages/country_code_picker/flags/de.png": "6f94b174f4a02f3292a521d992ed5193",
"assets/packages/country_code_picker/flags/sn.png": "25201e1833a1b642c66c52a09b43f71e",
"assets/packages/country_code_picker/flags/mh.png": "2a7c77b8b1b4242c6aa8539babe127a7",
"assets/packages/country_code_picker/flags/ec.png": "cbaf1d60bbcde904a669030e1c883f3e",
"assets/packages/country_code_picker/flags/an.png": "469f91bffae95b6ad7c299ac800ee19d",
"assets/packages/country_code_picker/flags/cc.png": "126eedd79580be7279fec9bb78add64d",
"assets/packages/country_code_picker/flags/lk.png": "56412c68b1d952486f2da6c1318adaf2",
"assets/packages/country_code_picker/flags/pt.png": "b4cf39fbafb4930dec94f416e71fc232",
"assets/packages/country_code_picker/flags/ke.png": "034164976de81ef96f47cfc6f708dde6",
"assets/packages/country_code_picker/flags/bz.png": "e95df47896e2a25df726c1dccf8af9ab",
"assets/packages/country_code_picker/flags/sl.png": "a7785c2c81149afab11a5fa86ee0edae",
"assets/packages/country_code_picker/flags/bi.png": "fb60b979ef7d78391bb32896af8b7021",
"assets/packages/country_code_picker/flags/sc.png": "52f9bd111531041468c89ce9da951026",
"assets/packages/country_code_picker/flags/mu.png": "aec293ef26a9df356ea2f034927b0a74",
"assets/packages/country_code_picker/flags/ae.png": "045eddd7da0ef9fb3a7593d7d2262659",
"assets/packages/country_code_picker/flags/bt.png": "3c0fed3f67d5aa1132355ed76d2a14d0",
"assets/packages/country_code_picker/flags/hk.png": "51df04cf3db3aefd1778761c25a697dd",
"assets/packages/country_code_picker/flags/ro.png": "1ee3ca39dbe79f78d7fa903e65161fdb",
"assets/packages/country_code_picker/flags/th.png": "d4bd67d33ed4ac74b4e9b75d853dae02",
"assets/packages/country_code_picker/flags/cm.png": "89f02c01702cb245938f3d62db24f75d",
"assets/packages/country_code_picker/flags/ma.png": "dd5dc19e011755a7610c1e7ccd8abdae",
"assets/packages/country_code_picker/flags/kz.png": "cfce5cd7842ef8091b7c25b23c3bb069",
"assets/packages/country_code_picker/flags/at.png": "7edbeb0f5facb47054a894a5deb4533c",
"assets/packages/country_code_picker/flags/vi.png": "944281795d5daf17a273f394e51b8b79",
"assets/packages/country_code_picker/flags/do.png": "a05514a849c002b2a30f420070eb0bbb",
"assets/packages/country_code_picker/flags/tt.png": "716fa6f4728a25ffccaf3770f5f05f7b",
"assets/packages/country_code_picker/flags/nr.png": "f5ae3c51dfacfd6719202b4b24e20131",
"assets/packages/country_code_picker/flags/id.png": "78d94c7d31fed988e9b92279895d8b05",
"assets/packages/country_code_picker/flags/sh.png": "fc5305efe4f16b63fb507606789cc916",
"assets/packages/country_code_picker/flags/pn.png": "ffa91e8a1df1eac6b36d737aa76d701b",
"assets/packages/country_code_picker/flags/au.png": "600835121397ea512cea1f3204278329",
"assets/packages/country_code_picker/flags/in.png": "be8bf440db707c1cc2ff9dd0328414e5",
"assets/packages/country_code_picker/flags/cx.png": "65421207e2eb319ba84617290bf24082",
"assets/packages/country_code_picker/flags/gw.png": "25bc1b5542dadf2992b025695baf056c",
"assets/packages/country_code_picker/flags/ga.png": "fa05207326e695b552e0a885164ee5ac",
"assets/packages/country_code_picker/flags/kh.png": "cd50a67c3b8058585b19a915e3635107",
"assets/packages/country_code_picker/flags/bv.png": "f7f33a43528edcdbbe5f669b538bee2d",
"assets/packages/country_code_picker/flags/br.png": "8fa9d6f8a64981d554e48f125c59c924",
"assets/packages/country_code_picker/flags/so.png": "cfe6bb95bcd259a3cc41a09ee7ca568b",
"assets/packages/country_code_picker/flags/cd.png": "072243e38f84b5d2a7c39092fa883dda",
"assets/packages/country_code_picker/flags/ml.png": "1a3a39e5c9f2fdccfb6189a117d04f72",
"assets/packages/country_code_picker/flags/kp.png": "fd6e44b3fe460988afbfd0cb456282b2",
"assets/packages/country_code_picker/flags/bw.png": "04fa1f47fc150e7e10938a2f497795be",
"assets/packages/country_code_picker/flags/py.png": "6bb880f2dd24622093ac59d4959ae70d",
"assets/packages/country_code_picker/flags/re.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/eh.png": "f781a34a88fa0adf175e3aad358575ed",
"assets/packages/country_code_picker/flags/mt.png": "808538b29f6b248469a184bbf787a97f",
"assets/packages/country_code_picker/flags/ca.png": "bc87852952310960507a2d2e590c92bf",
"assets/packages/country_code_picker/flags/eg.png": "9e371179452499f2ba7b3c5ff47bec69",
"assets/packages/country_code_picker/flags/cz.png": "482c8ba16ff3d81eeef60650db3802e4",
"assets/packages/country_code_picker/flags/tf.png": "dc3f8c0d9127aa82cbd45b8861a67bf5",
"assets/packages/country_code_picker/flags/gb-eng.png": "0b05e615c5a3feee707a4d72009cd767",
"assets/packages/country_code_picker/flags/ly.png": "777f861e476f1426bf6663fa283243e5",
"assets/packages/country_code_picker/flags/us.png": "b1cb710eb57a54bc3eea8e4fba79b2c1",
"assets/packages/country_code_picker/flags/tj.png": "2407ba3e581ffd6c2c6b28e9692f9e39",
"assets/packages/country_code_picker/flags/ss.png": "f1c99aded110fc8a0bc85cd6c63895fb",
"assets/packages/country_code_picker/flags/dk.png": "f9d6bcded318f5910b8bc49962730afa",
"assets/packages/country_code_picker/flags/ad.png": "796914c894c19b68adf1a85057378dbc",
"assets/packages/country_code_picker/flags/vn.png": "7c8f8457485f14482dcab4042e432e87",
"assets/packages/country_code_picker/flags/to.png": "a93fdd2ace7777e70528936a135f1610",
"assets/packages/country_code_picker/flags/pe.png": "724d3525f205dfc8705bb6e66dd5bdff",
"assets/packages/country_code_picker/flags/nu.png": "c8bb4da14b8ffb703036b1bae542616d",
"assets/packages/country_code_picker/flags/ph.png": "de75e3931c41ae8b9cae8823a9500ca7",
"assets/packages/country_code_picker/flags/gp.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/gi.png": "58894db0e25e9214ec2271d96d4d1623",
"assets/packages/country_code_picker/flags/tc.png": "6f2d1a2b9f887be4b3568169e297a506",
"assets/packages/country_code_picker/flags/md.png": "7b273f5526b88ed0d632fd0fd8be63be",
"assets/packages/country_code_picker/flags/mg.png": "a562a819338427e57c57744bb92b1ef1",
"assets/packages/country_code_picker/flags/vg.png": "0f19ce4f3c92b0917902cb316be492ba",
"assets/packages/country_code_picker/flags/il.png": "b72b572cc199bf03eba1c008cd00d3cb",
"assets/packages/country_code_picker/flags/aw.png": "8966dbf74a9f3fd342b8d08768e134cc",
"assets/packages/country_code_picker/flags/na.png": "3499146c4205c019196f8a0f7a7aa156",
"assets/packages/country_code_picker/flags/bd.png": "5fbfa1a996e6da8ad4c5f09efc904798",
"assets/packages/country_code_picker/flags/cw.png": "db36ed08bfafe9c5d0d02332597676ca",
"assets/packages/country_code_picker/flags/li.png": "3cf7e27712e36f277ca79120c447e5d1",
"assets/packages/country_code_picker/flags/hr.png": "04cfd167b9564faae3b2dd3ef13a0794",
"assets/packages/country_code_picker/flags/al.png": "af06d6e1028d16ec472d94e9bf04d593",
"assets/packages/country_code_picker/flags/ms.png": "32daa6ee99335b73cb3c7519cfd14a61",
"assets/packages/country_code_picker/flags/je.png": "8d6482f71bd0728025134398fc7c6e58",
"assets/packages/country_code_picker/flags/gb-nir.png": "fc5305efe4f16b63fb507606789cc916",
"assets/packages/country_code_picker/flags/mr.png": "733d747ba4ec8cf120d5ebc0852de34a",
"assets/packages/country_code_picker/flags/pr.png": "ac1c4bcef3da2034e1668ab1e95ae82d",
"assets/packages/country_code_picker/flags/xk.png": "b75ba9ad218b109fca4ef1f3030936f1",
"assets/packages/country_code_picker/flags/tl.png": "b3475faa9840f875e5ec38b0e6a6c170",
"assets/packages/country_code_picker/flags/sx.png": "8fce7986b531ff8936540ad1155a5df5",
"assets/packages/country_code_picker/flags/af.png": "44bc280cbce3feb6ad13094636033999",
"assets/packages/country_code_picker/flags/cg.png": "7ea7b458a77558527c030a5580b06779",
"assets/packages/country_code_picker/flags/be.png": "498270989eaefce71c393075c6e154c8",
"assets/packages/country_code_picker/flags/ni.png": "6985ed1381cb33a5390258795f72e95a",
"assets/packages/country_code_picker/flags/sr.png": "e5719b1a8ded4e5230f6bac3efc74a90",
"assets/packages/country_code_picker/flags/nc.png": "a3ee8fc05db66f7ce64bce533441da7f",
"assets/packages/country_code_picker/flags/aq.png": "c57c903b39fe5e2ba1e01bc3d330296c",
"assets/packages/country_code_picker/flags/sm.png": "b41d5b7eb3679c2e477fbd25f5ee9e7d",
"assets/packages/country_code_picker/flags/za.png": "aa749828e6cf1a3393e0d5c9ab088af0",
"assets/packages/country_code_picker/flags/tn.png": "87f591537e0a5f01bb10fe941798d4e4",
"assets/packages/country_code_picker/flags/sv.png": "994c8315ced2a4d8c728010447371ea1",
"assets/packages/country_code_picker/flags/fj.png": "6030dc579525663142e3e8e04db80154",
"assets/packages/country_code_picker/flags/ag.png": "9bae91983418f15d9b8ffda5ba340c4e",
"assets/packages/country_code_picker/flags/cn.png": "6b8c353044ef5e29631279e0afc1a8c3",
"assets/packages/country_code_picker/flags/uy.png": "20c63ac48df3e394fa242d430276a988",
"assets/packages/country_code_picker/flags/ax.png": "ffffd1de8a677dc02a47eb8f0e98d9ac",
"assets/packages/country_code_picker/flags/se.png": "24d2bed25b5aad316134039c2903ac59",
"assets/packages/country_code_picker/flags/np.png": "35e3d64e59650e1f1cf909f5c6d85176",
"assets/packages/country_code_picker/flags/az.png": "967d8ee83bfe2f84234525feab9d1d4c",
"assets/packages/country_code_picker/flags/rs.png": "ee9ae3b80531d6d0352a39a56c5130c0",
"assets/packages/country_code_picker/flags/va.png": "cfbf48f8fcaded75f186d10e9d1408fd",
"assets/packages/country_code_picker/flags/ng.png": "15b7ad41c03c87b9f30c19d37f457817",
"assets/packages/country_code_picker/flags/gn.png": "765a0434cb071ad4090a8ea06797a699",
"assets/packages/country_code_picker/flags/um.png": "b1cb710eb57a54bc3eea8e4fba79b2c1",
"assets/packages/country_code_picker/flags/mw.png": "efc0c58b76be4bf1c3efda589b838132",
"assets/packages/country_code_picker/flags/dz.png": "93afdc9291f99de3dd88b29be3873a20",
"assets/packages/country_code_picker/flags/ai.png": "cfb0f715fc17e9d7c8662987fbe30867",
"assets/packages/country_code_picker/flags/mq.png": "446edd9300307eda562e5c9ac307d7f2",
"assets/packages/country_code_picker/flags/bo.png": "92c247480f38f66397df4eb1f8ff0a68",
"assets/packages/country_code_picker/flags/sa.png": "ef836bd02f745af03aa0d01003942d44",
"assets/packages/country_code_picker/flags/cv.png": "60d75c9d0e0cd186bb1b70375c797a0c",
"assets/packages/country_code_picker/flags/si.png": "922d047a95387277f84fdc246f0a8d11",
"assets/packages/country_code_picker/flags/gs.png": "524d0f00ee874af0cdf3c00f49fa17ae",
"assets/packages/country_code_picker/flags/ar.png": "bd71b7609d743ab9ecfb600e10ac7070",
"assets/packages/country_code_picker/flags/fk.png": "0e9d14f59e2e858cd0e89bdaec88c2c6",
"assets/packages/country_code_picker/flags/sk.png": "0f8da623c8f140ac2b5a61234dd3e7cd",
"assets/packages/country_code_picker/flags/lc.png": "055c35de209c63b67707c5297ac5079a",
"assets/packages/country_code_picker/flags/ls.png": "f2d4025bf560580ab141810a83249df0",
"assets/packages/country_code_picker/flags/gb-sct.png": "075bb357733327ec4115ab5cbba792ac",
"assets/packages/country_code_picker/flags/pf.png": "3ba7f48f96a7189f9511a7f77ea0a7a4",
"assets/packages/country_code_picker/flags/gt.png": "df7a020c2f611bdcb3fa8cd2f581b12f",
"assets/packages/country_code_picker/flags/gb.png": "fc5305efe4f16b63fb507606789cc916",
"assets/packages/country_code_picker/flags/tv.png": "493c543f07de75f222d8a76506c57989",
"assets/packages/country_code_picker/flags/kn.png": "65d2fc69949162f1bc14eb9f2da5ecbc",
"assets/packages/country_code_picker/flags/ci.png": "0f94edf22f735b4455ac7597efb47ca5",
"assets/packages/country_code_picker/flags/et.png": "2c5eec0cda6655b5228fe0e9db763a8e",
"assets/packages/country_code_picker/flags/dm.png": "b7ab53eeee4303e193ea1603f33b9c54",
"assets/packages/country_code_picker/flags/ck.png": "35c6c878d96485422e28461bb46e7d9f",
"assets/packages/country_code_picker/flags/bl.png": "30f55fe505cb4f3ddc09a890d4073ebe",
"assets/packages/country_code_picker/flags/zm.png": "29b67848f5e3864213c84ccf108108ea",
"assets/packages/country_code_picker/flags/ki.png": "69a7d5a8f6f622e6d2243f3f04d1d4c0",
"assets/packages/country_code_picker/flags/by.png": "03f5334e6ab8a537d0fc03d76a4e0c8a",
"assets/packages/country_code_picker/flags/hm.png": "600835121397ea512cea1f3204278329",
"assets/packages/country_code_picker/flags/gm.png": "c670404188a37f5d347d03947f02e4d7",
"assets/packages/country_code_picker/flags/lb.png": "b21c8d6f5dd33761983c073f217a0c4f",
"assets/packages/country_code_picker/flags/lt.png": "e38382f3f7cb60cdccbf381cea594d2d",
"assets/packages/country_code_picker/flags/hu.png": "66c22db579470694c7928598f6643cc6",
"assets/packages/country_code_picker/flags/pw.png": "92ec1edf965de757bc3cca816f4cebbd",
"assets/packages/country_code_picker/flags/fi.png": "a79f2dbc126dac46e4396fcc80942a82",
"assets/packages/country_code_picker/flags/nf.png": "9a4a607db5bc122ff071cbfe58040cf7",
"assets/packages/country_code_picker/flags/cl.png": "658cdc5c9fd73213495f1800ce1e2b78",
"assets/packages/country_code_picker/flags/gf.png": "71678ea3b4a8eeabd1e64a60eece4256",
"assets/packages/country_code_picker/flags/jm.png": "3537217c5eeb048198415d398e0fa19e",
"assets/packages/country_code_picker/flags/mp.png": "60b14b06d1ce23761767b73d54ef613a",
"assets/packages/country_code_picker/flags/pa.png": "49d53d64564555ea5976c20ea9365ea6",
"assets/packages/country_code_picker/flags/hn.png": "09ca9da67a9c84f4fc25f96746162f3c",
"assets/packages/country_code_picker/flags/td.png": "51b129223db46adc71f9df00c93c2868",
"assets/packages/country_code_picker/flags/bs.png": "814a9a20dd15d78f555e8029795821f3",
"assets/packages/country_code_picker/flags/lr.png": "1c159507670497f25537ad6f6d64f88d",
"assets/packages/country_code_picker/flags/fr.png": "79cbece941f09f9a9a46d42cabd523b1",
"assets/packages/country_code_picker/flags/tz.png": "389451347d28584d88b199f0cbe0116b",
"assets/packages/country_code_picker/flags/bn.png": "94d863533155418d07a607b52ca1b701",
"assets/packages/country_code_picker/flags/ch.png": "8d7a211fd742d4dea9d1124672b88cda",
"assets/packages/country_code_picker/flags/om.png": "79a867771bd9447d372d5df5ec966b36",
"assets/packages/country_code_picker/flags/gb-wls.png": "72005cb7be41ac749368a50a9d9f29ee",
"assets/packages/country_code_picker/flags/gd.png": "42ad178232488665870457dd53e2b037",
"assets/packages/country_code_picker/flags/bg.png": "d591e9fa192837524f57db9ab2020a9e",
"assets/packages/country_code_picker/flags/gr.png": "86aeb970a79aa561187fa8162aee2938",
"assets/packages/country_code_picker/flags/mn.png": "02af8519f83d06a69068c4c0f6463c8a",
"assets/packages/country_code_picker/flags/ht.png": "009d5c3627c89310bd25522b636b09bf",
"assets/packages/country_code_picker/flags/it.png": "99f67d3c919c7338627d922f552c8794",
"assets/packages/country_code_picker/flags/ps.png": "b6e1bd808cf8e5e3cd2b23e9cf98d12e",
"assets/packages/country_code_picker/flags/bh.png": "6e48934b768705ca98a7d1e56422dc83",
"assets/packages/country_code_picker/flags/ye.png": "1d5dcbcbbc8de944c3db228f0c089569",
"assets/packages/country_code_picker/flags/as.png": "830d17d172d2626e13bc6397befa74f3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/fonts/NunitoSans-Regular.ttf": "621913f3c27d99ba45817a39036b7cf4",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Montserrat-Regular.ttf": "a8a117360e71de94ae3b0b0f8d15b44d",
"index.html": "667ea7d9f8cd121b92af105f72b0a24e",
"/": "667ea7d9f8cd121b92af105f72b0a24e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

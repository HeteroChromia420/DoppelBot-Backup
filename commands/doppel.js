const Discord = require('discord.js');
module.exports = {
	name: 'doppel',
  description: 'Get a random picture of Doppel',
	execute(message) {

    function randomInt(min, max) {
      return min + Math.floor((max - min) * Math.random());
    }

    chance = randomInt(1, 100);

    const responses = [
      "Here's your Doppel picture!",
      "Doppel's cute, isn't she? :heart:",
      "I hope you're having a great time! :wink: Here's a Doppel picture for you!",
    ];
    const doppel_imgs = [
      './images/1f6d3f69f297eb0cbbd4fa55b2eb39acd7ef64fe_full.jpg',
      './images/5f82f4034113f2759e9aed767bf8a20f.jpg',
      './images/13dd2f72488e4b74cbc4736378e7dad9.jpg',
      './images/5e8b7ab2-032f-42cd-a5b5-321813847b0c.png',
      './images/16eee208-27d3-4123-8334-675ab64647f6.png',
      './images/39eb5bdd-4051-49ac-974f-1f353104e758.png',
      './images/754a4977-ebf7-42b5-8784-86167f2d11c8.png',
      './images/59cb0b93-476c-44c3-8d6a-98758895763e.png',
      './images/1252ac67-c134-4b40-9755-55ca56433d87.png',
      './images/02291e16-369c-42fc-a99f-df1df30376c8.png',
      './images/2485cc11-45dc-4133-a5aa-45760be5f7b0.png',
      './images/9372f7b7-cd18-4fed-8333-2a67712c742e.png',
      './images/1086212i.jpeg',
      './images/24862a61-a92b-4e7b-a10f-6c0d9e2bd813.png',
      './images/1143719i.jpeg',
      './images/1626232i.jpeg',
      './images/2248953i.jpeg',
      './images/6424877i.jpeg',
      './images/6440424i.jpeg',
      './images/8071897i.jpeg',
      './images/16121356_p0_square1200.jpg',
      './images/45093982_p0_square1200.jpg',
      './images/471705293.2.jpg',
      './images/ab7a13b9-009b-40cc-b604-dc6068b24c1b.png',
      './images/bf5e2a75-784a-484e-bad7-678090a39aa9.png',
      './images/ce7ed27b-63d7-4de9-8f5c-6c1ed6b6698e.png',
      './images/db52ba7d-0d9b-4811-a89d-758be8ca0c16.png',
      './images/doppel13.png',
      './images/doppel11.jpg',
      './images/doppel13.jpg',
      './images/doppel14.png',
      './images/Doppel4.jpeg',
      './images/Doppel6.jpg',
      './images/Doppel7.png',
      './images/doppelganger_arle_puyopuyo_and_1_more_drawn_by_kawamochi_mocchii__28ae11906bc6d9105748216fb874f3f3.png',
      './images/doppelganger_arle_puyopuyo_and_1_more_drawn_by_tsukino_neru__2ba4718440e21be03fd26ba7bfec3e95.jpg',
      './images/doppelganger_arle_puyopuyo_and_1_more_drawn_by_zubon_no_onara__sample-18828f09a416042571183f81e46319.jpg',
      './images/doppellaying.jpg',
      './images/doppelonbreak.png',
      './images/EN9wLmeWsAIGQ82.jpeg',
      './images/fdc88299-f8d9-478b-983f-0f34a07ff2ef.png',
      './images/flat1000x1000075f.u2.jpg',
      './images/gigavoidhole.jpeg',
      './images/image164560795l.png',
      './images/megavoidhole.png',
      './images/merryfuckingxmas.jpeg',
      './images/picture_pc_79cfb9c4e9e99700dce5b6cabe560d94.jpg.png',
      './images/tumblr_d59c68b25c5698ed9d913ba51c5bf0d9_1c3d21bf_640.png',
      './images/twoarlestwice2.jpeg',
      './images/woarlestwice3.jpeg',
      './images/twoarlestwice4.jpeg',
      './images/Voidhole.jpg',
      './images/DoL8sKPUcAAb81x.jpeg',
      './images/doppelpfp.png',
      './images/EQPqXovU8AA7XwY.jpeg',
      './images/EUD9zxiUEAAgcaR.jpeg',
      './images/ER7y9z4U0AAEC72.jpeg',
      './images/re.jpeg',
      './images/unnamed.jpg',
      './images/doppelganger_arle_puyopuyo_and_1_more_drawn_by_tsukino_neru__2ba4718440e21be03fd26ba7bfec3e95.jpg',
      './images/ESRFvYOU0AEjOJt.jpgsmall.jpeg',
      './images/4838999i.jpeg',
      './images/2987601-tenLxHNjMEtMuAQN.png',
      './images/566.jpeg',
      './images/c469.jpg',
      './images/image158144862l.png',
      './images/DoCuhm5XoAAikZs.jpeg',
      './images/C1f_IF_UQAADKX_.jpeg',
      './images/C0bxbA5UQAQ0dle.jpeg',
      './images/8625520i.jpeg',
      './images/1184609i.jpeg',
      './images/45.png',
      './images/doppel.jpeg',
      './images/doppel16.jpg',
      './images/doppelsmirk.png',
      './images/ETtO5c8UMAAoemv.jpeg',
      './images/EV_OBXbXkAcx-_G.jpeg',
      './images/EWVP_PCUwAAixDP.jpeg',
      './images/EVPQnKJUcAIcYCA.jpeg',
      './images/doppel_puyo4.jpeg',
      './images/external-content.duckduckgo.com.jpeg',
      './images/image0.png.jpeg',
      './images/B7Ewh3HCAAELl9A.jpeg',
      './images/B95B4WKCQAETvW6.jpeg',
      './images/B_dSAaRUwAAYqYU.jpeg',
      './images/Bln_huDCcAAt4J2.jpeg',
      './images/C7sJh8jUwAApay7.jpeg',
      './images/C9Dxlt_UQAEph1J.jpeg',
      './images/C9DxluHVoAA98pW.jpeg',
      './images/C9DxlvjUAAA4KOw.jpeg',
      './images/C9DxlwJU0AAfY-Z.jpeg',
      './images/C68JBX5WwAA_A-0.jpeg',
      './images/CK5hJJ3UsAAOxRR.jpeg',
      './images/CvSzI7DVIAAEIyX.jpeg',
      './images/CwwA9wyUcAY8DWA.jpeg',
      './images/CZkczBJUMAApWhs.jpeg',
      './images/DFGbkFhUMAYAnX7.jpeg',
      './images/DLmp1mQV4AAGysp.jpeg',
      './images/DNT-PA8VQAAz46P.jpeg',
      './images/DP4JW6oUQAAkjHN.jpeg',
      './images/DQr3y8TVoAY2AIG.jpeg',
      './images/DU3cVYLUQAASw36.jpeg', 
      './images/DXRDBvNV4AAs_eh.jpeg',
      './images/DyowTwvUcAA5lCW.jpeg',
      './images/EI1wce2UwAA5mdF.jpeg',
      './images/EKXGsLxUYAIHH47.jpeg',
      './images/ERdx_4VU8AArDcD.jpeg',
      './images/ERh-tJEU0AE7HQC.jpeg',
      './images/ES_MBwXUMAEWJf-.jpeg',
      './images/EUL62tyUcAEiv_R.jpeg',
      './images/EV_OBXbXkAcx-_G.jpeg',
      './images/EWcvr8EUMAAo2gp.png', 
      './images/EXB0A15UwAE_VCe.jpeg',
      './images/EXbNA42UMAEu-8U.jpeg',
      './images/EXIs6kCWsAMEosg.png',
      './images/EXp8yJkUEAcWg1E.jpeg',
      './images/EXQehW2UEAAZwpA.jpeg',
      './images/EY9wamfXYAEeo9H.png',
      './images/EY9wbg4WAAAJwj_.jpeg',
      './images/EY9xItPX0AAX5xl.jpeg',
      './images/EYBKzKnXYAMQMyx.jpeg',
      './images/EYOkvpiU4AAJPVC.jpeg',      
];
   
if (chance == 58) {
  message.channel.send("Here's your... wait, this isn't Doppel... Could anything ELSE go wrong today?!?!", {
    file: "./images/mq2.png"
  });
}
if (chance == 27) {
  message.channel.send("Here's your... wait, this isn't Doppel... it's Boreas! At this time of year, at this time of day, in this part of the country, localized entirely within this channel?!", {
    file: "./images/borealis.png"
  });
}
if ((chance != 58) && (chance != 27)) {
message.channel.send(responses[Math.floor(Math.random() * responses.length)], {
  file: doppel_imgs[Math.floor(Math.random() * doppel_imgs.length)]
});
}
	},
};

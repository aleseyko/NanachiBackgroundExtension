let images = [
  'https://images5.alphacoders.com/863/thumb-1920-863979.png',
  'https://images2.alphacoders.com/102/thumb-1920-1024643.png'
];

let audios = [
  'http://www.flashkit.com/imagesvr_ce/flashkit/soundfx/Ambience/Woop-Ryan_Cur-8800/Woop-Ryan_Cur-8800_hifi.mp3'
];
document.body.style.backgroundImage = `url("${ images[Math.floor(Math.random() * images.length)] }")`;
document.getElementById('audioForNaa').src = audios[Math.floor(Math.random() * audios.length)];

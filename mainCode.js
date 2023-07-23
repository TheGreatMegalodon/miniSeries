const gameOptions = {
  
  info: {
    name: "MiniSeries",
    version: "0.0.4",
    creator: "Neo Space",
    builder: "Bylolopro360",
    developer: "Megalodon",
  },
  
  introductionText: "Good luck on winning the Prize!",
  Allow_cheats: true,
  
  ships: [
    '{"name":"Odyssey","level":1,"model":1,"size":1,"specs":{"shield":{"capacity":[100,100],"reload":[7,7]},"generator":{"capacity":[55,55],"reload":[20,20]},"ship":{"mass":100,"speed":[140,140],"rotation":[120,120],"acceleration":[120,120]}},"tori":{"circle":{"segments":20,"radius":95,"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20],"height":[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],"texture":[63,63,4,10,4,4,10,4,63,63,63,63,3,10,3,3,10,3,63]}},"bodies":{"main":{"section_segments":20,"offset":{"x":0,"y":-10,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-130,-130,-85,-70,-60,-20,-25,40,40,100,90],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,20,40,45,10,12,30,30,40,30,0],"height":[0,20,25,25,10,12,25,25,20,10,0],"texture":[4,15,63,4,4,4,11,10,4,12]},"laser1":{"section_segments":12,"offset":{"x":110,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-25,-30,-20,0,20,30,20],"z":[0,0,0,0,0,0,0]},"width":[0,3,5,5,5,3,0],"height":[0,3,5,5,5,3,0],"texture":[12,6,63,63,6,12],"laser":{"damage":[5,5],"rate":3,"type":1,"speed":[200,200],"number":1,"error":0}},"laser2":{"section_segments":12,"offset":{"x":110,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-25,-30,-20,0,20,30,20],"z":[0,0,0,0,0,0,0]},"width":[0,3,5,5,5,3,0],"height":[0,3,5,5,5,3,0],"texture":[12,6,63,63,6,12],"angle":180,"laser":{"damage":[5,5],"rate":3,"type":1,"speed":[200,200],"number":1,"error":0}},"cannon":{"section_segments":6,"offset":{"x":0,"y":-115,"z":0},"position":{"x":[0,0,0,0],"y":[-25,-30,-20,0],"z":[0,0,0,0]},"width":[0,15,9,7],"height":[0,10,9,7],"texture":[6,6,6,10],"laser":{"damage":[50,50],"rate":1,"type":1,"speed":[110,110],"number":1,"error":0,"recoil":100}},"cockpit":{"section_segments":10,"offset":{"x":0,"y":0,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-30,-10,0,10,30],"z":[0,0,0,0,0]},"width":[0,12,15,10,0],"height":[0,20,22,18,0],"texture":[9]},"bumpers":{"section_segments":8,"offset":{"x":85,"y":20,"z":0},"position":{"x":[-5,0,5,10,5,0,-5],"y":[-85,-80,-40,0,20,50,55],"z":[0,0,0,0,0,0,0]},"width":[0,10,15,15,15,5,0],"height":[0,20,35,35,25,15,0],"texture":[11,2,63,4,3],"angle":0},"toppropulsors":{"section_segments":10,"offset":{"x":17,"y":50,"z":15},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,50,40],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,10,0],"texture":[3,4,10,3,3,63,4],"propeller":true},"bottompropulsors":{"section_segments":10,"offset":{"x":17,"y":50,"z":-15},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,50,40],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,10,0],"texture":[3,4,10,3,3,63,4],"propeller":true}},"wings":{"topjoin":{"offset":{"x":0,"y":-3,"z":0},"doubleside":true,"length":[100],"width":[20,20],"angle":[25],"position":[0,0,0,50],"texture":[1],"bump":{"position":10,"size":30}},"bottomjoin":{"offset":{"x":0,"y":-3,"z":0},"doubleside":true,"length":[100],"width":[20,20],"angle":[-25],"position":[0,0,0,50],"texture":[1],"bump":{"position":-10,"size":30}}},"typespec":{"name":"Odyssey","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[100,100],"reload":[7,7]},"generator":{"capacity":[55,55],"reload":[20,20]},"ship":{"mass":100,"speed":[140,140],"rotation":[120,120],"acceleration":[120,120]}},"shape":[2.906,2.912,2.631,2.245,1.968,0.908,0.922,2.138,2.247,2.205,2.338,2.337,2.318,2.318,2.337,2.338,2.244,2.266,2.28,1.172,1.325,1.554,1.945,2.069,2.036,1.944,2.036,2.069,1.945,1.554,1.325,1.172,2.28,2.266,2.244,2.338,2.337,2.318,2.318,2.337,2.338,2.205,2.247,2.138,0.922,0.908,1.968,2.245,2.631,2.912],"lasers":[{"x":2.2,"y":-0.6,"z":0,"angle":0,"damage":[5,5],"rate":3,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.2,"y":-0.6,"z":0,"angle":0,"damage":[5,5],"rate":3,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":2.2,"y":0.6,"z":0,"angle":180,"damage":[5,5],"rate":3,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.2,"y":0.6,"z":0,"angle":-180,"damage":[5,5],"rate":3,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-2.9,"z":0,"angle":0,"damage":[50,50],"rate":1,"type":1,"speed":[110,110],"number":1,"spread":0,"error":0,"recoil":100}],"radius":2.912}}',
    '{"name":"Fly","level":7,"model":1,"size":6,"zoom":1.1,"specs":{"shield":{"capacity":[100000,100000],"reload":[1e-30,1e-30]},"generator":{"capacity":[2000,2000],"reload":[300,300]},"ship":{"mass":750,"speed":[50,50],"rotation":[30,30],"acceleration":[200,200]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-65,-60,-50,-20,10,30,55,75,60],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,8,10,30,25,30,18,15,0],"height":[0,6,8,12,20,20,18,15,0],"propeller":true,"texture":[4,63,10,1,1,1,12,17]},"cockpit":{"section_segments":12,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-15,0,20,30,60],"z":[0,0,0,0,0]},"width":[0,13,17,10,5],"height":[0,18,25,18,5],"propeller":false,"texture":[7,9,9,4,4]},"cannon":{"section_segments":6,"offset":{"x":0,"y":-15,"z":-10},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,0],"height":[0,5,8,11,10,0],"angle":0,"laser":{"damage":[50,50],"rate":4,"type":1,"speed":[350,350],"number":1,"error":2.5},"propeller":false,"texture":[3,3,10,3]},"cannon2":{"section_segments":6,"offset":{"x":1,"y":-15,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-35,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,0],"height":[0,5,8,11,10,0],"angle":45,"laser":{"damage":[20,20],"rate":1,"type":1,"speed":[700,600],"number":5,"angle":30},"propeller":false,"texture":[3,3,10,3]},"cannon3":{"section_segments":6,"offset":{"x":1,"y":-15,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-35,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,0],"height":[0,5,8,11,10,0],"angle":80,"laser":{"damage":[20,20],"rate":1,"type":1,"speed":[700,600],"number":5,"angle":30},"propeller":false,"texture":[3,3,10,3]},"cannon4":{"section_segments":6,"offset":{"x":10,"y":40,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-20,-30,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,0],"height":[0,5,8,11,10,0],"angle":210,"laser":{"damage":[50,50],"rate":1,"type":1,"speed":[250,250],"number":5,"recoil":10,"error":0,"angle":50},"propeller":false,"texture":[3,3,10,3]}},"wings":{"main":{"length":[60,20],"width":[100,50,40],"angle":[-10,10],"position":[0,20,10],"doubleside":true,"offset":{"x":0,"y":10,"z":5},"bump":{"position":30,"size":20},"texture":[11,63]}},"typespec":{"name":"Fly","level":7,"model":1,"code":701,"specs":{"shield":{"capacity":[100000,100000],"reload":[1e-30,1e-30]},"generator":{"capacity":[2000,2000],"reload":[300,300]},"ship":{"mass":750,"speed":[50,50],"rotation":[30,30],"acceleration":[200,200]}},"shape":[7.815,7.817,6.243,6.208,7.429,7.364,4.813,5.693,6.612,6.542,4.84,5.434,6.24,9.524,9.754,10.151,10.603,10.441,9.966,9.639,8.713,8.088,8.543,9.178,9.162,9.017,9.162,9.178,8.543,8.088,8.713,9.639,9.966,10.441,10.603,10.151,9.754,9.524,9.454,5.434,4.84,6.542,6.612,5.693,4.813,7.364,7.429,6.208,6.243,7.817],"lasers":[{"x":0,"y":-7.8,"z":-1.2,"angle":0,"damage":[50,50],"rate":4,"type":1,"speed":[350,350],"number":1,"spread":0,"error":2.5,"recoil":0},{"x":-4.123,"y":-6.043,"z":0,"angle":45,"damage":[20,20],"rate":1,"type":1,"speed":[700,600],"number":5,"spread":30,"error":0,"recoil":0},{"x":4.123,"y":-6.043,"z":0,"angle":-45,"damage":[20,20],"rate":1,"type":1,"speed":[700,600],"number":5,"spread":30,"error":0,"recoil":0},{"x":-5.789,"y":-2.842,"z":0,"angle":80,"damage":[20,20],"rate":1,"type":1,"speed":[700,600],"number":5,"spread":30,"error":0,"recoil":0},{"x":5.789,"y":-2.842,"z":0,"angle":-80,"damage":[20,20],"rate":1,"type":1,"speed":[700,600],"number":5,"spread":30,"error":0,"recoil":0},{"x":3,"y":7.918,"z":0,"angle":210,"damage":[50,50],"rate":1,"type":1,"speed":[250,250],"number":5,"spread":50,"error":0,"recoil":10},{"x":-3,"y":7.918,"z":0,"angle":-210,"damage":[50,50],"rate":1,"type":1,"speed":[250,250],"number":5,"spread":50,"error":0,"recoil":10}],"radius":10.603}}',
    // spectator
    '{"name":"Spectator","level":1.9,"model":1,"size":0.025,"zoom":0.075,"specs":{"shield":{"capacity":[1e-30,1e-30],"reload":[1000,1000]},"generator":{"capacity":[1e-30,1e-30],"reload":[1,1]},"ship":{"mass":1,"speed":[200,200],"rotation":[1000,1000],"acceleration":[1000,1000]}},"bodies":{"face":{"section_segments":100,"angle":0,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-2,-2,2,2],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,1,1,0],"height":[0,1,1,0],"vertical":true,"texture":[6]}},"typespec":{"name":"Spectator","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[1e-30,1e-30],"reload":[1000,1000]},"generator":{"capacity":[1e-30,1e-30],"reload":[1,1]},"ship":{"mass":1,"speed":[200,200],"rotation":[1000,1000],"acceleration":[1000,1000]}},"shape":[0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001],"lasers":[],"radius":0.001}}',
    // ability uses
    '{"name":"Advanced-Fighter","level":3,"model":1,"size":1,"zoom":0.8,"specs":{"shield":{"capacity":[350,350],"reload":[6,6]},"generator":{"capacity":[200,200],"reload":[60,60]},"ship":{"mass":400,"speed":[96,96],"rotation":[50,50],"acceleration":[100,100]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-100,-80,-90,-50,0,50,100,90],"z":[0,0,0,0,0,0,0,0]},"width":[0,5,15,25,40,25,20,0],"height":[0,5,10,30,25,20,10,0],"propeller":true,"texture":[4,4,1,1,10,1,1],"laser":{"damage":[90,150],"rate":1,"type":2,"speed":[180,240],"number":1,"recoil":150,"error":0}},"cockpit":{"section_segments":12,"offset":{"x":0,"y":-35,"z":33},"position":{"x":[0,0,0,0,0,0,0],"y":[-30,-20,10,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,12,15,10,0],"height":[0,12,18,12,0],"propeller":false,"texture":[7,9,9,7]},"side_propellers":{"section_segments":10,"offset":{"x":30,"y":30,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-50,-20,0,20,80,70],"z":[0,0,0,0,0,0]},"width":[15,20,10,25,10,0],"height":[10,15,15,10,5,0],"angle":0,"propeller":true,"texture":[3,63,4,10,3]},"cannons":{"section_segments":12,"offset":{"x":70,"y":50,"z":-30},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,50,55],"z":[0,0,0,0,0,0,0]},"width":[0,5,10,10,15,10,0],"height":[0,5,15,15,10,5,0],"angle":0,"propeller":false,"texture":[4,4,10,4,63,4],"laser":{"damage":[6,12],"rate":3,"type":1,"speed":[100,150],"number":1,"error":0}},"cannons2":{"section_segments":12,"offset":{"x":95,"y":50,"z":-40},"position":{"x":[0,0,0,0],"y":[-50,-20,40,50],"z":[0,0,0,0]},"width":[2,5,5,2],"height":[2,15,15,2],"angle":0,"propeller":false,"texture":6,"laser":{"damage":[4,10],"rate":3,"type":1,"speed":[100,150],"number":1,"error":0}}},"wings":{"main":{"length":[100,30,20],"width":[100,50,40,30],"angle":[-25,20,25],"position":[30,70,50,50],"bump":{"position":-20,"size":20},"offset":{"x":0,"y":0,"z":0},"texture":[11,11,63],"doubleside":true},"winglets":{"length":[40],"width":[40,20,30],"angle":[10,-10],"position":[-50,-70,-65],"bump":{"position":0,"size":30},"texture":63,"offset":{"x":0,"y":0,"z":0}}},"typespec":{"name":"Advanced-Fighter","level":2,"model":1,"code":201,"specs":{"shield":{"capacity":[350,350],"reload":[6,6]},"generator":{"capacity":[200,200],"reload":[60,60]},"ship":{"mass":400,"speed":[96,96],"rotation":[50,50],"acceleration":[100,100]}},"shape":[2,1.825,1.727,1.752,1.783,1.469,0.915,0.853,0.83,0.971,0.96,0.941,0.948,1.98,2.827,2.946,3.032,2.84,2.718,2.786,2.561,2.427,2.338,2.313,2.24,2.004,2.24,2.313,2.338,2.427,2.561,2.786,2.718,2.84,3.032,2.946,2.827,1.98,1.94,0.941,0.96,0.971,0.83,0.853,0.915,1.469,1.783,1.752,1.727,1.825],"lasers":[{"x":0,"y":-2,"z":0.2,"angle":0,"damage":[90,150],"rate":1,"type":2,"speed":[180,240],"number":1,"spread":0,"error":0,"recoil":150},{"x":1.4,"y":0,"z":-0.6,"angle":0,"damage":[6,12],"rate":3,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.4,"y":0,"z":-0.6,"angle":0,"damage":[6,12],"rate":3,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.9,"y":0,"z":-0.8,"angle":0,"damage":[4,10],"rate":3,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.9,"y":0,"z":-0.8,"angle":0,"damage":[4,10],"rate":3,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.032}}',
    '{"name":"Scorpion","level":3,"model":2,"size":1,"zoom":0.8,"specs":{"shield":{"capacity":[400,400],"reload":[7,7]},"generator":{"capacity":[175,175],"reload":[50,50]},"ship":{"mass":450,"speed":[108,108],"rotation":[70,70],"acceleration":[100,100]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-90,-40,-30,0,50,100,120,110],"z":[-10,-5,0,0,0,0,20,20]},"width":[0,12,20,15,25,10,5],"height":[0,10,15,25,15,10,5],"texture":[1,4,63,11,11,4],"propeller":false},"tail":{"section_segments":14,"offset":{"x":0,"y":70,"z":50},"position":{"x":[0,0,0,0,0,0],"y":[-70,-25,-10,20,40,50],"z":[0,0,0,0,-10,-20]},"width":[0,5,35,25,5,5],"height":[0,5,25,20,5,5],"texture":[6,4,63,10,4],"laser":{"damage":[50,100],"rate":0.9,"type":2,"speed":[170,230],"number":1,"angle":0,"error":0,"recoil":100}},"cockpit":{"section_segments":8,"offset":{"x":13,"y":-44,"z":12},"position":{"x":[-5,0,0,0,0],"y":[-15,-5,0,5,15],"z":[0,0,0,1,0]},"width":[0,8,10,8,0],"height":[0,5,5,5,0],"texture":[6,5],"propeller":false},"deco":{"section_segments":8,"offset":{"x":70,"y":0,"z":-10},"position":{"x":[0,0,0,10,-5,0,0,0],"y":[-115,-80,-100,-60,-30,-10,20,0],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,10,15,15,20,10,0],"height":[1,5,15,20,35,30,10,0],"texture":[6,6,1,1,11,2,12],"laser":{"damage":[2,3],"rate":1.8,"type":1,"speed":[130,170],"number":2,"angle":5,"error":0},"propeller":true},"wingends":{"section_segments":8,"offset":{"x":105,"y":-80,"z":-10},"position":{"x":[0,2,4,2,0],"y":[-20,-10,0,10,20],"z":[0,0,0,0,0]},"width":[2,3,6,3,2],"height":[5,15,22,17,5],"texture":4,"angle":0,"propeller":false}},"wings":{"main":{"length":[80,30],"width":[40,30,20],"angle":[-10,20],"position":[30,-50,-80],"texture":63,"bump":{"position":30,"size":10},"offset":{"x":0,"y":0,"z":0}},"font":{"length":[80,30],"width":[20,15],"angle":[-10,20],"position":[-20,-40],"texture":4,"bump":{"position":30,"size":10},"offset":{"x":0,"y":0,"z":0}}},"typespec":{"name":"Scorpion","level":2,"model":2,"code":202,"specs":{"shield":{"capacity":[400,400],"reload":[7,7]},"generator":{"capacity":[175,175],"reload":[50,50]},"ship":{"mass":450,"speed":[108,108],"rotation":[70,70],"acceleration":[100,100]}},"shape":[1.8,1.423,1.157,1.096,2.703,2.659,2.922,2.929,2.811,2.067,1.739,1.8,1.811,1.732,1.676,1.608,0.729,0.696,0.684,0.685,0.817,1.487,1.735,1.955,2.24,2.402,2.24,1.955,1.735,1.487,0.817,0.685,0.684,0.696,0.729,1.608,1.676,1.732,1.811,1.8,1.739,2.067,2.811,2.929,2.922,2.659,2.703,1.096,1.157,1.423],"lasers":[{"x":0,"y":0,"z":1,"angle":0,"damage":[50,100],"rate":0.9,"type":2,"speed":[170,230],"number":1,"spread":0,"error":0,"recoil":100},{"x":1.4,"y":-2.3,"z":-0.2,"angle":0,"damage":[2,3],"rate":1.8,"type":1,"speed":[130,170],"number":2,"spread":5,"error":0,"recoil":0},{"x":-1.4,"y":-2.3,"z":-0.2,"angle":0,"damage":[2,3],"rate":1.8,"type":1,"speed":[130,170],"number":2,"spread":5,"error":0,"recoil":0}],"radius":2.929}}',
    '{"name":"Marauder","level"32,"model":3,"size":1,"zoom":0.8,"specs":{"shield":{"capacity":[350,350],"reload":[11,11]},"generator":{"capacity":[160,160],"reload":[40,40]},"ship":{"mass":250,"speed":[132,132],"rotation":[80,80],"acceleration":[120,120]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":-20,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-65,-75,-55,-40,0,30,60,80,90,80],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,6,18,23,30,25,25,30,35,0],"height":[0,5,10,12,12,20,15,15,15,0],"texture":[6,4,1,10,1,1,11,12,17],"propeller":true,"laser":{"damage":[10,16],"rate":10,"type":1,"speed":[170,200],"recoil":0,"number":1,"error":0}},"cockpit":{"section_segments":[40,90,180,270,320],"offset":{"x":0,"y":-85,"z":22},"position":{"x":[0,0,0,0,0,0],"y":[15,35,60,95,125],"z":[-1,-2,-1,-1,3]},"width":[5,12,14,15,5],"height":[0,12,15,15,0],"texture":[8.98,8.98,4]},"outriggers":{"section_segments":10,"offset":{"x":25,"y":0,"z":-10},"position":{"x":[-5,-5,8,-5,0,0,0,0,0,0],"y":[-100,-125,-45,0,30,40,70,80,100,90],"z":[10,10,5,5,0,0,0,0,0,0,0,0]},"width":[0,6,10,10,15,15,15,15,10,0],"height":[0,10,20,25,25,25,25,25,20,0],"texture":[13,4,4,63,4,18,4,13,17],"laser":{"damage":[4,8],"rate":3,"type":1,"speed":[110,140],"recoil":0,"number":1,"error":0},"propeller":true},"intake":{"section_segments":12,"offset":{"x":25,"y":-5,"z":10},"position":{"x":[0,0,5,0,-3,0,0,0,0,0],"y":[-10,-30,-5,35,60,70,85,100,85],"z":[0,-6,0,0,0,0,0,0,0,0]},"width":[0,5,10,10,15,10,10,5,0],"height":[0,15,15,20,20,15,15,5,0],"texture":[6,4,63,4,63,18,4,17]}},"wings":{"main":{"length":[20,70,35],"width":[50,55,40,20],"angle":[0,-20,0],"position":[20,20,70,25],"texture":[3,18,63],"doubleside":true,"bump":{"position":30,"size":15},"offset":{"x":0,"y":0,"z":13}},"spoiler":{"length":[20,45,0,5],"width":[40,40,20,30,0],"angle":[0,20,90,90],"position":[60,60,80,80,90],"texture":[10,11,63],"doubleside":true,"bump":{"position":30,"size":18},"offset":{"x":0,"y":0,"z":30}},"font":{"length":[37],"width":[40,15],"angle":[-10],"position":[0,-45],"texture":[63],"doubleside":true,"bump":{"position":30,"size":10},"offset":{"x":35,"y":-20,"z":10}},"shields":{"doubleside":true,"offset":{"x":12,"y":60,"z":-15},"length":[0,15,45,20],"width":[30,30,65,65,30,30],"angle":[30,30,90,150],"position":[10,10,0,0,10],"texture":[4],"bump":{"position":0,"size":4}}},"typespec":{"name":"Marauder","level":2,"model":3,"code":203,"specs":{"shield":{"capacity":[350,350],"reload":[11,11]},"generator":{"capacity":[160,160],"reload":[40,40]},"ship":{"mass":250,"speed":[132,132],"rotation":[80,80],"acceleration":[120,120]}},"shape":[1.904,2.545,2.552,2.04,1.685,1.45,2.036,1.958,1.591,1.222,1.003,0.857,0.793,2.435,2.494,2.515,2.457,2.418,2.456,2.487,2.272,2.094,2.116,2.103,2.036,1.603,2.036,2.103,2.116,2.094,2.272,2.487,2.456,2.418,2.457,2.515,2.494,2.435,0.793,0.857,1.003,1.222,1.591,1.958,2.036,1.45,1.685,2.04,2.552,2.545],"lasers":[{"x":0,"y":-1.9,"z":0.2,"angle":0,"damage":[10,16],"rate":10,"type":1,"speed":[170,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.4,"y":-2.5,"z":-0.2,"angle":0,"damage":[4,8],"rate":3,"type":1,"speed":[110,140],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.4,"y":-2.5,"z":-0.2,"angle":0,"damage":[4,8],"rate":3,"type":1,"speed":[110,140],"number":1,"spread":0,"error":0,"recoil":0}],"radius":2.552}}',
    '{"name":"Condor","level":3,"model":4,"size":1,"zoom":0.8,"specs":{"shield":{"capacity":[400,400],"reload":[10,10]},"generator":{"capacity":[130,130],"reload":[48,48]},"ship":{"mass":200,"speed":[126,126],"rotation":[70,70],"acceleration":[120,120]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-110,-95,-100,-100,-45,-40,-25,-23,15,20,55,80,100,90],"z":[-10,-9,-8,-7,-6,-4,-2,0,0,0,0,0,0,0]},"width":[0,2,5,10,25,27,27,25,25,27,40,35,30,0],"height":[0,2,5,10,25,27,27,25,25,27,20,15,10,0],"texture":[6,2,3,10,5,63,5,2,5,3,63,11,4],"propeller":true,"laser":{"damage":[30,60],"rate":2,"type":2,"speed":[150,200],"number":1,"angle":0,"error":0}},"cannons":{"section_segments":12,"offset":{"x":75,"y":30,"z":-25},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,50,55],"z":[0,0,0,0,0,0,0]},"width":[0,5,10,10,10,10,0],"height":[0,5,15,15,10,5,0],"angle":0,"laser":{"damage":[3,6],"rate":4,"type":1,"speed":[100,130],"number":1,"angle":0,"error":0},"propeller":false,"texture":[6,4,10,4,63,4]},"cockpit":{"section_segments":12,"offset":{"x":0,"y":-60,"z":8},"position":{"x":[0,0,0,0],"y":[-25,-8,20,65],"z":[0,0,0,0]},"width":[0,10,10,0],"height":[0,12,15,5],"texture":[9]}},"wings":{"back":{"offset":{"x":0,"y":25,"z":10},"length":[90,40],"width":[70,50,30],"angle":[-30,40],"position":[0,20,0],"texture":[11,63],"doubleside":true,"bump":{"position":10,"size":20}},"front":{"offset":{"x":0,"y":55,"z":10},"length":[90,40],"width":[70,50,30],"angle":[-30,-40],"position":[-60,-20,-20],"texture":[11,63],"doubleside":true,"bump":{"position":10,"size":10}}},"typespec":{"name":"Condor","level":2,"model":4,"code":204,"specs":{"shield":{"capacity":[400,400],"reload":[10,10]},"generator":{"capacity":[130,130],"reload":[48,48]},"ship":{"mass":200,"speed":[126,126],"rotation":[70,70],"acceleration":[120,120]}},"shape":[2.2,2.01,1.633,1.306,1.105,0.984,0.845,0.74,0.766,0.824,1.56,1.632,1.659,2.189,2.242,2.334,2.391,2.222,2.33,2.335,2.102,1.68,2.011,2.088,2.036,2.004,2.036,2.088,2.011,1.68,2.102,2.335,2.33,2.222,2.391,2.334,2.242,2.189,1.66,1.632,1.56,0.824,0.766,0.74,0.845,0.984,1.105,1.306,1.633,2.01],"lasers":[{"x":0,"y":-2.2,"z":0,"angle":0,"damage":[30,60],"rate":2,"type":2,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.5,"y":-0.4,"z":-0.5,"angle":0,"damage":[3,6],"rate":4,"type":1,"speed":[100,130],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.5,"y":-0.4,"z":-0.5,"angle":0,"damage":[3,6],"rate":4,"type":1,"speed":[100,130],"number":1,"spread":0,"error":0,"recoil":0}],"radius":2.391}}',
    '{"name":"A-Speedster","level":3,"model":5,"size":1,"zoom":0.8,"specs":{"shield":{"capacity":[300,300],"reload":[8,8]},"generator":{"capacity":[140,140],"reload":[45,45]},"ship":{"mass":175,"speed":[138,138],"rotation":[80,80],"acceleration":[140,140]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-100,-95,0,0,70,65],"z":[0,0,0,0,0,0]},"width":[0,10,40,20,20,0],"height":[0,5,30,30,15,0],"texture":[6,11,5,63,12],"propeller":true,"laser":{"damage":[38,84],"rate":1,"type":2,"speed":[175,230],"recoil":50,"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,10,10,10,0],"height":[0,10,15,12,0],"texture":[9]},"side_propulsors":{"section_segments":10,"offset":{"x":50,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"propeller":true,"texture":[4,4,2,2,5,63,5,4,12]},"cannons":{"section_segments":12,"offset":{"x":30,"y":40,"z":45},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,10,3,5,0],"height":[0,5,7,8,3,5,0],"angle":-10,"laser":{"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"angle":-10,"error":0},"propeller":false,"texture":[6,4,10,4,63,4]}},"wings":{"join":{"offset":{"x":0,"y":0,"z":10},"length":[40,0],"width":[10,20],"angle":[-1],"position":[0,30],"texture":[63],"bump":{"position":0,"size":25}},"winglets":{"offset":{"x":0,"y":-40,"z":10},"doubleside":true,"length":[45,10],"width":[5,20,30],"angle":[50,-10],"position":[90,80,50],"texture":[4],"bump":{"position":10,"size":30}}},"typespec":{"name":"A-Speedster","level":2,"model":5,"code":205,"specs":{"shield":{"capacity":[300,300],"reload":[8,8]},"generator":{"capacity":[140,140],"reload":[45,45]},"ship":{"mass":175,"speed":[138,138],"rotation":[80,80],"acceleration":[140,140]}},"shape":[2,1.943,1.606,1.301,1.116,0.993,0.899,0.842,0.799,0.775,0.764,0.836,0.858,1.126,1.373,1.484,1.575,1.648,1.888,2.055,2.29,2.414,2.32,1.653,1.425,1.403,1.425,1.653,2.32,2.414,2.29,2.055,1.888,1.648,1.575,1.484,1.373,1.126,0.858,0.836,0.764,0.775,0.799,0.842,0.899,0.993,1.116,1.301,1.606,1.943],"lasers":[{"x":0,"y":-2,"z":0,"angle":0,"damage":[38,84],"rate":1,"type":2,"speed":[175,230],"number":1,"spread":0,"error":0,"recoil":50},{"x":0.774,"y":-0.185,"z":0.9,"angle":-10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0},{"x":-0.774,"y":-0.185,"z":0.9,"angle":10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0}],"radius":2.414}}',
    '{"name":"Rock-Tower","level":3,"model":6,"size":1,"zoom":0.8,"specs":{"shield":{"capacity":[500,500],"reload":[11,11]},"generator":{"capacity":[115,115],"reload":[45,45]},"ship":{"mass":450,"speed":[108,108],"rotation":[70,70],"acceleration":[90,90]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-20,-25,40,85,70],"z":[-10,-8,-5,0,0,0,0,0,0]},"width":[0,40,45,10,12,30,30,20,0],"height":[0,10,12,8,12,10,25,20,0],"texture":[4,63,4,4,4,11,10,12],"propeller":true},"cockpit":{"section_segments":12,"offset":{"x":0,"y":30,"z":20},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-30,-20,0,10,20,30],"z":[0,0,0,0,0,0]},"width":[0,10,15,15,10,5],"height":[0,10,15,15,10,5],"texture":9,"propeller":false},"dimeds_banhammer":{"section_segments":6,"offset":{"x":25,"y":-70,"z":-10},"position":{"x":[0,0,0,0,0,0],"y":[-20,-10,-20,0,10,12],"z":[0,0,0,0,0,0]},"width":[0,0,5,7,6,0],"height":[0,0,5,7,6,0],"texture":[6,6,6,10,12],"angle":0,"laser":{"damage":[4,6],"rate":8,"type":1,"speed":[150,230],"number":1,"error":5}},"propulsors":{"section_segments":8,"offset":{"x":30,"y":50,"z":0},"position":{"x":[0,0,5,5,0,0,0],"y":[-45,-50,-20,0,20,50,40],"z":[0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,0],"height":[0,15,20,25,20,10,0],"texture":[11,2,3,4,5,12],"angle":0,"propeller":true}},"wings":{"main":{"length":[55,15],"width":[60,40,30],"angle":[-10,20],"position":[30,40,30],"texture":63,"doubleside":true,"offset":{"x":0,"y":20,"z":-5},"bump":{"position":30,"size":20}},"finalizer_fins":{"length":[20],"width":[20,10],"angle":[-70],"position":[-42,-30],"texture":63,"doubleside":true,"offset":{"x":35,"y":-35,"z":0},"bump":{"position":0,"size":30}}},"typespec":{"name":"Rock-Tower","level":2,"model":6,"code":206,"specs":{"shield":{"capacity":[500,500],"reload":[11,11]},"generator":{"capacity":[115,115],"reload":[45,45]},"ship":{"mass":450,"speed":[108,108],"rotation":[70,70],"acceleration":[90,90]}},"shape":[1.8,1.789,1.892,1.893,1.879,1.67,0.73,0.781,0.741,0.679,0.642,0.618,0.604,0.84,0.902,0.988,1.557,1.685,1.873,1.9,1.932,1.965,2.154,2.103,1.731,1.703,1.731,2.103,2.154,1.965,1.932,1.9,1.873,1.685,1.557,0.988,0.902,0.84,0.8,0.618,0.642,0.679,0.741,0.781,0.73,1.67,1.879,1.893,1.892,1.789],"lasers":[{"x":0.5,"y":-1.8,"z":-0.2,"angle":0,"damage":[4,6],"rate":8,"type":1,"speed":[150,230],"number":1,"spread":0,"error":5,"recoil":0},{"x":-0.5,"y":-1.8,"z":-0.2,"angle":0,"damage":[4,6],"rate":8,"type":1,"speed":[150,230],"number":1,"spread":0,"error":5,"recoil":0}],"radius":2.154}}',
    '{"name":"O-Defender","level":3,"model":7,"size":1,"zoom":0.8,"specs":{"shield":{"capacity":[550,550],"reload":[13,13]},"generator":{"capacity":[100,100],"reload":[40,40]},"ship":{"mass":500,"speed":[96,96],"rotation":[40,40],"acceleration":[80,80]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[-90,-88,0,90,91],"z":[0,0,0,0,0]},"width":[5,6,25,10,20],"height":[2,10,40,20,20],"texture":[63,1,10],"propeller":true,"laser":{"damage":[35,60],"rate":2,"type":2,"speed":[130,180],"number":1,"angle":0,"error":0}},"side":{"section_segments":10,"offset":{"x":50,"y":0,"z":0},"position":{"x":[-40,-5,15,25,20,0,-50],"y":[-100,-70,-40,-10,20,50,90],"z":[0,0,0,0,0,0,0]},"width":[5,20,20,20,20,20,5],"height":[15,25,30,30,30,25,0],"texture":[0,1,2,3,4,63]},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":18},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,0,20,30,40],"z":[0,0,0,0,0]},"width":[0,5,10,10,0],"height":[0,5,10,12,0],"texture":[9]},"top_propulsor":{"section_segments":15,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0],"y":[80,95,100,90],"z":[0,0,0,0]},"width":[5,20,10,0],"height":[5,15,5,0],"propeller":true,"texture":[1,63,12]},"bottom_propulsor":{"section_segments":15,"offset":{"x":0,"y":0,"z":-10},"position":{"x":[0,0,0,0],"y":[80,95,100,90],"z":[0,0,0,0]},"width":[5,20,10,0],"height":[5,15,5,0],"propeller":true,"texture":[1,63,12]}},"wings":{"join":{"offset":{"x":0,"y":20,"z":0},"length":[80,0],"width":[130,50],"angle":[-1],"position":[0,-30],"texture":[8],"bump":{"position":-20,"size":15}}},"typespec":{"name":"O-Defender","level":2,"model":7,"code":207,"specs":{"shield":{"capacity":[550,550],"reload":[13,13]},"generator":{"capacity":[100,100],"reload":[40,40]},"ship":{"mass":500,"speed":[96,96],"rotation":[40,40],"acceleration":[80,80]}},"shape":[2.004,2.022,1.987,1.911,1.872,1.88,1.897,1.867,1.848,1.861,1.852,1.882,1.891,1.846,1.825,1.803,1.741,1.709,1.701,1.632,1.592,1.588,1.625,1.951,2.01,2.004,2.01,1.951,1.625,1.588,1.592,1.632,1.701,1.709,1.741,1.803,1.825,1.846,1.891,1.882,1.852,1.861,1.848,1.867,1.897,1.88,1.872,1.911,1.987,2.022],"lasers":[{"x":0,"y":-1.8,"z":0,"angle":0,"damage":[35,60],"rate":2,"type":2,"speed":[130,180],"number":1,"spread":0,"error":0,"recoil":0}],"radius":2.022}}'
  ],
  teams: {
    0: { // "Overpowered FLY"
      hue: 80, // lime green
      ship: 701
    },
    1: { // "Small Ody"
      hue: 270, // strong purple
      ship: 101
    }
  },
  roundInfo: {
    1: {
      flyNumber: 1,
      ability: false,
      abilityOdy: false
    },
    2: {
      flyNumber: 2,
      ability: false,
      abilityOdy: false
    },
    3: {
      flyNumber: 2,
      ability: true,
      abilityOdy: true
    }
  },
  gameImages: {
    "circle": {
      image: "TheGreatMegalodon/Dueling-Component/main/Dueling_Component/Sans_titre-1.png",
      info: {
        size: 200,
        depth: -15,
        x: 0,
        y: 0
      }
    },
    "meg": {
      image: "TheGreatMegalodon/Dueling-Component/main/Dueling_Component/sharkyyyyyyyyyyy.png",
      info: {
        size: 5,
        depth: -15,
        x: 70*5,
        y: 70*5
      }
    },
    "messi": {
      image: "TheGreatMegalodon/Dueling-Component/main/Dueling_Component/05a23983-252b-42be-9ed7-78901872e824.png",
      info: {
        size: 15*3,
        depth: -15,
        x: 0,
        y: 0
      }
    }
  }
};

setTimeout(() => game.custom.started||prepareGame(), 200);

const gameCommands = {
  run: {
    usage: "run <round>",
    description: "Used to start a round",
    action: function(round) {
      if (!game.custom.mainFly) {
        gameCommands.log(`The default Fly is not defined`, "red");
        return;
      }
      if (game.custom.roundStarted.state) {
        gameCommands.log(`Round already started`, "red");
        return;
      }
      const flyNumber = gameOptions.roundInfo[round].flyNumber;
      const abilitystate = gameOptions.roundInfo[round].ability;
      const abilityody = gameOptions.roundInfo[round].abilityOdy;
      gameInfo.prison = false;
      game.custom.roundStarted = {
        state: true,
        round: round
      };
      game.ships.forEach(function(ship) {
        gameFunctions.alert(
          ship, 
          `Round ${round} Started!`, 
          `Good luck killing the ${flyNumber==1?"":`${flyNumber} `}Overpowerd Fl${flyNumber==1?"y":"ies"}!`, 
          "rgba(255,55,55,0.8)", 
          7500, 
          warning = {v1: 6, v2: 4, h: -2}
        );
        ship.set({
          x: (ship.team === 0) ? gameFunctions.uses.getCoords(40,{x: 70*5}, true) : gameFunctions.uses.getCoords(40,{x: 0}, true),
          y: (ship.team === 0) ? gameFunctions.uses.getCoords(40,{x: 70*5}, true) : gameFunctions.uses.getCoords(40,{x: 0}, true),
        });
      });
      if (abilityody) {
        gameInfo.players.ody.forEach(function(ody) {
          ody.setUIComponent(gameFunctions.Abilities.swap.gameUIs.def);
        });
      }
      gameInfo.players.fly.forEach(function(fly) {
        if (flyNumber === 1) {
          if (fly !== game.custom.mainFly) {
            fly.set({
              stats: 0,
              shield: 99999,
              crystals: 0,
              type: 191,
              collider: false
            });
          }
        }
        if (abilitystate) {
          Object.values(gameFunctions.Abilities)
          .filter(ability => ability !== gameFunctions.Abilities.swap)
          .forEach(ability => {
            fly.setUIComponent(ability.gameUIs.def);
          });
        }
      });
      gameCommands.log(`Round ${round} Started succesfuly`, "lightblue");
      gameFunctions.updateRound(true);
    }
  },
  disc: {
    usage: "disc",
    description: "Used to stop or restart the current round",
    action: function() {
      if (!game.custom.roundStarted.state) {
        gameCommands.log(`No round started yet`, "red");
        return;
      }
      for (let ship of game.ships) {
        Object.values(gameFunctions.Abilities).forEach(function(ability) {
          ship.setUIComponent({id: ability.info.name.toLowerCase(), visible: "false"});
        });
        Object.entries(gameFunctions.Abilities).forEach(([abilityId, ability]) => {
          ship.custom[abilityId] = null;
        });
        const new_type = (ship.team === 0) ? 701 : 101;
        ship.set({
          shield: 99999,
          type: new_type,
          crystals: 20 * Math.trunc(new_type / 100) * Math.trunc(new_type / 100),
          stats: (ship.team === 0) ? 0 : 66666666,
          x: (ship.team === 0) ? gameFunctions.uses.getCoords(40,{x: 70*5}, true) : gameFunctions.uses.getCoords(40,{x: 0}, true),
          y: (ship.team === 0) ? gameFunctions.uses.getCoords(40,{x: 70*5}, true) : gameFunctions.uses.getCoords(40,{x: 0}, true),
          collider: true
        });
      }
      gameCommands.log(`Round ${game.custom.roundStarted.round} Stopped succesfuly`, "red");
      gameFunctions.updateRound(false);
      gameFunctions.flashEnd("disc");
      gameInfo.prison = true;
      game.custom.roundStarted = {
        state: false,
        round: undefined
      };
    }
  },
  mainFly: {
    usage: "mainFly <ID>",
    description: "Used to set the main Fly of the game",
    action: function(ID) {
      const ship = game.findShip(ID);
      if (!ship) {
        gameCommands.log(`Wrong ID`, "red");
        return;
      }
      if (!gameInfo.players.fly.includes(ship)) {
        gameCommands.log(`Player isn't in the FLY team`, "red");
        return;
      }
      if (game.custom.roundStarted.state) {
        gameCommands.log(`Round already started`, "red");
        return;
      }
      if (ship === game.custom.mainFly) {
        game.custom.mainFly = undefined;
        gameCommands.log(`is not the default Fly anymore`, "red", ship);
        return;
      }
      gameCommands.log(`is now the default Fly`, "green", ship);
      game.custom.mainFly = ship;
    }
  },
  addFly: {
    usage: "addFly <ID>",
    description: "Used to add a player in the fly team",
    action: function(ID) {
      const ship = game.findShip(ID);
      if (!ship) {
        gameCommands.log(`Wrong ID`, "red");
        return;
      }
      if (gameInfo.players.fly.includes(ship)) {
        gameCommands.log(`Player is already in the FLY team`, "red");
        return;
      }
      if (game.custom.roundStarted.state) {
        gameCommands.log(`Round already started`, "red");
        return;
      }
      gameInfo.players.fly.push(ship);
      gameInfo.players.ody.splice(gameInfo.players.ody.indexOf(ship), 1);
      ship.set({
        team: 0,
        stats: 0,
        shield: 99999,
        crystals: 980,
        type: gameOptions.teams[0].ship,
        hue: gameOptions.teams[0].hue,
        x: gameFunctions.uses.getCoords(40,{x: 70*5}, true),
        y: gameFunctions.uses.getCoords(40,{x: 70*5}, true)
      });
      gameCommands.log(`is now in the Fly team`, "green", ship);
      if (!game.custom.mainFly) {
        game.custom.mainFly = ship;
        gameCommands.log(`is now the default Fly`, "green", ship);
      }
    }
  },
  removeFly: {
    usage: "removeFly <ID>",
    description: "Used to remove a player from the Fly team",
    action: function(ID) {
      const ship = game.findShip(ID);
      if (!ship) {
        gameCommands.log(`Wrong ID`, "red");
        return;
      }
      if (!gameInfo.players.fly.includes(ship)) {
        gameCommands.log(`Player isn't in the FLY team`, "red");
        return;
      }
      if (game.custom.roundStarted.state) {
        gameCommands.log(`Round already started`, "red");
        return;
      }
      gameInfo.players.ody.push(ship);
      gameInfo.players.fly.splice(gameInfo.players.fly.indexOf(ship), 1);
      ship.set({
        team: 1,
        stats: 66666666,
        crystals: 20,
        type: gameOptions.teams[1].ship,
        hue: gameOptions.teams[1].hue,
        x: gameFunctions.uses.getCoords(40,{x: 0}, true),
        y: gameFunctions.uses.getCoords(40,{x: 0}, true)
      });
      ship.setUIComponent({ 
        id: "RoundShower", 
        visible: false
      });
      gameCommands.log(`is not in the Fly team anymore`, "green", ship);
      if (ship === game.custom.mainFly) {
        game.custom.mainFly = undefined;
        gameCommands.log(`is not the default Fly anymore`, "red", ship);
      }
    }
  },
  info: {
    usage: "info <commands>|<players>|<rounds>",
    description: "Allows you to see all of the informations about\n<commands> Used to show every commands on the mod\n<players> Used to show the player list\n<rounds> Used to check all existing rounds types",
    action: function(type) {
      switch(type) {
        default: gameCommands.log(`Wrong Input`, "red"); break;
        case "commands":
          const commandDescriptions = Object.keys(gameCommands)
            .filter(command => ![ 'findColor', 'log', 'getArguments', 'resolveCommands', `getPlayerName` ].includes(command))
            .map(command => { 
              const { usage, description } = gameCommands[command];
              return `[[gui;#85ff70;]Command:] [[gb;Gold;]${usage}] \n[[i;#70dcff;]${description}]`;
            }).join("\n");
          game.modding.terminal.echo(`${commandDescriptions}\n`);
          break;
        case "players":
          const playerList = {
            fly: game.ships.filter(ship => gameInfo.players.fly.includes(ship))
              .map(ship => `[[i;#70dcff;]ID:] [[g;Gold;]${ship.id}][[i;#70dcff;], Name:] [[g;${ship === game.custom.mainFly ? "Tomato" : "Gold"};]${gameCommands.getPlayerName(ship)}]`)
              .join("\n"),
            ody: game.ships.filter(ship => gameInfo.players.ody.includes(ship))
              .map(ship => `[[i;#70dcff;]ID:] [[g;Gold;]${ship.id}][[i;#70dcff;], Name:] [[g;Gold;]${gameCommands.getPlayerName(ship)}]`)
              .join("\n"),
          };
          game.modding.terminal.echo(`[[g;#85ff70;]Amount of players:] [[gb;#fffc70;]${game.ships.length}]\n`);
          game.modding.terminal.echo(`[[gu;#70aeff;]${gameInfo.players.fly.length > 1 ? "flies" : "Fly"}][[g;#70aeff;]:] \n${playerList.fly||"[[g;#70aeff;]None]"}\n`);
          game.modding.terminal.echo(`[[gu;#70aeff;]${gameInfo.players.fly.length > 1 ? "Odies" : "Ody"}][[g;#70aeff;]:] \n${playerList.ody||"[[g;#70aeff;]None]"}\n`);
          break;
        case "rounds":
          Object.values(gameOptions.roundInfo).forEach((round, index) => {
            game.modding.terminal.echo(`[[i;#85ff70;]Round] [[g;Gold;]${index + 1}][[;#85ff70;]:]`);
            game.modding.terminal.echo(`  [[i;#70dcff;]Amount of Flies:] [[g;Gold;]${round.flyNumber}]`);
            game.modding.terminal.echo(`  [[i;#70dcff;]Allow Ability:] ${round.ability?"[[i;#85ff70;]Yes]":"[[i;#ff7070;]No]"}`);
            game.modding.terminal.echo(`  [[i;#70dcff;]Allow Ody-Ability:] ${round.abilityOdy?"[[i;#85ff70;]Yes]":"[[i;#ff7070;]No]"}\n`);
          })
          break;
      }
    }
  },
  findColor: function(color) {
    switch(color) {
      case "none": return;
      case "green": return "#70ffc1";
      case "red": return "#ff7070";
      case "orange": return "#ffb670";
      case "lightblue": return "#70dcff";
      case "yellow": return "#fff870";
      default: return "#ffffff";
    }
  },
  log: function(action, color, ship) {
    const newColor = gameCommands.findColor(color);
    const player = ship ? `[[g;${newColor};]Player:] [[g;Gold;]${ship.name}][[g;${newColor};], ID:] [[g;Gold;]${ship.id}][[g;${newColor};], ` : "";
    game.modding.terminal.echo(`${player}[[g;${newColor};]${action}]\n`);
  },
  getPlayerName: function(player) {
    const icon = (gameInfo.players.fly.includes(player)) ? (player === game.custom.mainFly) ? "⚔️" : "🛡️️" : "";
    return `${player.name.replace(/[\[\]]/g, '|')} ${icon}`;
  },
  getArguments: function (cmd) {
    cmd = cmd.trim();
    let args = [];
    if (cmd.length < 1) return args;
    let separator = `"'`.includes(cmd[0]) ? cmd[0] : ' ';
    let i = separator == ' ' ? 0 : 1;
    for (; i < cmd.length; ++i) {
      let index = i;
      while (index < cmd.length && (cmd[index] != separator || (cmd.slice(i, index).match(/\\+$/) || [''])[0].length % 2)) ++index;
      let lit = separator == ' ' ? '"' : separator;
      let value = eval(lit + cmd.slice(i, index) + lit);
      if (!isNaN(value)) value = +value;
      args.push(value);
      ++index;
      while (index < cmd.length) {
        if (cmd[index] == ' ') {
          ++index;
          continue;
        }
        if ((cmd[index] == '"' || cmd[index] == "'") && !((cmd.slice(i, index).match(/\\+$/) || [''])[0].length % 2)) {
          separator = cmd[index];
          break;
        }
        separator = ' ';
        --index;
        break;
      }
      i = index;
    }
    return args;
  },
  resolveCommands: function () {
    for (let i in gameCommands) {
      if (i == 'getPlayerName' || i == `findAvailableID` || i == `getArguments` || i == `log` || i == `resolveCommands`) continue;
      game.modding.commands[i] = function (req) {
        return gameCommands[i].action(...this.getArguments(req.replace(i + " ", "")));
      }.bind(this);
    }
  }
};

var gameFunctions = {
  uses: {
    angle: function(x1, y1, x2, y2) {
      let dx = x2 - x1;
      let dy = y2 - y1;
      let angle = Math.atan2(dy, dx) * 180 / Math.PI;
      return angle * Math.PI / 180;
    },
    dist2points: function(x1, y1, x2, y2) {
      return Math.sqrt(((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2)));
    },
    getFrontPosition: function(distance, x, y, r) {
      return [x + distance * Math.cos(r), y + distance * Math.sin(r)];
    },
    getCoords: function(size, info, random) { // getCoords(10, {x: 0}, false); getCoords(10, {y: 0}); size: (total size), random: (true: gives one number, false: gives multiple numbers)
      const mapSize = size + 1;
      const start = ((info.x || info.y) || 0) - Math.round(size / 2);
      const newInfo = Array(mapSize).fill(0).map((_, i) => start + i);
      return random ? newInfo[~~(Math.random() * newInfo.length)] : newInfo;
    }
  },
  common: {
    dash: function(ship, direction, strength, dependency = 2) {
      ship.set({
        vx: gameFunctions.uses.getFrontPosition(strength, ship.x, ship.y, direction)[0] - ship.x + ship.vx / dependency,
        vy: gameFunctions.uses.getFrontPosition(strength, ship.x, ship.y, direction)[1] - ship.y + ship.vy / dependency
      });
    }
  },
  Abilities: {
    pull: {
      info: {
        name: "Pull",
        shortcut: "J",
        position: [38.5, 87, 7, 7],
        cooldown: 45 // 45 seconds
      },
      gameUIs: {
        reload: {},
        def: {}
      },
      action: function(ship) {
        const myTeam = ship.team;
        for (let enemyShip of [...game.ships].filter(ship => ship.team !== myTeam)) {
          angl = gameFunctions.uses.angle(enemyShip.x, enemyShip.y, ship.x, ship.y);
          if (enemyShip.x != ship.x && enemyShip.team != myTeam) { 
            gameFunctions.common.dash(enemyShip, angl, 1.75); // idk tbh - or + doesn't know what to change
          }
        }
      }
    },
    weapons: {
      info: {
        name: "Weapons",
        shortcut: "B",
        position: [46.5, 87, 7, 7],
        cooldown: 60 // 60 seconds
      },
      gameUIs: {
        reload: {},
        def: {}
      },
      action: function(ship) {
        const collectibles = { 10: 2, 11: 2, 21: 1 };
        ship.emptyWeapons();
        for (let key in collectibles) {
          const collectible = key;
          for (let i = 0; i<collectibles[key]; i++) {
            game.addCollectible({
              code: Number(collectible), 
              x: ship.x, 
              y: ship.y
            });
          }
        }
      }
    },
    fart: {
      info: {
        name: "Fart",
        shortcut: "H",
        position: [54.5, 87, 7, 7],
        cooldown: 50 // 50 seconds
      },
      gameUIs: {
        reload: {},
        def: {}
      },
      action: function(ship) {
        gameFunctions.common.dash( 
          ship, 
          gameFunctions.uses.angle( 
            gameFunctions.uses.getFrontPosition(-2,ship.x,ship.y,ship.r)[0], 
            gameFunctions.uses.getFrontPosition(-2,ship.x,ship.y,ship.r)[1], 
            ship.x, 
            ship.y 
          ), 
        1.75);
        for (let i = -1; i<=1; i+=0.4) {
          game.addAsteroid({
            size: 35,
            x: gameFunctions.uses.getFrontPosition(-5,ship.x,ship.y,ship.r+i)[0],
            y: gameFunctions.uses.getFrontPosition(-5,ship.x,ship.y,ship.r+i)[1],
            vx: gameFunctions.uses.getFrontPosition(-1.75,ship.x,ship.y,ship.r+i)[0]-ship.x+ship.vx/4,
            vy: gameFunctions.uses.getFrontPosition(-1.75,ship.x,ship.y,ship.r+i)[1]-ship.y+ship.vy/4
          });
        }
      }
    },
    swap: {
      info: {
        name: "Swap",
        shortcut: "W",
        position: [46.5, 87, 7, 7],
        cooldown: 75 // 75 seconds
      },
      gameUIs: {
        reload: {},
        def: {}
      },
      action: function(ship) {
        const shipRef = [301, 302, 303, 304, 305, 306, 307];
        const randomShip = shipRef[Math.floor(Math.random() * shipRef.length)];
        ship.set({
          type: randomShip,
          shield: 999,
          generator: 999,
          stats: 66666666,
          crystals: 180
        });
        setTimeout(() => {
          ship.set({
            type: 101, 
            shield: 999, 
            generator: 999, 
            stats: 11111111, 
            crystals: 20
          });
        }, 10e3); // 10 seconds
      }
    }
  },
  findColor: function(ship) {
    switch (true) {
      case !ship.alive: return "rgba(100, 100, 100, 0.8)";
      case ship === game.custom.mainFly: return "rgba(0, 185, 255, 0.8)";
      case ship.custom.isTheKiller: return "rgba(255, 211, 0, 0.8)";
      default: return "rgba(255, 255, 255, 0.8)";
    }
  },
  findLeaderboardPosition: function() {
    return {
      fly: gameInfo.players.fly.sort((a, b) => b.score - a.score),
      ody: gameInfo.players.ody
        .filter(player => player.custom.isTheKiller)
        .sort((a, b) => b.score - a.score)
        .concat(gameInfo.players.ody.filter(player => !player.custom.isTheKiller)
        .sort((a, b) => b.score - a.score))
    };
  },
  updateScoreboard: function(game) {
    const sortedShips = gameFunctions.findLeaderboardPosition();
    const Scoreboard = {
      id: "scoreboard",
      clickable: false,
      visible: true,
      components: [
        { type: "box", position: [0, 0, 100, 9.75], fill: "RGBA(100, 255, 0, 0.35)" },
        { type: "text", position: [3, 0.75, 69, 8], value: "Fly's Team", color: "rgba(255,255,255,0.8)", align: "left" },
        ...sortedShips.fly.map((ship, i) => [
          { type: "text", position: [0, 0, 77, 7.5], value: "" },
          { type: "player", index: i, position: [0, 10 * i + 11, 77, 8.5], id: ship.id, color: gameFunctions.findColor(ship), value: "", align: "left" },
          { type: "text", position: [68, 10 * i + 11.75, 30, 7.5], value: ship.score, color: gameFunctions.findColor(ship), align: "right" }
        ]).flat(Infinity),
        { type: "box", position: [0, 10 * sortedShips.fly.length + 10.5, 100, 9.75], fill: "RGBA(135, 0, 255, 0.35)" },
        { type: "text", position: [3, 10 * sortedShips.fly.length + 11.25, 69, 8], value: "Ody's Team", color: "rgba(255,255,255,0.8)", align: "left" },
        ...sortedShips.ody.map((ship, i) => [
          { type: "text", position: [0, 0, 77, 7.5], value: "" },
          { type: "player", index: i, position: [0, 10 * (i+sortedShips.fly.length) + 21.5, 77, 8.5], id: ship.id, color: gameFunctions.findColor(ship), value: "", align: "left" },
          { type: "text", position: [68, 10 * (i+sortedShips.fly.length) + 22, 30, 7.5], value: ship.score, color: gameFunctions.findColor(ship), align: "right" }
        ]).flat(Infinity)
      ]
    };
    for (let ship of game.ships) {
      if (ship === null) continue;
      let components = [...Scoreboard.components];
      let index = components.findIndex(c => c.type == "player" && c.id === ship.id);
      if (index == -1) {
        let last = Scoreboard.components.at(-1);
        last.id = ship.id;
        last.color = gameFunctions.findColor(ship); 
        Scoreboard.components.at(-1).value = ship.score;
        index = Scoreboard.components.length - 1;
      }
      const pos = (ship.team === 0) ? [0, 10 * components[index].index + 10.1, 100, 10] : [0, 10 * (components[index].index + sortedShips.fly.length) + 20.75, 100, 10]
      Scoreboard.components.splice(index, 0, {type: "box",position: pos, fill: "rgba(200, 200, 255, 0.125)"});
      ship.setUIComponent(Scoreboard);
      Scoreboard.components = components;
    }
  },
  alert: function(ship, Value1 = "", Value2 = "", Color = "rgba(255,255,255,0.8)", time = 4000, warning = {v1: 4, v2: 4, h: 0}) {
    clearTimeout(ship.custom.logtimeout);
    ship.custom.logtimeout = setTimeout(() => {ship.setUIComponent({id: "Text", visible: false})}, time);
    ship.setUIComponent({
      id: "Text",
      position: [-5, -5, 110, 110],
      clickable: false,
      visible: true,
      components: [
        {type: "text", position: [0, 18, 100, warning.v1], color: Color, value: Value1},
        {type: "text", position: [0, 23-warning.h, 100, warning.v2], color: Color, value: Value2}
      ]
    });
  },
  flashEnd: function(value) {
    gameCommands.log(`  Waiting...`, "orange");
    setTimeout(() => gameCommands.log(`  Finishing % Log-disabled`, "yellow"), 2000);
    setTimeout(() => gameCommands.log(`  Ready to start % Log-enabled`, "green"), value == "end" ? 7000 : 4000);
  },
  updateRound: function(state) {
    game.ships.forEach(function(ship) {
      ship.setUIComponent({ 
        id: "RoundShower", 
        position: [-5, -5, 110, 110], 
        clickable: false, 
        visible: state, 
        components: [
          {type: "text", position: [0, 8, 100, 4], value: `Round ${game.custom.roundStarted.round}`, color: "#ffffff"}
        ]
      });
    });
  },
  updateShieldBar: function(ship) {
    ship.setUIComponent({
      id: "shieldBar",
      position: [3.3,10.5,17.4,3],
      visible: (ship.type === 191) ? false : true,
      components: [
        {type:"box",position:[0,0,100,100],fill:"hsla(170, 32%, 28%, 1)",stroke:"hsla(170, 32%, 28%, 1)",width:2},
        {type:"box",position:[0,0,100 * ship.shield/10000,100],fill:"hsla(192, 97%, 74%, 1)", stroke:"hsla(192, 97%, 74%, 1)",width:2},
        {type: "text",position:[80,0,20,100], value: (ship.shield < 1) ? "0" : ship.shield, color:"hsla(0, 0%, 0%, 1)"}
      ]
    });
  },
  updateMainFlyShieldBar: function(game) {
    if (!game.custom.mainFly) return;
    const ship = game.custom.mainFly;
    game.ships.forEach(player => {
      player.setUIComponent({
        id: "mainFlyShieldBar",
        position: [34,9.5,32,4],
        visible: game.custom.roundStarted.state,
        components: [
          {type:"box", position: [0,0,100,100], fill: "rgba(255,55,55,0.35)",stroke: "rgba(255,55,55,0.35)", width:2},
          {type:"box", position: [0,0,100 * ship.shield/10000,100], fill:"rgba(255,55,55,1)", stroke: "rgba(255,55,55,1)", width:2},
          {type: "text", position: [80,0,20,100], value: (ship.shield < 1) ? "0" : ship.shield, color: "hsla(0, 0%, 0%, 1)"},
          {type: "text", position: [0,0,20,100], value: ship.name, color: "hsla(0, 0%, 0%, 1)"}
        ]
      });
    });
  },
  prepareUIs: function() {
    Object.values(gameFunctions.Abilities).forEach(function(ability) {
      ability.gameUIs.def = {
        id: ability.info.name.toLowerCase(), 
        position: ability.info.position, 
        clickable: true, 
        shortcut: ability.info.shortcut, 
        visible: true,
        components: [
          { type: "box", position: [0, 0, 100, 100], fill: "rgba(135, 0, 255, 0.35)", stroke: "rgba(135, 0, 255, 0.85)", width: 8 },
          { type: "text", position: [0, 10, 100, 40], value: `[${ability.info.shortcut}]`, color: "#CDE", align: "center" },
          { type: "text", position: [0, 50, 100, 40], value: ability.info.name, color: "#CDE", align: "center" }
        ]
      };
      ability.gameUIs.reload = {
        id: ability.info.name.toLowerCase(), 
        position: ability.info.position, 
        clickable: false, 
        visible: true,
        components: [
          { type: "box", position: [0, 0, 100, 100], fill: "rgba(255, 0, 0, 0.35)", stroke: "rgba(255, 0, 0, 0.85)", width: 8 },
          { type: "text", position: [0, 10, 100, 45], value: "", color: "#CDE", align: "center" },
          { type: "text", position: [0, 50, 100, 40], value: ability.info.name, color: "#CDE", align: "center" }
        ]
      };
    });
  },
  createImages: function() {
    const images = gameOptions.gameImages;
    for (let key of Object.keys(images)) {
      const info = images[key].info;
      game.setObject({
        id: key,
        type: {
          id: key,
          obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
          emissive: `https://raw.githubusercontent.com/${images[key].image}`
        },
        position: { x: info.x, y: info.y, z: info.depth },
        scale: { x: info.size, y: info.size, z: 0 },
        rotation: { x: 0, y: Math.PI, z: Math.PI }
      });
    }
  },
  activate: function(id, ship) {
    ship.setUIComponent(gameFunctions.Abilities[id].gameUIs.reload);
    gameFunctions.Abilities[id].action(ship);
    ship.custom[id] = gameFunctions.Abilities[id].info.cooldown+1;
  },
  manageCooldDown: function(game) {
    if (!game.custom.roundStarted.state) {
      return;
    }
    game.ships.forEach(ship => {
      Object.entries(gameFunctions.Abilities).forEach(([abilityId, ability]) => {
        if (ship.custom[abilityId] > 1) {
          ship.custom[abilityId]--;
          ability.gameUIs.reload.components[1].value = ship.custom[abilityId];
          ship.setUIComponent(ability.gameUIs.reload);
        } else if (ship.custom[abilityId] !== null) {
          ability.gameUIs.reload.components[1].value = ability.info.cooldown;
          ship.setUIComponent(ability.gameUIs.def);
          ship.custom[abilityId] = null;
        }
      });
    });
  },
  spawned: function(ship) {
    gameFunctions.alert(
      ship, 
      `Welcome ${ship.name}!`, 
      gameOptions.introductionText, 
      "rgba(255,255,55,0.8)", 
      5000, 
      warning = {v1: 4.5, v2: 3.5, h: -1}
    );
    Object.entries(gameFunctions.Abilities).forEach(([abilityId, ability]) => {
      ship.custom[abilityId] = null;
    });
    ship.custom.initialize = true;
    gameInfo.players.ody.push(ship);
    ship.set({
      team: 1,
      type: gameOptions.teams[1].ship,
      hue: gameOptions.teams[1].hue,
      x: gameFunctions.uses.getCoords(40,{x: 0}, true),
      y: gameFunctions.uses.getCoords(40,{x: 0}, true)
    });
  },
  normalSpawn: function(ship) {
    if (ship.custom.initialize) {
      ship.set({
        crystals: ship.type === 191 ? 0 : 20 * Math.trunc(ship.type / 100) * Math.trunc(ship.type / 100),
        shield: 99999,
        generator: 99999,
        stats: ship.type === 191 ? 0 : (ship.team === 0) ? 0 : 66666666,
        x: (game.custom.mainFly === ship && ship.team === 0) ? gameFunctions.uses.getCoords(40,{x: 70*5}, true) : ship.custom.Dpos.x, 
        y: (game.custom.mainFly === ship && ship.team === 0) ? gameFunctions.uses.getCoords(40,{x: 70*5}, true) : ship.custom.Dpos.y
      });
      return;
    }
    gameFunctions.spawned(ship);
  },
  mainFlyDied: function(ship, killer) {
    killer.custom.isTheKiller = true;
    gameFunctions.updateRound(false);
    gameCommands.log(`Round ${game.custom.roundStarted.round} Ended`, "red", killer);
    game.ships.forEach(function(player) {
      gameFunctions.alert(
        player, 
        `${killer.name} got the kill!`, 
        `round ${game.custom.roundStarted.round} ended!`, 
        "rgba(55,255,55,0.8)", 
        15000, 
        warning = {v1: 8, v2: 4, h: -4}
      );
    });
    gameFunctions.flashEnd("end");
    game.custom.roundStarted = {
      state: false,
      round: game.custom.roundStarted.round
    };
    setTimeout(() => {
      game.ships.forEach(function(player) {
        Object.values(gameFunctions.Abilities).forEach(function(ability) {
          player.setUIComponent({id: ability.info.name.toLowerCase(), visible: "false"});
        });
        Object.entries(gameFunctions.Abilities).forEach(([abilityId, ability]) => {
          player.custom[abilityId] = null;
        });
        const new_type = (player.team === 0) ? 701 : 101;
        player.set({
          shield: 99999,
          type: new_type,
          crystals: 20 * Math.trunc(new_type / 100) * Math.trunc(new_type / 100),
          stats: (player.team === 0) ? 0 : 66666666,
          x: (ship.team === 0) ? gameFunctions.uses.getCoords(40,{x: 70*5}, true) : gameFunctions.uses.getCoords(40,{x: 0}, true),
          y: (ship.team === 0) ? gameFunctions.uses.getCoords(40,{x: 70*5}, true) : gameFunctions.uses.getCoords(40,{x: 0}, true),
          collider: true
        });
      });
      gameInfo.prison = true;
      game.custom.roundStarted = {
        state: false,
        round: undefined
      };
    }, 6000);
  },
  protectorFlyDied: function(ship) {
    ship.set({
      type: 191,
      collider: false
    });
    if (!gameOptions.roundInfo[game.custom.roundStarted.round].ability) {
      return;
    }
    Object.entries(gameFunctions.Abilities)
    .filter(([abilityId, ability]) => ship.custom[abilityId] !== ship.custom.pull)
    .forEach(([abilityId, ability]) => ship.custom[abilityId] = null);
    Object.values(gameFunctions.Abilities)
    .filter(val => val !== gameFunctions.Abilities.pull && val !== gameFunctions.Abilities.swap)
    .forEach(ability => {
      const reloadComponents = ability.gameUIs.reload.components;
      reloadComponents[1].value = ""; // Modification
      reloadComponents[2].position[1] = 27.5; // Modification
      ship.setUIComponent(ability.gameUIs.reload);
      reloadComponents[2].position[1] = 50; // reset
    });
  },
  died: function(ship, killer) {
    ship.custom.Dpos = {
      x: ship.x,
      y: ship.y
    };
    if (gameInfo.players.fly.includes(ship) && gameInfo.players.ody.includes(killer) && game.custom.mainFly === ship) {
      gameFunctions.mainFlyDied(ship, killer);
      return;
    }
    if (gameInfo.players.fly.includes(ship) && game.custom.mainFly !== ship) {
      gameFunctions.protectorFlyDied(ship);
      return;
    }
  },
  expulse: function(ship) {
    if (gameInfo.players.fly.includes(ship)) gameInfo.players.fly.splice(gameInfo.players.fly.indexOf(ship), 1);
    if (gameInfo.players.ody.includes(ship)) gameInfo.players.ody.splice(gameInfo.players.ody.indexOf(ship), 1);
    gameCommands.log(`has been caugh using Subspace and will get kicked in about 5seconds.`, "red", ship);
    gameFunctions.alert(
      ship, 
      `You been caugh using Subspace`, 
      `Auto Kick in 5seconds`,
      "rgba(255,55,55,0.8)", 
      5000, 
      warning = {v1: 5, v2: 7, h: -4}
    );
    ship.set({
      type: 191,
      collider: false,
      idle: true,
      x: 0,
      y: 0,
    });
    setTimeout(() => ship.gameover({"No clients allowed":""}), 5000);
  }
};

var gameInfo = {
  prison: true,
  players: {
    fly: [],
    ody: []
  }
};

this.options = {
  root_mode: "",
  map_name: `${gameOptions.info.name} ${gameOptions.info.version}`,
  starting_ship: 801,
  friendly_colors: Object.keys(gameOptions.teams).length,
  ships: gameOptions.ships,
  map_size: 70,
  radar_zoom: 1,
  weapons_store: false,
  reset_tree: true,
  custom_map: ""
};

this.tick = function(game) {
  if (game.step % 120 === 0) {
    game.asteroids.forEach(function(ast) {
      ast.set({kill: true});
    });
  }
  if (game.step % 60 === 0) {
    gameFunctions.manageCooldDown(game);
    gameFunctions.updateScoreboard(game);
    gameFunctions.updateMainFlyShieldBar(game);
    gameInfo.players.fly.forEach(ship => gameFunctions.updateShieldBar(ship));
    if (gameInfo.prison) {
      gameInfo.players.ody.forEach(function(ship) {
        if (gameFunctions.uses.dist2points(ship.x, ship.y, 0, 0) >= 82.5) {
          ship.set({
            x: gameFunctions.uses.getCoords(40,{x: 0}, true),
            y: gameFunctions.uses.getCoords(40,{x: 0}, true)
          });
        } else ship.set({invulnerable: 120, crystals: 20});
      });
    }
  }
};

this.event = function(event, game) {
  switch (event.name) {
    case "ui_component_clicked":
      if (component == "using_subspace" && !gameOptions.Allow_cheats) {
        gameFunctions.expulse(event.ship);
        break;
      }
      gameFunctions.activate(event.id, event.ship);
      break;
    case "ship_spawned":
      gameFunctions.normalSpawn(event.ship);
      break;
    case "ship_destroyed": 
      gameFunctions.died(event.ship, event.killer);
      break;
  }
};

function prepareGame() {
  const { echo } = game.modding.terminal;
  const maxLength = Math.max(...Object.keys(gameOptions.info).map(key => key.length));
  echo(`\n[[i;#ff7070;]  Staring % Initializing...]\n`);
  Object.keys(gameOptions.info).forEach((key, index) => {
    const formattedKey = `${key.charAt(0).toUpperCase() + key.substring(1)}:`.padEnd(maxLength + 2);
    echo(`[[i;Cyan;]     ${formattedKey}] [[i;Gold;]${gameOptions.info[key]}]`);
    (index === 1) && echo(' ');
  });
  echo(`\n[[i;#ffb670;]  Procecutive Order % Cheats Allowed-${gameOptions.Allow_cheats?"[[i;#85ff70;]Yes]":"[[i;#ff7070;]No]"}`);
  gameCommands.resolveCommands();
  gameFunctions.prepareUIs();
  gameFunctions.createImages();
  game.custom.roundStarted = {
    state: false,
    round: undefined
  };
  echo(`[[i;#85ff70;]  Started % Log-enabled\n`);
  game.custom.started = true;
  setTimeout(() => echo(`\n[[ig;#85ff70;]Write] [[g;Gold;]<info commands>] [[ig;#85ff70;]in the console]\n[[ig;Cyan;]For more information on the mod and its integrated commands.]\n`), 2000);
}

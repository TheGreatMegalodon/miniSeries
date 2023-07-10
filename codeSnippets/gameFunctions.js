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
        const shipRef = [601, 602, 603, 604, 605, 606, 607];
        const randomShip = shipRef[Math.floor(Math.random() * shipRef.length)];
        ship.set({
          type: randomShip,
          shield: 999,
          generator: 999,
          stats: 66666666,
          crystals: 720
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
    switch(value) {
      case "disc":
        gameCommands.log(`  Waiting...`, "orange");
        setTimeout(() => gameCommands.log(`  Finishing % Log-disabled`, "yellow"), 2000);
        setTimeout(() => gameCommands.log(`  Ready to start % Log-enabled`, "green"), 4000);
        break;
      case "end":
        gameCommands.log(`  Waiting...`, "orange");
        setTimeout(() => gameCommands.log(`  Finishing % Log-disabled`, "yellow"), 2000);
        setTimeout(() => gameCommands.log(`  Ready to start % Log-enabled`, "green"), 7000);
        break;
    }
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
          emissive: images[key].image
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
      reloadComponents[2].position[1] = 50; // Retour à la normale
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
  }
};
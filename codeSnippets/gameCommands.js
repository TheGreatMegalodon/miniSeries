const gameCommands = {
  run: {
    usage: "run /round/",
    description: "Used to start a round\n(make sure to have the previous round cleared before using it)",
    action: function(round) {
      if (!game.custom.mainFly) {
        gameCommands.log(`the default Fly is not defined`, "red");
        return;
      }
      if (game.custom.roundStarted.state) {
        gameCommands.log(`round already started`, "red");
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
    usage: "mainFly /ID/",
    description: "Used to set the main Fly (Neo Space)",
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
    usage: "addFly /ID/",
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
    usage: "removeFly /ID/",
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
    usage: "info /commands/|/players/",
    description: "Allows you to see all of the informations about\nthe players and the commands of the mod.",
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
      }
    }
  },
  findColor: function(color) {
    switch(color) {
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
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
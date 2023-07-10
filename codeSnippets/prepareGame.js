setTimeout(() => game.custom.started||prepareGame(), 200);

function prepareGame() {
  const { echo } = game.modding.terminal;
  const maxLength = Math.max(...Object.keys(gameOptions.info).map(key => key.length));
  echo(`\n[[i;#ff7070;]  Staring % Initializing...]\n`);
  Object.keys(gameOptions.info).forEach((key, index) => {
    const formattedKey = `${key.charAt(0).toUpperCase() + key.substring(1)}:`.padEnd(maxLength + 2);
    echo(`[[i;Cyan;]     ${formattedKey}] [[i;Gold;]${gameOptions.info[key]}]`);
    (index === 1) && echo(' ');
  });
  gameCommands.resolveCommands();
  gameFunctions.prepareUIs();
  gameFunctions.createImages();
  game.custom.roundStarted = {
    state: false,
    round: undefined
  };
  echo(`\n[[i;#85ff70;]  Started % Log-enabled]\n`);
  game.custom.started = true;
}
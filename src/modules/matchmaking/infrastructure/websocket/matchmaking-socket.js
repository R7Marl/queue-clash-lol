import { matchmakingService } from '../dependencies/index.js';

export const registerMatchmakingHandlers = (io) => {
  io.on('connection', (socket) => {
    console.log('Cliente conectado');

    socket.on('findMatchDuo', (data) => {
      const result = matchmakingService.addPlayerToDuoQueue(data);
      if (result.matched) {
        io.emit('matchDuo', 'Se encontró un match');
        io.emit('matchDuo', result.players);
      }
    });

    socket.on('findFlexParty', (data) => {
      const result = matchmakingService.addPlayerToFlexQueue(data);
      if (result.matched) {
        io.emit('matchFlex', 'Se encontraron 5 jugadores disponibles');
        io.emit('matchFlex', result.players);
      }
    });

    socket.on('disconnect', () => {
      matchmakingService.removePlayer(socket.id);
    });
  });
};

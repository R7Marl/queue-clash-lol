import { ELO } from '../../../shared/constants/game-elo.js';

export class MatchmakingService {
  constructor(playerQueue) {
    this.playerQueue = playerQueue;
  }

  addPlayerToDuoQueue(player) {
    this.playerQueue.enqueue(player);
    if (this.playerQueue.size() === 2 && this.#hasComparablePlayers()) {
      const match = this.playerQueue.getAll();
      this.playerQueue.clear();
      return { matched: true, players: match };
    }

    if (this.playerQueue.size() > 2) {
      this.playerQueue.clear();
    }

    return { matched: false };
  }

  addPlayerToFlexQueue(player) {
    this.playerQueue.enqueue(player);
    if (this.playerQueue.size() === 4) {
      const match = this.playerQueue.getAll();
      this.playerQueue.clear();
      return { matched: true, players: match };
    }
    return { matched: false };
  }

  removePlayer(id) {
    this.playerQueue.dequeue(id);
  }

  getSnapshot() {
    return { size: this.playerQueue.size(), queue: this.playerQueue.getAll() };
  }

  #hasComparablePlayers() {
    const players = this.playerQueue.getAll();
    return players.some((player) =>
      players.some(
        (otherPlayer) =>
          player !== otherPlayer && Math.abs(player.leaguePoints - otherPlayer.leaguePoints) <= 100
      )
    );
  }

  #compareRanks() {
    const players = this.playerQueue.getAll();
    return players.some((player) =>
      players.some((otherPlayer) => {
        if (player === otherPlayer) return false;
        const playerRank = ELO[player.rank];
        const otherRank = ELO[otherPlayer.rank];
        return playerRank && otherRank && playerRank !== otherRank;
      })
    );
  }
}

export class PlayerQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(player) {
    const exists = this.queue.some((p) => p.id === player.id);
    if (!exists) {
      this.queue.push(player);
    }
    return this.queue;
  }

  dequeue(playerId) {
    this.queue = this.queue.filter((player) => player.id !== playerId);
    return this.queue;
  }

  clear() {
    this.queue = [];
  }

  size() {
    return this.queue.length;
  }

  getAll() {
    return this.queue;
  }
}

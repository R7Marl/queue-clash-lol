import ELO from "../../../utils/GameData/GameElo";
export default async (io) => {

    class Queue {
        constructor() {
            this.queue = [];
            this.queueSize = 0;
        }

        enqueue(player) {
            if(!this.queue.some(p => p.id !== player.id)) {
                this.queue.push(player);
                this.queueSize++;
            }
            return this.queue;
        }

        dequeue(playerId) {
            this.queue = this.queue.filter((player) => player.id !== playerId);
            this.queueSize--;
            return this.queue;
        }
        isEmpty() {
            return this.queueSize === 0;
        }
        clearQueue() {
            this.queue = [];
            this.queueSize = 0;
        }
        getQueue() {
            return this.queue;
        }
        comparePlayers() {
            const deletingPlayer = this.queue.filter(player => {
                return this.queue.some((otherPlayer) => {
                    return player !== otherPlayer && Math.abs(player.leaguePoints - otherPlayer.leaguePoints) <= 100
                })
            })
            console.log(deletingPlayer);
            if(deletingPlayer.length == 0) {
                return false
            } else {
                return true;
            }
        }
        compareRankFlex() {
         const comparedPlayers = [];
         this.queue.forEach((player, index) => {
            const playersCompared = this.queue.slice(index + 1).filter(otherPlayer => {
                return player.rank !== otherPlayer.rank
            })
            if(playersCompared.length > 0) {
                playersCompared.forEach(otherPlayer => {
                    const playerRank = ELO[player.rank];
                    const otherPlayerRank = ELO[otherPlayer.rank];
                    comparedPlayers.push({player, otherPlayer, playerRank, otherPlayerRank});
                })
            }
         })
         return comparedPlayers;
        }
    }

    const queue = new Queue();
    io.on('connection', (socket) => {
        console.log("Conectado")
        socket.on('findMatchDuo', async(data) => {
            if(queue.queueSize <= 2) {
                queue.enqueue(data);
                if(queue.queueSize === 2) {
                    if(queue.comparePlayers()) {
                        console.log("HAY MATCH DE DUO");
                        io.emit('matchDuo', "Se encontró un match");
                        io.emit('matchDuo', queue.getQueue());
                        queue.clearQueue();
                        console.log("Terminado.");
                    } else {
                        console.log("El match era imparejo");
                        queue.clearQueue();
                        io.emit('matchDuo', "No se encontró un match");
                    }
                }
            }
        });
        socket.on('findFlexParty', async(data) => {
            if(queue.queueSize <= 4) {
                queue.enqueue(data);
                if(queue.queueSize === 4) {
                    console.log('5 jugadores juntados');
                    io.emit('matchFlex', "Se encontraron 5 jugadores disponibles");
                    io.emit('matchFlex', queue.getQueue());
                    queue.clearQueue();
                } 
            }
        });
    })
}
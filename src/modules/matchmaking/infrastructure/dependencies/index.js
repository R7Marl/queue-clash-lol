import { PlayerQueue } from '../../domain/player-queue.js';
import { MatchmakingService } from '../../application/matchmaking-service.js';

const playerQueue = new PlayerQueue();
export const matchmakingService = new MatchmakingService(playerQueue);

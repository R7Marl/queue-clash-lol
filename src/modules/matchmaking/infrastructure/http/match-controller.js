import { matchmakingService } from '../dependencies/index.js';

export const getQueueSnapshot = (req, res) => {
  const snapshot = matchmakingService.getSnapshot();
  res.json(snapshot);
};

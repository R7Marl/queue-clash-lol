import { LolApi, RiotApi } from 'twisted';

const apiOptions = {
  rateLimitRetry: true,
  rateLimitRetryAttempts: 1,
  concurrency: undefined,
  key: process.env.RIOT_API_KEY,
  debug: {
    logTime: false,
    logUrls: false,
    logRatelimit: false
  }
};

export const LOLAPI = new LolApi(apiOptions);
export const RIOTAPI = new RiotApi(apiOptions);

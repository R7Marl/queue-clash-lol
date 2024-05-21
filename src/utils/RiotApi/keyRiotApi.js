import { RiotApi } from 'twisted'

const RIOTAPI = new RiotApi({
  rateLimitRetry: true,
  rateLimitRetryAttempts: 1,
  concurrency: undefined,
  key: process.env.RIOT_API_KEY,
  debug: {
    logTime: false,
    logUrls: false,
    logRatelimit: false
  }
})


export default RIOTAPI;
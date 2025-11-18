import { Constants } from 'twisted';
import { LOLAPI, RIOTAPI } from '../../../../shared/riot/riot-clients.js';

export class RiotAccountService {
  constructor(region) {
    this.region = region;
  }

  async getAccount(username) {
    const [gameName, tag] = username.split('#');
    if (!gameName || !tag) {
      throw new Error('El formato del usuario de Riot debe ser gameName#tag');
    }

    const riotResponse = await RIOTAPI.Account.getByRiotId(gameName, tag, Constants.RegionGroups.AMERICAS);
    return riotResponse.response;
  }

  async getLeagueData(puuid) {
    const summoner = await LOLAPI.Summoner.getByPUUID(puuid, Constants.Regions.LAT_SOUTH);
    const summonerData = summoner.response;
    const ranked = await LOLAPI.League.bySummoner(summonerData.id, Constants.Regions.LAT_SOUTH);
    return { summonerData, ranked: ranked.response };
  }
}

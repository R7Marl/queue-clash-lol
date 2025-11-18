import { RiotAccountService } from './services/riot-account-service.js';

export class AddGameFromRiot {
  constructor(userGameRepository) {
    this.userGameRepository = userGameRepository;
  }

  async execute({ userId, username, region }) {
    const riotService = new RiotAccountService(region);
    const account = await riotService.getAccount(username);
    if (!account) throw new Error('No se pudo encontrar el Summoner');

    const { summonerData, ranked } = await riotService.getLeagueData(account.puuid);
    if (!ranked || ranked.length === 0) throw new Error('Datos de liga no encontrados');

    const rankedData = ranked[0];
    const winrate = this.#calculateWinrate(rankedData.wins, rankedData.losses);

    const payload = {
      user: userId,
      riotData: {
        puuid: account.puuid,
        gameName: account.gameName,
        tagLine: account.tagLine,
        summonerLevel: summonerData.summonerLevel,
        profileIconId: summonerData.profileIconId,
        tier: rankedData.tier,
        rank: rankedData.rank,
        wins: rankedData.wins,
        losses: rankedData.losses,
        queueType: rankedData.queueType,
        summonerId: rankedData.summonerId,
        leaguePoints: rankedData.leaguePoints,
        winrate
      }
    };

    return this.userGameRepository.create(payload);
  }

  #calculateWinrate(wins, losses) {
    return Math.floor((wins / (wins + losses)) * 100);
  }
}

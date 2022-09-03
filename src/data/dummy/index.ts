import statistic from './json/statistic.json';
import noti from './json/noti.json';
import user from './json/user.json';
import area from './json/areaChartText.json';

function JsonString (data: Array<any>): string { return JSON.stringify(data) }; // Fake JSON String

export const statisticJSON = JsonString(statistic);
export const notiJSON = JsonString(noti);
export const userJSON = JsonString(user);
export const areaJSON = JsonString(area);
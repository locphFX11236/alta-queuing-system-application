import statistic from './json/statistic.json';
import noti from './json/noti.json';
import user from './json/user.json';
import area from './json/areaChartText.json';
import account from './json/account.json';
import accountLog from './json/accountLog.json';
import count_num from './json/count_num.json';
import equip from './json/equip.json';
import report from './json/report.json';
import role from './json/role.json';
import service from './json/service.json';

function JsonString (data: Array<any>): string { return JSON.stringify(data) }; // Fake JSON String

export const statisticJSON = JsonString(statistic);
export const notiJSON = JsonString(noti);
export const userJSON = JsonString(user);
export const areaJSON = JsonString(area);
export const accountJSON = JsonString(account);
export const accountLogJSON = JsonString(accountLog);
export const count_numJSON = JsonString(count_num);
export const equipJSON = JsonString(equip);
export const reportJSON = JsonString(report);
export const roleJSON = JsonString(role);
export const serviceJSON = JsonString(service);
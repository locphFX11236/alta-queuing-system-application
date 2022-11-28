import statistic from './json/statistic.json';
import area from './json/areaChartText.json';
import account from './json/account.json';
import userLog from './json/userLog.json';
import count_num from './json/count_num.json';
import equip from './json/equip.json';
import report from './json/report.json';
import role from './json/role.json';
import service from './json/service.json';

export const Keys: Record<string, any> = {
    'equip': equip,
    'serv': service,
    'numCou': count_num,
    'report': report,
    'role': role,
    'acc': account,
    'logs': userLog,
    'dashboard': {
        showStatistic: statistic,
        showChart: area
    },
};
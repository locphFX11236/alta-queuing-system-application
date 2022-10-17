import './table.css';
import HandleData from '../../../core/data/api/handleData';
import TableFC from './table';
import { userLogJSON, count_numJSON } from '../../../core/data/dummy';
import { accountCols, accountLogCols, equipCols, numCouCols, reportCols, roleCols, serviceCols, setNumCols } from './columns';
import { SelectAccState, SelectEquipState, SelectNCState, SelectReportState, SelectRoleState, SelectServState } from '../../../core/featuresRedux/hookRedux';

const numCouData = HandleData(count_numJSON);
const accountLogData = HandleData(userLogJSON);

const D = (s: string): any[] => {
    const state: Record<string, any> = {
        'equip': SelectEquipState(),
        'serv': SelectServState(),
        'numCou': SelectNCState(),
        'report': SelectReportState(),
        'role': SelectRoleState(),
        'acc': SelectAccState(),
    };
    const { data, search } = state[s];

    if (search.result.length === 0) return data;
    else return search.result;
};

export const EquipTable: React.FC = () => TableFC(equipCols, D('equip'));
export const ServiceTable: React.FC = () => TableFC(serviceCols, D('serv'));
export const SetNumTable: React.FC = () => TableFC(setNumCols, numCouData, 'setNum');
export const NumCouTable: React.FC = () => TableFC(numCouCols,  D('numCou'));
export const ReportTable: React.FC = () => TableFC(reportCols, D('report'), 'report');
export const RoleTable: React.FC = () => TableFC(roleCols, D('role'));
export const AccountTable: React.FC = () => TableFC(accountCols, D('acc'));
export const AccountLogTable: React.FC = () => TableFC(accountLogCols, accountLogData, 'log');
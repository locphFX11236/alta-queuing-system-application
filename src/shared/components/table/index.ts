import './table.css';
import HandleData from '../../../core/api/handleData';
import TableFC from './table';
import { accountJSON, accountLogJSON, count_numJSON, reportJSON, roleJSON } from '../../../core/data/dummy';
import { accountCols, accountLogCols, equipCols, numCouCols, reportCols, roleCols, serviceCols, setNumCols } from './columns';
import { SelectEquipState, SelectServState } from '../../../core/featuresRedux/hookRedux';

const numCouData = HandleData(count_numJSON);
const reportData = HandleData(reportJSON);
const roleData = HandleData(roleJSON);
const accountData = HandleData(accountJSON);
const accountLogData = HandleData(accountLogJSON);

const D = (s: string): any[] => {
    const state: Record<string, any> = {
        'equip': SelectEquipState(),
        'serv': SelectServState(),
    };
    const { data, search } = state[s];

    if (search.result.length === 0) return data;
    else return search.result;
};

export const EquipTable: React.FC = () => TableFC(equipCols, D('equip'));
export const ServiceTable: React.FC = () => TableFC(serviceCols, D('serv'));
export const SetNumTable: React.FC = () => TableFC(setNumCols, numCouData, 'setNum');
export const NumCouTable: React.FC = () => TableFC(numCouCols, numCouData);
export const ReportTable: React.FC = () => TableFC(reportCols, reportData, 'report');
export const RoleTable: React.FC = () => TableFC(roleCols, roleData);
export const AccountTable: React.FC = () => TableFC(accountCols, accountData);
export const AccountLogTable: React.FC = () => TableFC(accountLogCols, accountLogData, 'log');
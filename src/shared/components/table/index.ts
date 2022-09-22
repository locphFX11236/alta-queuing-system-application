import './table.css';
import HandleData from '../../../data/handle';
import TableFC from './table';
import { accountJSON, accountLogJSON, count_numJSON, equipJSON, reportJSON, roleJSON, serviceJSON } from '../../../data/dummy';
import { accountCols, accountLogCols, equipCols, numCouCols, reportCols, roleCols, serviceCols, setNumCols } from './columns';

const equipData = HandleData(equipJSON);
const serviceData = HandleData(serviceJSON);
const numCouData = HandleData(count_numJSON);
const reportData = HandleData(reportJSON);
const roleData = HandleData(roleJSON);
const accountData = HandleData(accountJSON);
const accountLogData = HandleData(accountLogJSON);

export const EquipTable: React.FC = () => TableFC(equipCols, equipData);
export const ServiceTable: React.FC = () => TableFC(serviceCols, serviceData);
export const SetNumTable: React.FC = () => TableFC(setNumCols, numCouData, 'setNum');
export const NumCouTable: React.FC = () => TableFC(numCouCols, numCouData);
export const ReportTable: React.FC = () => TableFC(reportCols, reportData, 'report');
export const RoleTable: React.FC = () => TableFC(roleCols, roleData);
export const AccountTable: React.FC = () => TableFC(accountCols, accountData);
export const AccountLogTable: React.FC = () => TableFC(accountLogCols, accountLogData, 'log');
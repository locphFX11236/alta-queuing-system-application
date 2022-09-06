import './table.css';
import HandleData from '../../../data/handle';
import TableFC from './table';
import { count_numJSON, equipJSON, reportJSON, serviceJSON } from '../../../data/dummy';
import { equipCols, numCouCols, reportCols, serviceCols } from './columns';

const equipData = HandleData(equipJSON);
const serviceData = HandleData(serviceJSON);
const numCouData = HandleData(count_numJSON);
const reportData = HandleData(reportJSON);

export const EquipTable: React.FC = () => TableFC(equipCols, equipData);
export const ServiceTable: React.FC = () => TableFC(serviceCols, serviceData);
export const NumCouTable: React.FC = () => TableFC(numCouCols, numCouData);
export const ReportTable: React.FC = () => TableFC(reportCols, reportData);
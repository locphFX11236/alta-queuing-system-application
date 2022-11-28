import { useSelector } from 'react-redux';

import type { AccState, DashboardState, EquipState, LogsState, NCState, ReportState, RoleState, RootState, ServState, UserState } from '../typescript/reduxState';

// Là một hàm hướng dẫn cho Hook 'useSelector' lấy giá trị state theo yêu cầu
const SelectUser = (state: RootState): UserState => state.UserState;
const SelectEquipment = (state: RootState): EquipState => state.EquipmentState;
const SelectService = (state: RootState): ServState => state.ServiceState;
const SelectNumCou = (state: RootState): NCState => state.NumCouState;
const SelectReport = (state: RootState): ReportState => state.ReportState;
const SelectRole = (state: RootState): RoleState => state.RoleState;
const SelectAcc = (state: RootState): AccState => state.AccState;
const SelectLogs = (state: RootState): LogsState => state.LogsState;
const SelectDashboard = (state: RootState): DashboardState => state.DashboardState;

export const SelectUserState = (): UserState => useSelector(SelectUser);
export const SelectEquipState = (): EquipState => useSelector(SelectEquipment);
export const SelectServState = (): ServState => useSelector(SelectService);
export const SelectNCState = (): NCState => useSelector(SelectNumCou);
export const SelectReportState = (): ReportState => useSelector(SelectReport);
export const SelectRoleState = (): RoleState => useSelector(SelectRole);
export const SelectAccState = (): AccState => useSelector(SelectAcc);
export const SelectLogsState = (): LogsState => useSelector(SelectLogs);
export const SelectDashState = (): DashboardState => useSelector(SelectDashboard);
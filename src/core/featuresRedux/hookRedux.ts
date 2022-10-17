import { useSelector } from 'react-redux';

import type { AccState, EquipState, NCState, ReportState, RoleState, RootState, ServState, UserState } from './redux';

// Là một hàm hướng dẫn cho Hook 'useSelector' lấy giá trị state theo yêu cầu
export const SelectUser = (state: RootState): UserState => state.UserState;
export const SelectEquipment = (state: RootState): EquipState => state.EquipmentState;
export const SelectService = (state: RootState): ServState => state.ServiceState;
export const SelectNumCou = (state: RootState): NCState => state.NumCouState;
export const SelectReport = (state: RootState): ReportState => state.ReportState;
export const SelectRole = (state: RootState): RoleState => state.RoleState;
export const SelectAcc = (state: RootState): AccState => state.AccState;

export const SelectUserState = (): UserState => useSelector(SelectUser);
export const SelectEquipState = (): EquipState => useSelector(SelectEquipment);
export const SelectServState = (): ServState => useSelector(SelectService);
export const SelectNCState = (): NCState => useSelector(SelectNumCou);
export const SelectReportState = (): ReportState => useSelector(SelectReport);
export const SelectRoleState = (): RoleState => useSelector(SelectRole);
export const SelectAccState = (): AccState => useSelector(SelectAcc);
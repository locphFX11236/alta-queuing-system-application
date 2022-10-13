import { useSelector } from 'react-redux';

import type { EquipState, NCState, RootState, ServState, UserState } from './redux';

// Là một hàm hướng dẫn cho Hook 'useSelector' lấy giá trị state theo yêu cầu
export const SelectUser = (state: RootState): UserState => state.UserState;
export const SelectEquipment = (state: RootState): EquipState => state.EquipmentState;
export const SelectService = (state: RootState): ServState => state.ServiceState;
export const SelectNumCou = (state: RootState): NCState => state.NumCouState;

export const SelectUserState = (): UserState => useSelector(SelectUser);
export const SelectEquipState = (): EquipState => useSelector(SelectEquipment);
export const SelectServState = (): ServState => useSelector(SelectService);
export const SelectNCState = (): NCState => useSelector(SelectNumCou);
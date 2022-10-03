import { useSelector } from 'react-redux';

import type { EquipState, RootState, UserState } from './redux';

// Là một hàm hướng dẫn cho Hook 'useSelector' lấy giá trị state theo yêu cầu
export const SelectUser = (state: RootState): UserState => state.UserState;
export const SelectEquipment = (state: RootState): EquipState => state.EquipmentState;

export const SelectUserState = (): UserState => useSelector(SelectUser);
export const SelectEquipState = (): EquipState => useSelector(SelectEquipment);
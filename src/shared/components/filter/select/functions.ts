import { VoidExpression } from "typescript";

import { FuncParamType } from "./type";
import { EquipSelect1, EquipSelect2 } from "../../../../core/featuresRedux/slice/equipmentSlice";

export const FuncE1 = ({value, dispatch}: FuncParamType): VoidExpression => dispatch( EquipSelect1({ actionStatus: value }) );
export const FuncE2 = ({value, dispatch}: FuncParamType): VoidExpression => dispatch( EquipSelect2({ connectStatus: value }) );

export const FuncS1 = (value: string): void => {
    console.log(`Danh sách dịch vụ, trạng thái hoạt động: ${value}`);
};

export const FuncSI1 = (value: string): void => {
    console.log(`Danh sách dịch vụ, trạng thái: ${value}`);
};

export const FuncNc1 = (value: string): void => {
    console.log(`Danh sách cấp số, tên dịch vụ: ${value}`);
};

export const FuncNc2 = (value: string): void => {
    console.log(`Danh sách cấp số, tình trạng: ${value}`);
};

export const FuncNc3 = (value: string): void => {
    console.log(`Danh sách cấp số, nguồn cấp: ${value}`);
};

export const FuncA1 = (value: string): void => {
    console.log(`Danh sách tài khoản, vai trò: ${value}`);
};
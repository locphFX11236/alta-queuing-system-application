import { VoidExpression } from "typescript";

import { FuncParamType } from "./type";
import { EquipSelect1, EquipSelect2 } from "../../../../core/featuresRedux/slice/equipment";
import { ServSelect1 } from "../../../../core/featuresRedux/slice/service";
import { NCSelect1, NCSelect2, NCSelect3 } from "../../../../core/featuresRedux/slice/numberCount";

export const FuncE1 = ({value, dispatch}: FuncParamType): VoidExpression => dispatch( EquipSelect1({ actionStatus: value }) );
export const FuncE2 = ({value, dispatch}: FuncParamType): VoidExpression => dispatch( EquipSelect2({ connectStatus: value }) );

export const FuncS1 = ({value, dispatch}: FuncParamType): VoidExpression => dispatch( ServSelect1({ actionStatus: value }) );

export const FuncSI1 = (value: string): void => {
    console.log(`Danh sách dịch vụ, trạng thái: ${value}`);
};

export const FuncNc1 = ({value, dispatch}: FuncParamType): VoidExpression => dispatch( NCSelect1({ useService: value }) );
export const FuncNc2 = ({value, dispatch}: FuncParamType): VoidExpression => dispatch( NCSelect2({ status: value }) );
export const FuncNc3 = ({value, dispatch}: FuncParamType): VoidExpression => dispatch( NCSelect3({ source: value }) );

export const FuncA1 = (value: string): void => {
    console.log(`Danh sách tài khoản, vai trò: ${value}`);
};
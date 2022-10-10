import { VoidExpression } from "typescript";

import { FuncParamType } from "./type";
import { EquipSearch3 } from "../../../../core/featuresRedux/slice/equipment";
import { ServSearch3 } from "../../../../core/featuresRedux/slice/service";

export const FuncE3 = ({e, dispatch}: FuncParamType): VoidExpression => dispatch( EquipSearch3({ keyWord: e.target.value }) );

export const FuncS3 = ({e, dispatch}: FuncParamType): VoidExpression => dispatch( ServSearch3({ keyWord: e.target.value }) );

export const FuncSI3 = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    console.log('Danh sách dịch vụ, chi tiết, từ khóa: ', e.target.value);
};

export const FuncNc5 = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    console.log('Danh sách cấp số, từ khóa: ', e.target.value);
};

export const FuncR = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    console.log('Danh sách vai trò, từ khóa: ', e.target.value);
};

export const FuncA2 = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    console.log('Danh sách tài khoản, từ khóa: ', e.target.value);
};

export const FuncL2 = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    console.log('Danh sách nhật kí, từ khóa: ', e.target.value);
};
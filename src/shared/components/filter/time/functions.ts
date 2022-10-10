import { VoidExpression } from "typescript";

import { ServTime2 } from "../../../../core/featuresRedux/slice/service";
import { FuncParamType } from "./type";

export const FuncSerList = ({value, dispatch}: FuncParamType): VoidExpression => dispatch( ServTime2({ rangeTime: value }) );

export const FuncSerInfo = (v: any) => {
    console.log(`Thong tin dich vu: ${v.toString()}`);
};

export const FuncNumCou = (v: any) => {
    console.log(`Danh sách cap so: ${v.toString()}`);
};

export const FuncReport = (v: any) => {
    console.log(`Danh sách bao cao: ${v.toString()}`);
};

export const FuncUserLog = (v: any) => {
    console.log(`Danh sách nhat ki nguoi dung: ${v.toString()}`);
};
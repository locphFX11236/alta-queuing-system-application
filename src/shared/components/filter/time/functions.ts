import { VoidExpression } from "typescript";

import { FuncParamType } from "./type";
import { NCTime4 } from "../../../../core/featuresRedux/slice/numberCount";
import { ServTime2 } from "../../../../core/featuresRedux/slice/service";

export const FuncSerList = ({value, dispatch}: FuncParamType): VoidExpression => dispatch( ServTime2({ rangeTime: value }) );

export const FuncSerInfo = (v: any) => {
    console.log(`Thong tin dich vu: ${v.toString()}`);
};

export const FuncNumCou = ({value, dispatch}: FuncParamType) => dispatch( NCTime4({ rangeTime: value }) );

export const FuncReport = (v: any) => {
    console.log(`Danh sách bao cao: ${v.toString()}`);
};

export const FuncUserLog = (v: any) => {
    console.log(`Danh sách nhat ki nguoi dung: ${v.toString()}`);
};
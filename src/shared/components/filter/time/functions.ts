import { VoidExpression } from "typescript";

import { FuncParamType } from "./type";
import { NCTime4, SITime2 } from "../../../../core/featuresRedux/slice/numberCount";
import { ServTime2 } from "../../../../core/featuresRedux/slice/service";
import { ReportTime1 } from "../../../../core/featuresRedux/slice/report";
import { LogsTime1 } from "../../../../core/featuresRedux/slice/logs";

export const FuncSerList = ({value, dispatch}: FuncParamType): VoidExpression => dispatch( ServTime2({ rangeTime: value }) );

export const FuncSerInfo = ({value, dispatch}: FuncParamType): VoidExpression => dispatch( SITime2({ rangeTime: value }) );

export const FuncNumCou = ({value, dispatch}: FuncParamType): VoidExpression => dispatch( NCTime4({ rangeTime: value }) );

export const FuncReport = ({value, dispatch}: FuncParamType): VoidExpression => dispatch( ReportTime1({ rangeTime: value }) );

export const FuncUserLog = ({value, dispatch}: FuncParamType): VoidExpression => dispatch( LogsTime1({ rangeTime: value }) );
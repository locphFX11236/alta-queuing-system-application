import { VoidExpression } from "typescript";

import { FuncParamType } from "./type";
import { EquipSearch3 } from "../../../../core/featuresRedux/slice/equipment";
import { ServSearch3 } from "../../../../core/featuresRedux/slice/service";
import { NCSearch5, SISearch3 } from "../../../../core/featuresRedux/slice/numberCount";
import { RoleSearch1 } from "../../../../core/featuresRedux/slice/role";
import { AccSearch2 } from "../../../../core/featuresRedux/slice/account";
import { LogsSearch2 } from "../../../../core/featuresRedux/slice/logs";

export const FuncE3 = ({e, dispatch}: FuncParamType): VoidExpression => dispatch( EquipSearch3({ keyWord: e.target.value }) );

export const FuncS3 = ({e, dispatch}: FuncParamType): VoidExpression => dispatch( ServSearch3({ keyWord: e.target.value }) );

export const FuncSI3 = ({e, dispatch}: FuncParamType): VoidExpression => dispatch( SISearch3({ keyWord: e.target.value }) );

export const FuncNc5 = ({e, dispatch}: FuncParamType): VoidExpression => dispatch( NCSearch5({ keyWord: e.target.value }) );

export const FuncR = ({e, dispatch}: FuncParamType): VoidExpression => dispatch( RoleSearch1({ keyWord: e.target.value }) );

export const FuncA2 = ({e, dispatch}: FuncParamType): VoidExpression => dispatch( AccSearch2({ keyWord: e.target.value }) );

export const FuncL2 = ({e, dispatch}: FuncParamType): VoidExpression => dispatch( LogsSearch2({ keyWord: e.target.value }) );
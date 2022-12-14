import { VoidExpression } from "typescript";

import { AnyAction, AppDispatch } from "../../../../core/typescript/reduxState";

export type ValueType = string[];

export type FuncParamType = {
    value: ValueType,
    dispatch: AppDispatch<AnyAction>
};

export type TimeCustomProps = {
    functions: VoidExpression<FuncParamType>
};
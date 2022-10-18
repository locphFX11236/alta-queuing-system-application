import { VoidExpression } from "typescript";

import { AnyAction, AppDispatch } from "../../../../core/typescript/reduxState";

export type FuncParamType = {
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, 
    dispatch: AppDispatch<AnyAction>
};

export type SearchCustomProps = {
    functions: VoidExpression<FuncParamType>
};
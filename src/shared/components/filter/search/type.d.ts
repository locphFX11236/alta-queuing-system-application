import { VoidExpression } from "typescript";

import { AnyAction, AppDispatch } from "../../../../core/featuresRedux/redux";

export type FuncParamType = {
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, 
    dispatch: AppDispatch<AnyAction>
};

export type SearchCustomProps = {
    functions: VoidExpression<FuncParamType>
};
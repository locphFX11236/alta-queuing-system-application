import { VoidExpression } from "typescript";

import { AnyAction, AppDispatch } from "../../../../core/typescript/reduxState";

export type OptionItems = {
    text: string,
    value: string | boolean
};

export type FuncParamType = {
    value: OptionItems.text,
    dispatch: AppDispatch<AnyAction>
};

export type SelectCustomProps = {
    optionItems: OptionItems[],
    functions: VoidExpression<FuncParamType>
};
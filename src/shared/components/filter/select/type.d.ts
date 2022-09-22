export type OptionItems = {
    text: string,
    value: string | boolean
}

export type SelectCustomProps = {
    optionItems: OptionItems[],
    functions: VoidExpression
}
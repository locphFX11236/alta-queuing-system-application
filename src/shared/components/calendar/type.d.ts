export type MonthType = Moment [] [];

export type CoreType = {
    rootDate: Moment,
    showMonth: MonthType,
    value: string[],
    onSelect: Function,
    prevMonth: VoidFunction,
    nextMonth: VoidFunction,
    weekName: Function,
    dateName: Function
};

export type SetUseStateType = React.Dispatch<React.SetStateAction<any>>
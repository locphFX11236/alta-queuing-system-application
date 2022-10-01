import moment, { Moment } from "moment";
import { SetUseStateType } from "../type";

export const SelectM1: Function = (date: Moment, value: string[], setValue: SetUseStateType) => {
    // Check with value
    if (value[0] === date.format('L')) return setValue([]);
    // Add in value
    else return setValue([date.format('L')]);
};

export const SelectM2: Function = (date: Moment, value: string[], setValue: SetUseStateType) => {
    // Check with value
    const i: number = value.findIndex(v => v === date.format('L'));
    if (i !== -1) {
        value.splice(i, 1);
        return setValue([...value]);
    };

    // Add in value
    if (value.length === 1) {
        let av: string[] = [value[0], date.format('L')].sort();
        return setValue(av);
    } else if (value.length === 2) {
        let av: string[] = date.isBefore(moment(value[0])) ? [date.format('L'), value[1]] : [value[0], date.format('L')];
        return setValue(av);
    } else return setValue([date.format('L')]);
};
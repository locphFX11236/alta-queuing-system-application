import { Moment } from "moment";
import { SetUseStateType } from "../type";

export const Previous: Function = (rootDate: Moment, setRootDate: SetUseStateType) => {
    let prevMonthDate: Moment = rootDate.clone().subtract(1, 'month');
    setRootDate(prevMonthDate);
};

export const Next: Function = (rootDate: Moment, setRootDate: SetUseStateType) => {
    let nextMonthDate: Moment = rootDate.clone().add(1, 'month');
    setRootDate(nextMonthDate);
};
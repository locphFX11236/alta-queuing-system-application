import React from "react";
import { Row } from "antd";

import WeekCalendar from "./week";

const MonthCalendar = ({ showMonth, weekClassName, ...state }: any): React.ReactElement => (
    showMonth.map((week: any, index: any) => (
        <Row
            className={weekClassName()}
            key={`${state.rootDate.format('[M]MM')}_W${index + 1}`}
        >
            <WeekCalendar week={week} {...state} />
        </Row>
    ))
);

export default MonthCalendar;
import React from "react";
import { Row } from "antd";

import WeekCalendar from "./week";

const MonthCalendar = ({ showMonth, weekName, ...state }: any): React.ReactElement => (
    showMonth.map((week: any, index: number) => (
        <Row
            className={weekName(week)}
            key={`${state.rootDate.format('[M]MM')}_W${index + 1}`}
        >
            <WeekCalendar week={week} {...state} />
        </Row>
    ))
);

export default MonthCalendar;
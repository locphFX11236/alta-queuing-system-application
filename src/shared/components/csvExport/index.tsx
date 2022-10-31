import { CSVLink } from 'react-csv';

import { SelectReportState } from '../../../core/featuresRedux/hookRedux';

const CSVExport = ({children}: any) => {
    const reportState = SelectReportState().data;

    return (
        <CSVLink data={reportState}>
            {children}
        </CSVLink>
    );
};

export default CSVExport;
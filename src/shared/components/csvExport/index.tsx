import { CSVLink } from 'react-csv';

import { reportJSON } from '../../../data/dummy';
import HandleData from '../../../data/handle';

const CSVExport = ({children}: any) => {
    const reportData = HandleData(reportJSON);

    return (
        <CSVLink data={reportData}>
            {children}
        </CSVLink>
    );
};

export default CSVExport;
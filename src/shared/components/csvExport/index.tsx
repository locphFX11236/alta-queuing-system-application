import { CSVLink } from 'react-csv';

import HandleData from '../../../core/data/api/handleData';
import { reportJSON } from '../../../core/data/dummy';

const CSVExport = ({children}: any) => {
    const reportData = HandleData(reportJSON);

    return (
        <CSVLink data={reportData}>
            {children}
        </CSVLink>
    );
};

export default CSVExport;
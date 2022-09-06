import { useState } from 'react';
import { Table, TablePaginationConfig } from 'antd';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

const TableFC = (
    columns: ColumnsType<Array<any>>,
    data: Array<any>
): JSX.Element => {
    const [pagination, setPagination] = useState<TablePaginationConfig>({
        current: 1,
        pageSize: 9,
        hideOnSinglePage: true,
        itemRender: (_, type, originalElement) => {
            if (type === 'prev') return <CaretLeftOutlined />;
            if (type === 'next') return <CaretRightOutlined />;
            else return originalElement;
        }
    });

    return (
        <Table
            className="table main-list"
            columns={columns}
            dataSource={data}
            bordered={true}
            pagination={pagination}
            onChange={ p => setPagination({...pagination, ...p}) }
        />
    )
};

export default TableFC;
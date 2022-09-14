import { useState } from 'react';
import { Table } from 'antd';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';

import { ColProps, Datas, PaginationProps } from './tableType';
import customOption from './customOption';

const TableFC = (
    columns: ColProps,
    data: Datas,
    custom?: string
): JSX.Element => {
    const [pagination, setPagination] = useState<PaginationProps>({
        current: 1,
        pageSize: (custom !== undefined) ? customOption[custom].pageSize : 9,
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
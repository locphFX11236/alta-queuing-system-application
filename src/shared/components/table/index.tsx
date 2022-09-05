import React, { useState } from 'react';
import { Badge, Table, TablePaginationConfig } from 'antd';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

import './table.css';
import { equipJSON } from '../../../data/dummy';
import HandleData from '../../../data/handle';
import { Link } from 'react-router-dom';

const columns: ColumnsType<Array<any>> = [
    { title: 'Mã thiết bị', dataIndex: 'code', key: 'code', width: 103 },
    { title: 'Tên thiết bị', dataIndex: 'name', key: 'name', width: 99 },
    { title: 'Địa chỉ IP', dataIndex: 'IPAddress', key: 'IPAddress', width: 138 },
    {
        title: 'Trạng thái hoạt động', dataIndex: 'actionStatus', key: 'actionStatus', width: 171,
        render: a => {
            if(a) return <p><Badge color={'#34CD26'} />Hoạt động</p>;
            else  return <p><Badge color={'#EC3740'} />Ngưng hoạt động</p>;
        }
    },
    {
        title: 'Trạng thái kết nối', dataIndex: 'connectStatus', key: 'connectStatus', width: 145,
        render: c => {
            if(c) return <p><Badge color={'#34CD26'} />Hoạt động</p>;
            else  return <p><Badge color={'#EC3740'} />Ngưng hoạt động</p>;
        }
    },
    {
        title: 'Dịch vụ sử dụng', dataIndex: 'usedService', key: 'usedService', width: 268,
        render: u => <p>{u[0]}, {u[1]}...<br/><Link to='/equip/equ-infor'>Xem thêm</Link></p>
    },
    {
        title: '', dataIndex: 'usedService', key: 'usedService', width: 82,
        render: () => <Link to='/equip/equ-infor'>Chi tiết</Link>
    },
    {
        title: '', dataIndex: 'usedService', key: 'usedService', width: 106,
        render: () => <Link to='/equip/equ-manage-upd'>Cập nhật</Link>
    }
];

const data: Array<any> = HandleData(equipJSON);

const TableComp: React.FC = () => {
    const [pagination, setPagination] = useState<TablePaginationConfig>({
        current: 1,
        pageSize: 9,
        hideOnSinglePage: true,
        itemRender: (_, type, originalElement) => {
            console.log(_, type, originalElement) 
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
export default TableComp;
import { Badge } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';

export const equipCols: ColumnsType<Array<any>> = [
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

export const serviceCols: ColumnsType<Array<any>> = [
    { title: 'Mã dịch vụ', dataIndex: 'code', key: 'code', width: 150 },
    { title: 'Tên dịch vụ', dataIndex: 'name', key: 'name', width: 225 },
    { title: 'Mô tả', dataIndex: 'description', key: 'description', width: 230 },
    {
        title: 'Trạng thái hoạt động', dataIndex: 'actionStatus', key: 'actionStatus', width: 255,
        render: a => {
            if(a) return <p><Badge color={'#34CD26'} />Hoạt động</p>;
            else  return <p><Badge color={'#EC3740'} />Ngưng hoạt động</p>;
        }
    },
    {
        title: '', dataIndex: 'code', key: 'code', width: 125,
        render: () => <Link to='/service/ser-infor'>Chi tiết</Link>
    },
    {
        title: '', dataIndex: 'code', key: 'code', width: 126,
        render: () => <Link to='/service/ser-manage-upd'>Cập nhật</Link>
    }
];

export const numCouCols: ColumnsType<Array<any>> = [
    { title: 'STT', dataIndex: 'key', key: 'key', width: 95 },
    { title: 'Tên khách hàng', dataIndex: 'name', key: 'name', width: 165 },
    { title: 'Tên dịch vụ', dataIndex: 'useService', key: 'useService', width: 170 },
    { title: 'Thời gian cấp', dataIndex: 'startTime', key: 'startTime', width: 160 },
    { title: 'Hạn sử dụng', dataIndex: 'endTime', key: 'endTime', width: 175 },
    {
        title: 'Trạng thái', dataIndex: 'status', key: 'status', width: 150,
        render: s => {
            if(s === 'Đã sử dụng') return <p><Badge color={'#7E7D88'} />{s}</p>;
            if(s === 'Đang chờ') return <p><Badge color={'#4277FF'} />{s}</p>;
            else  return <p><Badge color={'#E73F3F'} />{s}</p>;
        }
    },
    { title: 'Nguồn cấp', dataIndex: 'source', key: 'source', width: 120 },
    {
        title: '', dataIndex: 'key', key: 'key', width: 76,
        render: () => <Link to='/number-count/num-infor'>Chi tiết</Link>
    }
];

export const reportCols: ColumnsType<Array<any>> = [
    { title: 'Số thứ tự', dataIndex: 'key', key: 'key', width: 226 },
    { title: 'Tên dịch vụ', dataIndex: 'serviceName', key: 'serviceName', width: 235 },
    { title: 'Thời gian cấp', dataIndex: 'time', key: 'time', width: 240 },
    {
        title: 'Tình trạng', dataIndex: 'status', key: 'status', width: 215,
        render: s => {
            if(s === 'Đã sử dụng') return <p><Badge color={'#7E7D88'} />{s}</p>;
            if(s === 'Đang chờ') return <p><Badge color={'#4277FF'} />{s}</p>;
            else  return <p><Badge color={'#E73F3F'} />{s}</p>;
        }
    },
    { title: 'Nguồn cấp', dataIndex: 'source', key: 'source', width: 195 }
];
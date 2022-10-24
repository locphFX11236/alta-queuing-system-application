import { Link } from 'react-router-dom';

import { ActiveTag, StatusTag } from '../badgeTag';
import { CustomTag, RenderSources, RenderUseServices } from './items';
import type { ColProps } from './tableType';

export const equipCols: ColProps = [
    { title: 'Mã thiết bị', dataIndex: 'code', key: 'code', width: 103 },
    { title: 'Tên thiết bị', dataIndex: 'name', key: 'name', width: 99 },
    { title: 'Địa chỉ IP', dataIndex: 'IPAddress', key: 'IPAddress', width: 138 },
    {
        title: 'Trạng thái hoạt động', dataIndex: 'actionStatus', key: 'actionStatus', width: 171,
        render: a => <ActiveTag a={a} />
    },
    {
        title: 'Trạng thái kết nối', dataIndex: 'connectStatus', key: 'connectStatus', width: 145,
        render: a => <ActiveTag a={a} />
    },
    {
        title: 'Dịch vụ sử dụng', dataIndex: 'usedService', key: 'usedService', width: 268,
        render: (u, record) => <p>{RenderUseServices[u[0]]}, {RenderUseServices[u[1]]}...<br/><Link to='/equip/equ-infor' state={record}>Xem thêm</Link></p>
    },
    {
        title: '', dataIndex: 'key', key: 'key', width: 82,
        render: (_, record) => <Link to='/equip/equ-infor' state={record}>Chi tiết</Link>
    },
    {
        title: '', dataIndex: 'key', key: 'key', width: 106,
        render: (_, record) => <Link to='/equip/equ-manage-upd' state={record}>Cập nhật</Link>
    }
];

export const serviceCols: ColProps = [
    { title: 'Mã dịch vụ', dataIndex: 'code', key: 'code', width: 150 },
    { title: 'Tên dịch vụ', dataIndex: 'name', key: 'name', width: 225 },
    { title: 'Mô tả', dataIndex: 'description', key: 'description', width: 230 },
    {
        title: 'Trạng thái hoạt động', dataIndex: 'actionStatus', key: 'actionStatus', width: 255,
        render: a => <ActiveTag a={a} />
    },
    {
        title: '', dataIndex: 'code', key: 'code', width: 125,
        render: (_, record) => <Link to='/service/ser-infor' state={record}>Chi tiết</Link>
    },
    {
        title: '', dataIndex: 'code', key: 'code', width: 126,
        render: (_, record) => <Link to='/service/ser-manage-upd' state={record}>Cập nhật</Link>
    }
];

export const setNumCols: ColProps = [
    { title: 'STT', dataIndex: 'countNumber', key: 'countNumber', width: 334 },
    {
        title: 'Trạng thái', dataIndex: 'status', key: 'status', width: 335,
        render: s => <CustomTag s={s} />
    }
];

export const numCouCols: ColProps = [
    { title: 'STT', dataIndex: 'countNumber', key: 'countNumber', width: 95 },
    { title: 'Tên khách hàng', dataIndex: 'name', key: 'name', width: 165 },
    {
        title: 'Tên dịch vụ', dataIndex: 'useService', key: 'useService', width: 170,
        render: s => RenderUseServices[s]
    },
    { title: 'Thời gian cấp', dataIndex: 'startTime', key: 'startTime', width: 160 },
    { title: 'Hạn sử dụng', dataIndex: 'endTime', key: 'endTime', width: 175 },
    {
        title: 'Trạng thái', dataIndex: 'status', key: 'status', width: 150,
        render: s => <StatusTag s={s} />
    },
    {
        title: 'Nguồn cấp', dataIndex: 'source', key: 'source', width: 120,
        render: s => RenderSources[s]
    },
    {
        title: '', dataIndex: 'key', key: 'key', width: 76,
        render: (_, record) => <Link to='/number-count/num-infor' state={record}>Chi tiết</Link>
    }
];

export const reportCols: ColProps = [
    {
        title: 'Số thứ tự', dataIndex: 'key', key: 'key', width: 226,
        sorter: (a, b) => a.key - b.key // Sort theo số
    },
    {
        title: 'Tên dịch vụ', dataIndex: 'serviceName', key: 'serviceName', width: 235,
        sorter: (a, b) => a.serviceName.localeCompare(b.serviceName) // Sort theo alphabet
    },
    {
        title: 'Thời gian cấp', dataIndex: 'time', key: 'time', width: 240,
        sorter: (a, b) => a.time.localeCompare(b.time) // Sort theo alphabet
    },
    {
        title: 'Tình trạng', dataIndex: 'status', key: 'status', width: 215,
        sorter: (a, b) => a.status.length - b.status.length, // Sort theo độ dài
        render: s => <StatusTag s={s} />
    },
    {
        title: 'Nguồn cấp', dataIndex: 'source', key: 'source', width: 195,
        sorter: (a, b) => a.source.length - b.source.length // Sort theo độ dài
    }
];

export const roleCols: ColProps = [
    { title: 'Tên vai trò', dataIndex: 'position', key: 'position', width: 225 },
    { title: 'Số người dùng', dataIndex: 'count', key: 'count', width: 225 },
    { title: 'Mô tả', dataIndex: 'description', key: 'description', width: 535 },
    {
        title: '', dataIndex: 'key', key: 'key', width: 126,
        render: (_, record) => <Link to='/setting/role/rol-manage-upd' state={record}>Cập nhật</Link>
    }
];

export const accountCols: ColProps = [
    { title: 'Tên đăng nhập', dataIndex: 'ID', key: 'ID', width: 150 },
    { title: 'Họ tên', dataIndex: 'name', key: 'name', width: 170 },
    { title: 'Số điện thoại', dataIndex: 'phoneNumber', key: 'phoneNumber', width: 130 },
    { title: 'Email', dataIndex: 'email', key: 'email', width: 255 },
    { title: 'Vai trò', dataIndex: 'position', key: 'position', width: 116 },
    {
        title: 'Trạng thái hoạt động', dataIndex: 'status', key: 'status', width: 190,
        render: a => <ActiveTag a={a} />
    },
    {
        title: '', dataIndex: 'key', key: 'key', width: 100,
        render: (_, record) => <Link to='/setting/account/acc-manage-upd' state={record}>Cập nhật</Link>
    }
];

export const accountLogCols: ColProps = [
    { title: 'Tên đăng nhập', dataIndex: 'ID', key: 'ID', width: 270 },
    { title: 'Thời gian tác động', dataIndex: 'time', key: 'time', width: 245 },
    { title: 'IP thực hiện', dataIndex: 'IP', key: 'IP', width: 220 },
    { title: 'Thao tác thực hiện', dataIndex: 'action', key: 'action', width: 376 }
];
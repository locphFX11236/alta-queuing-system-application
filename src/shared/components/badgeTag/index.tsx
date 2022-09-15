import { Badge } from "antd";
import { BooleanTag, StringTag } from "./badgeTageType";

export const StatusTag = ({s}: StringTag): JSX.Element => {
    if(s === 'Đã sử dụng') return <p><Badge color={'#7E7D88'} />{s}</p>;
    if(s === 'Đang chờ') return <p><Badge color={'#4277FF'} />{s}</p>;
    else  return <p><Badge color={'#E73F3F'} />{s}</p>;
};

export const ActiveTag = ({a}: BooleanTag): JSX.Element => {
    if (a) return <p><Badge color={'#34CD26'} />Hoạt động</p>;
    else  return <p><Badge color={'#EC3740'} />Ngưng hoạt động</p>;
};
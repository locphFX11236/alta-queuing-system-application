import { Button, Card, Popover } from "antd";
import { useState } from "react";

import './notification.css';
import { Bell } from "../../assets/icon";
import data from '../../../data/num-count.json'

type dataNumCount = {
    name: string,
    time: string
};

const NumCountJSON = JSON.stringify(data); // Chuyển đổi tạm để xử lý data

function Render () {
    const dataObj = JSON.parse(NumCountJSON);
    return dataObj.map((a: dataNumCount) => {
        return (
            <Card className="content-noti">
                <h4>Người dùng: { a.name }</h4>
                <p>Thời gian nhận số: { a.time }</p>
            </Card>
        );
    });
};


const NotiComponent = () => {
    const [visible, setVisible] = useState(false);
  
    const handleVisibleChange = (newVisible: boolean) => {
      setVisible(newVisible);
    };

    return (
        <Popover
            title="Thông báo"
            content={ <Render /> }
            trigger="click"
            placement="bottomRight"
            showArrow={false}
            visible={visible}
            onVisibleChange={handleVisibleChange}
        >
            <Button
                className="noti"
                icon={ <Bell /> }
                shape='circle'
            />
        </Popover>
    );
};

export default NotiComponent;
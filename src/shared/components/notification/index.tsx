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
    return(
        <Card title='Thông báo' className="noti-list">
            {dataObj.map((a: dataNumCount) => {
                return (
                    <div className="card-noti">
                        <h4>Người dùng: { a.name }</h4>
                        <p>Thời gian nhận số: { a.time }</p>
                        <hr/>
                    </div>
                );
            })}
        </Card>
    )
};


const NotiComponent = () => {
    const [visible, setVisible] = useState(false);
  
    const handleVisibleChange = (newVisible: boolean) => {
      setVisible(newVisible);
    };

    return (
        <Popover
            content={ <Render /> }
            trigger='focus'
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
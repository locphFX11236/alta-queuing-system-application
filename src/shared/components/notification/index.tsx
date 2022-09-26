import { Button, Card, Dropdown } from "antd";
import { useState } from "react";

import './notification.css';
import { Bell } from "../../assets/icon";
import HandleData from "../../../data/handle";
import { notiJSON } from "../../../data/dummy";

type dataNumCount = {
    name: string,
    time: string
};

function Render () {
    const dataObj = HandleData(notiJSON);
    return(
        <Card title='Thông báo' className="noti-list">
            {dataObj.map((a: dataNumCount, i: number) => {
                return (
                    <div className="card-noti" key={i}>
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
        <Dropdown
            overlay={ <Render /> }
            placement='bottomRight'
            trigger={['hover']}
            arrow={false}
            visible={visible}
            onVisibleChange={ handleVisibleChange }
        >
            <Button
                className="noti"
                icon={ <Bell /> }
                shape='circle'
            />
        </Dropdown>
    );
};

export default NotiComponent;
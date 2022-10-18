import { Button, Card, Dropdown } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import './notification.css';
import { NCState, NuCoType } from './type';
import { Bell } from "../../assets/icon";
import { SelectNCState } from "../../../core/featuresRedux/hookRedux";
import { AppDispatch } from "../../../core/typescript/reduxState";
import { NCFetchAPI } from "../../../core/featuresRedux/slice/numberCount";

function Render () {
    const dispatch: AppDispatch = useDispatch();
    const dataObj: NCState = SelectNCState();

    useEffect(() => {
        dispatch( NCFetchAPI() );
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return(
        <Card title='Thông báo' className="noti-list">
            {dataObj.data.map((d: NuCoType) => (
                <Link to='/number-count/num-infor' state={d} className="card-noti" key={d.key}>
                    <h4>Người dùng: { d.name }</h4>
                    <p>Thời gian nhận số: { d.startTime }</p>
                    <hr/>
                </Link>
            ))}
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
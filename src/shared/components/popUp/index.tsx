import { notification } from "antd";
import { DescriptionPop, MessagePop } from "./items";
 
export const OpenNotification = (values: any): void => notification.open({
    placement: 'bottom',
    duration: 0,
    message: <MessagePop values={values}/>,
    description: <DescriptionPop values={values}/>,
});
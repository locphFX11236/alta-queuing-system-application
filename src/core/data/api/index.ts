import { message } from "antd";

import { endPoints } from "./items";

export const GetData = async (key: string) => fetch(endPoints[key])
    .then( response => response.json() ) //Trả về danh sách
    .catch( error => message.error('Lỗi fetch api ', error) )
    .finally( () => console.log('Fetched!!!') )
;

export const PostData = (data: any, key: string) => fetch(
    endPoints[key],
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }
)
    .then((response) => response.json())
    .then((data) => {
        console.log(`Post ${key} to backend! With data: `, data);
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    })
;

export const PutData = (data: any, index: number, key: string) => fetch(
    endPoints[key],
    {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }
)
    .then((response) => response.json())
    .then((data) => {
        console.log(`Put ${key} to backend! At position ${index} with data: `, data);
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    })
;
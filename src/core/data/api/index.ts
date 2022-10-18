import { message } from "antd";

import { accountJSON, count_numJSON, equipJSON, reportJSON, roleJSON, serviceJSON, userLogJSON } from "../dummy";

const FakeAPI = async (dataJSON: string) => new Promise((resolve, rejects) => {
    try {
        return setTimeout(() => {
            const datas = JSON.parse(dataJSON);
            resolve( datas );
        }, 1000);
    } catch {
        return rejects( () => message.warning('Lỗi fetch api') );
    }
});

// const FetchAPI = async (url: string) => (
//     fetch(url)
//         .then( response => response.json() ) //Trả về danh sách
//         .catch( error => message.warning('Lỗi fetch api') )
//         .finally( () => console.log('Fetched!!!') )
// );

export const RequestAPI = {
    getEquipDatas: () => {
        return FakeAPI(equipJSON); // Fake fetch Api
        // return FetchAPI(url); // Fetch API
    },
    getServDatas: () => {
        return FakeAPI(serviceJSON); // Fake fetch Api
    },
    getNCDatas: () => {
        return FakeAPI(count_numJSON); // Fake fetch Api
    },
    getReportDatas: () => {
        return FakeAPI(reportJSON); // Fake fetch Api
    },
    getRoleDatas: () => {
        return FakeAPI(roleJSON); // Fake fetch Api
    },
    getAccDatas: () => {
        return FakeAPI(accountJSON); // Fake fetch Api
    },
    getLogsDatas: () => {
        return FakeAPI(userLogJSON); // Fake fetch Api
    },
};
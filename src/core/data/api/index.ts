import GetData from "./constructor/get";
import { items } from "./constructor/items";

export const RequestAPI = {
    getEquipDatas: () => GetData('equip'),
    getServDatas: () => GetData('serv'),
    getNCDatas: () => GetData('numCou'),
    getReportDatas: () => GetData('report'),
    getRoleDatas: () => GetData('role'),
    getAccDatas: () => GetData('acc'),
    getLogsDatas: () => GetData('logs'),

    postEquip: (data: any) => console.log('Post equip to backend!'),
    postServ: (data: any) => console.log('Post serv to backend!'),
    postNC: (data: any) => console.log('Post numCou to backend!'),
    postRole: (data: any) => console.log('Post role to backend!'),
    postAcc: (data: any) => console.log('Post account to backend!'),

    patchEquip: (data: any, index: number) => console.log('Patch equip to backend!'),
    patchServ: (data: any, index: number) => console.log('Patch serv to backend!'),
    patchRole: (data: any, index: number) => console.log('Patch role to backend!'),
    patchAcc: (data: any, index: number) => console.log('Patch account to backend!'),
};

export const getUrlItem = (type: string) => items[type];
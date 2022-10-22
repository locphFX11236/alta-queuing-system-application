import GetData from "./constructor/get";

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

    patchEquip: (data: any, index: number) => console.log('Patch equip to backend!'),
    patchServ: (data: any, index: number) => console.log('Patch serv to backend!'),
};
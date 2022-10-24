export type EquipType = {
    key: string,
    code: string,
    name: string,
    IPAddress: string,
    type: string,
    userId: string,
    password: string,
    actionStatus: boolean,
    connectStatus: boolean,
    usedService: Array<string>
};

export type ServiceType = {
    key: string,
    code: string,
    name: string,
    description: string,
    actionStatus: boolean,
    time: string,
    setting: {
        mode: Array<string> | [],
        values?: {
            v1: {
                from?: number,
                to?: number
            },
            v2?: number,
            v3?: number
        }
    }
};

export type NuCoType = {
    key: number,
    countNumber: number,
    name: string,
    useService: string,
    startTime: string,
    endTime: string,
    status: string,
    source: string,
    phoneNumber: string,
    email: string,
};

export type AccountType = {
    key: number,
    ID: string,
    name: string,
    phoneNumber: string,
    email: string,
    position: string,
    password: string,
    passwordConfirm: string,
    status: boolean,
};

type RoleType = {
    position: string,
    description: string,
    functions:  Array<string>,
};

// export type FetchData = {
//     equipDatas: EquipType[],
//     servDatas: ServiceType[],
//     numCouDatas: NuCoType[],
// }

export type DataType = unknown | AccountType | RoleType | NuCoType |ServiceType | EquipType;
export type Datas = DataType[] | any;
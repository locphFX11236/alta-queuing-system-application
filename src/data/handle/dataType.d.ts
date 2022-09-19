type EquipType = {
    code: string,
    name: string,
    IPAddress: string,
    type: string,
    userId: string,
    password: string,
    usedService: Array<string>
};

type ServiceType = {
    code: string,
    name: string,
    description: string,
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

type NuCoType = {
    useService: string
};

type RoleType = {
    position: string,
    description: string,
    functions:  Array<string>,
};

type AccountType = {
    key: string,
    name: string,
    phoneNumber: string,
    email: string,
    position: string,
    password: string,
    passwordConfirm: string,
    status: boolean,
};

export type DataType = any | AccountType | RoleType | NuCoType |ServiceType | EquipType;
export type Datas = DataType[];
import { FuncType } from "./type";

export const FuncSerList: FuncType = (v: any) => {
    console.log(`Danh sách dich vu: ${v.toString()}`);
};

export const FuncSerInfo: FuncType = (v: any) => {
    console.log(`Thong tin dich vu: ${v.toString()}`);
};

export const FuncNumCou: FuncType = (v: any) => {
    console.log(`Danh sách cap so: ${v.toString()}`);
};

export const FuncReport: FuncType = (v: any) => {
    console.log(`Danh sách bao cao: ${v.toString()}`);
};

export const FuncUserLog: FuncType = (v: any) => {
    console.log(`Danh sách nhat ki nguoi dung: ${v.toString()}`);
};
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import IndexLayout from "../layout";

import Login from "../view/loginPage";
import Information from "../view/inforMember";

import Dashboard from "../view/dashboard";

import EquipList from "../view/equipManage";
import ManageEquip from "../view/equipManage/manage";
import InforEquip from "../view/equipManage/information";

import ServiceList from "../view/serviceManage";
import ManageService from "../view/serviceManage/manage";
import InforService from "../view/serviceManage/information";

import NumberCountList from "../view/numCouManage";
import ManageNumberCount from "../view/numCouManage/manage";
import InforNumberCount from "../view/numCouManage/information";

import ReportList from "../view/reportPage";

import RoleList from "../view/roleManage";
import ManageRole from "../view/roleManage/manage";

import AccountList from "../view/accountManage";
import ManageAccount from "../view/accountManage/manage";

import UserLogList from "../view/userLog";

import ErrorPage from '../view/errorPage';

import Text from '../view/text';

const Router: React.FC = () => (
    <Routes>
        <Route path='/login' element={ <Login /> } />

        <Route path='/' element={ <IndexLayout /> } >
            <Route path='infor' element={ <Information /> } />

            <Route path='text' element={ <Text /> } />

            <Route index element={ <Dashboard /> } />
            {/* Thuộc tính 'index' sẽ là đường đẫn mặc định khi truy cập vào 'path' của 'route parent' */}

            <Route path='equip' >
                {/* Sau path của route parent không nhất thiết phải có dấu '/' */}
                <Route index element={ <EquipList /> } />
                <Route path='equ-manage-add' element={ <ManageEquip /> } />
                <Route path='equ-manage-upd' element={ < ManageEquip /> } />
                <Route path='equ-infor' element={ <InforEquip /> } />
            </Route>

            <Route path='service' >
                <Route index element={ <ServiceList /> } />
                <Route path='ser-manage-add' element={ <ManageService /> } />
                <Route path='ser-manage-upd' element={ <ManageService /> } />
                <Route path='ser-infor' element={ <InforService /> } />
            </Route>

            <Route path='number-count' >
                <Route index element={ <NumberCountList /> } />
                <Route path='num-manage-add' element={ <ManageNumberCount /> } />
                <Route path='num-infor' element={ <InforNumberCount /> } />
            </Route>

            <Route path='report' element={ <ReportList /> } />

            <Route path='setting' >

                <Route index element={ <Navigate to='/setting/role' replace={true} /> } />
                {/*
                - Chú ý nếu trước 'path' có dấu '/' là đường dẫn trực tiếp 'route' sẽ bỏ qua 'path' của 'route parent' mà truy cập thẳng vào.
                - Ngược lại đường dẫn gián tiếp sẽ truy cập 'path' của 'route parent' + 'path' của 'route children'
                - Điều này rất quan trọng khi dùng 'Navigate'
                */}

                <Route path='role' >
                    <Route index element={ <RoleList /> } />
                    <Route path='rol-manage-add' element={ <ManageRole /> } />
                    <Route path='rol-manage-upd' element={ <ManageRole /> } />
                </Route>

                <Route path='account' >
                    <Route index element={ <AccountList /> } />
                    <Route path='acc-manage-add' element={ <ManageAccount /> } />
                    <Route path='acc-manage-upd' element={ <ManageAccount /> } />
                </Route>

                <Route path='user-log' element={ <UserLogList /> } />
            </Route>

            {/* Redirect v6 */}
            <Route path='role' element={ <Navigate to='/setting/role' replace={true} /> } />
            <Route path='account' element={ <Navigate to='/setting/account' replace={true} /> } />
            <Route path='user-log' element={ <Navigate to='/setting/user-log' replace={true} /> } />
        </Route>

        {/* Error path v6 */}
        <Route path='*' element={ <ErrorPage /> } />
    </Routes>
);

export default Router;
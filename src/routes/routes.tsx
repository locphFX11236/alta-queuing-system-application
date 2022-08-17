import React from 'react';
import { Routes, Route } from 'react-router-dom';

import IndexLayout from "../layout";

import Login from "../view/login";
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

import ReportList from "../view/report";

import RoleList from "../view/roleManage";
import ManageRole from "../view/roleManage/manage";

import AccountList from "../view/accountManage";
import ManageAccount from "../view/accountManage/manage";

import UserLogList from "../view/userLog";

const Router: React.FC = () => (
    <Routes>
        <Route path='/' element={ <IndexLayout content={<Dashboard />}/> } />

        <Route path='/login' element={ <Login /> }/>
        <Route path='/login/infor' element={ <IndexLayout content={<Information />}/> } />

        <Route path='/equip' element={ <IndexLayout content={<EquipList />}/> } />
        <Route path='/equip/manage' element={ <IndexLayout content={<ManageEquip />}/> } />
        <Route path='/equip/infor' element={ <IndexLayout content={<InforEquip />}/> } />

        <Route path='/service' element={ <IndexLayout content={<ServiceList />}/> } />
        <Route path='/service/manage' element={ <IndexLayout content={<ManageService />}/> } />
        <Route path='/service/infor' element={ <IndexLayout content={<InforService />}/> } />

        <Route path='/number-count' element={ <IndexLayout content={<NumberCountList />}/> } />
        <Route path='/number-count/manage' element={ <IndexLayout content={<ManageNumberCount />}/> } />
        <Route path='/number-count/infor' element={ <IndexLayout content={<InforNumberCount />}/> } />

        <Route path='/report' element={ <IndexLayout content={<ReportList />}/> } />

        <Route path='/setting/role' element={ <IndexLayout content={<RoleList />}/> } />
        <Route path='/setting/role/manage' element={ <IndexLayout content={<ManageRole />}/> } />

        <Route path='/setting/account' element={ <IndexLayout content={<AccountList />}/> } />
        <Route path='/setting/account/manage' element={ <IndexLayout content={<ManageAccount />}/> } />

        <Route path='/setting/user-log' element={ <IndexLayout content={<UserLogList />}/> } />
    </Routes>
);

export default Router;
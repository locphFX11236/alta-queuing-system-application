import IndexLayout from "../layout";

// import Login from "./login";
// import Information from "./inforMember";

// import Dashboard from "./dashboard";

// import EquipList from "./equipManage";
// import ManageEquip from "./equipManage/manage";
// import InforEquip from "./equipManage/information";

// import ServiceList from "./serviceManage";
// import ManageService from "./serviceManage/manage";
// import InforService from "./serviceManage/information";

// import NumberCountList from "./numCouManage";
// import ManageNumberCount from "./numCouManage/manage";
// import InforNumberCount from "./numCouManage/information";

// import ReportList from "./report";

// import RoleList from "./roleManage";
// import ManageRole from "./roleManage/manage";

// import AccountList from "./accountManage";
import ManageAccount from "./accountManage/manage";

// import UserLogList from "./userLog";

function IndexView () {
    return (
        // <Login />
        // <IndexLayout content={<Information />}/>
        // <IndexLayout content={<Dashboard />}/>
        // <IndexLayout content={<EquipList />}/>
        // <IndexLayout content={<ManageEquip />}/>
        // <IndexLayout content={<InforEquip />}/>
        // <IndexLayout content={<ServiceList />}/>
        // <IndexLayout content={<ManageService />}/>
        // <IndexLayout content={<InforService />}/>
        // <IndexLayout content={<NumberCountList />}/>
        // <IndexLayout content={<ManageNumberCount />}/>
        // <IndexLayout content={<InforNumberCount />}/>
        // <IndexLayout content={<ReportList />}/>
        // <IndexLayout content={<RoleList />}/>
        // <IndexLayout content={<ManageRole />}/>
        // <IndexLayout content={<AccountList />}/>
        <IndexLayout content={<ManageAccount />}/>
        // <IndexLayout content={<UserLogList />}/>
    );
};

export default IndexView;
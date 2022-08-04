import IndexLayout from "../layout";
// import Login from "./login";
// import Information from "./information";
// import Dashboard from "./dashboard";
// import EquipmentList from "./equipmentManagement";
// import ManageList from "./equipmentManagement/add_update";
import InforEquipment from "./equipmentManagement/information";

function IndexView () {
    return (
        // <Login />
        // <IndexLayout content={<Information />}/>
        // <IndexLayout content={<Dashboard />}/>
        // <IndexLayout content={<EquipmentList />}/>
        // <IndexLayout content={<ManageList />}/>
        <IndexLayout content={<InforEquipment />}/>
    );
};

export default IndexView;
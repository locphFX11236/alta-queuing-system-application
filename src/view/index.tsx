import IndexLayout from "../layout";
// import Login from "./login";
// import Information from "./information";
import Dashboard from "./dashboard";

function IndexView () {
    return (
        // <Login />
        // <IndexLayout content={<Information />}/>
        <IndexLayout content={<Dashboard />}/>
    );
};

export default IndexView;
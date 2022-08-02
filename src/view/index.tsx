import IndexLayout from "../layout";
// import Dashboard from "./dashboard";
// import Login from "./login";
import Information from "./information";

function IndexView () {
    return (
        // <Login />
        <IndexLayout content={<Information />}/>
    );
};

export default IndexView;
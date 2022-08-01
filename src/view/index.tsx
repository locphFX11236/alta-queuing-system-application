import IndexLayout from "../layout";
import Dashboard from "./dashboard";

function IndexView () {
    return (
        <IndexLayout content={<Dashboard />}/>
    );
};

export default IndexView;
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import Employee from "./components/Employee";
import Employer from "./components/Employer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter,
    Routes,
} from "react-router-dom";
import Admin from "./components/Admin";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/employer" element={<Employer></Employer>}></Route>
                <Route path="/employee" element={<Employee></Employee>}></Route>
                <Route path="/admin" element={<Admin></Admin>}></Route>
                {/* <Route path="/SignIn" element={<SignIn></SignIn>}></Route>  */}
                {/* <Route path="/" element={<AdminPage></AdminPage>}></Route> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;

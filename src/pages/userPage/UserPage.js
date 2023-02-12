import {UserForm} from "../../components/UserForm";
import {Users} from "../../components/Users";

const UserPage = () => {
    return (
        <div className="UserPage">
            <UserForm/>
            <hr/>
            <Users/>
        </div>
    );
}

export {UserPage};
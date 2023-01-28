import {User} from "../user/User";

const Users = ({user}) => {

    return (
        <div className="Users">
            {user.map(value=> <User key = {value.id} user={value}/>)}
        </div>
    );
}

export {Users};
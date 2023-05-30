import { getUsers } from "../data/getUsers";
import { useLoaderData } from "react-router-dom";

export const loader = () => getUsers();

const Users = () => {
    const userData = useLoaderData();
    return(
        <>
        {userData.map((user) =>(
            <div key={user.id} className="user-div" >
                <li> Id: {user.id} Användarnamn: {user.name}</li>

            </div>
            ))}
        </>
    )
};

export default Users
import { getUsers } from "../data/getUsers";
import { useLoaderData } from "react-router-dom";
import "../stylesheet/users.css"
import { deletUser } from "../data/deleteUser";

export const loader = () => getUsers();

const Users = () => {
    const userData = useLoaderData();

    const handleDelete = async (userId) => {
        console.log(userId);
        try{
             const result = await deletUser(userId)
             console.log(result);
        }catch(error){
            console.log(error.message);

        }
    } 

    return(
        <>
        <div className="users-div">

        {userData.map((user) =>(
            <div key={user.id} className="user-div" >
                <li className="user-li"> Id: {user.id} <br /> Användarnamn: {user.name}</li>
                <div className="user-button">
                <button className="user-btn"> Uppdatera</button>
                <button onClick={() => handleDelete(user.id)} className="user-btn"> Ta bort</button>

                </div>

            </div>
            ))}
            </div>
        </>
    )
};

export default Users
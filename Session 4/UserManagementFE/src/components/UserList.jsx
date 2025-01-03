import { useFetchUsersQuery } from "../features/users/usersApi";

const UserList = ()=>{
    const { data:users,error,isLoading } = useFetchUsersQuery();
    if(isLoading) return <p>Loading...</p>;
    if(error) return <p>Error Loading users.</p>

    return (
        <div>
            <h1>Users List</h1>
            {users.map((user)=>(
                <div style={{display:"flex",flexDirection:"row",gap:"10px",alignItems:"center",justifyContent:"space-between"}} key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <p>{user.technology}</p>
                </div>
            ))}
        </div>
    )
}

export default UserList;
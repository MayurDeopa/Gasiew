import UserContainer, { UserContainerProps } from "./UserContainer";



const User:React.FC<UserContainerProps> =({data})=>{
    return(
        <UserContainer data={data}/>
    )
}

export default User;
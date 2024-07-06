import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user= useLoaderData();
    const {name,email,phone,website }=user;
    return (
        <div className="space-y-3">
            <h2 className="my-5 text-3xl font-bold">This is user details </h2>
            <p>Name: {name}</p>
            <p>email:{email}</p>
            <p>Phone: {phone}</p>
            <p>website :{website}</p>
           
        </div>
    );
};

export default UserDetails;
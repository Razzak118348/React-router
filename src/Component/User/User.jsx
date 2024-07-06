
import PropTypes from 'prop-types'; 
import { Link, useNavigate } from 'react-router-dom';
const User = ({user}) => {
    // console.log(user)
 
    const {id,name, email,phone}=user;
    const navigate = useNavigate();

    const handleShowDetails =()=>{
        navigate(`/user/${id}`);
    }


    return (
        <div className='border-4 border-yellow-300 m-5 p-5 md:m-8 md:p-10 rounded-lg '>
            <h2>{id} :{name}</h2>
            <p>email : {email}</p>
            <p>phone : {phone}</p>
           <div className='border inline-block mt-5 rounded-lg p-3'>
           <Link   to={`/user/${id}`}>Show Details</Link>
           

           </div>
           {/* another option  */}
           <Link to={`/user/${id}`}>
           <button className='p-1 border-y-amber-200 border-2 mx-3'>Click Me</button>
           </Link>

           {/* another way */}
           <button onClick={handleShowDetails} className='btn p-2 border-2 border-green-600 my-3'>User Details</button>

        </div>
    );
};

User.propTypes={
    user:PropTypes.object,
}
export default User;
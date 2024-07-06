
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';
const User = ({user}) => {
    console.log(user)
    const {id,name, email,phone}=user;
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
        </div>
    );
};

User.propTypes={
    user:PropTypes.object,
}
export default User;
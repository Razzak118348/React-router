import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error =useRouteError()
    console.log(error)
    return (
        <div className="text-center my-24">
            <h2>Error!!</h2>
      
            <p>{
                error.statusText || error.message
                }</p>
                {
                    error.status === 404 && <div>
                        
                        <p>Go back home Page</p>
                     <Link to={'/'}>
                     <button className="border-2 border-yellow-400 p-2 rounded-lg">  Home</button>
                     </Link>
                        </div>
                }
        </div>
    );
};

export default ErrorPage;
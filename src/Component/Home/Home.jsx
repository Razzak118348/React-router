import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  const navigation = useNavigation();
  //useNavigation for loading data show 


  const location = useLocation();
  console.log(location)
  return (
    <div className="text-center">
      <h2 className="text-xl font-bold my-5">My website</h2>

      <Header></Header>
      {
        navigation.state === 'loading' ? <button type="button " className="bg-indigo-500 ... p-1 rounded-lg mt-4" disabled>
          <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

          </svg>
          Processing...
        </button>
        :
        <Outlet></Outlet>
      }

      <Footer></Footer>
    </div>
  );
};

export default Home;

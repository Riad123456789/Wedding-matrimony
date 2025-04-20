import { Outlet } from "react-router-dom";
import Navber from "../component/Navber";


const MainLayout = () => {
    return (

        <div className="  ">
            <Navber>
              <div className="">
              <Outlet></Outlet>
              <img className="w-32 h-32 md:w-40 md:h-40 -left-5 fixed top-40 z-30  " src="https://i.ibb.co.com/67zQPLxB/images-6-1-removebg-preview.png" alt="" />
              <img className="w-20 md:w-40  fixed  -right-2 -bottom-6 z-30  " src="https://i.ibb.co.com/JR8DZzJF/images-5-removebg-preview.png" alt="" />
              </div>
              
            </Navber>
        </div>
    );
};

export default MainLayout;
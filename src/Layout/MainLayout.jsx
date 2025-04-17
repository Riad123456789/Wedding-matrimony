import { Outlet } from "react-router-dom";
import Navber from "../component/Navber";


const MainLayout = () => {
    return (

        <div className="  ">
            <Navber>
              <div className="">
              <Outlet></Outlet>
              {/* <img className="fixed -top-16 -left-32 z-30  " src="https://i.ibb.co/JmnHwM3/skyler-smith-l-JAFlxnx4-unsplash-removebg-preview.png" alt="" />
              <img className="fixed  -right-16 -bottom-6 z-30  " src="https://i.ibb.co/7K45dzX/joe-tillman-mw-D-WZmk-D-A-unsplash-removebg-preview.png" alt="" /> */}
              </div>
              
            </Navber>
        </div>
    );
};

export default MainLayout;
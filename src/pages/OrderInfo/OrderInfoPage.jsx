import { Link } from "react-router-dom";
import MiniOrderList from "./MiniOrderList";
import UserInfoForm from "./OrderForm";
import { FaArrowLeftLong } from "react-icons/fa6";

const UserInfoPage = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-5xl px-4 sm:px-8 md:px-10 lg:px-0 mb-8 mx-auto">
      <h2 className="text-3xl font-semibold text-gray-800 my-6">
        Order Information
      </h2>

      <div className="flex flex-col md:flex-row w-full gap-8">
        <div className="flex-1">
          <MiniOrderList />
          <div className="flex items-center justify-center m-3">
            <Link to={"/cart"} className="btn btn-outline px-8 text-md">
              <FaArrowLeftLong />
              Back
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <div className="flex-1">
            <UserInfoForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoPage;

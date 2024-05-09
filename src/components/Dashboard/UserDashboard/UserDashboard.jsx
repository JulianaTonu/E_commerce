import  { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaAddressBook } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

function padZero(number) {
  return number < 10 ? `0${number}` : number;
}

const UserDashboard = () => {
  const { user } = useContext(AuthContext);
  const [countdown, setCountdown] = useState({ days: 10, hours: 9, minutes: 3, seconds: 0 });

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown(prevCountdown => {
        let { days, hours, minutes, seconds } = prevCountdown;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
              days--;
              if (days < 0) {
                clearInterval(countdownInterval);
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div>
      <div className="flex items-center ">
        <h2 className="me-3 text-2xl">Hi, Welcome </h2>
        <p className="text-4xl capitalize text-orange-600">{user?.displayName ? user.displayName : ""}</p>
      </div>

      <div className="flex gap-3 my-5">
        <div className="shadow-lg w-72 h-32 p-2 mb-3  bg-purple-200 flex text-center items-center ">
          <div className="w-1/2 ps-14">
            <p className="text-5xl mt-3">
              <FaAddressBook />
            </p>
          </div>
          <div className=" w-1/2 text-start">
            <h1 className="text-4xl gap-2 my-1">24</h1>
            <h1 className="text-lg"> Products</h1>
          </div>
        </div>

        <div className="shadow-lg w-72 h-32 p-2 mb-3  bg-yellow-200 flex text-center items-center ">
          <div className="w-1/2 ps-14">
            <p className="text-6xl mt-3">
              <MdHome></MdHome>
            </p>
          </div>
          <div className=" w-1/2 text-start">
            <h1 className="text-4xl gap-2 my-1">12</h1>
            <h1 className="text-lg"> Shop</h1>
          </div>
        </div>

        <div className="shadow-lg w-72 h-32 p-2 mb-3  bg-blue-200 flex text-center items-center ">
          <div className="w-1/2 ps-14">
            <p className="text-5xl mt-3">
              <FaPhone></FaPhone>
            </p>
          </div>
          <div className=" w-1/2 text-start">
            <h1 className="text-4xl gap-2 my-1">03</h1>
            <h1 className="text-lg"> Contact</h1>
          </div>
        </div>
      </div>

      <div className="flex gap-5">
        <div>
          <span className="countdown font-mono text-4xl">{padZero(countdown.days)}</span>
          days
        </div>
        <div>
          <span className="countdown font-mono text-4xl">{padZero(countdown.hours)}</span>
          hours
        </div>
        <div>
          <span className="countdown font-mono text-4xl">{padZero(countdown.minutes)}</span>
          min
        </div>
        <div>
          <span className="countdown font-mono text-4xl">{padZero(countdown.seconds)}</span>
          sec
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

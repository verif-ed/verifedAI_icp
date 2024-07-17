import {
  IDKitWidget,
  VerificationLevel,
  ISuccessResult,
} from "@worldcoin/idkit";
import "@suiet/wallet-kit/style.css";
// import ThemeController from "./ThemeController";

import { Link } from "react-router-dom";
import PlugConnect from "@psychedelic/plug-connect";
import worldid from "../assets/worldId-removebg-preview.png";
import { stringify } from "querystring";
import logo from "../assets/logo-removebg-preview.png";

const Navbar = () => {
  const handleVerify = async (proof: ISuccessResult) => {
    console.log("handling proof", proof);

    const res = await fetch("http://localhost:3000/api/data", {
      // route to your backend will depend on implementation
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(proof),
    });
    if (!res.ok) {
      throw new Error("Verification failed."); // IDKit will display the error message to the user in the modal
    }
  };
  const onSuccess = () => {
    // This is where you should perform any actions after the modal is closed
    // Such as redirecting the user to a new page
    console.log("success connected to worldcoin id");

    window.location.href = "/dashboard";
  };
  const handleConnect = () => {
    try {
      chrome.runtime.sendMessage(
        "cfbfdhimifdmdehjmkdobpcjfefblkjm",
        { message: "Hello from React!" },
        (response) => {
          if (chrome.runtime.lastError) {
            console.error(
              "Error sending message:",
              chrome.runtime.lastError.message
            );
          } else {
            console.log("Response from extension:", response);
          }
        }
      );
    } catch (error) {
      console.error("Exception during message send:", error);
    }
  };

  return (
    <>
      <div className="flex justify-center items- mt-12 absolute z-50 w-screen ">
        <div className=" w-[85%] ">
          <div className="navbar  rounded-3xl ">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/">Home</Link>
                    {/* <a>Dashboard</a> */}
                  </li>
                  <li>
                    <Link to="/services">service</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
              </div>
              <Link
                className=" font-bold ml-2 text-4xl text-secondary w-[40vw] h-14"
                to={"/"}
              >
                <div className="gap-y-6">
                  <span className="flex  items-center gap-1">
                    <img src={logo} alt="logo" height={70} width={70} />
                    VerifED
                  </span>
                  <div className="w-[57%] ml-8 h-1 mt-2 bg-gray-300"></div>
                </div>
              </Link>
            </div>
            <div className="navbar-end  lg:flex justify-end gap-7 w-full ">
              <ul className=" flex  px-1 gap-9 text-lg text-neutral mr-3">
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/services">Service</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>

              <button
                className=" bg-none rounded-full px-9 border border-neutral py-2"
                onClick={() =>
                  (
                    document.getElementById("my_modal_3") as HTMLDialogElement
                  )?.showModal()
                }
              >
                {" "}
                Wallet
              </button>

              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-semibold p-4 text-xl">Connect Wallet!</h3>
                  <div className="flex  justify-evenly items-center p-8">
                    <IDKitWidget
                      app_id="app_06dfaf6fb5f0b8ac58c10bf412238ffb" // obtained from the Developer Portal
                      action="wallet-connect" // obtained from the Developer Portal
                      onSuccess={onSuccess} // callback when the modal is closed
                      handleVerify={handleVerify} // callback when the proof is received
                      verification_level={VerificationLevel.Device}
                    >
                      {({ open }) => (
                        // This is the button that will open the IDKit modal
                        <button
                          onClick={open}
                          className="w-max mr-3 bg-white border-[3px] border-black rounded-xl flex justify-between items-center gap-4 px-1"
                        >
                          <img
                            src={worldid}
                            alt=""
                            className=""
                            height={35}
                            width={35}
                          />{" "}
                          <p className="text font-semibold text-black">
                            World ID
                          </p>
                        </button>
                      )}
                    </IDKitWidget>

                    {}

                    <PlugConnect
                      whitelist={["2prnp-dqaaa-aaaab-qacjq-cai"]}
                      onConnectCallback={handleConnect}
                      title="Connect"
                      debug={true}

                      // darkMode={true}
                    />
                  </div>
                </div>
              </dialog>

              {/* <a className="btn bg-blue-800">Connect Wallet</a> */}

              <div className=""></div>
            </div>
          </div>
        </div>
        {/* <div className="border rounded-3xl  shadow-md shadow-gray-300 flex ml-2 px-2 py-1 bg-base-200">
          <ThemeController />
        </div> */}
      </div>
    </>
  );
};

export default Navbar;

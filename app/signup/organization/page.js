"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiEye, FiEyeOff } from "react-icons/fi";

const OrganizationSignup = () => {
  
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const passwordToggle = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else setPasswordType("password");
  };

  const confirmPasswordToggle = () => {
    if (confirmPasswordType === "password") {
      setConfirmPasswordType("text");
    } else setConfirmPasswordType("password");
  };

  return (
    <>
      <div className="text-lg w-full h-screen flex flex-col justify-center items-center my-16 md:my-0">
        <div className="w-[90%] md:w-[70%] mx-auto bg-[#12323f]">
          <div className="flex flex-col md:flex-row justify-between items-center p-4">
            <div className="w-full flex flex-col justify-between items-center gap-2 border-b-2 border-slate-400 md:border-b-0 md:border-r-2 pb-4">
              <div>
                <Image
                  src={"/images/signup/welcome_img.png"}
                  height={500}
                  width={500}
                  alt="Welcome to Carbonops"
                />
              </div>
              <button>
                Already registered?{" "}
                <Link
                  href="/login"
                  className="text-[#00bd57] duration-300 ease-in-out hover:underline cursor-pointer"
                >
                  Login Now!
                </Link>
              </button>
            </div>
            <div className="mt-8 md:mt-0 w-full flex flex-col justify-between items-center gap-2">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#53c6f2]">
                  SIGNUP
                </h1>
              </div>
              <div>
                <h2>
                  Join us in our{" "}
                  <span className="text-[#00bd57]">Green Journey!</span>
                </h2>
              </div>
              {/* Input fields Container*/}
              <div className="flex flex-col justify-between items-center md:items-start gap-6 mt-4">
                <div>
                  <div className="flex flex-row border-b-2 border-slate-400 items-center">
                    <div>
                      <input
                        type="text"
                        placeholder="Email"
                        className="w-[22rem] bg-transparent focus:outline-none text-[#00bd57]"
                      />
                    </div>
                    <div>
                      <Image
                        src={"/icons/email.png"}
                        width={30}
                        height={30}
                        alt="Email"
                      />
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div>
                  <div className="flex flex-row border-b-2 border-slate-400 items-center">
                    <div>
                      <input
                        type="text"
                        placeholder="Contact"
                        className="w-[22rem] bg-transparent focus:outline-none text-[#00bd57]"
                      />
                    </div>
                    <div>
                      <Image
                        src={"/icons/phone.png"}
                        width={30}
                        height={30}
                        alt="Contact"
                      />
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <div>
                  <div className="flex flex-row border-b-2 border-slate-400 items-center">
                    <div>
                      <input
                        type="text"
                        placeholder="Organization ID"
                        className="w-[22rem] bg-transparent focus:outline-none text-[#00bd57]"
                      />
                    </div>
                    <div>
                      <Image
                        src={"/icons/contact.png"}
                        width={30}
                        height={30}
                        alt="Date of Birth"
                      />
                    </div>
                  </div>
                </div>
                {/* 4 */}
                <div>
                  <div className="flex flex-row border-b-2 border-slate-400 items-center">
                    <div>
                      <input
                        type={passwordType}
                        placeholder="Password"
                        className="w-[22rem] bg-transparent focus:outline-none text-[#00bd57]"
                      />
                    </div>
                    <div
                      onClick={passwordToggle}
                      className="toggle-button"
                      style={{
                        paddingTop: 5,
                        width: 30,
                        height: 30,
                        color: "#6B717F",
                        marginLeft: 5,
                      }}
                    >
                      {passwordType === "password" ? <FiEyeOff /> : <FiEye />}
                    </div>
                  </div>
                </div>
                {/* 5 */}
                <div>
                  <div className="flex flex-row border-b-2 border-slate-400 items-center">
                    <div>
                      <input
                        type={confirmPasswordType}
                        placeholder="Confirm Password"
                        className="w-[22rem] bg-transparent focus:outline-none text-[#00bd57]"
                      />
                    </div>
                    <div
                      onClick={confirmPasswordToggle}
                      className="toggle-button"
                      style={{
                        paddingTop: 5,
                        width: 30,
                        height: 30,
                        color: "#6B717F",
                        marginLeft: 5,
                      }}
                    >
                      {confirmPasswordType === "password" ? (
                        <FiEyeOff />
                      ) : (
                        <FiEye />
                      )}
                    </div>
                  </div>
                </div>
                <div className="mx-auto">
                  <button
                    href="/signup"
                    className="text-xl bg-[#00BD57] py-1 px-8 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm hover:shadow-md hover:shadow-green-300 duration-200 ease-out"
                  >
                    Signup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-52 h-52 md:w-96 md:h-96 bg-[#12323f] fixed -top-12 -left-16 -z-10 rounded-full opacity-25"></div>
    </>
  );
};

export default OrganizationSignup;

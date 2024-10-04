import axios from "axios";
import React, { useState } from "react";
import { CgDanger } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(
                "https://e4d6b3bdaff66d08.mokky.dev/auth",
                {
                    email,
                    password,
                }
            );

            console.log(response);

            if (response.status === 201) {
                toast.success("Muvaffaqiyatli login!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                setTimeout(() => {
                    navigate("/home");
                }, 3000); // 3 soniya kechikish
            } else {
                toast.error("Login yoki parol noto‘g‘ri", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } catch (error) {
            toast.error("Xatolik yuz berdi", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div className="w-full h-screen font-semibold font-sans">
            <ToastContainer />
            <div className="flex items-center justify-center h-[100vh]">
                <div className="border p-4 rounded-md w-[400px] h-[320px]">
                    <h2 className="p-2 text-center mb-4 text-2xl">
                        Login! Web-Site
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="border p-2 rounded-md w-full border-slate-300 outline-none"
                                placeholder="example@mail.com"
                                required
                                autoComplete="off"
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                className="border p-2 rounded-md w-full border-slate-300 outline-none"
                                placeholder="******"
                                required
                                autoComplete="off"
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <button
                                type="submit"
                                className="bg-black hover:bg-transparent hover:scale-105  border-2 border-black duration-300 transition-all hover:text-black rounded-md w-full text-white p-4"
                            >
                                Login
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <Link
                                to="/"
                                className="hover:text-blue-500 transition-all flex items-center gap-2 duration-300 "
                            >
                                <span className="block text-3xl">
                                    <CgDanger />
                                </span>
                                Correct Password
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Auth;

import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const ResetPassword = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const { backendUrl } = useContext(ShopContext);

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return toast.error("Passwords do not match");
        }

        try {
            setLoading(true);

            const response = await axios.post(
                backendUrl + "/api/user/reset-password",
                {
                    token,
                    password,
                }
            );

            if (response.data.success) {
                toast.success(response.data.message);

                setTimeout(() => {
                    navigate("/login");
                }, 1500);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[70vh]">
            <form
                onSubmit={submitHandler}
                className="border p-8 rounded-lg shadow w-full max-w-md"
            >
                <h2 className="text-3xl text-center mb-6">
                    Reset Password
                </h2>

                <input
                    type="password"
                    placeholder="New Password"
                    className="w-full border px-3 py-2 mb-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full border px-3 py-2 mb-5"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <button
                    disabled={loading}
                    className="w-full bg-black text-white py-2"
                >
                    {loading ? "Updating..." : "Reset Password"}
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;
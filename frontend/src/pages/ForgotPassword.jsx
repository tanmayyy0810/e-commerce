import React, { useContext, useState } from "react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const ForgotPassword = () => {
    const { backendUrl } = useContext(ShopContext);

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await axios.post(
                backendUrl + "/api/user/forgot-password",
                { email }
            );

            if (response.data.success) {
                toast.success(response.data.message);
                setEmail("");
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
                className="w-full max-w-md border p-8 rounded-lg shadow"
            >
                <h2 className="text-3xl mb-6 text-center font-semibold">
                    Forgot Password
                </h2>

                <p className="text-gray-600 mb-5 text-sm">
                    Enter your registered email address and we'll send you a
                    password reset link.
                </p>

                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border px-3 py-2 mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <button
                    disabled={loading}
                    className="w-full bg-black text-white py-2"
                >
                    {loading ? "Sending..." : "Send Reset Link"}
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;
import React from "react";
import { assets } from "../assets/assets";

const SplashScreen = () => {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-lime-100">

            {/* Background Glow */}

            <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-green-200/40 blur-3xl animate-pulseSlow"></div>

            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-lime-300/30 blur-3xl animate-pulseSlow"></div>

            {/* Floating Leaves */}

            {/* <div className="absolute left-16 top-20 text-5xl animate-float">
                🍃
            </div>

            <div className="absolute right-20 top-36 text-4xl animate-float">
                🌿
            </div>

            <div className="absolute bottom-20 left-32 text-5xl animate-float">
                🥬
            </div> */}

            {/* Main */}

            <div className="relative flex flex-col items-center animate-fadeIn">

                {/* Rotating Ring */}

                <div className="relative flex items-center justify-center h-40 w-40">

                    {/* Rotating Ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-green-200 border-t-green-700 animate-rotateSlow"></div>

                    {/* Logo Circle */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-2xl animate-zoom">
                            <img
                                src={assets.logo}
                                alt="TajFresh"
                                className="w-20 object-contain"
                            />
                        </div>
                    </div>

                </div>

                {/* <h1 className="mt-10 text-5xl font-bold text-green-800">
                    TajFresh
                </h1> */}

                <p className="mt-2 text-sm uppercase tracking-[0.4em] text-green-600">
                    Fresh • Frozen • Delivered
                </p>

                {/* Loading */}

                <div className="mt-10 flex gap-3">

                    <div className="h-3 w-3 rounded-full bg-green-700 animate-bounce"></div>

                    <div className="h-3 w-3 rounded-full bg-green-600 animate-bounce [animation-delay:200ms]"></div>

                    <div className="h-3 w-3 rounded-full bg-green-500 animate-bounce [animation-delay:400ms]"></div>

                </div>

            </div>

        </div>
    );
};

export default SplashScreen;
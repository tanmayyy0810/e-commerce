import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";

const Profile = () => {
  const { backendUrl, token } = useContext(ShopContext);
  const [user, setUser] = useState(null);

  const fetchProfile = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + "/api/user/profile",
        {
          headers: { token },
        }
      );

      if (data.success) {
        setUser(data.user);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchProfile();
    }
  }, [token]);

  if (!user) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="max-w-xl mx-auto mt-16 p-8 border rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>

      <div className="space-y-6">
        <div>
          <p className="text-gray-500">Name</p>
          <h2 className="text-xl font-semibold">{user.name}</h2>
        </div>

        <div>
          <p className="text-gray-500">Email</p>
          <h2 className="text-xl font-semibold">{user.email}</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
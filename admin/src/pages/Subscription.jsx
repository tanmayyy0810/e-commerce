import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Subscription = ({ token }) => {

  const [subscribers, setSubscribers] = useState([]);

  const fetchSubscribers = async () => {

    try {

      const response = await axios.post(
        backendUrl + "/api/newsletter/list",
        {},
        { headers: { token } }
      );

      if (response.data.success) {

        setSubscribers(response.data.subscribers);

      } else {

        toast.error(response.data.message);

      }

    } catch (error) {

      console.log(error);
      toast.error(error.message);

    }

  };

  const deleteSubscriber = async (id) => {

    try {

      const response = await axios.post(
        backendUrl + "/api/newsletter/delete",
        { id },
        { headers: { token } }
      );

      if (response.data.success) {

        toast.success(response.data.message);

        fetchSubscribers();

      } else {

        toast.error(response.data.message);

      }

    } catch (error) {

      console.log(error);
      toast.error(error.message);

    }

  };

  useEffect(() => {

    fetchSubscribers();

  }, [token]);

  return (
    <div className="p-4 md:p-6">

      <h2 className="text-2xl font-semibold mb-6">
        Newsletter Subscribers
      </h2>

      <div className="space-y-4">

        {subscribers.map((item) => (

          <div
            key={item._id}
            className="border rounded-lg shadow-sm p-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4"
          >

            <div>

              <p className="font-semibold break-all">
                {item.email}
              </p>

              <p className="text-gray-500 text-sm mt-1">
                Subscribed on{" "}
                {new Date(item.createdAt).toLocaleDateString()}
              </p>

            </div>

            <button
              onClick={() => deleteSubscriber(item._id)}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md w-full md:w-auto"
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Subscription;
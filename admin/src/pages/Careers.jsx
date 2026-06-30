import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Careers = ({ token }) => {

  const [applications, setApplications] = useState([]);

  const fetchApplications = async () => {

    try {

      const response = await axios.post(
        backendUrl + "/api/career/list",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        setApplications(response.data.applications);
      } else {
        toast.error(response.data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

  }

  useEffect(() => {
    fetchApplications();
  }, [token]);

  return (
    <div className="p-4 md:p-6">

      <h2 className="text-2xl font-semibold mb-6">
        Career Applications
      </h2>

      <div className="space-y-6">

        {applications.map((item) => (

          <div
            key={item._id}
            className="
              border rounded-xl shadow-sm p-5
              flex flex-col gap-5
              md:grid md:grid-cols-[0.6fr_3fr_1.2fr]
              md:items-start md:gap-6
            "
          >

            {/* Applicant Icon */}

            <div className="flex justify-center md:block">
              <img
                className="w-16 h-16 rounded-full object-cover"
                src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                alt=""
              />
            </div>

            {/* Applicant Details */}

            <div className="text-center md:text-left">

              <h3 className="text-lg font-semibold">
                {item.fullName}
              </h3>

              <p className="text-gray-600">
                {item.email}
              </p>

              <p className="text-gray-600">
                {item.phone}
              </p>

              <div className="mt-3">
                <span className="font-medium">
                  Skills:
                </span>

                <p className="text-gray-500">
                  {item.skills}
                </p>
              </div>

              <div className="mt-3">
                <span className="font-medium">
                  Contribution:
                </span>

                <p className="text-gray-500 mt-1">
                  {item.contribution}
                </p>
              </div>

            </div>

            {/* Right Section */}

            <div className="flex flex-col gap-4 items-center md:items-start">

              <div className="text-center md:text-left">

                <p className="font-medium">
                  Applied
                </p>

                <p className="text-gray-500">
                  {new Date(item.date).toDateString()}
                </p>

              </div>

              <select
                className="border rounded-md px-3 py-2 w-full md:w-auto"
                defaultValue={item.status}
              >
                <option>New</option>
                <option>Reviewed</option>
                <option>Shortlisted</option>
                <option>Rejected</option>
              </select>

              <button
                onClick={() => {
                  window.open(
                    backendUrl + "/api/career/download/" + item._id,
                    "_blank"
                  );
                }}
                className="
                  w-full md:w-auto
                  bg-blue-500
                  hover:bg-blue-600
                  text-white
                  px-5
                  py-2
                  rounded-md
                  transition
                "
              >
                Download Resume
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Careers
import React, { useState } from 'react'
import axios from 'axios';
import toast from "react-hot-toast"

const Form = ({ fetchUsersData, BASE_URL }) => {
    //to store firstname & Email
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    console.log(userName, email);

    //function to send data

    const whenSubmit = async () => {
  try {
      const data = {
      firstname : userName,
       email  : email
        };
//wrote the localhost path in the package.json in root " "proxy" : "http://localhost:4000   so that axios knw the path where it's sending"
      const  ret = await axios.post(`${BASE_URL}/createUser`, data);

        if (ret.data.success) {
          toast.success("User Created!");
          fetchUsersData();
        }

      } catch (error) {
          toast.error(error.response.data.message);
      }
       
      };



    //here werite prevent Default
    const workSubmit = (event) =>{
        event.preventDefault();
        whenSubmit();
        //empty the values
        setUserName("");
        setEmail("");
    }

  return (
    <div>
        <form onSubmit={workSubmit}>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-8 mx-auto">
            <div className="flex flex-col text-center w-full mb-6">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                Create User
              </h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={userName}
                      onChange ={(event) => setUserName(event.target.value)}
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={email}
                      onChange = {(event)=>{
                        setEmail(event.target.value)
                      }}
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  )
}

export default Form
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast from "react-hot-toast";

const Todolists = ({ userData, fetchUsersData, BASE_URL }) => {
   

        //edit
        const handleEdit = async (user) =>{
          try {
            const userName = prompt("Enter new name");
            const email = prompt("Enter your new email");
  
            if (!userName || !email){
              toast.error("Please enter both name and email.")
            }else{
              const ret = await axios.put(`${BASE_URL}/editUsers/${user._id}`,{
                firstname : userName,
                email
              });
              console.log(ret)
              if (ret.data.success) {
                toast.success("user edited!.");
                fetchUsersData();
              }
            }
  
          } catch (error) {
            toast.error(error.response.data.message);
          }
         
        }
        
        //Delete

        const handleDelete = async  (user) =>{
          try {
            const ret = await axios.delete(`${BASE_URL}/deleteUsers/${user._id}`);
          console.log(ret);
          if (ret.data.success) {
            toast.success("user edited!.");
            fetchUsersData();
          }
          } catch (error) {
            toast.error(error.response.data.message);
          }
          
        };
  return (
    <div>
        <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            All Users
          </h1>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Name
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Email
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Edit
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>

              {
                userData && userData.map((user) => (
                  <tr>
                <td className="px-4 py-3">{user.firstname}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">
                  <button className="hover:text-green-500" onClick={()=>{
                    handleEdit(user)
                  }}  >Edit</button>
                </td>
                <td className="px-4 py-3 text-lg text-gray-900">
                  <button className="hover:text-red-500" onClick={()=>{
                    handleDelete(user)
                  }}  >Delete</button>
                </td>
              </tr>

                ))
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Todolists
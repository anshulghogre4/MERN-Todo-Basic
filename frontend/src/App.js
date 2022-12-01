import { Toaster } from "react-hot-toast";
import axios from "axios";
import { useEffect, useState } from "react";

import './App.css';
import Form from './components/Form';
import Todolists from './components/Todolists';


const BASE_URL ="https://mern-todo-basic-production.up.railway.app";


function App() {
  const [userData, setUserData] = useState(null);
  const fetchUsersData = async () =>{
    const ret = await axios.get(`${BASE_URL}/getUsers`);

    setUserData(ret.data.user);
  }
  useEffect(() => {
    fetchUsersData();
  }, []);

  return (
    <div>
     <Form fetchUsersData={fetchUsersData} BASE_URL={BASE_URL}  />
     <Todolists userData={userData}
        setUserData={setUserData}
        fetchUsersData={fetchUsersData}
        BASE_URL={BASE_URL}/>
        <Toaster/>
    </div>
  );
}

export default App;

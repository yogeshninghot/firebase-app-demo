import React, { useEffect, useState } from 'react'
import UserDetails from '../components/UserDetails';


const Home = () => {
       const[users,setusers]=useState([]);
       const[loadingStatus,setloadingStatus]=useState(true);
       useEffect(()=>{
        fetch("https://fir-demo-codekaro-default-rtdb.firebaseio.com/students.json").then(
          response=>response.json()).then(data=>{
            const tempUsers=[];
            for(let key in data){
              const user ={
                id:key,
                ...data[key]
              }
              tempUsers.push(user);
              setusers(tempUsers);
              setloadingStatus(false);
            }
           // console.log(users)
          })
       },[])
        
        
  return (
    <div className='home-container'>
         

        <h1>CodeDemo Users</h1>
        <p>Here is the all details of Student User</p>
        <div className={loadingStatus?"loader":"d-none"}></div>
        <div>
         { users.map((user)=>(<UserDetails name={user.name} email={user.email}/>))
         }
        </div>
    </div>
  )
}

export default Home;
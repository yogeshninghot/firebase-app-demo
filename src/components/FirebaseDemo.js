import {React,useRef,useState} from 'react'
// import { json } from 'react-router-dom'
import "../components/firebase.css"
import { useNavigate } from 'react-router-dom';

 const FirebaseDemo = () => {
        const [submitDataStatus,setSubmitDataStatus]=useState(false)
        const[users,setusers]=useState([]);
        const navigate = useNavigate();
        const nameInput = useRef(null);
        const emailInput= useRef(null);
        const [submitStatus,setsubmitStatus]=useState(null);

        function submitHandle(){
            setsubmitStatus(null);
        }
        
    function addHandle(){
        
            setSubmitDataStatus(true);
            const nameData = nameInput.current.value
            const emailData = emailInput.current.value
            
            let students ={
                name:nameData,
                email:emailData,
            }
            // checking if email exist
                fetch("https://fir-demo-codekaro-default-rtdb.firebaseio.com/students.json").then(
                  response=>response.json()).then(data=>{
                    const tempUsers=[];
                    for(let key in data){
                      const user ={
                        id:key,
                        ...data[key]
                      }
                      tempUsers.push(user);
                      let emailExist = tempUsers.filter((user)=>{
                        return user.email=== emailData
                      })
              if(emailExist.lenght===0){
                fetch("https://fir-demo-codekaro-default-rtdb.firebaseio.com/students.json",{
                    method:'post',
                    body: JSON.stringify(students),
                     }).then(()=>{
                    setsubmitStatus("Student Submitted succesfully!!!");
                    setTimeout(navigate("/"),5000);
                    
                 })
              }
              else{
                setsubmitStatus("Email already exicst");
                setSubmitDataStatus(false);
                
              }
                
                    }
                   console.log(users)
                  })
            //storing data
            
        }
    
  return (
        <div className='fire-container'>
        <h1>Welcome to Demo of Firebase</h1>
        <p>This component connected to real data base (Firebase) </p>
        <input placeholder='Add Name of Student' onFocus={submitHandle} ref={nameInput} className="input" />
        <input placeholder='Enter email of Student' onFocus={submitHandle} ref={emailInput} className="input" />
        
        
        <button onClick={addHandle}  className="btn2">Connect to Firebase <div className={submitDataStatus?"btn-loader":"d-none"}></div> </button>
        <p>{submitStatus}</p>
        
    
    </div>
  )
}

export default FirebaseDemo;

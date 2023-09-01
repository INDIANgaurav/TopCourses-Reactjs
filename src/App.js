import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
 import { apiUrl , filterData } from "./data"
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner";



const App = () => {

 const [courses , setCourses] = useState([]);

 const [loading , setLoading ] = useState(true);

 const [category , setCategory] = useState( filterData[0].title)
 async function fetchData ()   {
  setLoading(true);
  try{
    let res = await fetch(apiUrl);
    let output =await res.json();
    // console.log("your output   -> ",output.data);
 setCourses(output.data ); 

  }catch(err){
toast.error("something went wrong")
  }

  setLoading(false);
}


useEffect( () => {
 fetchData()
} , [])





  return (
    <div className=" flex flex-col min-h-screen bg-bgDark2">
    
    <Navbar/>
   <div className="bg-bgDark2 ">
   <Filter
     filterData = {filterData}
     category= {category}
     setCategory = {setCategory}

    />
    
    <div className='w-11/12 flex flex-wrap justify-center items-center min-h-[50vh]  max-w-[1200px] mx-auto py-4   '>
      {
        loading ? (<Spinner/>) : (<Cards courses={courses} category = {category}  />) 
      }
    </div>
   </div>
    
    </div>
  ) 
 
};
 

export default App;

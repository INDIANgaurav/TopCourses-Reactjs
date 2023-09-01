import React from 'react'
import {FcLike , FcLikePlaceholder} from 'react-icons/fc'
import { toast } from "react-toastify";

const Card = (props) => {
    let course = props.course 
    // console.log("you props course " + course)
    let likedCourses = props.likedCourses
    let setLikedCourses = props.setLikedCourses 

    function clickHandler () {
        if(likedCourses.includes(course.id)) {
            // pehle se liked hua pada hai 
            setLikedCourses( (prev) => prev.filter( (cid) => ( cid !== course.id)));
        toast.warning( " like removed ")
        }
        else {
            // pehle se like nahi hai 
            // insert karna hai ye course liked course me 

            if( likedCourses.length === 0)
            {
                setLikedCourses([course.id]);
            }
            else {
                // non empty pehle se 
                setLikedCourses( (prev) => [...prev , course.id]);
            }
            toast.success("liked successfully")

        }


    }


  return (
    <div className='w-[300px] bg-bgDark  rounded-sm overflow-hidden ' > 
      <div className='relative'>
        <img src={course.image.url}  />
        <div  className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-20px]
        grid place-items-center   '>
            <button onClick={clickHandler} >
                 {
                    likedCourses.includes(course.id) ? (
                        <FcLike fontSize="1.75rem"/> 
                        ) : (  
                        <FcLikePlaceholder fontSize="1.75rem"/>
                    )
                 }
            </button>
        </div>
      </div>
    <div className='text-white p-4 '>
        <p className='font-semibold text-lg leading-6 ' >{course.title}</p>
        <p className='mt-2'>
            {
                course.description.length >100 ? (
                    course.description.substr(0,100) + "..."
                ) : (course.description)
            }
            </p>
    </div>

    </div>
  )
}

export default Card

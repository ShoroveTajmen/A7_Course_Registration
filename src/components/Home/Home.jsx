/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  //Store Data
  const [allCourses, setAllcourses] = useState([]);
  const [selectCourses, setSelectCourses] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);

  // Data Load
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllcourses(data));
  }, []);

  //handle course name
  const handleSelectCourse = (course) => {
    // console.log(course)
    const isExist = selectCourses.find((item) => item.id === course.id);
    let count = course.credit_number;
    if (isExist) {
      toast.warning("Course is already booked");
    } else {
      selectCourses.forEach((item) => (count = count + item.credit_number));
      setSelectCourses([...selectCourses, course]);
    }
    if (count > 20) {
      toast.warning("No more courses can be added");
    } else {
      setTotalCredit(count);
    }
  };

  return (
    <div>
      {/* Toast Container */}
      <ToastContainer position="top-center" theme="dark"></ToastContainer>
      {/* home container */}
      <div className="flex">
        {/* Card-container */}
        <div className="w-2/4 m-5 grid grid-cols-3 gap-5 mx-auto">
          {allCourses.map((course) => (
            <div
              key={course.id}
              className="w-[300px] h-[420px] bg-white p-4 rounded-xl"
            >
              <>
                <img className="mb-4" src={course.cover_image} alt="" />
                <h1 className="font-bold mb-3 ">{course.course_name}</h1>
                <p className="text-sm text-[#1C1B1B99]">
                  {course.course_details}
                </p>
              </>
              {/* price and credit */}
              <div className="flex gap-8 mt-4">
                <>
                  <div className="flex text-sm text-[#1C1B1B99]">
                    {" "}
                    <img
                      src="https://i.ibb.co/n8Zv56P/dollar-sign-1.png"
                      alt=""
                    />
                    <p>Price : {course.price}</p>
                  </div>
                  <div className="flex text-sm text-[#1C1B1B99]">
                    <img src="https://i.ibb.co/6gXqSTd/Frame.png" alt="" />
                    <p>Credit : {course.credit_number}hr</p>
                  </div>
                </>
              </div>
              <button
                onClick={() => handleSelectCourse(course)}
                className="mt-5 bg-[#2F80ED] text-white w-[268px] h-[40px] rounded-lg font-semibold"
              >
                Select
              </button>
            </div>
          ))}
        </div>

        {/* Cart Portion */}
        <Cart selectCourses={selectCourses} totalCredit={totalCredit}></Cart>
      </div>
    </div>
  );
};

export default Home;

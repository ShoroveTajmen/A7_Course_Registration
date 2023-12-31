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
  const [creditRemaining, setCreditRemaining] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);

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
    let price = course.price;
    if (isExist) {
      return toast.warning("Course is already booked");
    } else {
      selectCourses.forEach((item) => (count = count + item.credit_number));
      selectCourses.forEach(item2 => (price = price + item2.price))
    }
    const remainingCredit = 20 - count;
    // if (remainingCredit < 0 && count > 20) {
    //   toast.warning("No more course can be added, Credit hour limit crossed");
    // } else {
    //   setTotalCredit(count)
    //   setCreditRemaining(remainingCredit);
    //   setTotalPrice(price);
    //   setSelectCourses([...selectCourses, course]);
    // }
    if(remainingCredit < 0){
        toast.warning("Credit hour limit crossed");
    }else{
        setCreditRemaining(remainingCredit);
    }
    if(count > 20){
        toast.warning("No more course can be added");
    }else {
          setTotalCredit(count)
          setTotalPrice(price);
          setSelectCourses([...selectCourses, course]);
        }
  };

  return (
    <div>
      {/* Toast Container */}
      <ToastContainer position="top-center" theme="dark"></ToastContainer>
      {/* home container */}
      <div className="flex flex-col md:flex-row md:w-[1500px] mx-auto">
        {/* Card-container */}
        <div className="w-full md:w-[1000px] m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {allCourses.map((course) => (
            <div
              key={course.id}
              className="w-[300px] h-[420px] bg-white ml-[80px] md:ml-[30px] lg:ml-0 p-4 rounded-xl"
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
        <Cart
          selectCourses={selectCourses}
          totalCredit={totalCredit}
          creditRemaining={creditRemaining}
          totalPrice={totalPrice}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;

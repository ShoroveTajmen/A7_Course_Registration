/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const Cart = ({ selectCourses, totalCredit, creditRemaining, totalPrice }) => {
  console.log(selectCourses);
  return (
    <div className=" w-3/3 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto mt-4">
      {" "}
      <div className=" md:p-4 p-8 bg-white rounded-xl ml-[30px] md:ml-0 lg:ml-0 mb-[40px]">
        <h1 className="font-semibold text-[#2F80ED] md:text-xl text-lg md:mb-4 mb-8">
          Credit Hour Remaining {creditRemaining} hr
        </h1>
        <hr className="mb-[16px]" />
        <p className="font-semibold md:text-lg text-base md:mb-4 mb-8">Course Name</p>
        {selectCourses.map((course, index) => (
          <ol className="md:text-base text-sm text-[#1C1B1B99] md:mb-2 mb-4" key={course.id}>
            <li>
              {index + 1} {course.course_name}
            </li>
          </ol>
        ))}
        <hr className="mb-4 md:mt-4 mt-8" />
        <h1 className="mb-[16px]">Total Credit Hour : {totalCredit}</h1>
        <hr className="mb-[16px]" />
        <h1>Total Price : {totalPrice} USD</h1>
      </div>
    </div>
  );
};

export default Cart;

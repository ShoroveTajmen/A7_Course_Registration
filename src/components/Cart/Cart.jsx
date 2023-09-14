/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const Cart = ({ selectCourses,totalCredit }) => {
  console.log(selectCourses);
  return (
    <div className="w-1/4 bg-white mx-auto rounded-xl h-[500px] mt-4">
      {" "}
      <div className=" p-8">
        <h1 className="font-semibold text-[#2F80ED] text-lg mb-[16px]">
          Credit Hour Remaining 7 hr
        </h1>
        <hr className="mb-[16px]" />
        <p className="font-semibold text-xl mb-[16px]">Course Name</p>
        {selectCourses.map((course, index) => (
          <ol className="text-sm text-[#1C1B1B99] mb-[8px]" key={course.id}>
            <li>
              {index + 1} {course.course_name}
            </li>
          </ol>
        ))}
        <hr className="mb-[16px] mt-[20px]" />
        <h1 className="mb-[16px]">Total Credit Hour : {totalCredit}</h1>
        <hr className="mb-[16px]" />
        <h1>Total Price : 48000 USD</h1>
      </div>
    </div>
  );
};

export default Cart;

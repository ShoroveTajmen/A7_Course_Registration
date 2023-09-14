const Cart = () => {
  return (
    <div className="w-1/4 bg-white mx-auto rounded-xl h-[500px] mt-5">
      {" "}
      <div className=" p-8">
        <h1 className="font-semibold text-[#2F80ED] text-lg mb-[16px]">
          Credit Hour Remaining 7 hr
        </h1>
        <hr className="mb-[16px]" />
        <p className="font-semibold text-xl mb-[16px]">Course Name</p>
        <hr className="mb-[16px]" />
        <h1 className="mb-[16px]">Total Credit Hour : 13</h1>
        <hr className="mb-[16px]" />
        <h1>Total Price : 48000 USD</h1>
      </div>
    </div>
  );
};

export default Cart;

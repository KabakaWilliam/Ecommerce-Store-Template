export const Banner = () => {
  return (
    <div className="flex h-8 w-full  items-center justify-center bg-[#e3d4ce] ">
      <MobileBanner />
      <div className="hidden  h-full w-[10%]  md:block"></div>
      <div className="hidden h-full w-[100%] gap-x-2 overflow-x-scroll text-[12px] md:flex md:w-[80%] md:items-center md:justify-center">
        <div className="w-full  border-r border-r-black pr-2 font-bold md:w-max">
          BRIDAL COLLECTION:
          <span className="cursor-pointer font-light underline">SHOP NOW</span>
        </div>
        <div className="w-full  border-r border-r-black pr-2 pl-2 font-bold underline md:w-max">
          FREE EXPRESS SHIPPING
          <span className="cursor-pointer font-light ">
            ON ORDERS OVER $100 AUD*
          </span>
        </div>
        <div className="w-full  border-r border-r-black pr-2 pl-2 font-bold md:w-max ">
          WIN{" "}
          <span className="font-light">
            A VIP EXPERIENCE TO COACHELLA FOR 2 + $500 MESHKI WARDROBE: ENTER
            NOW
          </span>
          <span className="cursor-pointer font-light underline ">
            ENTER NOW
          </span>
        </div>
      </div>
      <div className="hidden h-full w-[10%] md:block"></div>
    </div>
  );
};

const MobileBanner = () => {
  // const temp = [1, 2, 3, 4, 5, 6, 7];
  // return (
  //   <div className=" flex h-full w-screen overflow-y-scroll bg-[#e3d4ce]">
  //     {temp.map((item, index) => (
  //       <div className="" key={index}>
  //         <div className="scrollText h-full w-max border">
  //           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nihil
  //           quia quam laudantium vero voluptatum possimus. Quod, impedit veniam.
  //           Odit rem perferendis magni quod quae nesciunt quas totam neque
  //           minima.
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );
  return (
    <div className="text-[12px] font-bold ">
      {" "}
      BRIDAL COLLECTION:{" "}
      <span className="font-light underline">FREE EXPRESS SHIPPING</span>
    </div>
  );
};

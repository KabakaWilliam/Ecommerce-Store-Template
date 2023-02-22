export const Banner = () => {
  return (
    <div className="flex h-8 w-full  items-center justify-center bg-[#e3d4ce] ">
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

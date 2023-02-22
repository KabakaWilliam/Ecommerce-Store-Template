import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
        <title>Dresses</title>
      </Head>
      <main>
        <div className="flex h-screen w-screen flex-col items-center justify-center gap-y-10 gap-x-10 overflow-y-scroll md:flex-row md:gap-y-0 md:overflow-hidden">
          <DressCard />
          <DressCard />
          <DressCard />
        </div>
      </main>
    </>
  );
};

export default index;

const DressCard = () => {
  const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL"];
  return (
    <div className="h-[749px] w-[378px]  ">
      <section className="h-[567px] w-[378px]">
        <img
          src="https://cdn.shopify.com/s/files/1/0339/6517/products/20230209-meshki-ecomm-zora-katie12071_1080x.jpg?v=1676864829"
          alt=""
          className="h-full w-full cursor-pointer object-cover"
        />
      </section>
      <section className="h-[182px] w-[378px]">
        <div className="h-[146px] w-full ">
          <div className="flex h-[26px] w-full pt-1">
            <div className="flex h-[18px] w-[18px] cursor-pointer items-center justify-center border border-black">
              <div className="h-4 w-4 border-2 border-white bg-black"></div>
            </div>
          </div>
          <div className="h-5 w-full "></div>

          <div className="-dashed h-10 w-full ">
            <div>Sienna</div>
            <div>Midi Knit Dress - Black</div>
          </div>
          <div className="h-6 w-full "></div>
          <div className="-dotted h-6 w-full text-sm text-[#292624] ">
            255 ر.ق
          </div>
        </div>

        <div className="scrollbar-hide  flex h-9 w-full overflow-x-scroll border ">
          {sizes.map((size, index) => (
            <div key={index}>
              <button
                className={
                  index == 1
                    ? `styleScrollBox h-9 w-[52px] border-r text-[12px] text-[#1b1918]`
                    : `h-9 w-[52px] border-r text-[12px] text-[#1b1918] `
                }
              >
                {size}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

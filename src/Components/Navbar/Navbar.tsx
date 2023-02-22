import React from "react";
import { Banner } from "../Banner/Banner";
import {
  AccountIcon,
  BagIcon,
  ChevronDown,
  HeartIcon,
  MeshkiLogo,
  SearchIcon,
  ThreeBarsIcon,
} from "../Icons";

const NavBar = () => {
  const MiddleNavOptions = [
    "New",
    "Dresses",
    "Tops",
    "Bottoms",
    "Outwear",
    "Essentials",
    "Weddings",
    "Accessories",
    "Campaigns",
  ];
  return (
    <>
      <Banner />
      <nav className="sticky top-0 z-50 flex h-[72px] w-full items-center bg-white pl-0 md:pl-4">
        <section className="flex h-full w-[25%] items-center justify-center gap-x-1 text-sm font-light  md:hidden">
          <ThreeBarsIcon />
          <MobileNavSelector />
        </section>
        <div className="flex h-6 w-[50%] items-center justify-center md:w-[15%] md:justify-start ">
          <div className="h-full w-[134px]">
            <MeshkiLogo />
          </div>
        </div>
        <section className="flex h-full w-[25%] items-center justify-start gap-x-2 md:hidden">
          <HeartIcon />
          <BagIcon />
        </section>

        <section className="hidden h-[48px] w-[60%] items-center justify-center gap-x-10 text-sm font-light  text-[#1b1918] md:flex ">
          {MiddleNavOptions.map((item, index) => (
            <div className="MiddleNavOptionStyle" key={index}>
              {item}
            </div>
          ))}
          <div className="MiddleNavOptionStyle text-[#f66467]">Sale</div>
        </section>
        <section className="hidden h-[48px] w-[25%] items-center justify-end gap-x-3 pr-10 md:flex">
          <SearchIcon />
          <div className="flex gap-x-2">
            QAR
            <ChevronDown />
          </div>
          <HeartIcon />
          <AccountIcon />
          <BagIcon />
        </section>
      </nav>
    </>
  );
};

export default NavBar;

const MobileNavSelector = () => {
  return (
    <select id="currency_mobile" name="currency">
      <option>AED</option>

      <option>ALL</option>

      <option>AMD</option>

      <option>ANG</option>

      <option>AUD</option>

      <option>AWG</option>

      <option>AZN</option>

      <option>BAM</option>

      <option>BBD</option>

      <option>BDT</option>

      <option>BIF</option>

      <option>BND</option>

      <option>BOB</option>

      <option>BSD</option>

      <option>BWP</option>

      <option>BZD</option>

      <option>CAD</option>

      <option>CDF</option>

      <option>CHF</option>

      <option>CNY</option>

      <option>CRC</option>

      <option>CVE</option>

      <option>DJF</option>

      <option>DKK</option>

      <option>DOP</option>

      <option>DZD</option>

      <option>EGP</option>

      <option>ETB</option>

      <option>EUR</option>

      <option>FJD</option>

      <option>FKP</option>

      <option>GBP</option>

      <option>GMD</option>

      <option>GNF</option>

      <option>GTQ</option>

      <option>GYD</option>

      <option>HKD</option>

      <option>HNL</option>

      <option>IDR</option>

      <option>ILS</option>

      <option>INR</option>

      <option>JMD</option>

      <option>JPY</option>

      <option>KES</option>

      <option>KGS</option>

      <option>KHR</option>

      <option>KMF</option>

      <option>KRW</option>

      <option>KYD</option>

      <option>KZT</option>

      <option>LAK</option>

      <option>LKR</option>

      <option>MAD</option>

      <option>MDL</option>

      <option>MKD</option>

      <option>MMK</option>

      <option>MNT</option>

      <option>MOP</option>

      <option>MUR</option>

      <option>MVR</option>

      <option>MWK</option>

      <option>MYR</option>

      <option>NGN</option>

      <option>NIO</option>

      <option>NPR</option>

      <option>NZD</option>

      <option>PEN</option>

      <option>PGK</option>

      <option>PHP</option>

      <option>PKR</option>

      <option>PYG</option>

      <option selected={true}>QAR</option>

      <option>RSD</option>

      <option>RWF</option>

      <option>SAR</option>

      <option>SBD</option>

      <option>SGD</option>

      <option>SHP</option>

      <option>SLL</option>

      <option>STD</option>

      <option>THB</option>

      <option>TJS</option>

      <option>TOP</option>

      <option>TTD</option>

      <option>TWD</option>

      <option>TZS</option>

      <option>UAH</option>

      <option>UGX</option>

      <option>USD</option>

      <option>UYU</option>

      <option>UZS</option>

      <option>VND</option>

      <option>VUV</option>

      <option>WST</option>

      <option>XAF</option>

      <option>XCD</option>

      <option>XOF</option>

      <option>XPF</option>
    </select>
  );
};

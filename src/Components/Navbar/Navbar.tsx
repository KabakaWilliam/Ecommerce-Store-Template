import React from "react";
import {
  AccountIcon,
  BagIcon,
  ChevronDown,
  HeartIcon,
  MeshkiLogo,
  SearchIcon,
} from "../Icons";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 flex h-[72px] w-full items-center bg-white pl-0 md:pl-4">
      <div className="flex h-6 w-[15%] items-center justify-start ">
        <div className="h-full w-[134px]">
          <MeshkiLogo />
        </div>
      </div>
      <section className="flex h-[48px] w-[60%] items-center justify-center gap-x-10 text-sm  font-light text-[#1b1918] ">
        <div>New</div>
        <div>Dresses</div>
        <div>Tops</div>
        <div>Bottoms</div>
        <div>Outwear</div>
        <div>Essentials</div>
        <div>Weddings</div>
        <div>Accessories</div>
        <div>Campaigns</div>
        <div className="text-[#f66467]">Sale</div>
      </section>
      <section className="flex h-[48px] w-[25%] items-center justify-end gap-x-3 pr-10">
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
  );
};

export default NavBar;

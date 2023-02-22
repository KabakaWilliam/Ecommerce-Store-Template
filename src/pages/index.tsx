import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import {
  AccountIcon,
  BagIcon,
  CancelIcon,
  ChevronDown,
  HeartIcon,
  MeshkiLogo,
  SearchIcon,
} from "../Components/Icons";
import NavBar from "~/Components/Navbar/Navbar";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Meshki</title>
        <meta name="description" content="Dresses| Buy Womens Dresses Online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner />
        <NavBar />
        <HeroBanner />
        <FeaturedSection />

        <AdSideForm />
      </main>
    </>
  );
};

export default Home;

const Banner = () => {
  return (
    <div className="flex h-8 w-full  items-center justify-center bg-[#e3d4ce]    "></div>
  );
};

const HeroBanner = () => {
  return (
    <div className="h-[1004px] w-full ">
      <picture>
        <source
          media="(max-width: 768px)"
          sizes="100vw"
          srcSet="//cdn.shopify.com/s/files/1/0339/6517/files/hero_mobile_43430bd6-0eb8-47ea-ae47-2a23560f1334_180x.jpg?v=1676326249 180w,//cdn.shopify.com/s/files/1/0339/6517/files/hero_mobile_43430bd6-0eb8-47ea-ae47-2a23560f1334_360x.jpg?v=1676326249 360w,//cdn.shopify.com/s/files/1/0339/6517/files/hero_mobile_43430bd6-0eb8-47ea-ae47-2a23560f1334_540x.jpg?v=1676326249 540w,//cdn.shopify.com/s/files/1/0339/6517/files/hero_mobile_43430bd6-0eb8-47ea-ae47-2a23560f1334_720x.jpg?v=1676326249 720w,//cdn.shopify.com/s/files/1/0339/6517/files/hero_mobile_43430bd6-0eb8-47ea-ae47-2a23560f1334_900x.jpg?v=1676326249 900w,//cdn.shopify.com/s/files/1/0339/6517/files/hero_mobile_43430bd6-0eb8-47ea-ae47-2a23560f1334_1080x.jpg?v=1676326249 1080w"
        />
        <img
          src="//cdn.shopify.com/s/files/1/0339/6517/files/hero_e64967c6-b5f4-47cf-89fc-1590326de32a_2160x.jpg?v=1676326247"
          className="cursor-pointer"
          alt=""
        />
      </picture>
    </div>
  );
};

const AdSideForm = () => {
  return (
    <div className="fixed left-3 top-[30%] hidden bg-[#e0d5cf] px-8 pb-9 pt-12 md:block md:h-[466px]  md:w-[300px]     ">
      <div className="absolute bottom-[93%] left-[90%]">
        <div className="cursor-pointer">
          <CancelIcon />
        </div>
      </div>
      <form action="" className=" h-full w-full text-[#1b1918]">
        <div className="h-[27px] w-full text-center text-lg font-bold uppercase ">
          Be the first to Know
        </div>
        <div className="h-max w-full px-[6px] pt-[10px] pb-[10px] text-center text-[12px] ">
          Sign up for only the good stuff plus $10 off your first order
        </div>
        <div>
          <input
            className="mt-[10px] h-10 w-full border border-[#1b1918] bg-[#e0d5cf] px-[6px] text-[12px] placeholder:font-light placeholder:text-[#1b1918]   "
            type="text"
            placeholder="First Name"
          />
        </div>
        <div>
          <input
            className="mt-[10px] h-10 w-full border border-[#1b1918] bg-[#e0d5cf] px-[6px] text-[12px] placeholder:font-light placeholder:text-[#1b1918]   "
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div>
          <input
            className="mt-[10px] h-10 w-full border border-[#1b1918] bg-[#e0d5cf] px-[6px] text-[12px] placeholder:font-light placeholder:text-[#1b1918]   "
            type="tel"
            placeholder="Phone Number"
          ></input>
        </div>
        <div>
          <button className="mt-[10px] h-10 w-full border border-[#1b1918] bg-black px-[13px] text-[12px] font-bold uppercase text-white    ">
            Sign me up
          </button>
        </div>
        <p className="mt-[10px] h-[108px] w-full text-center text-[9px] leading-5 text-[#1b1918]">
          By signing up via text you agree to receive recurring automated
          marketing messages and shopping cart reminders at the number provided.
          Consent is not a condition of purchase. Reply STOP to unsubscribe.
          View
        </p>
      </form>
    </div>
  );
};

const PageBreak = () => {
  return <section></section>;
};

const FeaturedSection = () => {
  return (
    <div className="h-[2137px] w-full">
      <section className="flex h-[259px] w-full flex-col items-center justify-center gap-y-2 p-[16px] text-sm leading-10">
        <p>Wide eyes, wild hearts, seasonal flowers, and champagne towers.</p>
        <p>
          This year we are saying I do by toying with tradition—breaking away
          from formality and rejoicing in true unaffected intimacy.
        </p>
        <p>
          Be enamoured by flowing cowl drapery, soft lace and satin
          fabrications, and custom chiffon and satin flower details that allow
          our truest self to shine through all the candid snaps and first-kiss
          smiles.
        </p>
        <div className=" flex w-max items-end justify-center border-b  hover:border-[#292624]">
          <button className="font-normal uppercase text-[#292624]">
            Discover More
          </button>
        </div>
      </section>
      <FeaturedGallerySectionInitial />
    </div>
  );
};

const FeaturedGallerySectionInitial = () => {
  const Options = [
    {
      image:
        "https://cdn.shopify.com/s/files/1/0339/6517/files/BRIDAL_05033ac9-9795-4785-b72d-f1e57e48bfe3_900x.jpg?v=1676326328",
      title: "Shop Bridal",
      text: "black",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0339/6517/files/FORMAL_bd43edb0-2f62-4802-8c4c-e2b16217125a_900x.jpg?v=1676326386",
      title: "Shop Formal",
      text: "white",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0339/6517/files/SETS_a2b8b935-9d78-4b12-a51c-fd3c4e0ac187_900x.jpg?v=1676326473",
      title: "Shop Two Piece Sets",
      text: "white",
    },
  ];
  return (
    <section className="h-max w-full">
      <div className="grid h-[703px] w-full  md:grid-cols-3">
        {Options.map((item, index) => (
          <div
            key={index}
            className="flex h-full  max-w-[567px]  items-center justify-center"
          >
            <div
              style={{
                backgroundImage: `url(${item.image})`,
              }}
              className={`relative h-[98%] w-[98%] cursor-pointer bg-cover bg-center `}
            >
              <div
                className={
                  item.text == "black"
                    ? `absolute left-10 bottom-10 border-b border-b-[#292624] font-light uppercase text-[#292624]`
                    : `absolute left-10 bottom-10 border-b border-b-white font-light uppercase text-white`
                }
              >
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};

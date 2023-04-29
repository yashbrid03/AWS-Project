import React from "react";
import Nav from "./Nav";
import Image from "../Gradient.png";

export default function Home({ user, signout }) {
  return (
    <>
      <Nav signout={signout} />
      {/* <video class="w-full" autoplay loop muted>
        <source src={Video} type="video/mp4" />
      </video> */}
      {/* <div className="container px-5 py-10 h-25 mx-auto flex justify-center">
          <img src={Image}></img>
        </div> */}

      <div className="text-5xl mt-8 font-semibold text-center ">
        Welcome {user}
      </div>
    </>
  );
}

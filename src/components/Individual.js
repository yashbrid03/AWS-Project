import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import { API } from "aws-amplify";
import Banner from "../banner.jpg";

export default function Individual(signout) {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const routeParams = useParams();
  useEffect(() => {
    API.get("blogapi", `/blogs/${routeParams.id}`)
      .then((blogRes) => {
        console.log(blogRes);
        setHeading(blogRes[0].heading);
        setDescription(blogRes[0].description);
        setAuthor(blogRes[0].author);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Nav signout={signout}></Nav>
      {/* <div className="text-5xl mt-8 font-semibold text-center ">{heading}</div> */}
      <section class="text-gray-600 body-font">
        <div class="container px-20 pt-10  mx-auto">
          <div class="flex flex-wrap -m-4">
            {/* banner image */}
            <div class="p-4 md:w-full w-full">
              <div class="h-full bg-gray-100  bg-opacity-75 px-28 pt-16 pb-24 rounded-lg overflow-hidden  relative ">
                <img src={Banner} className=" object-cover h-1/2 w-full"></img>
                <div className="text-5xl mt-3 font-semibold  ">{heading}</div>
                <div className="text-2xl mt-3 font-semibold  ">
                  Published by: {author}
                </div>
                <div className="text-xl mt-3 font-semibold  ">
                  {description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

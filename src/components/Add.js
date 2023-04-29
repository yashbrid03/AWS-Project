import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { API } from "aws-amplify";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
// import S3 from "react-aws-s3";

export default function Add({ authid, user, signout }) {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  // const BUCKET_NAME = "imgs3bucket182551-dev";
  // const config = {
  //   bucketName: BUCKET_NAME,
  //   region: "ap-south-1",
  //   accessKeyId: "AKIAV4CJRM7GUQIZH56Q",
  //   secretAccessKey: "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",
  // };
  // const ReactS3Client = new S3(config);
  // const s3 = new AWS.S3({
  //   accessKeyId: idkey,
  //   secretAccessKey: secret,
  // });
  // const idkey = "AKIAV4CJRM7GUQIZH56Q";
  // const secret = "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";

  const [id, setId] = useState("");
  const [file, setFile] = useState([]);
  const author = user;

  useEffect(() => {
    var tempid = Math.floor(Date.now() / 1000);
    setId(tempid.toString());
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const newFileName = "test-file";

    console.log(heading);
    console.log(description);

    console.log(author);
    var tempid = Math.floor(Date.now() / 1000);
    setId(tempid.toString());
    console.log(file);
    // ReactS3Client.uploadFile(file, id)
    //   .then((data) => console.log("hello" + data))
    //   .catch((err) => console.error("error" + err));
    console.log(id);
    API.post("blogapi", "/blogs", {
      body: {
        heading: heading,
        description: description,
        id: id,
        author: author,
      },
    })
      .then((res) => {
        console.log(res);
        NotificationManager.success("Post added Successfully", "");
      })
      .catch((err) =>
        NotificationManager.error("Error message", "Click me!", 5000, () => {
          alert("callback");
        })
      );
  };

  return (
    <>
      <Nav signout={signout} />
      <form onSubmit={handleSubmit}>
        <NotificationContainer />
        <div className="text-5xl mt-8 font-semibold text-center ">
          Post a Blog
        </div>
        <div class="container px-5 py-24 mx-auto flex justify-center  ">
          <div class="lg:w-1/2 md:w-1/2 bg-white rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <div class="relative mb-4">
              <label
                for="email"
                class="text-gray-900 text-lg mb-1 font-medium title-font"
              >
                Blog Heading
              </label>
              <input
                value={heading}
                type="text"
                id="text"
                name="text"
                onChange={(e) => setHeading(e.target.value)}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label
                for="message"
                class="text-gray-900 text-lg mb-1 font-medium title-font"
              >
                Description
              </label>
              <textarea
                value={description}
                id="description"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            {/* <div class="relative mb-4">
              <label
                for="message"
                class="text-gray-900 text-lg mb-1 font-medium title-font"
              >
                File
              </label>
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></input>
            </div> */}
            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Post
            </button>
            <p class="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </form>
    </>
  );
}

"use client";
import CustomImages from "@/assets/images";
import Image from "next/image";
import { useEffect, useState } from "react";

const Qualifications = () => {
  const [width, setWidth] = useState(null);
  const [margin, setMargin] = useState(null);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.outerWidth < 650) {
        setMobileView(true);
      } else if (window.outerWidth < 770) {
        setWidth(280);
        setMargin(60);
        setMobileView(false);
      } else if (window.outerWidth < 1030) {
        setWidth(320);
        setMargin(100);
        setMobileView(false);
      } else {
        setWidth(null);
        setMargin(null);
        setMobileView(false);
      }
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  if (!mobileView) {
    return (
      <div className="flex flex-col items-center">
        <p className="section_header mb-40  tablet:mb-28 ">My Qualifications</p>

        <div className="relative h-[1500px]  w-[2px] bg-yellow-300 flex flex-col items-center  ">
          {/* MARK: 1ST DOT */}
          <div className="absolute z-10 top-[10%] w-5 h-5 rounded-full bg-white flex items-center justify-center">
            <div className="absolute z-10 w-3 h-3 rounded-full bg-hover_link" />

            {/* MARK: 1ST DOT DIV */}
            <div
              className={`absolute left-0  bg-white   shadow-xl  pt-2 pb-8 px-2 flex flex-col items-center mobile:w-full`}
              style={{
                width: `${width || "384"}px`,
                marginLeft: `${margin || "112"}px`,
              }}
            >
              <div className="w-2/5  mb-4">
                <Image
                  alt="image"
                  src={CustomImages.kvs}
                  className="h-full w-full "
                />
              </div>
              <p className="text-xl font-semibold tracking-wide text-slate-800">
                High School{" "}
              </p>
              <p className="text-sm text-gray-500 mt-2 mb-4">
                from Kendriya Vidyalaya
              </p>
              <div className="flex gap-2 text-sm text-gray-700">
                <p>Result : </p>
                <div className="text-gray-500">
                  <p>10th : 10 CGPA</p>
                  <p>12th : 82.2%</p>
                </div>
              </div>
            </div>
          </div>

          {/* MARK: 2ND DOT */}

          <div className="absolute z-10 top-[30%] w-5 h-5 rounded-full bg-my_bg/20 flex items-center justify-center">
            <div className="absolute z-10 w-3 h-3 rounded-full bg-hover_link" />

            {/* MARK: 2ND DOT DIV */}
            <div
              className={` absolute  right-0  bg-white   shadow-xl  pt-2 pb-8 px-2 flex flex-col items-center mobile:w-full`}
              style={{
                width: `${width || "384"}px`,
                marginRight: `${margin || "112"}px`,
              }}
            >
              <div className="w-3/5  mb-4">
                <Image
                  alt="image"
                  src={CustomImages.bhu}
                  className="h-full w-full "
                />
              </div>
              <p className="text-xl font-semibold tracking-wide text-center">
                Bachelor in Physics (Hons.)
              </p>
              <p className="text-sm text-gray-500 mt-2 mb-4 text-center">
                from Banaras Hindu University (Varanasi)
              </p>
              <div className="flex gap-2 text-sm text-gray-700">
                <p>Result : </p>
                <div className="text-gray-500">
                  <p>7.8 SGPA</p>
                </div>
              </div>
            </div>
          </div>

          {/* MARK: 3RD DOT */}

          <div className="absolute z-10 top-[50%] w-5 h-5 rounded-full bg-my_bg/20 flex items-center justify-center">
            <div className="absolute z-10 w-3 h-3 rounded-full bg-hover_link" />

            {/* MARK: 3RD DOT DIV */}

            <div
              className={`absolute  left-0  bg-white   shadow-xl  pt-2 pb-8 px-2 flex flex-col items-center mobile:w-full`}
              style={{
                width: `${width || "384"}px`,
                marginLeft: `${margin || "112"}px`,
              }}
            >
              <div className="w-2/5  mb-4 ">
                <Image
                  alt="image"
                  src={CustomImages.udemy}
                  className="h-full w-full "
                />
              </div>
              <p className="text-xl font-semibold tracking-wide text-center">
                <a
                  href="https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/12638830#content"
                  target="_blank"
                  rel="noreferrer"
                >
                  Full Stack Web Development Bootcamp
                </a>
              </p>
              <p className="text-xs text-gray-500 mt-2 mb-4 text-center">
                <strong>cover</strong> HTML, CSS, Flexbox, Grid, Bootstrap,
                JavaScript, DOM, Node JS, Express JS, Databases(SQL and no-SQL),
                React JS, Authentication
              </p>
              <p className="text-sm text-gray-500 mt-2 mb-4">
                from
                <a
                  href="https://www.udemy.com/user/4b4368a3-b5c8-4529-aa65-2056ec31f37e/"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-1"
                >
                  Angela Yu
                </a>
              </p>
              <p className="text-sm text-gray-500">Year : 2023</p>
            </div>
          </div>

          {/* MARK: 4TH DOT */}

          <div className="absolute z-10 top-[70%] w-5 h-5 rounded-full bg-my_bg/20 flex items-center justify-center">
            <div className="absolute z-10 w-3 h-3 rounded-full bg-hover_link" />

            {/* MARK: 4TH DOT DIV */}

            <div
              className={`  absolute right-0  bg-white   shadow-xl  pt-2 pb-8 px-2  flex flex-col items-center mobile:w-full`}
              style={{
                width: `${width || "384"}px`,
                marginRight: `${margin || "112"}px`,
              }}
            >
              <div className="w-2/5  mb-4 ">
                <Image
                  alt="image"
                  src={CustomImages.udemy}
                  className="h-full w-full "
                />
              </div>
              <p className="text-xl font-semibold tracking-wide text-center">
                <a
                  href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/learn/lecture/15064262#content"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Complete JavaScript Course: From Zero to Expert!
                </a>
              </p>
              <p className="text-xs text-gray-500 mt-2 mb-4 text-center">
                <strong>cover</strong> fundamentals, if/else, loops, string,
                functions, arrays, objects, boolean, Classes, async/await, APIs
              </p>
              <p className="text-sm text-gray-500 mt-2 mb-4">
                from
                <a
                  href="https://www.udemy.com/user/jonasschmedtmann/"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-1"
                >
                  Jonas Schmedtmann
                </a>
              </p>
              <p className="text-sm text-gray-500">Year : 2023</p>
            </div>
          </div>

          {/* MARK: 5TH DOT */}

          <div className="absolute z-10 top-[90%] w-5 h-5 rounded-full bg-my_bg/20 flex items-center justify-center">
            <div className="absolute z-10 w-3 h-3 rounded-full bg-hover_link" />

            {/* MARK: 5TH DOT DIV */}

            <div
              className={` absolute left-0  bg-white   shadow-xl  pt-2 pb-8 px-2  flex flex-col items-center mobile:w-full`}
              style={{
                width: `${width || "384"}px`,
                marginLeft: `${margin || "112"}px`,
              }}
            >
              <div className="w-2/5  mb-4 ">
                <Image
                  alt="image"
                  src={CustomImages.udemy}
                  className="h-full w-full "
                />
              </div>
              <p className="text-xl font-semibold tracking-wide text-center">
                <a
                  href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/learn/lecture/15064262#content"
                  target="_blank"
                  rel="noreferrer"
                >
                  Complete Backend Bootcamp
                </a>
              </p>
              <p className="text-xs text-gray-500 mt-2 mb-4 text-center">
                <strong>cover</strong> Node JS, Express JS, MongoDB, Mongoose,
                Authentication/Authorization
              </p>
              <p className="text-sm text-gray-500 mt-2 mb-4">
                from
                <a
                  href="https://www.udemy.com/user/jonasschmedtmann/"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-1"
                >
                  Jonas Schmedtmann
                </a>
              </p>
              <p className="text-sm text-gray-500">Year : 2023</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* WORK: MOBILE VIEW */
  return (
    <div className="w-full">
      <p className="section_header mb-28 text-center ">My Qualifications</p>
      <div className="w-full flex flex-col items-center gap-8 ">
        {/* MARK: 1ST DOT DIV */}
        <div
          className={`shadow-xl  pt-2 pb-8 px-2 flex flex-col items-center mobile:w-full`}
          style={{
            width: `${width || "384"}px`,
            marginLeft: `${margin || "112"}px`,
          }}
        >
          <div className="w-2/5  mb-4">
            <Image
              alt="image"
              src={CustomImages.kvs}
              className="h-full w-full "
            />
          </div>
          <p className="text-xl font-semibold tracking-wide">High School </p>
          <p className="text-sm text-gray-500 mt-2 mb-4">
            from Kendriya Vidyalaya
          </p>
          <div className="flex gap-2 text-sm text-gray-700">
            <p>Result : </p>
            <div className="text-gray-500">
              <p>10th : 10 CGPA</p>
              <p>12th : 82.2%</p>
            </div>
          </div>
        </div>

        {/* MARK: 2ND DOT DIV */}
        <div
          className={`shadow-xl  pt-2 pb-8 px-2 flex flex-col items-center mobile:w-full`}
          style={{
            width: `${width || "384"}px`,
            marginRight: `${margin || "112"}px`,
          }}
        >
          <div className="w-3/5  mb-4">
            <Image
              alt="image"
              src={CustomImages.bhu}
              className="h-full w-full "
            />
          </div>
          <p className="text-xl font-semibold tracking-wide text-center">
            Bachelor in Physics (Hons.)
          </p>
          <p className="text-sm text-gray-500 mt-2 mb-4 text-center">
            from Banaras Hindu University (Varanasi)
          </p>
          <div className="flex gap-2 text-sm text-gray-700">
            <p>Result : </p>
            <div className="text-gray-500">
              <p>7.8 SGPA</p>
            </div>
          </div>
        </div>

        {/* MARK: 3RD DOT DIV */}

        <div
          className={`shadow-xl  pt-2 pb-8 px-2 flex flex-col items-center mobile:w-full`}
          style={{
            width: `${width || "384"}px`,
            marginLeft: `${margin || "112"}px`,
          }}
        >
          <div className="w-2/5  mb-4 ">
            <Image
              alt="image"
              src={CustomImages.udemy}
              className="h-full w-full "
            />
          </div>
          <p className="text-xl font-semibold tracking-wide text-center">
            <a
              href="https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/12638830#content"
              target="_blank"
              rel="noreferrer"
            >
              Full Stack Web Development Bootcamp
            </a>
          </p>
          <p className="text-xs text-gray-500 mt-2 mb-4 text-center">
            <strong>cover</strong> HTML, CSS, Flexbox, Grid, Bootstrap,
            JavaScript, DOM, Node JS, Express JS, Databases(SQL and no-SQL),
            React JS, Authentication
          </p>
          <p className="text-sm text-gray-500 mt-2 mb-4">
            from
            <a
              href="https://www.udemy.com/user/4b4368a3-b5c8-4529-aa65-2056ec31f37e/"
              target="_blank"
              rel="noreferrer"
              className="ml-1"
            >
              Angela Yu
            </a>
          </p>
          <p className="text-sm text-gray-500">Year : 2023</p>
        </div>

        {/* MARK: 4TH DOT DIV */}

        <div
          className={`shadow-xl  pt-2 pb-8 px-2  flex flex-col items-center mobile:w-full`}
          style={{
            width: `${width || "384"}px`,
            marginRight: `${margin || "112"}px`,
          }}
        >
          <div className="w-2/5  mb-4 ">
            <Image
              alt="image"
              src={CustomImages.udemy}
              className="h-full w-full "
            />
          </div>
          <p className="text-xl font-semibold tracking-wide text-center">
            <a
              href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/learn/lecture/15064262#content"
              target="_blank"
              rel="noreferrer"
            >
              The Complete JavaScript Course: From Zero to Expert!
            </a>
          </p>
          <p className="text-xs text-gray-500 mt-2 mb-4 text-center">
            <strong>cover</strong> fundamentals, if/else, loops, string,
            functions, arrays, objects, boolean, Classes, async/await, APIs
          </p>
          <p className="text-sm text-gray-500 mt-2 mb-4">
            from
            <a
              href="https://www.udemy.com/user/jonasschmedtmann/"
              target="_blank"
              rel="noreferrer"
              className="ml-1"
            >
              Jonas Schmedtmann
            </a>
          </p>
          <p className="text-sm text-gray-500">Year : 2023</p>
        </div>

        {/* MARK: 5TH DOT DIV */}

        <div
          className={`shadow-xl  pt-2 pb-8 px-2  flex flex-col items-center mobile:w-full`}
          style={{
            width: `${width || "384"}px`,
            marginLeft: `${margin || "112"}px`,
          }}
        >
          <div className="w-2/5  mb-4 ">
            <Image
              alt="image"
              src={CustomImages.udemy}
              className="h-full w-full "
            />
          </div>
          <p className="text-xl font-semibold tracking-wide text-center">
            <a
              href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/learn/lecture/15064262#content"
              target="_blank"
              rel="noreferrer"
            >
              Complete Backend Bootcamp
            </a>
          </p>
          <p className="text-xs text-gray-500 mt-2 mb-4 text-center">
            <strong>cover</strong> Node JS, Express JS, MongoDB, Mongoose,
            Authentication/Authorization
          </p>
          <p className="text-sm text-gray-500 mt-2 mb-4">
            from
            <a
              href="https://www.udemy.com/user/jonasschmedtmann/"
              target="_blank"
              rel="noreferrer"
              className="ml-1"
            >
              Jonas Schmedtmann
            </a>
          </p>
          <p className="text-sm text-gray-500">Year : 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;

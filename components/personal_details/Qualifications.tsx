"use client";
import CustomImages from "@/assets/images";
import Image from "next/image";
import { useEffect, useState } from "react";

const Qualifications = () => {
  const [width, setWidth] = useState<number | null>(null);
  const [margin, setMargin] = useState<number | null>(null);
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
        <p className="text-4xl font-semibold tracking-wider mb-28 ">
          My Qualifications
        </p>

        <div className="relative h-[1500px]  w-[2px] bg-line flex flex-col items-center ">
          {/* MARK: 1ST DOT */}
          <div className="qualification_dot_outer top-[10%]">
            <div className="qualification_dot_inner" />

            {/* MARK: 1ST DOT DIV */}
            <div
              className={`qualification_div left-0 absolute`}
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
              <p className="qualification_title">High School </p>
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

          <div className="top-[30%] qualification_dot_outer">
            <div className="qualification_dot_inner" />

            {/* MARK: 2ND DOT DIV */}
            <div
              className={`right-0 qualification_div absolute`}
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
              <p className="qualification_title">Bachelor in Physics (Hons.)</p>
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

          <div className="top-[50%] qualification_dot_outer">
            <div className="qualification_dot_inner" />

            {/* MARK: 3RD DOT DIV */}
            <div
              className={`  left-0  qualification_div absolute`}
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
              <p className="qualification_title">
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
          <div className="top-[70%] qualification_dot_outer">
            <div className="qualification_dot_inner" />

            {/* MARK: 4TH DOT DIV */}

            <div
              className={`right-0 qualification_div absolute`}
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
              <p className="qualification_title">
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
          <div className="top-[90%] qualification_dot_outer">
            <div className="qualification_dot_inner" />

            {/* MARK: 5TH DOT DIV */}
            <div
              className={`left-0  qualification_div absolute`}
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
              <p className="qualification_title">
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
      <p className="text-4xl font-semibold tracking-wider mb-28 text-center ">
        My Qualifications
      </p>
      <div className="w-full flex flex-col items-center gap-8 ">
        {/* MARK: 1ST DOT DIV */}
        <div
          className={`qualification_div`}
          style={{
            width: `${width || "384"}px`,
          }}
        >
          <div className="w-2/5  mb-4">
            <Image
              alt="image"
              src={CustomImages.kvs}
              className="h-full w-full "
            />
          </div>
          <p className="qualification_title">High School </p>
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
          className={`qualification_div`}
          style={{
            width: `${width || "384"}px`,
          }}
        >
          <div className="w-3/5  mb-4">
            <Image
              alt="image"
              src={CustomImages.bhu}
              className="h-full w-full "
            />
          </div>
          <p className="qualification_title">Bachelor in Physics (Hons.)</p>
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
          className={`qualification_div`}
          style={{
            width: `${width || "384"}px`,
          }}
        >
          <div className="w-2/5  mb-4 ">
            <Image
              alt="image"
              src={CustomImages.udemy}
              className="h-full w-full "
            />
          </div>
          <p className="qualification_title">
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
          className={`qualification_div`}
          style={{
            width: `${width || "384"}px`,
          }}
        >
          <div className="w-2/5  mb-4 ">
            <Image
              alt="image"
              src={CustomImages.udemy}
              className="h-full w-full "
            />
          </div>
          <p className="qualification_title">
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
          className={`qualification_div`}
          style={{
            width: `${width || "384"}px`,
          }}
        >
          <div className="w-2/5  mb-4 ">
            <Image
              alt="image"
              src={CustomImages.udemy}
              className="h-full w-full "
            />
          </div>
          <p className="qualification_title">
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

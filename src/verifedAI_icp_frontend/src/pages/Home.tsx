// import { useState } from "react";
import { Link } from "react-router-dom";
import bgi from "../assets/background2.jpeg";
import ChatBot from "../components/ChatBot";
import shield from "../assets/Asset 1.svg";
import Sidebar from "../components/Sidebar";
import Loader from "../components/Loader";
import Card from "../components/Home/Card";
import img1 from "../assets/1 of 4.png";
import img2 from "../assets/3 of 4.png";
import img3 from "../assets/2 of 4.png";
import img4 from "../assets/4 of 4.png";
import loimg1 from "../assets/2of3.jpeg";
import loimg2 from "../assets/3of3.jpeg";
import loimg3 from "../assets/1of3.png";

const Home = () => {
  // const [open, setOpen] = useState(false);

  return (
    <div className="example">
      {/* Hero Section */}

      <div className=" ">
        <ChatBot />
      </div>
      <div className="hero bg-base-200 min-h-screen w-screen" id="intro0">
        <div className="hero-content flex-col lg:flex-row-reverse w-full flex justify-evenly">
          <div className="w-[60vw] flex justify-end mr-7">
            <img
              src={shield}
              className="max-w-sm w-72"
              style={{
                width: "100%",
                height: "100%",

                transform: "rotateZ(-13deg)",
              }}
            />
          </div>

          <div className="w-[40vw]">
            <h1
              className="text-5xl font-medium text-secondary "
              style={{
                fontFamily: "BRLNSR",
              }}
            >
              Engage.Innovate.Validate.
            </h1>
            <p className="py-6 text-xl font-semibold text-gray-300">
              VerifED delivers AI-powered certification,offering an efficient
              and robust solution for your needs.
            </p>
            <button className="border border-neutral p-3 bg-none rounded-full px-8 ml-4 ">
              EXPLORE
            </button>
          </div>
        </div>
        <Sidebar />
      </div>

      {/* Features Section */}

      {/* Decentralization and Security Section */}
      <div
        className="py-16 w-screen h-screen flex flex-col justify-around bg-base-300 "
        id="intro1"
      >
        <div className="max-w-6xl mx-auto px-2">
          <h2 className="text-3xl font-bold ">
            Decentralization and Security with ICP
          </h2>
          <div>
            {/* <p>
              VerifED leverages the Internet Computer Protocol (ICP) to provide
              a decentralized and secure environment for certifications and
              assessments. ICP ensures that data is encrypted and stored on
              multiple nodes, making it virtually impossible for unauthorized
              access.
            </p> */}
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-2">
          <h2 className="text-3xl font-bold ">
            Decentralization and Security with ICP
          </h2>
          <div>
            {/* <p>
              VerifED leverages the Internet Computer Protocol (ICP) to provide
              a decentralized and secure environment for certifications and
              assessments. ICP ensures that data is encrypted and stored on
              multiple nodes, making it virtually impossible for unauthorized
              access.
            </p> */}
          </div>
        </div>
      </div>
      {/* <Loader /> */}

      {/* Innovation and Ethics Section */}
      <div
        className=" h-screen w-screen  flex justify-center items-center "
        id="intro2"
      >
        <div className=" flex justify-around  gap-7 border border-neutral p-14 rounded-3xl items-stretch  ">
          <Card
            imgUrl={img1}
            size="300"
            Title="Exam Preparation"
            description="Enchance exam readiness with curated study materials interative quizzez and practice tests"
          />
          <Card
            imgUrl={img3}
            size="300"
            Title="Proctoring Support"
            description="Provide seamless technical support during remote proctoring for smooth exam administration "
          />
          <Card
            imgUrl={img2}
            size="300"
            Title="Feedback & training"
            description="Implement feedback mechanisms for continuous improvement and AI training "
          />
          <Card
            imgUrl={img4}
            size="300"
            Title="FAQ Handling"
            description="Offer authoritative FAQs on exam protocols and policies"
          />
        </div>
      </div>

      {/* Advanced AI Features Section */}
      <div className="py-16" id="intro3">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">
            Leveraging Advanced AI Features
          </h2>
          <div className=" flex justify-around  gap-7 border border-neutral p-14 rounded-[50px] items-stretch  ">
            <Card
              imgUrl={loimg3}
              size={"200"}
              description="Track and identify individual by analyzing realtime  facial expressions and movements
              "
            />
            <Card
              imgUrl={loimg2}
              size={"200"}
              description="Ensure credibility and reliablility of examinations and assessments"
            />
            <Card
              imgUrl={loimg1}
              size={"200"}
              description="Validate identity through biometric eye-blinking patterns"
            />
          </div>
        </div>
      </div>

      <div className="py-16  " id="intro4">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Ready to Transform Your Exam Experience with Decentralized AI?
          </h2>
          <button className="btn btn-primary mr-4">Get Started Now</button>
          <Link to="/contact" className="btn btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

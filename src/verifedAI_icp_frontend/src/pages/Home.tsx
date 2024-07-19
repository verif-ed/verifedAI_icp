import { Link } from "react-router-dom";
import ChatBot from "../components/ChatBot";
import shield from "../assets/Asset 1.svg";
import Sidebar from "../components/Sidebar";
import Card from "../components/Home/Card";
import img1 from "../assets/1 of 4.png";
import img2 from "../assets/3 of 4.png";
import img3 from "../assets/2 of 4.png";
import img4 from "../assets/certificate.png";
import loimg1 from "../assets/facerec.png";
import loimg2 from "../assets/block.png";
import loimg3 from "../assets/icp.jpeg";
import "../App.css";
import { useEffect, useState } from "react";
import { usePrincipalId } from "../Context/UserContext";

const Home = () => {
  // const prinId = usePrincipalId();
  // console.log(prinId, "this is principal id");
  const [loggedIn, setLoggedIn] = useState(false);
  const { principalId } = usePrincipalId();

  useEffect(() => {
    // Fetch the principal ID from local storage
    if (principalId) {
      setLoggedIn(true);
    }
  }, [principalId]);

  console.log(localStorage.getItem("principalId"), "this is local storage");

  return (
    <div className="example overflow-hidden max-w-full lg:w-screen">
      {/* Hero Section */}
      <div>
        <ChatBot />
      </div>
      <div className="hero bg-base-200 min-h-screen w-screen" id="intro0">
        <div className="hero-content flex-col lg:flex-row-reverse w-full flex justify-evenly">
          <div className="w-full lg:w-[60vw] flex justify-center lg:justify-end lg:mr-7">
            <img
              src={shield}
              className="w-full max-w-xs lg:max-w-sm"
              style={{
                transform: "rotateZ(-13deg)",
              }}
              alt="Shield"
            />
          </div>

          <div className="w-full lg:w-[40vw] text-center lg:text-left px-4 lg:px-0">
            <h1
              className="text-3xl lg:text-5xl sm:text-4xl font-medium text-secondary"
              style={{
                fontFamily: "BRLNSR",
              }}
            >
              Engage. Innovate. Validate.
            </h1>
            <p className="py-6 text-lg lg:text-xl font-semibold text-gray-300">
              VerifED delivers AI-powered certification, offering an efficient
              and robust solution for your needs.
            </p>
            <button className="border border-neutral p-3 bg-none rounded-full px-8 ml-0 lg:ml-4">
              {loggedIn ? (
                <Link to="/dashboard">Dashboard</Link>
              ) : (
                <a href="#intro2">Explore</a>
              )}
            </button>
          </div>
        </div>
        <Sidebar />
      </div>

      {/* Features Section */}
      {/* Decentralization and Security Section */}
      <div
        className="py-16 flex flex-col justify-around bg-base-300 h-screen w-screen"
        id="intro1"
      >
        <div className="max-w-6xl mx-auto px-4 text-center glowing-text">
          <h2 className="text-2xl lg:text-3xl font-bold">
            Decentralization and Security with ICP
          </h2>
          <p className="mt-4 text-base lg:text-lg">
            VerifED leverages the Internet Computer Protocol (ICP) to provide a
            decentralized and secure environment for certifications and
            assessments. ICP ensures that data is encrypted and stored on
            multiple nodes, making it virtually impossible for unauthorized
            access.
          </p>
        </div>
      </div>

      {/* Innovation and Ethics Section */}
      <div
        className="w-screen h-auto flex justify-center items-center py-16"
        id="intro2"
      >
        <div className="flex flex-wrap justify-around gap-7 border border-neutral p-8 lg:p-14 rounded-3xl items-stretch">
          <Card
            imgUrl={img1}
            size="300"
            Title="Exam Preparation"
            description="Enhance exam readiness with curated study materials, interactive quizzes, and practice tests."
          />
          <Card
            imgUrl={img3}
            size="300"
            Title="Proctoring Support"
            description="Provide seamless technical support during remote proctoring for smooth exam administration."
          />
          <Card
            imgUrl={img2}
            size="300"
            Title="Feedback & Training"
            description="Implement feedback mechanisms for continuous improvement and AI training."
          />
          <Card
            imgUrl={img4}
            size="300"
            Title="Decentralized Certifications"
            description="Utilize decentralized technology to issue and verify certifications securely."
          />
        </div>
      </div>

      {/* AI and Blockchain Features Section */}
      <div className="py-16" id="intro3">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold mb-12 text-center">
            Leveraging Advanced AI and Blockchain Features
          </h2>
          <div className="flex flex-wrap justify-around gap-7 border border-neutral p-8 lg:p-14 rounded-[50px] items-stretch">
            <Card
              imgUrl={loimg1}
              size="200"
              description="Real-time facial recognition and movement tracking for secure authentication."
            />
            <Card
              imgUrl={loimg2}
              size="200"
              description="Blockchain integration ensures the credibility and tamper-proof nature of exams."
            />
            <Card
              imgUrl={loimg3}
              size="200"
              description="ICP integration for decentralized storage and encryption of certification data."
            />
          </div>
        </div>
      </div>

      <div className="py-16" id="intro4">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-12">
            Ready to Transform Your Exam Experience with Decentralized AI?
          </h2>
          <button className="btn btn-primary mr-4">Get Started Now</button>
          <Link to="/dashboard" className="btn btn-secondary">
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

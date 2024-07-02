// import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero min-h-screen bg-gray-100"
        style={{
          backgroundImage: "url('src/assets/background2.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              <span className="text-gray-700">Verif</span>
              <span className="text-accent">Ed</span>
            </h1>
            <p className="mb-5 text-2xl feature-block font-semibold text-gray-700 ">
              Powered by Internet Computer Protocol (ICP).
            </p>
            <button
              className="btn btn-primary mr-4"
              // onClick={() => {
              //   setOpen(true);
              // }}
            >
              Get Started
            </button>
            <Link to="/learn-more" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our AI-Powered Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-block text-center">
              <h3 className="text-xl font-semibold">Exam Preparation</h3>
              <p>
                Facilitate comprehensive exam readiness through curated study
                materials, interactive quizzes, and simulated practice tests.
              </p>
            </div>
            <div className="feature-block text-center">
              <h3 className="text-xl font-semibold">FAQ Handling</h3>
              <p>
                Provide authoritative responses to frequently asked questions
                regarding exam protocols, procedures, and policies.
              </p>
            </div>
            <div className="feature-block text-center">
              <h3 className="text-xl font-semibold">Proctoring Support</h3>
              <p>
                Offer seamless technical assistance during remote proctoring
                sessions to ensure smooth exam administration.
              </p>
            </div>
            <div className="feature-block text-center">
              <h3 className="text-xl font-semibold">Feedback Collection</h3>
              <p>
                Implement structured mechanisms to gather valuable candidate
                feedback, fostering continuous improvement of services and
                offerings.
              </p>
            </div>
            <div className="feature-block text-center">
              <h3 className="text-xl font-semibold">Training</h3>
              <p>
                Continuous training of AI models to improve accuracy and
                relevance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decentralization and Security Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Decentralization and Security with ICP
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold">Decentralization</h3>
              <p>
                Leveraging the Internet Computer Protocol to ensure data
                integrity and decentralized management of exam support and
                certification processes.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">Security</h3>
              <p>
                Ensuring secure and tamper-proof operations through robust
                cryptographic measures.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation and Ethics Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Innovation and Ethical Considerations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p>
                Leading the exploration of cutting-edge AI-driven solutions to
                ensure the integrity and fairness of assessment practices.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">Ethical Considerations</h3>
              <p>
                Addressing privacy and fairness concerns in testing environments
                through meticulous implementation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced AI Features Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Advanced AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold">
                Facial Movement Analysis
              </h3>
              <p>
                Track and identify individuals by analyzing real-time facial
                expressions and movements every 30 seconds.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">Eye Blink Recognition</h3>
              <p>Validate identity through biometric eye blinking patterns.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">Trustworthiness</h3>
              <p>
                Uphold the credibility and reliability of certifications and
                assessments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <p>"AI chat increased our candidate satisfaction by 30%!"</p>
            </div>
            <div className="text-center">
              <p>"Query resolution time was halved with AI integration."</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Call to Action Section */}
      <div className="py-16 bg-white">
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

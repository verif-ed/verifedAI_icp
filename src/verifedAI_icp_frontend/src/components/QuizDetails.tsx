// import { Link } from "react-router-dom";

// // const options: object = {
// //   weekday: "long",
// //   year: "numeric",
// //   month: "long",
// //   day: "numeric",
// // };

// // const convertDateToMonthAndYear = (
// //   formatType: string,
// //   date: string | undefined
// // ) => {
// //   if (typeof date === "string") {
// //     const dateFormat = new Date(date);
// //     return dateFormat.toLocaleDateString("en-US", options);
// //   }
// //   return "undefined date found";
// // };

// type quizParamType = {
//   quizid: string | undefined;
// };

// const QuizDetails = ({ quizid }: quizParamType) => {
//   const quiz = quizid;
//   console.log(quiz);

//   return (
//     <div className="card card-side  bg-base-100 shadow-xl ">
//       <figure className="">
//         <img
//           className=""
//           src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
//           alt="Movie"
//         />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">New movie is released!</h2>
//         <p>Click the button to watch on Jetflix app.</p>
//       </div>
//       <div className="flex items-end ">
//         <button className="btn mr-3 mb-2">
//           <Link to={`/quiz/${quizid}/start`}>Start Quiz</Link>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QuizDetails;
import React from "react";
import { Link } from "react-router-dom";
import icpimg from "../assets/icp.jpg";
interface QuizParamType {
  quizid: string | undefined;
}

interface QuizInfo {
  title: string;
  description: string;
  duration: number;
  questionCount: number;
  imageUrl: string;
}

const QuizDetails: React.FC<QuizParamType> = ({ quizid }) => {
  // In a real application, you would fetch this data based on the quizid
  const quizInfo: QuizInfo = {
    title: "Fundamentals of ICP",
    description: "you will learn the basics of ICP and how to use it.",
    duration: 20, // in minutes
    questionCount: 20,
    imageUrl: icpimg, // replace with actual image URL
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="w-1/3">
        <img
          className="object-cover h-full w-full"
          src={quizInfo.imageUrl}
          alt={quizInfo.title}
        />
      </figure>
      <div className="card-body w-2/3">
        <h2 className="card-title text-2xl font-bold">{quizInfo.title}</h2>
        <p className="text-gray-600 mb-4">{quizInfo.description}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>Duration: {quizInfo.duration} minutes</span>
          <span>Questions: {quizInfo.questionCount}</span>
        </div>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary">
            <Link to={`/quiz/${quizid}/start`}>Start Quiz</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;

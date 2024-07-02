import React from "react";

interface TestResult {
  totalDuration: number;
  facePresentPercentage: number;
  suspiciousActivityCount: number;
  lookingAwayCount: number;
  possiblePhotoDetections: number;
  overallRisk: string;
}

interface ResultComponentProps {
  result: TestResult;
}

const Result: React.FC<ResultComponentProps> = ({ result }) => {
  const formatDuration = (ms: number): string => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${Number(seconds) < 10 ? "0" : ""}${seconds}`;
  };

  const getRiskColor = (risk: string): string => {
    switch (risk.toLowerCase()) {
      case "low":
        return "text-green-500";
      case "medium":
        return "text-yellow-500";
      case "high":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Test Results</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <p className="text-lg font-semibold">Overall Risk:</p>
          <p
            className={`text-xl font-bold ${getRiskColor(result.overallRisk)}`}
          >
            {result.overallRisk}
          </p>
        </div>

        <div>
          <p className="font-semibold">Total Duration:</p>
          <p>{formatDuration(result.totalDuration)}</p>
        </div>

        <div>
          <p className="font-semibold">Face Present:</p>
          <p>{result.facePresentPercentage}%</p>
        </div>

        <div>
          <p className="font-semibold">Suspicious Activities:</p>
          <p>{result.suspiciousActivityCount}</p>
        </div>

        <div>
          <p className="font-semibold">Looking Away Count:</p>
          <p>{result.lookingAwayCount}</p>
        </div>

        <div className="col-span-2">
          <p className="font-semibold">Possible Photo Detections:</p>
          <p>{result.possiblePhotoDetections}</p>
        </div>
      </div>
    </div>
  );
};

export default Result;

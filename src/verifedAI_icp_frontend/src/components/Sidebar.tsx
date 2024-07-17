import React from "react";

const Sidebar = () => {
  const [active, setActive] = React.useState<number | null>(null);

  const onClick = (index: number) => () => {
    setActive(index);
  };
  const arr = [0, 1, 2, 3];

  return (
    <>
      <style>
        {`
          .button-transition {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .glow-effect {
            box-shadow: 0 0 8px 2px #fff;
          }
        `}
      </style>
      <div className="fixed right-3 top-1 h-screen flex flex-col justify-center items-center ">
        <div className="h-4/5 flex flex-col justify-evenly">
          {arr.map((index) => (
            <a key={index} href={`#intro${index}`} onClick={onClick(index)}>
              <div
                className={`border border-gray-400 rounded-full p-1 button-transition ${
                  active === index ? "scale-150 glow-effect" : ""
                }`}
              >
                <div className="h-2 w-2 rounded-full bg-secondary"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;

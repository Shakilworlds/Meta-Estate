import React from "react";

const Badge = (Badge) => {
  return <div className="font-Inter font-medium text-sm leading-[20px] uppercase bg-primary/10 py-3 px-6 inline-block  items-center justify-center rounded-full text-primary ">
    {Badge.children}
    </div>;
};

export default Badge;

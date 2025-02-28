import React from "react";

//want to be able to change the data basesd on injecting props
// accepting props to inject data dynamically

const ValuePropCard = ({ icon: Icon, title, text }) => {
  return (
    <div className="border rounded-lg w-72 h-64 p-6 flex flex-col items-start justify-between border-pink-700">
      {Icon && <Icon size={48} color="#ffffff" />}
      <h3 className="text-2xl text-white font-semibold">{title}</h3>
      <p className="text-lg mt-1 text-white">{text}</p>
    </div>
  );
};

export default ValuePropCard;

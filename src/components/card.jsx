import { Link } from "react-router-dom";

export const Card = ({ title, stat, bgColor }) => {
  return (
    <div
      style={{
        background: bgColor
      }}
      className=" text-white py-10 px-5 rounded-lg flex-[1]">
        {/* icon */}

        {/* Details */}
        <span className="text-[15px] capitalize">{title}</span>
        <p className="text-3xl font-bold">{stat}</p>
        <Link to="" className="text-[13px] underline">View details</Link>
    </div> 
  )
}

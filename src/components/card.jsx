import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <div className="bg-[#7542ff]">
        {/* icon */}

        {/* Details */}
        <span>Registered students</span>
        <p>300</p>
        <Link to="">View details</Link>
    </div>
  )
}

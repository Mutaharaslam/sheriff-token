import { Link } from "react-router-dom";


export const Nav = () => {
  return (
    <ul className="flex justify-center mb-32">
    <li className="mr-24">
      <Link to="/" className=" text-primary text-4xl ">
            Home
      </Link>
    </li>
    <li className="mr-24">
      <Link to="/buy-chart" className=" text-primary text-4xl hover:underline hover:text-opacity-90">
      Buy/Chart
      </Link>
    </li>

  </ul>
  );
};

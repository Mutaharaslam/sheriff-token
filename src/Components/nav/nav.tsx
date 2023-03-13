import { Link } from "react-router-dom";


export const Nav = () => {
  return (
    <ul className="flex md:justify-center justify-start mb-32">
      <li className="md:px-12 px-4 pl-8">
        <Link to="/" className="text-primary md:text-4xl sm:text-2xl text-xl hover:underline hover:text-opacity-90">
          Home
        </Link>
      </li>
      <li className="md:px-12 px-4">
        <Link to="/buy-chart" className=" text-primary md:text-4xl sm:text-2xl text-xl hover:underline hover:text-opacity-90">
          Buy/Chart
        </Link>
      </li>

    </ul>
  );
};

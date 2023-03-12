

import valut from "../../assets/imgs/valut-min.png";
import { BulletHeading } from "../../Components/bullet-heading/bullet-heading";
import { Nav } from "../../Components/nav/nav";
const Home: React.FC = () => {
  return (
    <div className="container px-28 mx-auto">
      <div className="h-full min-h-screen bg-homeBg mx-auto bg-no-repeat bg-cover d-flex justify-center py-16 main-bg">
        <Nav />
        <div className="text-center mb-40">
          <h1 className=" text-7xl text-primary uppercase">SHERIFF TOKEN</h1>
          
        </div>

      </div>
    </div>
  );
};

export default Home;

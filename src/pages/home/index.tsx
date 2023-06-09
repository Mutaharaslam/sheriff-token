
import { Nav } from "../../Components/nav/nav";
import coin from "../../assets/imgs/Sheriff-Coin 1-min.png";
import { Container } from "../../Components/container/container";
import { BulletHole } from "../../Components/bullet-holes/bullet-holes";
const Home: React.FC = () => {
  return (
    <Container>
      <Nav />
      <BulletHole numbers={6} />
      <div className="text-center md:mb-40 mb-20">
        <h1 className=" lg:text-7xl sm:text-5xl text-4xl text-primary uppercase">SHERIFF TOKEN</h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-12 md:gap-4 lg:px-32 md:px-16 px-4 mx-auto font-serif mb-36 justify-center lg:grid-rows-1 grid-rows-2">
        <div className="">
          <img src={coin} alt="" className="" />
        </div>
        <div className="flex flex-col md:items-start items-center  justify-center ">
          <h2 className="mb-4 text-5xl font-sans text-primary md:text-left text-center">tokenomics</h2>
          <p className="text-xl m-0 leading-10 md:text-left text-center">
            50 BNB Private Raise <br />
            ️75% to Liquidity <br />
            ️Low Market cap<br />
            ️0.5 bnb max private wallet
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Home;

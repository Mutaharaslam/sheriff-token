
import valut from "../../assets/imgs/valut-min.png";
import { BulletHeading } from "../../Components/bullet-heading/bullet-heading";
import { BulletHole } from "../../Components/bullet-holes/bullet-holes";
import { Container } from "../../Components/container/container";
import { Nav } from "../../Components/nav/nav";
export const BuyChart = () => {
  const Tokens = ['Token 1', 'Token 2', 'Token 3', 'Token 4', 'Token 5']
  return (
    <Container>
      <Nav />
      <BulletHole numbers={5}/>
      <div className="text-center md:mb-40 mb-24">
        <h1 className=" lg:text-7xl md:text-5xl text-4xl text-primary uppercase">SHERIFF TOKEN</h1>
        <h2 className=" lg:text-6xl md:text-4xl text-3xl text-primary uppercase">rewards dashboard</h2>
      </div>

      <div className="text-center mb-8">
        <h2 className="lg:text-5xl md:text-3xl text-2xl text-primary uppercase">bounty vault</h2>
      </div>
      <div className="flex justify-center mb-16">
        <img className="w-80 mx-auto" src={valut} alt="" />
      </div>

      <div className="text-center mb-40">
        <p className=" text-3xl text-primary uppercase">(TOTAL VALUE HERE)</p>
        <p className=" text-lg text-primary uppercase">(PER PERSON SHARE HERE)</p>
      </div>

      <div className="flex flex-col items-center  justify-center mb-16 lg:w-2/6 md:w-3/6 w-5/6 mx-auto">
        <label className="mb-4 text-lg font-serif" htmlFor="">Enter Wallet Address Here</label>
        <select className=" appearance-none px-2 py-2 font-seri text-black-600 h-10 font-serif relative bg-transparent border-black rounded-none text-sm border-x border-y focus:outline-1  focus:ring w-full">
        {Tokens.map((item, index) => {
          return <option key={index} value={index}>{item}</option> 
          })}
          
        </select>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 xl:px-72 lg:px-56 gap-4 md:px-36 sm:px-12 px-0 mx-auto font-serif mb-36 justify-items-center">
        <div className=" bg-contain bg-center text-primary bg-star hover:bg-starFilled hover:text-white bg-no-repeat sm:h-48 sm:w-48 h-36 w-36 flex items-center justify-center">
          <h1 className="text-4xl  m-0 leading-6 font-serif">01</h1>
        </div>
        <div className=" bg-contain bg-center text-primary bg-star hover:bg-starFilled hover:text-white bg-no-repeat sm:h-48 sm:w-48 h-36 w-36 flex items-center justify-center">
          <h1 className="text-4xl  m-0 leading-6 font-serif">02</h1>
        </div>
        <div className=" bg-contain bg-center text-primary bg-star hover:bg-starFilled hover:text-white bg-no-repeat sm:h-48 sm:w-48 h-36 w-36 flex items-center justify-center">
          <h1 className="text-4xl  m-0 leading-6 font-serif">03</h1>
        </div>
        <div className=" bg-contain bg-center text-primary bg-star hover:bg-starFilled hover:text-white bg-no-repeat sm:h-48 sm:w-48 h-36 w-36 flex items-center justify-center">
          <h1 className="text-4xl  m-0 leading-6 font-serif">04</h1>
        </div>
        <div className=" bg-contain bg-center text-primary bg-star hover:bg-starFilled hover:text-white bg-no-repeat sm:h-48 sm:w-48 h-36 w-36 flex items-center justify-center">
          <h1 className="text-4xl  m-0 leading-6 font-serif">05</h1>
        </div>
        <div className=" bg-contain bg-center text-primary bg-star hover:bg-starFilled hover:text-white bg-no-repeat sm:h-48 sm:w-48 h-36 w-36 flex items-center justify-center">
          <h1 className="text-4xl  m-0 leading-6 font-serif">06</h1>
        </div>
      </div>

      <div className="text-center mb-8">
        <BulletHeading>ADD TO WALLET</BulletHeading>
      </div>
    </Container>
  );
};


import valut from "../../assets/imgs/valut-min.png";
import { BulletHeading } from "../../Components/bullet-heading/bullet-heading";
import { Nav } from "../../Components/nav/nav";
export const BuyChart = () => {
  return (
    <div className="container px-28 mx-auto">
    <div className="h-full bg-homeBg mx-auto bg-no-repeat bg-cover d-flex justify-center py-16 main-bg">
      <Nav />
      <div className="text-center mb-40">
        <h1 className=" text-7xl text-primary uppercase">SHERIFF TOKEN</h1>
        <h2 className=" text-6xl text-primary uppercase">rewards dashboard</h2>
      </div>

      <div className="text-center mb-8">
        <h2 className=" text-5xl text-primary uppercase">bounty vault</h2>
      </div>
      <div className="flex justify-center mb-16">
        <img className="w-80 mx-auto" src={valut} alt="" />
      </div>

      <div className="text-center mb-40">
        <p className=" text-3xl text-primary uppercase">(TOTAL VALUE HERE)</p>
        <p className=" text-lg text-primary uppercase">(PER PERSON SHARE HERE)</p>
      </div>

      <div className="flex flex-col items-center  justify-center mb-16 w-2/6 mx-auto">
        <label className="mb-4 text-lg font-serif" htmlFor="">Enter Wallet Address Here</label>
        <input type="text" className="px-2 py-2 font-seri text-black-600 relative bg-transparent border-black  text-sm border-x border-y focus:outline-1  focus:ring w-full" />
      </div>

      <div className="grid md:grid-cols-3 grid-cols-2 gap-4 px-72 mx-auto font-serif mb-36">
        <div className=" bg-contain bg-center text-primary bg-star hover:bg-starFilled hover:text-white bg-no-repeat h-48 w-48 flex items-center justify-center">
          <h1 className="text-4xl  m-0 leading-6 font-serif">01</h1>
        </div>
        <div className=" bg-contain bg-center text-primary bg-star hover:bg-starFilled hover:text-white bg-no-repeat h-48 w-48 flex items-center justify-center">
          <h1 className="text-4xl  m-0 leading-6 font-serif">02</h1>
        </div>
        <div className=" bg-contain bg-center text-primary bg-star hover:bg-starFilled hover:text-white bg-no-repeat h-48 w-48 flex items-center justify-center">
          <h1 className="text-4xl  m-0 leading-6 font-serif">03</h1>
        </div>
        <div className=" bg-contain bg-center text-primary bg-star hover:bg-starFilled hover:text-white bg-no-repeat h-48 w-48 flex items-center justify-center">
          <h1 className="text-4xl  m-0 leading-6 font-serif">04</h1>
        </div>
        <div className=" bg-contain bg-center text-primary bg-star hover:bg-starFilled hover:text-white bg-no-repeat h-48 w-48 flex items-center justify-center">
          <h1 className="text-4xl  m-0 leading-6 font-serif">05</h1>
        </div>
        <div className=" bg-contain bg-center text-primary bg-star hover:bg-starFilled hover:text-white bg-no-repeat h-48 w-48 flex items-center justify-center">
          <h1 className="text-4xl  m-0 leading-6 font-serif">06</h1>
        </div>
      </div>

      <div className="text-center mb-8">
        <BulletHeading>ADD TO WALLET</BulletHeading>
      </div>

    </div>
  </div>
  );
};

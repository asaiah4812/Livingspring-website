import Image from 'next/image';
import { CreativeBtn } from '../button/hoverButton';

const HeroGo = () => {
  return (
    <div className="h-fit w-full container px-2 md:px-28 mx-auto my-10 ">
      <div className="w-full">
        <h2 className="text-center font-medium w-full text-lg md:text-2xl lg:mt-16 xl:text-4xl">
          &#10077; But on Mount Zion there shall be deliverance, And there shall{" "}
          <br /> be holiness; The house of Jacob shall possess their <br />{" "}
          possessions. &#10078;{" "}
          <span className="text-rose-600 md:text-xl">Obadiah 1:17 NKJV</span>
        </h2>
        <span className="fontStrip text-right py-2 float-right text-2xl md:text-5xl text-slate-300">
          Experience God Here
        </span>
      </div>
      <div className="flex justify-between flex-wrap md:flex-nowrap gap-8 md:gap-16 my-28">
        <div className="relative h-[500px] md:h-[700px] md:flex-1 w-full md:w-[80%] py-5 overflow-hidden rounded-4xl">
          <Image
            src={"/bg/rev.png"}
            alt="background"
            fill
            className="object-cover grayscale-100"
          />
        </div>
        <div className="md:flex-1 flex flex-col justify-center gap-y-5 md:gap-y-9">
          <h3 className="text-lg md:text-2xl uppercase">The Mandate</h3>
          <h1 className='font-medium text-2xl md:text-5xl'>To Establish the Kingdom of God Here on Earth.</h1>
          <p className=''>
            From 1997 to date, God has authored every chapter of our story,
            increasingly bringing the Gospel to the unsaved, transforming the
            lives of people, and raising disciples for Christ—globally.
          </p>
          <CreativeBtn/>
        </div>
      </div>
    </div>
  );
}

export default HeroGo

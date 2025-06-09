import Image from 'next/image'
import React from 'react'

const About = ({img, style}:{img:string; style:string;}) => {
  return (
    <div className={`container mx-auto py-24 px-3 ${style} md:px-1 flex flex-wrap md:flex-nowrap items-center justify-between gap-24`}>
      <div className="md:flex-1 rounded-4xl relative h-[700px] md:h-[800px] w-full md:w-[250px] overflow-hidden">
        <Image src={img} fill className='object-cover grayscale-75' alt="Rev Kenneth Eze" />
      </div>
      <div className="flex md:flex-1 flex-col justify-center gap-6">
        <h2 className="font-semibold md:font-bold text-3xl md:text-5xl">
          A <span className="text-orange-300">Global</span> Family <br /> of{" "}
          <span className="text-orange-300">Believers.</span>
        </h2>
        <em>To Establish the Kingdom of God here on Earth.</em>
        <p className="pb-5">
          This was the mandate given to Rev Kenneth Eze that manifested as the
          Commission, Salvation Ministries, on the 13th of April, 1997. From a
          little over 30 persons in attendance at the first gathering, the
          Commission has become an ever-growing global family of believers who
          are passionate about Christ and bringing the Gospel to the unsaved.
        </p>
        <p>
          A revolutionary point in our chronicles was the remarkable expansion
          from one focal point at Plot 17, Birabi Street, GRA Phase 1, Port
          Harcourt to an additional 14 satellite churches, all running five
          services. This groundbreaking record in church history, evidently
          sponsored by the Almighty God, was set on the 13th of February, 2011.
          Since then, more than 1,500 churches, both local and foreign, have
          been created to accommodate the teeming and rapidly increasing
          population.
        </p>
        <em>
          I will build my church; and the gates of hell shall not prevail
          against it.
        </em> 
        <span className='text-orange-300'>Matthew 16:18b</span>
      </div>
    </div>
  );
}

export default About
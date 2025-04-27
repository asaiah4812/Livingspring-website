import About from '@/components/card/AboutComponent'
import { AnimatedPastor } from '@/components/section/AnimatedPastor';
import CurveHero from '@/components/section/CurveHero'
import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <section>
        <CurveHero
          bgposition="top"
          title="About Us"
          page="About Us"
          bg="/pastors/revken.png"
        />
      </section>
      <section className="">
        <About img="/pastors/rev.jpg" style="flex-row" />
        <About img="/pastors/pastor2.jpg" style="flex-row-reverse" />
      </section>
      <section className='bg-gradient-to-br bg-amber-50 rounded-4xl to-amber-200 py-8'>
        <h2 className='text-center font-bold text-3xl md:text-5xl lg:text-6xl py-6'>Our Pastor</h2>
        <AnimatedPastor/>
      </section>
    </div>
  );
}

export default AboutUs
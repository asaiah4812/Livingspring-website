import React from 'react'

const CurveHero = ({title, page, bg, bgposition}: {title: string; page:string; bg:string; bgposition:string;}) => {
  return (
    <div
      className="rounded-b-4xl p-4 w-full"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${bg}')`,
        height: "70vh",
        backgroundPosition: `${bgposition}`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container flex justify-end h-full flex-col mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white py-3 md:py-5">
          {page}
        </h2>
        <div className="space-x-4 py-3 md:py-5 items-center flex">
          <span className="md:text-lg uppercase text-white">Home</span>
          <div className="h-5 w-1 bg-slate-300" />
          <span className="md:text-lg uppercase text-slate-300">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CurveHero
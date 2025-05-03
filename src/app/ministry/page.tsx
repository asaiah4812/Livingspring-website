import React from "react";
import CurveHero from "@/components/section/CurveHero";
import ThumnailSlider from "@/components/card/GalleryTab";

interface OfferProps {
  id: number;
  head: string;
  content: string;
}

const Offer: OfferProps[] = [
  {
    id: 1,
    head: "Weekly Fellowship Meetings",
    content:
      "Engaging sessions filled with worship, the Word, and community bonding.",
  },
  {
    id: 2,
    head: "Leadership Development",
    content: "Opportunities to grow and serve in various capacities.",
  },
  {
    id: 3,
    head: "Academic and Spiritual Support",
    content:
      "Resources and mentorship to excel both academically and spiritually.​",
  },
];

interface ActivityProps {
  id: number;
  title: string;
  time: string;
  street?: string | null;
  location?: string | null;
  state?: string | null;
}

const Activities: ActivityProps[] = [
  {
    id: 1,
    title: "Meeting Times",
    time: "Mondays – 05:00pm (On Campus)",
  },
  {
    id: 2,
    title: "Unique Fellowship",
    time: "Tuesdays, 06:00pm – 07:00pm",
  },
  {
    id: 1,
    title: "Ministry Office",
    time: "Mondays – 05:00pm (On Campus)",
    street: "",
    location: "",
    state: "",
  },
];

const Ministry = () => {
  return (
    <div>
      <section>
        <CurveHero
          bgposition="center"
          title="Youth Ministry"
          page="Youth Ministry"
          bg="/jos/lisca1.jpg"
        />
      </section>
      <section className="py-16 px-3 container mx-auto flex flex-wrap md:flex-nowrap gap-16 justify-center items-center">
        <div className="md:flex-1">
          <h2 className="text-3xl md:text-4xl pt-5 pb-10 lg:text-5xl font-bold">
            Welcome to the Campus Ministry!
          </h2>
          <p className="pb-3">
            At Living Spring, our Youth Ministry serves as a vibrant hub for
            students across universities and polytechnics. It&lsquo;s a place
            where young minds are nurtured, faith is deepened, and leadership
            qualities are honed.
          </p>
          <h2 className="font-semibold text-xl">What We Offer:</h2>
          <ul>
            {Offer.map((offer) => (
              <li
                key={offer.id}
                className="font-normal text-slate-700 list-disc py-2"
              >
                <span className="font-bold">{offer.head}: </span>{" "}
                {offer.content}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:flex-1">
          <div className="ring-1 lg:w-[55%] rounded-2xl p-8 ">
            {Activities.map((activity) => (
              <div key={activity.id} className="space-y-5 text-slate-600 py-6">
                <h2 className="font-bold text-2xl">{activity.title}</h2>
                <span className="text-sm ">{activity.time}</span>
                <span className="text-sm ">{activity?.street}</span>
                <span className="text-sm ">{activity?.location}</span>
                <span className="text-sm ">{activity?.state}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-8 container mx-auto">
        <ThumnailSlider />
      </section>
    </div>
  );
};

export default Ministry;

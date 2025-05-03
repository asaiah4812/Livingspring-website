import React from "react";
import CurveHero from "@/components/section/CurveHero";
import PaymentForm from "@/components/payment/PaymentForm";

const GivePage = () => {
  return (
    <div>
      <section>
        <CurveHero
          bgposition="center"
          title="Give"
          page="Give"
          bg="/card/lisca1.png"
        />
      </section>
      <section className="py-16 px-3 container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl pt-5 pb-6 lg:text-5xl font-bold text-center">
            Support Our Ministry
          </h2>
          <p className="text-center mb-10">
            Your generous contributions help us continue our mission of
            spreading God&apos;s word and supporting our community.
          </p>
          <PaymentForm />
        </div>
      </section>
    </div>
  );
};

export default GivePage;

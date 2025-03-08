import React from "react";
import ValuePropCard from "../ui/Cards/ValuePropCard";
import { Droplet, BatteryLow, Mars, Dumbbell } from "lucide-react";

const OurTreatments = () => {
  return (
    <div className="flex  flex-col items-center justify-center gap-8 px-10">
      {/* Text Section */}
      <div className="w-2/5 text-white">
        <h1 className="text-5xl text-white text-center font-semibold leading-tight">
          Our Treatments
        </h1>
        <p className="text-center text-xl font-thin text-white py-10">
          Our treatments are designed to hyper target individual Health needs.
          We’ll provide a FULL REFUND if you are NOT ELIGIBLE for treatment.
        </p>
        <button className="btn btn-primary w-full gradient-btn text-xl">
          Start Treatment
        </button>
      </div>

      {/* Card Section - Two evenly spaced columns */}
      <div className="flex flex-row gap-8">
        {/* First Column */}
        <div className="flex flex-col gap-6">
          <ValuePropCard
            icon={Mars}
            title="MEN’S HORMONE HEALTH"
            text=" $299 +GST Male Androgen Health (TRT) Consultation"
          />
        </div>

        {/* Second Column */}
        <div className="flex flex-col gap-6">
          <ValuePropCard
            icon={Droplet}
            title="MEN’S FERTILITY HEALTH"
            text="$180 +GST Male Fertility Consultation"
          />
        </div>
      </div>
    </div>
  );
};

export default OurTreatments;

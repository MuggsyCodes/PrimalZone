import React from "react";
import ValuePropCard from "../ui/Cards/ValuePropCard";
import { Moon, BatteryLow, Mars, Dumbbell } from "lucide-react";

const NotFeelingYourself = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-8 px-10">
      {/* Card Section - Two evenly spaced columns */}
      <div className="flex flex-row gap-8">
        {/* First Column */}
        <div className="flex flex-col gap-6">
          <ValuePropCard
            icon={Moon}
            title="Constantly Tired?"
            text="Are you sleeping more than ever?"
          />
          <ValuePropCard
            icon={BatteryLow}
            title="Low/No Energy?"
            text="Constantly running on empty?"
          />
        </div>

        {/* Second Column */}
        <div className="flex flex-col gap-6 py-10">
          <ValuePropCard
            icon={Mars}
            title="No Sex Drive?"
            text="No desire or urge to get on the job?"
          />
          <ValuePropCard
            icon={Dumbbell}
            title="No Muscle Mass?"
            text="Can’t put on muscle no matter what?"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-2/5 text-white">
        <h1 className="text-5xl text-white text-center font-semibold leading-tight">
          Not Feeling Yourself?
        </h1>
        <p className="text-center text-xl font-thin text-white py-10">
          Onset of symptoms like this can happen to Men of any age. Hormone
          Health is one of the biggest Men’s Health issues not spoken about. If
          you aren’t feeling yourself and are experiencing these type of
          symptoms, then your Hormone Health is worth evaluating.
        </p>
        <button className="btn btn-primary w-full gradient-btn text-xl">
          Start Treatment
        </button>
      </div>
    </div>
  );
};

export default NotFeelingYourself;

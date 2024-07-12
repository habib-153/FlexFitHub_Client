import { benefits } from "../../../../utils/benefits";
import BenefitsCard from "./BenefitsCard";

const Benefits = () => {
  return (
    <div className="my-12 ">
      <h1 className="text-3xl font-semibold">Why choose us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 my-5">
        {benefits.map((benefit, idx) => (
          <BenefitsCard key={idx} data={benefit} />
        ))}
      </div>
    </div>
  );
};

export default Benefits;

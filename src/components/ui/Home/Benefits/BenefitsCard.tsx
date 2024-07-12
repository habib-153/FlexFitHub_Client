type TBenefitsCardData = {
  image: string;
  title: string;
  description: string;
};

type BenefitsCardProps = {
  data: TBenefitsCardData;
};

const BenefitsCard = ({ data }: BenefitsCardProps) => {
  return (
    <div className="text-center bg-[#eeeeee89] border p-3 rounded-lg">
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
};

export default BenefitsCard;

import { Card, CardBody } from "@material-tailwind/react";
import { CategoryGenerator } from "../../../../utils/CategoryGenerator";
import CustomButton from "../../Buttons/CustomButton";

interface CategoryCardsProps {
  handleCategory: (category: string) => void;
}

const CategoryCards = ({ handleCategory }: CategoryCardsProps) => {
  return (
    <div className="space-y-4 my-8">
      <h2 className="text-3xl font-semibold">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {CategoryGenerator?.map((category, idx) => (
          <Card
            key={idx}
            className="cursor-pointer border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            onClick={() => handleCategory(category.name)}
          >
            <CardBody className="flex flex-col items-center">
              <img
                className="w-full h-48 object-contain mb-4"
                src={category.image}
                alt={category.name}
              />
              <CustomButton text={category.name} textColor="#FFFFF5" bgColor="#1a1c1cfd"/>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;

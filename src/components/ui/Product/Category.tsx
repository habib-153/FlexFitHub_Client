import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../redux/hooks";
import {
  removeCategories,
  setCategories,
} from "../../../redux/features/filterSlice";
import { CategoryGenerator } from "../../../utils/CategoryGenerator";
import { Checkbox } from "@material-tailwind/react";

const Category = () => {
  const dispatch = useDispatch();

  const { categories } = useAppSelector((state) => state.filter);

  const handleCategory = (category: string) => {
    if (categories.includes(category)) {
      dispatch(removeCategories(category));
    } else {
      dispatch(setCategories(category));
    }
  };
  return (
    <div className="">
      <label className="font-semibold">Filter Product:</label>
      <div className="flex flex-wrap  items-center">
        {CategoryGenerator?.map((category, idx) => (
        <div className="flex items-center gap-2" key={idx}>
          <Checkbox
              onChange={() => handleCategory(category.name)}
              checked={categories.includes(category.name)} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}          />
          <p>{category.name}</p>
        </div>
      ))}
      </div>
      
    </div>
  );
};

export default Category;

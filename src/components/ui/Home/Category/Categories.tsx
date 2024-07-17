import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCategories } from "../../../../redux/features/filterSlice";
import CategoryCards from "./CategoryCards";

const Categories = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleCategory = (category: string) =>{
        navigate(`/products`), dispatch(setCategories(category))
    }
    return (
        <div>
           <CategoryCards handleCategory={handleCategory}/> 
        </div>
    );
};

export default Categories;
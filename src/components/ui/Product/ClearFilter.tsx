import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { clearFilters } from "../../../redux/features/filterSlice";

const ClearFilter = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <Button size="sm" onClick={() => dispatch(clearFilters())} color="red">Clear</Button>   
        </div>
    );
};

export default ClearFilter;
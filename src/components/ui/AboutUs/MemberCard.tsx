import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const MemberCard = () => {
  return (
    <Card className="shadow">
      <CardHeader floated={false} className="h-72">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="profile-picture"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Natalie Smith
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          CEO / Co-Founder
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <a href="">
            <FaFacebook className="text-[#316ff6] text-xl" />
          </a>
        </Tooltip>
        <Tooltip content="Follow">
          <a href="">
            <FaTwitter className="text-blue-400 text-xl" />
          </a>
        </Tooltip>
        <Tooltip content="Follow">
          <a href="">
            <CiInstagram className="text-[#fbad50] text-xl" />
          </a>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

export default MemberCard;

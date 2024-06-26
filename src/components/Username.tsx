import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UsernameMenu = () => {
    const {user, logout} = useAuth0();
  return (
    <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2 bg-orange">
            <CircleUserRound className="text-orange-500"/>
            {"Hello " + user?.name}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
        <DropdownMenuItem>
        <Link to="/make-request" className="flex bg-white items-center font-bold hover:text-orange-500">Make An Order</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
            <Link to="/manage-shop" className="font-bold hover:text-orange-500">
                Manage Shop
            </Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
            <Link to="/user-profile" className="font-bold hover:text-orange-500">
                User Profile
            </Link>
            </DropdownMenuItem>
            <Separator/>
            <DropdownMenuItem>
            <Button className="flex flex-1 font-bold bg-white text-black-500 hover:bg-orange-450" onClick={() => logout()}>Sign Out</Button>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UsernameMenu
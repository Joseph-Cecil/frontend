import { Link } from "react-router-dom";

type Props = {
    total:number;
    areaName:string;
}

const SearchResultInfo = ({total, areaName}: Props) => {
  return (
    <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
        <span>
            {total} Shops Found in {areaName}
            <Link to="/" className="ml-1 text-sm font-semibold underline cursor-pointer text-blue-500">Change Location</Link>
        </span>
       
    </div>
    
  )
}



export default SearchResultInfo
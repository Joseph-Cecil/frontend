import { FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useFormContext } from "react-hook-form"
import { cuisineList } from "@/config/restuarant-options-config";
import CuisineCheckbox from "./CuisineCheckbox";

const CuisinesSection = () => {
    const {control} = useFormContext();
  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Categories</h2>
        <FormDescription>
            Select the Category of Items that Your Shop Sells
        </FormDescription>
      </div>
      <FormField control={control} name="cuisines" render={({field}) => (
        <FormItem>
            <div className="grid md:grid-cols-5 gap-1">
                {cuisineList.map((cuisineItem) => (<CuisineCheckbox cuisine={cuisineItem} field={field} />))}
            </div>
            <FormMessage/>
        </FormItem>
      )}/>
    </div>
  )
}

export default CuisinesSection

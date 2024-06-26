import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const DetailsSection = () => {
    const {control} = useFormContext();
    return (
        <div className="space-y-2">
            <div>
                <h2 className="text-2xl font-bold">Details</h2>
                <FormDescription>
                    Enter Details About Your Shop
                </FormDescription>
            </div>
            <FormField control={control} name="restaurantName" render={({field}) => (<FormItem>
                <FormLabel>Shop Name</FormLabel>
                <FormControl>
                    <Input {...field} className="bg-white"/>
                </FormControl>
                <FormMessage/>
            </FormItem>)}/>
            <div >
            <FormField control={control} name="areaName" render={({field}) => (<FormItem >
                <FormLabel>Area Name</FormLabel>
                <FormControl>
                    <Input {...field} className="bg-white"/>
                </FormControl>
                <FormMessage/>
            </FormItem>)}/>

            <FormField control={control} name="location" render={({field}) => (<FormItem>
                <FormLabel>Shop Location</FormLabel>
                <FormControl>
                    <Input {...field} className="bg-white"/>
                </FormControl>
                <FormMessage/>
            </FormItem>)}/>
            </div>

            <FormField control={control} name="estimateDeliveryTime" render={({field}) => (<FormItem>
                <FormLabel>Minutes Till Pick Up</FormLabel>
                <FormControl>
                    <Input {...field} className="bg-white"placeholder="30"/>
                </FormControl>
                <FormMessage/>
            </FormItem>)}/>
        </div>
    )
}

export default DetailsSection;
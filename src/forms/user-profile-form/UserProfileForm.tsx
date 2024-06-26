import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { User } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {z} from "zod";

const formSchema = z.object({
    email: z.string().optional(),
    name: z.string().min(1, "name is required"),
    phoneNumber: z.string().min(1, "phoneNumber is required"),
    areaName: z.string().min(1, "areaName is required"),
    streetName: z.string().min(1, "streetName is required"),
    houseNumber: z.string().min(1, "houseNumber is required"),
})

export type UserFormData = z.infer<typeof formSchema>;

type Props = {
    currentUser: User;
    onSave: (userProfileData: UserFormData) => void;
    isLoading: boolean;
    title?: string;
    buttonText?: string;
}

const UserProfileForm = ({onSave, isLoading, currentUser, title = "User Profile", buttonText = "Submit"}:Props) => {
    const form = useForm<UserFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: currentUser,
    });

    useEffect(() => {
        form.reset(currentUser);
    }, [currentUser, form]);   

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSave)} className="space-y-4 bg-gray-50 rounded-lg md:p-10">
            <div>
                <h2 className="text-2xl font-bold">{title}</h2>
                <FormDescription>
                    View and Edit your Profile Data Over Here
                </FormDescription>
            </div>
            <FormField control={form.control} name="email" render={({field}) => (
                 <FormItem>
                    <FormLabel>Email</FormLabel> 
                    <FormControl>
                        <Input {...field} disabled className="bg-white"/>
                    </FormControl>
                    <FormMessage/>
                 </FormItem>
            )} />

<FormField control={form.control} name="name" render={({field}) => (
                 <FormItem>
                    <FormLabel>Name</FormLabel> 
                    <FormControl>
                        <Input {...field}  className="bg-white"/>
                    </FormControl>
                    <FormMessage/>
                 </FormItem>
            )} />

<FormField control={form.control} name="phoneNumber" render={({field}) => (
                 <FormItem>
                    <FormLabel>Phone Number</FormLabel> 
                    <FormControl>
                        <Input {...field}   className="bg-white"/>
                    </FormControl>
                    <FormMessage/>
                 </FormItem>
            )} />

            <div className="flex flex-col md:flex-row gap-4">
            <FormField control={form.control} name="areaName" render={({field}) => (
                 <FormItem>
                    <FormLabel>Area Name</FormLabel> 
                    <FormControl>
                        <Input {...field} className="bg-white"/>
                    </FormControl>
                    <FormMessage/>
                 </FormItem>
            )} />

<FormField control={form.control} name="streetName" render={({field}) => (
                 <FormItem>
                    <FormLabel>StreetName</FormLabel> 
                    <FormControl>
                        <Input {...field} className="bg-white"/>
                    </FormControl>
                    <FormMessage/>
                 </FormItem>
            )} />

<FormField control={form.control} name="houseNumber" render={({field}) => (
                 <FormItem>
                    <FormLabel>House Number</FormLabel> 
                    <FormControl>
                        <Input {...field}   className="bg-white"/>
                    </FormControl>
                    <FormMessage/>
                 </FormItem>
            )} />
            </div>
                {isLoading ? (<LoadingButton/>) :( <Button type="submit" className="bg-orange-500">
                    {buttonText}
                </Button>)}


        </form>
    </Form>
  )
}

export default UserProfileForm
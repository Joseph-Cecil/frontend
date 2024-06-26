import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  order: z.string().min(1, "Order is required"),
  name: z.string().min(1, "Name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  location: z.string().optional(),
  deliveryLocation: z.string().min(1, "Delivery Location is required"),
  additionalInfo: z.string().optional(),
});

type UserFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (data: UserFormData) => void;
};

const StaticDeliveryForm = ({ onSave }: Props) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="space-y-4 bg-black-50 rounded-lg md:p-10 color"
      >
        <div>
          <h2 className="text-2xl font-bold">Make a Request</h2>
          <FormDescription>
            Make a special request here however you want it.
          </FormDescription>
        </div>

        <FormField
          control={form.control}
          name="order"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Order</FormLabel>
              <FormControl>
                <Textarea {...field} className="bg-white" style={{ color: "black" }} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Where should we buy it?</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" style={{ color: "black" }} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="deliveryLocation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Where Would You Receive it?</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" style={{ color: "black" }} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What is Your Name?</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" style={{ color: "black" }} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input {...field} type="number" className="bg-white" style={{ color: "black" }} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="additionalInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>More info? Type here.</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" style={{ color: "black" }} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="bg-orange-500">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default StaticDeliveryForm;

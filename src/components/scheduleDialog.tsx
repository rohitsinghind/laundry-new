"use client"
import React, { ReactNode, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { useToast } from "@/hooks/use-toast";
  
  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Please enter a valid Email address.",
    }),
    phone: z.string().min(2, {
        message: "Please enter a valid Email address.",
    }),
  });

  interface ContactBtnProps {
    children: ReactNode;
    className?: string;
  }

export default function ScheduleDialog({ children, className = "" }: ContactBtnProps) {

    const { toast } = useToast();

    const [open, setOpen] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
        },
      });
  
      async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        try {
          const response = await axios.post("/api/user", values);
          toast({
            title: "Thank You for Your Submission!",
            description: "Your form has been successfully submitted.",
          });
          form.reset();
          setOpen(false);
        } catch (error: any) {
          toast({
            title: "Submission failed",
            description: error?.response?.data?.message || error.message,
          });
        }
      }


  return (
    <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger asChild>
      <div className={className}>{children}</div>
    </DialogTrigger>
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Get A Callback</DialogTitle>
        <DialogDescription>
        The easy and smart way to take care of your laundry and dry cleaning.
        </DialogDescription>
      </DialogHeader>
      <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-lg mx-auto">
          <div className="space-y-4 my-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem className="flex items-center">
                    <FormLabel className="min-w-24">Name</FormLabel>
                    <FormControl>
                    <Input
                        placeholder="Please enter your Name"
                        {...field}
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
            />
             <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="flex items-center">
                    <FormLabel className="min-w-24">Phone No.</FormLabel>
                    <FormControl>
                    <Input
                        placeholder="Please enter your Phone No."
                        {...field}
                        type="number"
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
            />  
            
          </div>
        
      <DialogFooter className="sm:justify-start">
        <Button disabled={form.formState.isSubmitting} type='submit' size="lg" className={`w-fit mx-auto bg-cyan-400 hover:bg-transparent hover:text-cyan-400 w-fit mx-auto border rounded border-cyan-400 py-2.5 px-6 font-semibold md:text-base text-sm flex justify-center items-center gap-2 text-white delay-50 duration-300`}>{form.formState.isSubmitting ? "Submitting..." : "Submit"}</Button>   
      </DialogFooter>
      </form>
          </Form>
      </div>
    </DialogContent>
  </Dialog>
  )
}

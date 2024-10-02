"use client"
import axios from "axios";
import Section from "./section";
import Image from "next/image";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
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

export default function Footer() {

    const { toast } = useToast();

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
        } catch (error: any) {
          toast({
            title: "Submission failed",
            description: error?.response?.data?.message || error.message,
          });
        }
      }


  return (
    <footer>
       <Section className="w-full bg-gray-700 text-gray-200" head="Request a Callback" subHead="The easiest way to manage your laundry and dry cleaning needs—right from your home!">
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
                        placeholder="Enter your full name"
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
                        placeholder="Enter your contact number"
                        {...field}
                        type="number"
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
            />  
            <Button disabled={form.formState.isSubmitting} type="submit" size="lg" className={`w-fit mx-auto bg-cyan-400 hover:bg-transparent hover:text-cyan-400 w-fit mx-auto border rounded border-cyan-400 py-2.5 px-6 font-semibold md:text-base text-sm flex justify-center items-center gap-2 text-white delay-50 duration-300`}>{form.formState.isSubmitting ? "Submitting..." : "Submit"}</Button>   
          </div>
          </form>
          </Form>
        </Section> 
        <div className="w-full bg-gray-900 text-gray-400 text-sm px-2 py-8 flex flex-col justify-center items-center">
            <Link href='/' className="">
            <Image src="/assets/logos/logo.png" alt="logo" width={400} height={200} className="max-w-36"/>
            </Link>
            <p className="">Copyright © 2024. Designed & Developed with ❤️</p>
            <div className="flex mt-4 justify-center items-center w-full gap-2">
                <a href="/" target="_blank" rel="noopener noreferrer" className="border border-gray-400 p-1.5 rounded-full hover:border-white hover:scale-105 duration-300 delay-50">
                    <Image
                        src={"/assets/icons/linkedin.png"}
                        alt="instagram icon"
                        width={25}
                        height={25}
                    />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer" className="border border-gray-400 p-1.5 rounded-full hover:border-white hover:scale-105 duration-300 delay-50">
                    <Image
                        src={"/assets/icons/twitter.png"}
                        alt="twitter icon"
                        width={25}
                        height={25}
                    />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer" className="border border-gray-400 hover:border-white p-1.5 rounded-full hover:scale-105 duration-300 delay-50">
                    <Image
                        src={"/assets/icons/email.png"}
                        alt="email icon"
                        width={25}
                        height={25}
                    />
                </a>
            </div>
        </div>
    </footer>
  )
}
import React from 'react'
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface PricingCardProps {
    title: string;
    tabs:[{
        title:string;
        services:[{
            title:string;
            price:string;
        }] 
    }]
    icon:string;
  }

export default function PricingCard({pricing}:any) {
  return (
    <div className='w-full shadow-lg p-4 border mb-2'>
        <h1 className='font-semibold mb-2'>{pricing?.title}</h1>
        <div className='flex justify-between items-center gap-4'>
        <Tabs defaultValue={pricing?.tabs?.[0]?.title}>
  <TabsList className="bg-cyan-400 text-white mb-2 flex-wrap">
    {
        pricing?.tabs?.map((item:any)=>(
            <TabsTrigger key={item?.title} className='font-bold' value={item?.title}>{item?.title}</TabsTrigger>
        ))
    }
  </TabsList>
  {
     pricing?.tabs?.map((item:any)=>(
        <TabsContent key={item?.title} value={item?.title}>
             <div className="flex flex-wrap gap-4">
                {
                    item?.services?.map((e:any)=>(
                        <div key={e?.title} className='text-sm text-gray-600'>
                            <div className=' font-medium'>{e?.title}</div>
                            <div className='font-bold'>{e?.price}</div>
                        </div>
                    ))
                }
                </div>
        </TabsContent>
    ))
  }
</Tabs>
<Image src={pricing?.icon} alt="logo" width={400} height={200} className="max-w-20"/>
</div>
    </div>
  )
}
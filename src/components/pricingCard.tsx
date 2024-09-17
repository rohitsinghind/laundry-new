import React from 'react'
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
    icon:any
  }

export default function PricingCard({pricing}:any) {
  return (
    <div className='w-full shadow-lg p-4 border mb-2'>
        <h1 className='font-semibold mb-2'>{pricing?.title}</h1>
        <Tabs defaultValue={pricing?.tabs?.[0]?.title}>
  <TabsList className="bg-cyan-400 text-white mb-2">
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

    </div>
  )
}
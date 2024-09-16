"use client";
import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { columns } from "./columns"
import { DataTable } from './data-table';
import { Button } from '@/components/ui/button';
import { LogOut  } from 'lucide-react';
import { signOut } from "next-auth/react";

export default function Page() {

    const [forms, setForms] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const handleLogout = () => {
        signOut({
          callbackUrl: "/admin/login"
        });
      };

    const fetchData = async () => {
        try {
            setisLoading(true)
            const response = await axios.get('/api/user')
            setForms(response?.data?.users)
        } catch (error) {
            console.log(error)
        } finally{
            setisLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if(isLoading){
        return(
            <main className='max-w-7xl mx-auto w-full'>
                <div  className='h-screen flex items-center justify-center text-3xl font-medium animate-pulse'>Loading ...</div>
            </main>
        )
    }

  return (
    <main className='max-w-7xl mx-auto w-full'>
        <h1 className='text-center font-semibold text-3xl mt-8'>Admin Panel</h1>
        <div className='flex justify-end py-4 gap-4 items-center'>
        <Button size="sm" variant="secondary" onClick={handleLogout}>
        <LogOut  className="mr-2 h-4 w-4" /> Logout
        </Button>
        </div>
        <div className='rounded-lg bg-white h-full w-full p-4'>
            <DataTable columns={columns} data={forms} />
        </div>
    </main>
  )
}
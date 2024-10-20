"use client"
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function AuthForm() {
  const [activeTab, setActiveTab] = useState("signin")

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-200 to-green-600 bg-no-repeat bg-cover p-4">
      <div className="w-full max-w-md bg-white bg-opacity-90 rounded-lg shadow-xl overflow-hidden">
        <div className="p-6 space-y-6">
          <div className="flex justify-center">
            <svg className="w-16 h-16 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 15l3 3 3-3" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-center text-green-800">Crop and Aid Management</h2>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-green-100">
              <TabsTrigger value="signin" className="data-[state=active]:bg-white">Sign In</TabsTrigger>
              <TabsTrigger value="signup" className="data-[state=active]:bg-white">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin" className="mt-6">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-green-800">Email</Label>
                  <Input id="email" type="email" placeholder="farmer@example.com" className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-green-800">Password</Label>
                  <Input id="password" type="password" className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                  Sign In
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="signup" className="mt-6">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-green-800">Full Name</Label>
                  <Input id="name" type="text" placeholder="John Doe" className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-green-800">Email</Label>
                  <Input id="email" type="email" placeholder="farmer@example.com" className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-green-800">Password</Label>
                  <Input id="password" type="password" className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-green-800">Confirm Password</Label>
                  <Input id="confirm-password" type="password" className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                  Sign Up
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
        <div className="px-6 py-4 bg-green-100 flex justify-between items-center">
          <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span className="text-sm text-green-700">Growing together, harvesting success</span>
          <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
        </div>
      </div>
    </div>
  )
}
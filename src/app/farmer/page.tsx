"use client"
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Cloud, Droplets, Sun, Wind, Wheat, Sprout, DollarSign, AlertTriangle, Tractor, RotateCcw } from 'lucide-react'

const cropHealthData = [
  { name: 'Wheat', health: 85 },
  { name: 'Corn', health: 72 },
  { name: 'Soybeans', health: 90 },
  { name: 'Rice', health: 78 },
]

export default function FarmerDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="min-h-screen bg-green-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-green-800 text-white min-h-screen p-4">
          <h2 className="text-2xl font-bold mb-6">Farm Manager</h2>
          <nav>
            <ul className="space-y-2">
              <li><a href="#" className="block py-2 px-4 rounded hover:bg-green-700">Dashboard</a></li>
              <li><a href="#" className="block py-2 px-4 rounded hover:bg-green-700">Crop Management</a></li>
              <li><a href="#" className="block py-2 px-4 rounded hover:bg-green-700">Weather</a></li>
              <li><a href="#" className="block py-2 px-4 rounded hover:bg-green-700">Market Prices</a></li>
              <li><a href="#" className="block py-2 px-4 rounded hover:bg-green-700">Government Aid</a></li>
              <li><a href="#" className="block py-2 px-4 rounded hover:bg-green-700">Settings</a></li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="dashboard" className="text-lg">Dashboard</TabsTrigger>
              <TabsTrigger value="registration" className="text-lg">Registration</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard">
              <h1 className="text-3xl font-bold text-green-800 mb-8">Farmer Dashboard</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Crop Health Status */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Sprout className="mr-2" />
                      Crop Health Status
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={200}>
                      <BarChart data={cropHealthData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="health" fill="#4CAF50" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Weather Forecast */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Cloud className="mr-2" />
                      Weather Forecast
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="text-center">
                        <Sun className="mx-auto mb-2" />
                        <p>Mon</p>
                        <p className="font-bold">28°C</p>
                      </div>
                      <div className="text-center">
                        <Cloud className="mx-auto mb-2" />
                        <p>Tue</p>
                        <p className="font-bold">24°C</p>
                      </div>
                      <div className="text-center">
                        <Droplets className="mx-auto mb-2" />
                        <p>Wed</p>
                        <p className="font-bold">22°C</p>
                      </div>
                      <div className="text-center">
                        <Wind className="mx-auto mb-2" />
                        <p>Thu</p>
                        <p className="font-bold">25°C</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Market Prices */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <DollarSign className="mr-2" />
                      Market Prices
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Wheat</span>
                        <span className="font-bold">$6.75/bushel</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Corn</span>
                        <span className="font-bold">$3.80/bushel</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Soybeans</span>
                        <span className="font-bold">$13.20/bushel</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Government Aid */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Wheat className="mr-2" />
                      Available Government Aid
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>Drought Relief Program</li>
                      <li>Crop Insurance Subsidy</li>
                      <li>Farm Equipment Grant</li>
                    </ul>
                    <Button className="mt-4 w-full">Apply for Aid</Button>
                  </CardContent>
                </Card>

                {/* Crop Rotation */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <RotateCcw className="mr-2" />
                      Crop Rotation Schedule
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>Field A: Wheat → Soybeans → Corn</li>
                      <li>Field B: Corn → Cover Crop → Wheat</li>
                      <li>Field C: Soybeans → Wheat → Corn</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Pest Control Alerts */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertTriangle className="mr-2" />
                      Pest Control Alerts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center text-yellow-600">
                        <AlertTriangle className="mr-2" size={16} />
                        Aphid infestation risk in wheat fields
                      </li>
                      <li className="flex items-center text-green-600">
                        <AlertTriangle className="mr-2" size={16} />
                        No current alerts for corn fields
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Irrigation Planning */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Droplets className="mr-2" />
                    Irrigation Planning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="field-a-irrigation">Field A Irrigation Level</Label>
                      <Slider
                        id="field-a-irrigation"
                        max={100}
                        defaultValue={[65]}
                        step={1}
                      />
                    </div>
                    <div>
                      <Label htmlFor="field-b-irrigation">Field B Irrigation Level</Label>
                      <Slider
                        id="field-b-irrigation"
                        max={100}
                        defaultValue={[40]}
                        step={1}
                      />
                    </div>
                    <div>
                      <Label htmlFor="field-c-irrigation">Field C Irrigation Level</Label>
                      <Slider
                        id="field-c-irrigation"
                        max={100}
                        defaultValue={[80]}
                        step={1}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="registration">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-green-800">Farmer Registration</CardTitle>
                  <CardDescription>Please fill out the form below to register your farm</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-green-700">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" placeholder="John Doe" />
                        </div>
                        <div>
                          <Label htmlFor="age">Age</Label>
                          <Input id="age" type="number" placeholder="35" />
                        </div>
                        <div>
                          <Label htmlFor="dob">Date of Birth</Label>
                          <Input id="dob" type="date" />
                        </div>
                        <div>
                          <Label htmlFor="contact">Contact Number</Label>
                          <Input id="contact" type="tel" placeholder="+1 (555) 123-4567" />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="johndoe@example.com" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-green-700">Farm Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <Label htmlFor="farm-location">Farm Location</Label>
                          <Input id="farm-location" placeholder="123 Farm Road, Rural County" />
                        </div>
                        <div>
                          <Label htmlFor="land-size">Land Size (acres)</Label>
                          <Input id="land-size" type="number" placeholder="100" />
                        </div>
                        <div>
                          <Label htmlFor="wet-crops">Wet Crops</Label>
                          <Input id="wet-crops" placeholder="Rice, Taro" />
                        </div>
                        <div>
                          <Label htmlFor="dry-crops">Dry Crops</Label>
                          <Input id="dry-crops" placeholder="Wheat, Corn, Soybeans" />
                        </div>
                        <div>
                          <Label htmlFor="registration-date">Registration Date</Label>
                          <Input id="registration-date" type="date" />
                        </div>
                        <div>
                          <Label htmlFor="status">Status</Label>
                          <Select>
                            <SelectTrigger id="status">
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="active">Active</SelectItem>
                              <SelectItem value="inactive">Inactive</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-green-700">Financial Information</h3>
                      <div>
                        <Label htmlFor="income">Annual Income ($)</Label>
                        <Input id="income" type="number" placeholder="50000" />
                      </div>
                    </div>

                    <Button type="submit" className="w-full">Register Farm</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
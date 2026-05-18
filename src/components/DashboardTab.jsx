'use client'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BookingCard from './cards/BookingCard';

const DashboardTab = ({ bookings }) => {

    return (
        <div>
            <div className=" container mx-auto min-h-screen  p-6">


                <div className="max-w-5xl mx-auto mb-6">
                    <h1 className="text-3xl font-bold text-slate-800">
                        Dashboard
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Manage your bookings and profile easily
                    </p>
                </div>

                {/* Tabs Wrapper */}
                <div className="max-w-5xl mx-auto  rounded-2xl p-4">

                    <Tabs>

                        {/* Tab List */}
                        <TabList className="flex gap-3  pb-3">

                            <Tab
                                className="cursor-pointer px-4 py-2 rounded-xl text-sm font-medium text-slate-600 
    hover:bg-blue-50 hover:text-blue-500 transition outline-none"
                                selectedClassName="bg-blue-600 text-white shadow-md"
                            >
                                My Bookings
                            </Tab>

                            <Tab
                                className="cursor-pointer px-4 py-2 rounded-xl text-sm font-medium text-slate-600 
    hover:bg-blue-50 hover:text-blue-600 transition outline-none"
                                selectedClassName="bg-blue-600 text-white shadow-md"
                            >
                                My Profile
                            </Tab>

                        </TabList>

                        {/* Tab Content */}
                        <div className="mt-8 ">

                            <TabPanel>
                                <div className=' space-y-3 w-52'>
                                    {
                                        bookings.map(booking => <BookingCard key={booking._id} booking={booking} />)
                                    }
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="p-4 bg-green-50 rounded-xl">
                                    <h2 className="text-lg font-semibold text-slate-800">
                                        My Profile
                                    </h2>
                                    <p className="text-sm text-slate-600 mt-1">
                                        Update your personal information here.
                                    </p>
                                </div>
                            </TabPanel>

                        </div>

                    </Tabs>
                </div>

            </div>
        </div>
    );
};

export default DashboardTab;
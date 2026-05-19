'use client'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BookingCard from './cards/BookingCard';
import Link from 'next/link';
import ProfileCard from './cards/ProfileCard';

const DashboardTab = ({ bookings, user }) => {

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
                <div className=" mx-auto  rounded-2xl p-4">

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
                                {bookings.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center py-16 text-center bg-white rounded-xl shadow-sm">

                                        {/* Icon */}
                                        <div className="text-5xl mb-3">📭</div>

                                        {/* Text */}
                                        <h2 className="text-lg font-semibold text-slate-800">
                                            No Bookings Found
                                        </h2>

                                        <p className="text-sm text-slate-500 mt-1">
                                            You don’t have any bookings yet. Start by booking your first appointment.
                                        </p>

                                        {/* Button (optional) */}
                                        <Link href={'/doctors'}>
                                            <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                                Book Now
                                            </button>
                                        </Link>
                                    </div>
                                ) : (
                                    <div className=' space-y-3 w-52'>
                                        {
                                            bookings.map(booking => <BookingCard user={user} key={booking._id} booking={booking} />)
                                        }
                                    </div>
                                )}

                            </TabPanel>

                            <TabPanel>
                                {user ? (
                                    <ProfileCard user={user}/>

                                ) : (
                                    <div className="flex flex-col items-center justify-center py-16 text-center bg-white rounded-xl shadow-sm">

                                        {/* Icon */}
                                        <div className="text-5xl mb-3">📭</div>

                                        {/* Text */}
                                        <h2 className="text-lg font-semibold text-slate-800">
                                            No Bookings Found
                                        </h2>

                                        <p className="text-sm text-slate-500 mt-1">
                                            You don’t have any bookings yet. Start by booking your first appointment.
                                        </p>

                                        {/* Button (optional) */}
                                        <Link href={'/doctors'}>
                                            <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                                Book Now
                                            </button>
                                        </Link>
                                    </div>
                                )}
                            </TabPanel>

                        </div>

                    </Tabs>
                </div>

            </div>
        </div>
    );
};

export default DashboardTab;
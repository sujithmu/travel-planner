"use client"

import React from 'react'
import { useSelector } from "react-redux"
import AiPlanner from './AiPlanner';
import AiDestination from './AiDestination';
import LandingPageForm from '../home/subhome/landingPageForm';

function TripPlanner() {
    const { destination, dateTo, clicked, dateFrom } = useSelector((state: any) => state.formData)
    const formData = !destination || !dateTo || !dateFrom || !clicked;
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className='w-11/12 flex flex-col my-5'>
                {
                    formData ?
                        <div>
                            <h1 className='text-3xl md:text-5xl font-bold text-center mt-9 '>Plan your next trip</h1>
                            <div className="relative mt-24">
                                <LandingPageForm />
                            </div>
                        </div>
                        :
                        <>
                            <div>
                                <h1 className='text-3xl md:text-5xl font-bold text-center mt-9 '>Plan your next trip</h1>
                                <div className="relative mt-24">
                                    <LandingPageForm />
                                </div>
                            </div>
                            <AiDestination />
                            <AiPlanner />
                        </>
                }
            </div>
        </div>
    )
}

export default TripPlanner
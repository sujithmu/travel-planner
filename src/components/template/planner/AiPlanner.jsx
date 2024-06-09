'use client'; 
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TourPlanning } from '@/redux/feature/AiApi.Slice';
import Spinner from '@/components/spinner/Spinner';
import { Days } from '@/redux/feature/Api.Slice';
import { differenceInDays } from 'date-fns';

function AiPlanner() {
  const { destination, days, clicked, dateTo, dateFrom } = useSelector((state) => state.formData);
  const { isError, isLoading, tourPlan } = useSelector((state) => state.aiPlanning);
  const dispatch = useDispatch();

  useEffect(() => {
    if (destination && days && clicked) {
      dispatch(TourPlanning({ destination, days }));
    }
  }, [destination, days, clicked]);

  useEffect(() => {
    if (dateTo && dateFrom) {
      const daysDifference = differenceInDays(new Date(dateTo), new Date(dateFrom));
      dispatch(Days(daysDifference));
    }
  }, [dateTo, dateFrom, dispatch]);

  return (
    <div className='w-full mt-6 flex items-center justify-center'>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <div className='w-full min-h-[30vh] flex items-center justify-center'>
          <p className="text-red-400">
            Country not found.
          </p>
        </div>
      ) : (
        <><div className="w-full" style={{ paddingBottom: "700px" }}>
          <div className='flex flex-wrap gap-4'>
            <h1 className="text-3xl md:text-5xl font-bold text-center my-8 text-black">Tour Plan {destination}</h1>
          </div>
          <div className="mb-6">
            <p className='text-lg text-black'>Iconic Places: {tourPlan.vacation}</p>
          </div>
          <div className="mb-6">
            <p className='text-lg text-black'>Currency: {tourPlan.currency}</p>
          </div>
          <div className="mb-6">
            <p className='text-lg text-black'>Capital: {tourPlan.capital}</p>
          </div>
        </div><div className="w-full">
            <div className='flex flex-wrap gap-4'>
              <h1 className="text-3xl md:text-5xl font-bold text-center my-8 text-black">Flights to {destination}</h1>
            </div>
            {tourPlan && tourPlan.flight && tourPlan.flight.map((values, index) => (
              <div key={index} className="mb-6">
                <p className='text-lg text-black'>City: {values.regionNames.displayName}</p>
                <p className='text-lg text-black'>Airport Code: {values.hierarchyInfo.airport.airportCode}</p>
              </div>
            ))}
          </div></>
      )}
    </div>
  );
}

export default AiPlanner;

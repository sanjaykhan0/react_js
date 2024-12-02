import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apifetch } from '../Features0/Features';

export default function Mainpage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(apifetch());
    }, [dispatch]);

    const data1 = useSelector((state) => state.apikey.data);

    return (
        <div className="h-full w-full border border-black p-4">
            <div className="card grid gap-4">
                {data1 && data1.length > 0 ? (
                    data1.map((e, i) => (
                        <ul key={i}> 
                        <li>{e.id}</li>
                            <li> <img src={e.image} alt="" /></li>
                        </ul>
                    ))
                ) : (
                    <p className="text-gray-500">No data available</p>
                )}
            </div>
        </div>
    );
}

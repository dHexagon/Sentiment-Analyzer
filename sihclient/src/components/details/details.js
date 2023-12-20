import Rating from '@mui/material/Rating';
import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect, useState } from 'react';
import axios from "axios"

const Details = ({id}) => {
    console.log(id)
    const [temp, setTemp] = useState([1,2,3])
    const [temp2, setTemp2] = useState([1,2,3])
    const [data,setData] = useState({
        employee_name: "",
        rating:0,
        emp_rating:0,
        duration:0,
        graph_coords:[1,2,3],
    })
    useEffect(()=>{
        axios
        .get(`/employee/call_details/${id}`, { withCredentials: true })
        .then((res) => {
            console.log(res.data)
            setData(res.data)
        })
        .catch((err) => {
          console.log("Error fetching call details", err.message, err);
        });
    },[])

    useEffect(() => {
        let i=0
        const tempArray = data.graph_coords.map((element) => {
            i=i+10
            return i
        });
        setTemp(tempArray);
        setTemp2(data.graph_coords)
      }, [data.graph_coords]);

    return (
        <div className="h-full p-16 w-full">
            <div className="h-20 mb-5 rounded-xl shadow-[4px_4px_8px_0px_rgba(0,0,0,0.50)] flex items-center bg-[rgba(256,256,256,0.55)]">
                <div className="flex items-center justify-around w-[30%] ml-2 font-josefinSans">
                    <img src="/assets/main/defaultuser.svg" className="h-12" alt="" />
                    <div className="flex ml-2">
                        <div className="text-2xl font-semibold">{data.employee_name}</div>
                        <div className="border-l-2 mx-2 border-black"></div>
                        <div className="text-2xl">{data.duration}</div>
                    </div>
                </div>
                <div className="flex items-center ml-auto mr-7">
                    <Rating name="half-rating-read" precision={0.1} value={parseInt(data.rating)} size="large" readOnly />
                </div>
            </div>

            <div className='flex w-full h-full'>
                <div className='flex flex-col justify-around w-[40%] mt-20 h-[40%]'>
                    <div className="flex flex-col">
                        <p className=' font-josefinSans text-2xl font-semibold mb-3'>Overall Rating</p>
                        <Rating name="half-rating-read" precision={0.1} value={data.emp_rating} size="large" readOnly />
                    </div>
                    <div className="border-b-2 mx-2 border-mainPink"></div>
                    <div className=' font-josefinSans text-2xl font-semibold mb-3'>
                        Potential Issues
                    </div>
                </div>

                <div className='w-full h-[95%] flex flex-col items-center justify-center '>
                    <div className='bg-[rgba(256,256,256,0.7)] rounded-xl'>
                        <div className=''>
                            <LineChart
                                sx={{
                                    '& .MuiAreaElement-series-ok': {
                                        fill: "url('#myGradient')",
                                    },
                                    '& .MuiLineElement-series-ok': {
                                        stroke: '#FE81A2',
                                    },
                                }}
                                xAxis={[{ data: temp, label: 'Emotion Variations' }]}
                                series={[
                                    {
                                        id: 'ok',
                                        data: temp2,
                                        area: true,
                                    },
                                ]}
                                width={500}
                                height={300}
                            >
                                <defs>
                                    <linearGradient id="myGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="20%" style={{ stopColor: '#FE81A2', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: 'rgba(256,256,256,0)', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                            </LineChart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
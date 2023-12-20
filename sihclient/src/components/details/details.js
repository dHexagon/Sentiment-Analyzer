import Rating from '@mui/material/Rating';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { useEffect, useState } from 'react';
import { axisClasses } from '@mui/x-charts';
import Modal from "@mui/material/Modal";
import axios from "axios"

const Details = ({ id }) => {
    console.log(id)
    const [open1, setOpen1] = useState(false);
    const handleOpen1 = () => {
        setOpen1(true)
        console.log("heeeyyy")
    };
    const handleClose1 = () => setOpen1(false);

    const [open, setOpen] = useState(false)
    const [color, setColor] = useState("#000")
    const [temp, setTemp] = useState([1, 2, 3])
    const [temp2, setTemp2] = useState([1, 2, 3])
    const [data, setData] = useState({
        employee_name: "",
        rating: 0,
        emp_rating: 0,
        duration: -1,
        graph_coords: [1, 2, 3],
        issues: [""],
        emotions: [{ "label": "happy", "score": 0.9 }, { "label": "sad", "score": 0.2 }]
    })

    const chartSetting = {
        yAxis: [
            {
                label: 'Emotion level',
            },
        ],
        width: 600,
        height: 400,
        // series: [
        //     {
        //         color: '#FE81A2', // Replace with the color you want
        //     },
        // ],
    };

    useEffect(() => {
        axios
            .get(`/employee/call_details/${id}`, { withCredentials: true })
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
            .catch((err) => {
                console.log("Error fetching call details", err.message, err);
            });
    }, [])

    useEffect(() => {
        let i = 0
        const tempArray = []
        data.graph_coords.forEach(element => {
            i = i + 10
            tempArray.push(i)
        });
        setTemp(tempArray);
        setTemp2(data.graph_coords)
    }, [data.graph_coords]);

    useEffect(() => {
        if (data.pos_percentage > 55) {
            setColor("green")
        } else if (data.pos_percentage > 45) {
            setColor("yellow")
        } else {
            setColor("red")
        }
        console.log(color)
    }, [data.pos_percentage]);

    const valueFormatter = (value) => value;

    return (
        <div className="h-full p-16 w-full">
            <div className='w-full h-auto flex'>
                <div className={` ml-4 w-[50%] ${color == "green" ? "bg-[#a8f591]/[0.60]" : (color == "red" ? "bg-[#fc2424]" : "bg-[rgba(256,256,256,0.55)]")} h-20 mb-5 rounded-xl shadow-[4px_4px_8px_0px_rgba(0,0,0,0.50)] flex items-center `}>
                    <div className="flex items-center justify-around w-[30%] ml-5 font-josefinSans">
                        <img src="/assets/main/defaultuser.svg" className="h-12" alt="" />
                        <div className="flex ml-2">
                            <div className="text-2xl font-semibold">{data.employee_name}</div>
                            <div className="border-l-2 mx-2 border-black"></div>
                            <div className="text-2xl">{data.duration}sec</div>
                        </div>
                    </div>
                    <div className="flex items-center ml-auto mr-7">
                        <Rating name="half-rating-read" precision={0.1} value={parseInt(data.rating)} size="large" readOnly />
                    </div>
                </div>
                <div onClick={()=>{
                    handleOpen1()
                }} className=' font-lato text-2xl font-semibold w-[25%] h-20 cursor-pointer mb-5 rounded-xl shadow-[4px_4px_8px_0px_rgba(0,0,0,0.50)] flex items-center justify-center ml-5 bg-mainPink'>
                    Show Transcript 
                </div>
                <div className=' font-lato text-2xl font-semibold w-[25%] h-20 mb-5 rounded-xl shadow-[4px_4px_8px_0px_rgba(0,0,0,0.50)] flex items-center justify-center ml-5 bg-mainPink'>
                    Issue: {data.issues[0]}
                </div>
            </div>

            <Modal open={open1} onClose={handleClose1}>
                <div className="absolute translate-x-[-50%] translate-y-[-50%] min-w-[25%] w-auto h-auto left-[50%] top-[50%] bg-white p-7 rounded-md flex flex-col items-center justify-around">
                    <div className=" font-josefinSans font-semibold text-[2.4rem] text-mainPink">
                        Audio Transcript
                    </div>
                    <div className='font-lato text-xl text-gray-600'>{data.transcript}</div>
                </div>
            </Modal>

            <div className='flex w-full h-full'>
                {/* <div className='w-[50%] h-[95%] flex flex-col items-center justify-center '>
                    <div className='bg-[rgba(256,256,256,0.7)] rounded-xl'>
                        <div className=''>
                            <BarChart
                                dataset={data.emotions}
                                xAxis={[{ scaleType: 'band', dataKey: 'label' }]}
                                series={[
                                    { dataKey: 'score', valueFormatter }
                                ]}
                                {...chartSetting}
                            />
                        </div>
                    </div>
                </div> */}
                <div className='w-[50%] h-[95%] flex flex-col items-center justify-center '>
                    {data ? (
                        <div className='bg-[rgba(256,256,256,0.7)] rounded-xl'>
                            <BarChart
                                dataset={data.emotions}
                                xAxis={[{ scaleType: 'band', dataKey: 'label' }]}
                                series={[
                                    { dataKey: 'score', valueFormatter }
                                ]}
                                {...chartSetting}
                            />
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>

                <div className='w-[50%] h-[95%] flex flex-col items-center justify-center '>
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
                                width={600}
                                height={400}

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
        </div >

    )
}

export default Details
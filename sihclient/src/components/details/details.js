import Rating from '@mui/material/Rating';
import { LineChart } from '@mui/x-charts/LineChart';

const Details = () => {
    return (
        <div className="h-full p-16 w-full">
            <div className="h-20 mb-5 rounded-xl shadow-[4px_4px_8px_0px_rgba(0,0,0,0.50)] flex items-center bg-[rgba(256,256,256,0.55)]">
                <div className="flex items-center justify-around w-[30%] ml-2 font-josefinSans">
                    <img src="/assets/main/defaultuser.svg" className="h-12" alt="" />
                    <div className="flex ml-2">
                        <div className="text-2xl font-semibold">Employee</div>
                        <div className="border-l-2 mx-2 border-black"></div>
                        <div className="text-2xl">7sec</div>
                    </div>
                </div>
                <div className="flex items-center ml-auto mr-7">
                    <Rating name="half-rating-read" precision={0.1} value={3} size="large" readOnly />
                </div>
            </div>

            <div className='flex w-full h-full'>
                <div className='flex flex-col justify-around w-[40%] mt-20 h-[40%]'>
                    <div className="flex flex-col">
                        <p className=' font-josefinSans text-2xl font-semibold mb-3'>Overall Rating</p>
                        <Rating name="half-rating-read" precision={0.1} value={3} size="large" readOnly />
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
                                xAxis={[{ data: [1, 2, 3, 5, 8, 10], label: 'Emotion Variations' }]}
                                series={[
                                    {
                                        id: 'ok',
                                        data: [2, 5.5, 2, 8.5, 1.5, 5],
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
                                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                                series={[
                                    {
                                        id: 'ok',
                                        data: [2, 5.5, 2, 8.5, 1.5, 5],
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
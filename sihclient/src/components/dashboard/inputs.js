import { useState } from "react";
import Modal from '@mui/material/Modal';

const Inputs = () => {
    const [selected, setSelected] = useState(-1);
    const [open1, setOpen1] = useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);

    const [open2, setOpen2] = useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    const style = {

    };

    //35 of screen, 40 of 80
    return (<div className="h-full w-full flex flex-col items-center">
        <div onClick={handleOpen1} className={`flex items-center h-1/2 w-[80%] rounded-xl cursor-pointer ${(selected === 0 ? 'bg-black text-mainPink' : '')}`}
            onMouseEnter={() => {
                setSelected(0);
            }}
            onMouseLeave={() => {
                setSelected(-1);
            }}
        >
            <img src="/assets/dashboard/inputUser.svg" alt="" className="ml-10" />
            <span className="text-2xl font-josefinSans font-medium ml-10">New Employee</span>
        </div>
        <div onClick={handleOpen2} className={`flex items-center h-1/2 w-[80%] rounded-xl cursor-pointer ${(selected === 1) ? 'bg-black text-mainPink' : ''}`}

            onMouseEnter={() => {
                setSelected(1);
            }}
            onMouseLeave={() => {
                setSelected(-1);
            }}
        >
            <img src="/assets/dashboard/inputAudio.svg" alt="" className="ml-10" />
            <span className="text-2xl font-josefinSans font-medium ml-10">New Audio Input</span>
        </div>
        <Modal
            open={open1}
            onClose={handleClose1}
        >
            <div className="absolute translate-x-[-50%] translate-y-[-50%] w-1/4 h-auto left-[50%] top-[50%] bg-white p-7 rounded-md flex flex-col items-center justify-around">
                <div className=" font-josefinSans font-semibold text-[2.4rem] text-mainPink">New Employee</div>
                <form className="w-[100%] flex-col justify-center align-middle mt-5">
                    <label className="font-lato text-[16px]" />
                    Employee Name
                    <br />
                    <input
                        type="text"
                        className="w-full h-[75px] rounded border-[3px] border-solid border-mainPink cursor-text transition-all duration-300 focus:outline-none focus:border-b-3 focus:border-b-mainPink focus:border-l-0 focus:border-r-0 focus:border-t-0"
                    />
                    <br />
                    <br />
                    <label className="font-lato text-[16px]" />
                    Password
                    <br />
                    <input
                        type="password"
                        className="w-full h-[75px] rounded border-[3px] border-solid border-mainPink cursor-text transition-all duration-300 focus:outline-none focus:border-b-3 focus:border-b-mainPink focus:border-l-0 focus:border-r-0 focus:border-t-0"
                    />
                </form>
                <button className="text-black text-3xl font-bold font-josefinSans justify-center items-center gap-2.5 pt-4 pb-2.5 px-[83px] rounded-[8px] bg-mainPink mt-8 cursor-pointer hover:bg-[#18072B] hover:text-white transition-all duration-200">
                Add
              </button>
            </div>
        </Modal>

        <Modal
            open={open2}
            onClose={handleClose2}
        >
            <div className="absolute translate-x-[-50%] translate-y-[-50%] w-1/4 h-auto left-[50%] top-[50%] bg-white p-7 rounded-md flex flex-col items-center justify-around">
                <div className=" font-josefinSans font-semibold text-[2.4rem] text-mainPink">New Audio</div>
                <form className="w-[100%] flex-col justify-center align-middle mt-5">
                    <label className="font-lato text-[16px]" />
                    Employee id
                    <br />
                    <input
                        type="text"
                        className="w-full h-[75px] rounded border-[3px] border-solid border-mainPink cursor-text transition-all duration-300 focus:outline-none focus:border-b-3 focus:border-b-mainPink focus:border-l-0 focus:border-r-0 focus:border-t-0"
                    />
                    <br />
                    <br />
                    <label className="font-lato text-[16px]" />
                    Audio
                    <br />
                    <input
                        type="file"
                        accept=".wav"
                        // className="w-full h-[75px] rounded border-[3px] border-solid border-mainPink cursor-text transition-all duration-300 focus:outline-none focus:border-b-3 focus:border-b-mainPink focus:border-l-0 focus:border-r-0 focus:border-t-0"
                        className=" mt-2 block w-full text-xl text-black
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-xl file:font-semibold
                        file:bg-black file:text-mainPink
                        hover:file:bg-white cursor-pointer"
                    />
                </form>
                <button className="text-black text-3xl font-bold font-josefinSans justify-center items-center gap-2.5 pt-4 pb-2.5 px-[83px] rounded-[8px] bg-mainPink mt-8 cursor-pointer hover:bg-[#18072B] hover:text-white transition-all duration-200">
                Feed
              </button>
            </div>
        </Modal>
    </div>
    );
}

export default Inputs;
import { SideBar, Employees, HeaderMenu } from "../../components"

const EmployeeList = () => {
    return (
        <div className="flex h-screen w-screen justify-around items-center bg-[url('../public/assets/landing/frame2/frame2Bg.webp')]  bg-repeat overflow-x-hidden">
            <div className="bg-white/[0.90] min-h-screen h-full w-full">
                <div className="h-screen w-full flex justify-around items-center bg-[url('../public/assets/main/dashBg.png')] bg-no-repeat p-5">
                    <SideBar />
                    <div className="flex flex-col w-[100%] h-[100%] justify-around items-center">
                        <HeaderMenu />
                        <Employees />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeList
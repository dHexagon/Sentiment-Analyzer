
const Header = () => {
    return ( <div className="h-32 flex justify-between">
        <div className="w-[15vw] flex justify-evenly">
            <div className="w-10 flex flex-col justify-center">
                <img src="/assets/main/dHexagon.svg" alt="Logo" />
            </div>
            <span className="text-4xl font-alumniSans font-bold flex flex-col justify-center">
                dHexagon
            </span>
        </div>
        <div className="w-[40vw] flex justify-evenly">
                <span className="text-3xl font-bebasNeue font-normal flex flex-col justify-center">
                        HOME
                </span>
                <span className="text-3xl font-bebasNeue font-normal flex flex-col justify-center">
                        ABOUT US
                </span>
                <span className="text-3xl font-bebasNeue font-normal flex flex-col justify-center">
                        CONTACT
                </span>
                <span className="text-3xl font-bebasNeue font-normal flex flex-col justify-center">
                        LOGIN
                </span>
        </div>
    </div> );
}
 
export default Header;
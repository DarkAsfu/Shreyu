import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import { FaHistory } from "react-icons/fa";
import { IoCreate, IoSettingsOutline } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";
import logoLight from "../../assets/logo-light.png";
import logoDark from "../../assets/logo-dark.png";
import humberger from "../../assets/humberger.png"
import Navbar from "../NavBar/Navbar";
const SideBar = () => {
    const [hideText, setHideText] = useState('')
    const [sidebarWidth, setSidebarWidth] = useState('')
    const [changeLogo, setChangeLogo] = useState(true)
    const removeSideBar = () => {
        setHideText('hidden')
        setSidebarWidth('w-[96px]')
        setChangeLogo(false)
    }
    const showSideBar = () => {
        setHideText('');
        setSidebarWidth('w-[264px]');
        setChangeLogo(true)
    }
    return (
        <div className="drawer md:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  dark:bg-[#150A09] px-2 pt-2">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="md:hidden">
                    <img onClick={showSideBar} className={`w-10 m-2`} src={humberger} alt="" />
                </label>
                <Navbar />
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className={`menu ${sidebarWidth} w-[264px] min-h-full bg-[#fff] dark:bg-[#2E1619] text-base-content`}>
                    <div className="flex justify-between gap-8 mx-auto mt-2">
                        {changeLogo ?
                            <div className="flex items-center gap-4 text-[24px] font-bold">
                                <div className="dark:hidden"><img src={logoDark} className="w-32" alt="logo" /></div>
                                <div className="hidden dark:block"><img src={logoLight} className="w-32" alt="logo" /></div>
                                {/* <h1 className="text-[#384449]">Medi<span className="text-[#FF7594]">Doc</span></h1> */}
                            </div> :
                            <img onClick={showSideBar} className={`w-10 mx-auto bg-none`} src={humberger} alt="" />
                        }
                        <img onClick={removeSideBar} className={`w-[40px] ${hideText}`} src="https://i.ibb.co/sm3WYmD/Icon-Side-Arrow-round.png" alt="" />
                    </div>
                    {/* Sidebar content here */}
                    <li className={`text-[16px] dark:text-white mt-[60px] font-mono ${changeLogo ? '' : 'mx-auto'}`}><Link to="/"><img className="w-8" src="https://i.ibb.co/fYjhfBf/Icon-home.png" alt="" /><span className={`${hideText}`}>Home</span></Link></li>
                    <li className={`text-[16px] dark:text-white mt-5 font-mono ${changeLogo ? '' : 'mx-auto'}`}><Link to="/allemployee"><GoPerson className="text-[32px]" /><span className={`${hideText}`}>All Employee</span></Link></li>
                    <li className={`text-[16px] dark:text-white mt-5 font-mono ${changeLogo ? '' : 'mx-auto'}`}><Link to="/createEmployee"><IoPersonAddOutline className="text-[32px]" /><span className={`${hideText}`}>Create Employee</span></Link></li>
                    <li className={`text-[16px] dark:text-white mt-5 font-mono ${changeLogo ? '' : 'mx-auto'}`}><a><IoCreate className="text-[32px]"  /><span className={`${hideText}`}>Update Employee</span></a></li>
                    <li className={`text-[16px] dark:text-white mt-5 font-mono ${changeLogo ? '' : 'mx-auto'}`}><a><FaHistory className="text-[32px]" /><span className={`${hideText}`}>User Validation</span></a></li>
                    <li className={`text-[16px] dark:text-white mt-5 font-mono ${changeLogo ? '' : 'mx-auto'}`}><a><IoSettingsOutline className="text-[32px]" /><span className={`${hideText}`}>Settings</span></a></li>
                    <li className={`text-[16px] dark:text-white mt-5 font-mono ${changeLogo ? '' : 'mx-auto'} mt-[80px]`}><a><img className={`w-10 ${changeLogo ? 'hidden' : ' '}`} src="https://i.ibb.co/QXHnDhZ/round.png" alt="" /><span style={{ background: 'linear-gradient(101deg, #FF7594 -6.58%, #FF7C65 102.46%)' }} className={`${hideText} text-white p-3 rounded-sm`}>New Appointment</span></a></li>
                    {/* <button style={{background: 'linear-gradient(101deg, #FF7594 -6.58%, #FF7C65 102.46%)'}} className="">New appointment</button> */}
                </ul>

            </div>
        </div>
    );
};

export default SideBar;
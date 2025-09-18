import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleDarkMode } from '../redux/slices';

const Navbar = () => {
    // const dispatch = useDispatch();
    // const { darkMode } = useSelector((state) => state.home);

    // const handleToggle = () => {
    //     dispatch(toggleDarkMode());
    // };
    return (
        <div className="navbar bg-base-100 rounded-box shadow-xl p-4">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">My App</a>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="User Avatar" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li><a>Profile</a></li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
                <label className="swap swap-rotate btn btn-ghost btn-circle">
                    {/* This hidden checkbox controls the theme toggle */}
                    {/* <input type="checkbox" onChange={handleToggle} checked={darkMode} /> */}
                    <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM18.36,6.36a1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41ZM12,19a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM7.05,18.95a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41Zm8.9-13.9a1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,15.64,4l-.71.71A1,1,0,0,0,15.9,5.05ZM17,12a1,1,0,0,0,1,1h1a1,1,0,0,0,0-2H18A1,1,0,0,0,17,12ZM12,15a3,3,0,1,0-3-3A3,3,0,0,0,12,15Z" /></svg>
                    <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.64-1.39l-4.04,4.04A5.5,5.5,0,0,1,10.23,3.77,5.5,5.5,0,0,1,19.33,12l4.04-4.04A1,1,0,0,0,21.64,13Zm-17,6a1,1,0,0,0-1-1h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,4.64,19Zm0-6a1,1,0,0,0-1-1h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,4.64,13Zm0-6a1,1,0,0,0-1-1h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,4.64,7Zm11.03-3a1,1,0,0,0-1-1h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,15.67,4Zm0-6a1,1,0,0,0-1-1h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,15.67-2Zm-11.03-3a1,1,0,0,0-1-1h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,4.64-2ZM19.33,12a5.5,5.5,0,0,1-9.1-.56A1,1,0,0,0,10.23,12.5a5.5,5.5,0,0,1,9.1.56A1,1,0,0,0,19.33,12Z" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;
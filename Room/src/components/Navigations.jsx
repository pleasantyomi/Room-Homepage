import logo from './assets/logo.svg'
import close from './assets/icon-close.svg'
import hamburger from './assets/icon-hamburger.svg'
import { useState } from 'react';
import './Navigations.css'

const Navigations = () => {
    const [open, isOpen] = useState(false)


    

    return ( 
        <div className="flex  absolute z-10 gap-10 lg:ml-14 lowercase items-center text-white">
            <div className="lg:hidden block">
                <div>
                  <img className="cursor-pointer mt-10 ml-10" onClick={() => isOpen(prev => !prev)} src={hamburger}/>
                </div>

                <div className={open? "showMenuNav" : "hideMenuNav"}>
                    <div>
                        <div className="flex justify-evenly items-center text-black font-semibold">
                          <img onClick={() => isOpen(false)} className="w-5 h-5 cursor-pointer" src={close}/>
                          <a className="ml-10">home</a>
                          <a>shop</a>
                          <a>about</a>
                          <a>contact</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 flex items-center gap-10">
                <div>
                    <img className="h-4 w-auto" src={logo}/>
                </div>

                <div className="hidden lg:flex gap-5">
                    <a className="hover:border-b hover:border-white cursor-pointer">Home</a>
                    <a className="hover:border-b hover:border-white cursor-pointer">Shop</a>
                    <a className="hover:border-b hover:border-white cursor-pointer">About</a>
                    <a className="hover:border-b hover:border-white cursor-pointer">Contact</a>
                </div>
            </div>
        </div>

     
     );
}
 
export default Navigations;
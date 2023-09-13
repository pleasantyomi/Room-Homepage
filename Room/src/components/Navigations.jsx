import logo from './assets/logo.svg'
import Hamburger from './Hamburger';

const Navigations = () => {
    return ( 
        <div className="flex  absolute gap-10 lg:ml-14 ml-10 mt-10 lowercase items-center text-white">
            <div className="lg:hidden block">
                <Hamburger/>
            </div>

            <div className="">
                <img className="h-4 w-auto" src={logo}/>
            </div>

            <div className="hidden lg:flex gap-5 ">
               <a className="hover:border-b hover:border-white cursor-pointer">Home</a>
               <a className="hover:border-b hover:border-white cursor-pointer">Shop</a>
               <a className="hover:border-b hover:border-white cursor-pointer">About</a>
               <a className="hover:border-b hover:border-white cursor-pointer">Contact</a>
            </div>

           
        </div>
     );
}
 
export default Navigations;
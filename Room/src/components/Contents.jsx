/* eslint-disable react/prop-types */
import close from './assets/icon-close.svg'

const Contents = ({open}) => {
    return ( 
        <div className={`${open ? 'open' : ''}`}>
            <div  className="absolute bg-white w-screen py-10 top-0" >
                <div className="flex justify-evenly items-center text-VeryDarkGray font-semibold">
                  <img className="w-5 h-5" src={close}/>
                  <a className="ml-10">home</a>
                  <a>shop</a>
                  <a>about</a>
                  <a>contact</a>
                </div>
            </div>
        </div>
       
     );
}


 
export default Contents;
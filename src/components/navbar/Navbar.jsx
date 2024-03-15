import Sidebar  from '../sidebar/Sidebar';
import './navbar.scss'
import {motion} from 'framer-motion';

const Navbar = () => {
    return (
    <div className='navbar'>
        <Sidebar/>
        {/* <div className="left"*/}
        <div className='wrapper'>
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration: 0.5}}><a href='#'><img src='/etna.jpg'/></a></ motion.span>
            {/* put etna img here */}
            <div className='social'>
                <a href="#"><img src='/facebook.png'/></a>
                <a href="#"><img src='/instagram.png'/></a>
                <a href="#"><img src='/youtube.png'/></a>
                <a href="#"><img src='/dribbble.png'/></a>
            </div>
        </div>
    </div>


    )
}

export default Navbar;
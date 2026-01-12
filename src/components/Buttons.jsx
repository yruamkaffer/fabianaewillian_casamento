import { FaFacebookF } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";

export function FacebookButton({username}) {
    return (
        <a href={`https://www.facebook.com/${username}/`} target='_blank' rel='noreferrer'>
            <button className='flex items-center justify-center gap-2 bg-[#c8dcbf] text-[#4e6146] p-1 rounded-full hover:bg-opacity-80'>
                <div className="p-1">
                    <FaFacebookF size={22}/>
                </div>
            </button>
        </a>
    )
}

export function InstagramButton({username}) {
    return (
        <a href={`https://www.instagram.com/${username}/`} target='_blank' rel='noreferrer'>
            <button className='flex items-center justify-center gap-2 bg-[#c8dcbf] text-[#4e6146] p-1 rounded-full hover:bg-opacity-80'>
                <div className="p-1">
                    <RiInstagramFill size={22}/>
                </div>
            </button>
        </a>
    )
}
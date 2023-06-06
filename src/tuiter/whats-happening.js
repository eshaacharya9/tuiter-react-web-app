import React, {useState} from "react";
import { AiOutlinePicture } from 'react-icons/ai';
import { MdGif } from 'react-icons/md';
import { MdFormatListBulleted } from 'react-icons/md';
import { BsEmojiSmile } from 'react-icons/bs';
import { TbCalendarStats } from 'react-icons/tb';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiBold } from 'react-icons/bi';
import { BiItalic } from 'react-icons/bi';

const WhatsHappening = () => {
 let [whatsHappening, setWhatsHappening] = useState('');
 const tuitClickHandler = () => {
   console.log(whatsHappening);
 }
 return (
   <div className="row">
     <div className="col-auto">
       <img src="/images/nasa.jpg" width={60}/>
     </div>
     <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
               className="form-control border-0"
               onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
       <div>
         <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                 onClick={tuitClickHandler}>
           Tuit
         </button>
         <div className="text-primary fs-2">
         <AiOutlinePicture className="me-3" /> {/* Picture Icon */}
         <MdGif className="me-3" /> {/* Gif Icon */}
  <MdFormatListBulleted className="me-3" /> {/* List Bulleted Icon */}
  <BsEmojiSmile className="me-3" /> {/* Emoji Smile Icon */}
  <TbCalendarStats className="me-3" /> {/* Calendar Stats Icon */}
  <HiOutlineLocationMarker className="me-3" /> {/* Location Marker Icon */}
  <BiBold className="me-3" /> {/* Bold Icon */}
  <BiItalic className="me-3" /> {/* Italic Icon */}
         </div>
       </div>
     </div>
     <div className="col-12"><hr/></div>
   </div>
 );
}
export default WhatsHappening;
import React, { useState } from "react";
import { AiOutlinePicture } from 'react-icons/ai';
import { MdGif } from 'react-icons/md';
import { MdFormatListBulleted } from 'react-icons/md';
import { BsEmojiSmile } from 'react-icons/bs';
import { TbCalendarStats } from 'react-icons/tb';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiBold } from 'react-icons/bi';
import { BiItalic } from 'react-icons/bi';
import { createTuitThunk } from "./services/tuits-thunks";
import { useDispatch, useSelector } from "react-redux";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState('');
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    const newTuit = {
      tuit: whatsHappening,
      username: currentUser.username,
      handle: currentUser.handle,
      image: currentUser.image
    }
    dispatch(createTuitThunk(newTuit));
    setWhatsHappening("");
  }
  return (
    <div className="row">
      {currentUser ?
        <>
          <div className="col-auto">
            <img className="rounded-circle" src="/images/profile.jpg" width={60} />
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
                <AiOutlinePicture className="me-3" />
                <MdGif className="me-3" />
                <MdFormatListBulleted className="me-3" />
                <BsEmojiSmile className="me-3" />
                <TbCalendarStats className="me-3" />
                <HiOutlineLocationMarker className="me-3" />
                <BiBold className="me-3" />
                <BiItalic className="me-3" />
              </div>
            </div>
            <div className="col-12"><hr /></div>
          </div>
        </> :
        <>
          <div className="col-auto">
            <img className="rounded-circle" src="/images/profile.jpg" width={60}/>
          </div>
          <div className="col-10">
            <textarea placeholder="What's happening?"
              className="form-control border-0">
            </textarea>
            <div>
              <p className="float-end mt-2 ps-3 pe-3 fw-bold">Please Login to tuit.</p>
              <div className="text-primary fs-2">
                <AiOutlinePicture className="me-2" />
                <MdGif className="me-2" />
                <MdFormatListBulleted className="me-2" />
                <BsEmojiSmile className="me-2" />
                <TbCalendarStats className="me-2" />
                <HiOutlineLocationMarker className="me-2" />
                <BiBold className="me-2" />
                <BiItalic className="me-2" />
              </div>
            </div>
            <div className="col-12"><hr /></div>
          </div>
        </>}
    </div>
  );
}
export default WhatsHappening;
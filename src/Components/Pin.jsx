import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

//importing the icons
import { MdDownloadForOffline } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

//importing the sanity client
import { urlFor, client } from '../client';

//importing the utils
import { fetchUser } from '../Utils/fetchUser';




//Pin component
const Pin = ({ pin: { postedBy, image, _id, destination, save } }) => {
  const user = fetchUser();
  
  // all hooks
  const navigate = useNavigate();
  const [postHovered, setPostHovered] = useState(false);
  const [savingPost, setSavingPost] = useState(false);

  const alreadySaved = !!(save?.filter((item) => item.postedBy._id === user.googleId))?.length;

  return (
    <div className='m-2'>

      <div
        onMouseEnter={() => setPostHovered(true)}
        onMouseLeave={() => setPostHovered(false)}
        onClick={() => navigate(`/pin-detail/${_id}`)}
        className='relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out'
      >
        <img key={_id} className='rounded-lg w-full' alt='user_post' src={urlFor(image).width(250).url()} /> 
        {postHovered && (
          <div
            className='absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50'
            style={{height: '100%'}}
          >
            <div className='flex items-center justify-between'>
              <div className='flex gap-2'>
                <a
                  href={`${image?.asest?.url}?dl=`}
                  download
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white w-9 h-9 rounded-full flex items-center justify-center text-dark text-xl opacity-75 hover:opacity-100 hover:shadow-md outline-none"
                >
                  <MdDownloadForOffline />
                </a>
              </div>
              {alreadySaved ? (
                <button type='button' className='bg-red-500' >
                  Saved
                </button>
              ) : (
                  <button>
                    Save
                  </button>
              ) }
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Pin
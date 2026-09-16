import { LocateFixedIcon, LocateIcon, LocationEdit } from 'lucide-react'
import React from 'react'
import './CameraBook.css'

const CameraBook = () => {
  return (
    <>
      <div>
        <div className='span'>
          {/* user Requirement  */}
          <div className='span-1-of-4'>
            <p>Photography</p>
            <p>Videography</p>
          </div>
          {/* Get the user Location */}
          <div className='span-2-of-4'>
            <LocationEdit />
            <p>Enter shoot location</p>
          </div>
          {/* shoot timing */}
          <div className='span-3-of-4'>
            <div>
              <input type="datetime-local" />
            </div>
            {/* customer Mobile Number */}
            <div className='number'>
              <span>+91</span>
              <input 
                className='tel'
                type="tel" />
            </div>
          </div>
          <div className='span-4-of-4'>
            <button>Next</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default CameraBook

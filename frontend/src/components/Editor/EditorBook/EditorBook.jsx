import React, { useState } from 'react'
import './EditorBook.css'

const EditorBook = () => {

    const [IsLong , setIsLong]  = useState(false);
    const [IsShort, setIsShort] = useState(true);

    const HandleButtons = (type)=> {
        if (type === 'long') {
            setIsShort(false)
            setIsLong(true)
        }
        if ( type === 'short' ) {
            setIsLong(false)
            setIsShort(true)
        };
        return 
    }

    return (
        <>
            <div className="tag">
                {/* user Requirement  */}
                <div className='span-1-of-5'>
                    <p
                        className={IsShort ? 'actived' : null}
                        onClick={()=> HandleButtons('short')}
                    >Short</p>
                    <p
                        className={IsLong ? 'actived' : null}
                        onClick={()=> HandleButtons('long')}
                    >Long</p>
                </div>
                {/* shoot timing */}
                <div className='span-2-of-5'>
                    <div>
                        <label htmlFor="duration">Duration:</label>
                        <input
                            placeholder='Enter duration'
                            type="text"
                            id='duration' />
                    </div>

                </div>
                {/* customer Mobile Number */}
                <div className='span-3-of-5'>
                    <label htmlFor="tel">Number</label>
                    <div>
                        <span>+91</span>
                        <input
                            id='tel'
                            className='tel'
                            type="tel" />
                    </div>
                </div>
                <div className='span-4-of-5'>
                    <button>Next</button>
                </div>

            </div>
        </>
    )
}

export default EditorBook

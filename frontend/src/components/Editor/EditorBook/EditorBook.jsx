import React from 'react'
import './EditorBook.css'

const EditorBook = () => {
    return (
        <>
            <div className="tag">
                {/* user Requirement  */}
                <div className='span-1-of-5'>
                    <p>Short</p>
                    <p>Long</p>
                </div>
                {/* shoot timing */}
                <div className='span-3-of-5'>
                    <div>
                        <label htmlFor="duration">Duration:</label>
                        <input type="text" id='duration' />
                    </div>

                </div>
                {/* customer Mobile Number */}
                <div className='number'>
                    <span>+91</span>
                    <input
                        className='tel'
                        type="tel" />
                </div>
                <div className='span-5-of-5'>
                    <button>Next</button>
                </div>

            </div>
        </>
    )
}

export default EditorBook

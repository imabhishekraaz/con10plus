import { ArrowLeft } from 'lucide-react'
import React from 'react'
import './OrderDetailsEditor.css'

const OrderDetailsEditor = () => {
    
    return (
        <>
            <div>
                <div>
                    <ArrowLeft />
                </div>
                <div className='option'>
                    <div className='span-1-of-3 category'>
                        <span>1 Reel</span>
                        <span>₹ 999</span>
                    </div>
                    <div className='span-2-of-3 category'>
                        <span>5 Reel</span>
                        <span>₹ 999</span>
                    </div>
                    <div className='span-3-of-3 category'>
                        <span>10 Reel</span>
                        <span>₹ 999</span>
                    </div>
                    <div className='odrbtn'>
                        <button>Next</button>
                    </div>
                </div>


            </div>
        </>
    )
}

export default OrderDetailsEditor

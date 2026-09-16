import React, { useState } from 'react'
import { Menu } from "lucide-react";
import img from '../../../public/main.png'

import './Main.css'
import CameraBook from '../../components/CameraMan/CameraBook/CameraBook';
import EditorBook from '../../components/Editor/EditorBook/EditorBook';

const Main = () => {
    const [cam, setCam] = useState(false);
    const [Editor, setEditor] = useState(true);

    const handleBackground = (verify) => {
        if (verify === 'cam') {
            setEditor(false);
            setCam(true);
        };

        if (verify === 'editor') {
            setCam(false);
            setEditor(true)
        }
    };

    return (
        <div className='wrapper'>
            <div className='first-wrapper'>
                <div className='header'>
                    <div className="three-line">
                        <Menu 
                            className='three-btn'
                            size={20} />
                    </div>
                    <div className="logo">
                        <p>con10plus</p>
                    </div>
                    <div className="login-btn">
                        <button>LOG IN</button>
                    </div>
                </div>
                <div className='inner-wrapper'>
                    <div className='user-option'>
                        <p c
                            className={cam ? 'active' : null}
                            onClick={() => handleBackground('cam')}
                        >Cameraman</p>
                        <p
                            className={Editor ? 'active' : null}
                            onClick={() => handleBackground('editor')}
                        >Editor</p>
                    </div>
                </div>
                <div>
                    {cam && <CameraBook/>}
                    { Editor && <EditorBook/>}
                </div>
            </div>
            <div className='second-wrapper'>
                <img 
                    className='image-container'
                    src={img} alt="" />
            </div>
        </div>
    )
}

export default Main

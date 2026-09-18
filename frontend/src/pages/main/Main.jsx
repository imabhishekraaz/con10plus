import React, { useState } from 'react'
import { Menu } from "lucide-react";
import img from '../../../public/main.png'

import './Main.css'
import CameraBook from '../../components/CameraMan/CameraBook/CameraBook';
import EditorBook from '../../components/Editor/EditorBook/EditorBook';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';

const Main = () => {
    const [cam, setCam] = useState(false);
    const [Editor, setEditor] = useState(true);
    const navigate = useNavigate();

    const handleBackground = (verify) => {
        if (verify === 'cam') {
            setEditor(false);
            setCam(true);
            navigate('/cameraman')
        };

        if (verify === 'editor') {
            setCam(false);
            setEditor(true)
            navigate('/editor')
        }
    };

    return (
        <div className='wrapper'>
            <div className='first-wrapper'>
                <Navbar/>
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
                    <Outlet/>
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

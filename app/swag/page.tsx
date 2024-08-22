"use client";

import React, { ChangeEvent, useCallback, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import '../../styles/frame.css';
import UploadImageInput from '@/components/UploadImageInput';
import ConfettiAnimation from '@/components/ConfettiAnimation';
import { Toaster, toast } from 'react-hot-toast';

import { IoMdDownload } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";



export default function Swag() {
    const [userName, setUserName] = useState<string>("Hacker's Name");
    const [userImage, setUserImage] = useState<string>('/sponsors/faq_boy1.png');
    const [confetti, setConfetti] = useState<boolean>(false);

    const handleImageUpload = (acceptedFiles: File[]) => {
        if (acceptedFiles && acceptedFiles.length > 0) {
            const file = acceptedFiles[0];

            const reader = new FileReader();

            reader.onload = (e) => {
                if (e.target) {
                    setUserImage(e.target.result as string);
                }
            };

            reader.readAsDataURL(file);
        }
    };

    const ref = useRef<HTMLDivElement>(null)

    const onButtonClick = useCallback(() => {

        toast.success("Downloaded Successfully!")
        if (ref.current === null) {
            return
        }

        toPng(ref.current, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = 'DUHacks.png'
                link.href = dataUrl
                link.click()
                setConfetti(true);

                setTimeout(() => {
                    setConfetti(false);
                }, 5000);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [ref])

    const handleTweet = () => {
        const url = 'https://twitter.com/intent/tweet?text=Excited%20to%20dive%20into%20the%20world%20of%20innovation%20at%20@DuHacks%20%21%20Ready%20to%20code%2C%20create%2C%20and%20bring%20some%20groundbreaking%20ideas%20to%20life.%20Let%20the%20coding%20frenzy%20begin%21&hashtags=duhacks3%2Chackforchange%2Chackathon%20'
        window.open(url, '_blank');
    }
    





    return (
        <main className='overflow-x-hidden'>
            <Toaster />
            {confetti && <ConfettiAnimation />}
            <div className='glassy-effect rounded-lg flex flex-col justify-center items-center px-20 py-10 max-w-[800px] mx-auto my-36'>
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Camera%20with%20Flash.png" alt="Camera with Flash" width="70" height="70" />
                <br />
                <h1 className='font-logo text-center text-xl md:text-3xl mb-4'>Digital Swag
                </h1>
                <p className='text-white mb-4 text-sm  text-center'>
                    Show off your swag on your social media handles and don't forget to tag duhacks 💞!
                    Enjoy the breeze of hackathon with duhacks 3.0 🤩.
                </p>



            <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/2 p-2.5 m-4' onChange={(e) => setUserName(e.target.value)}  placeholder="Your Name" value={userName} name='userName'/>
            <div ref={ref} className="frame">
                <img src={userImage} className="innerFrame" alt="userImage" />
                <h1 className='text-4xl font-bold  userText m-auto'>{userName}</h1>
            </div>




            {/* <input type="file" onChange={handleImageUpload}/> */}
            <div className=' cursor-pointer mt-4'>
            <UploadImageInput onUpload={handleImageUpload}/>
            </div>
            <div className='flex md:flex-row flex-col  md:space-x-3 space-x-0 '>

                <button className=" border  border-white text-white  p-2 rounded-md mt-3 text-lg flex justify-center items-center" onClick={onButtonClick}><IoMdDownload/>Download</button>
                <button className="border border-white  text-white p-2 rounded-md mt-3 text-lg flex justify-center items-center " onClick={handleTweet}> <FaSquareXTwitter /><span className='ml-1'>Tweet</span></button>
            </div>
            </div>
        </main>

    )

}

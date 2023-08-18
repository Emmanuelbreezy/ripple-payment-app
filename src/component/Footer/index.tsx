import React from 'react';
import { ReactComponent as LogoSVG }from '../../assets/image/footer-logo.svg';
import { ReactComponent as InstagramSVG }from '../../assets/image/footer-instagram-icon.svg';
import { ReactComponent as TwitterVG }from '../../assets/image/footer-twitter-icon.svg';
import { ReactComponent as InSVG }from '../../assets/image/footer-in-icon.svg';
import { ReactComponent as FacebookSVG }from '../../assets/image/footer-fb-icon.svg';
import { ReactComponent as SendSVG }from '../../assets/image/send-icon.svg';


const Footer = () => {
  return (
    <div className=" border-t border-[#EAEAEA] w-full">
        <div className="max-w-5xl mx-auto py-16">
            <div className=" w-full flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-32 lg:justify-between">
                <div className=" flex flex-col items-center lg:items-start gap-10 flex-shrink-0">
                    <LogoSVG />
                    <div className=" text-muted font-aeonik text-[14px] font-normal leading-5">
                        <p>Copyright © 2023 Eazipay.</p>
                        <p className="mt-2">All rights reserved</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <InstagramSVG />
                        <TwitterVG />
                        <InSVG />
                        <FacebookSVG />
                    </div>
                </div>
                <div className="flex-1">
                    <ul className="flex flex-col lg:flex-row p-0 list-none 
                     font-aeonik text-[#7C7C7C] gap-[30px] justify-center items-center lg:items-start lg:justify-start">
                         <li  className="flex-1 text-center lg:text-left">
                            <h5 className="text-grey mb-6 text-[20px]">Product</h5>
                            <div className="flex flex-col gap-3">
                                <a href="/#">Individual</a>
                                <a href="/#">Businesses</a>
                                <a href="/#">Request Demo</a>
                                <a href="/#">Pricing</a>
                            </div>
                        </li>
                        <li  className="flex-1 text-center lg:text-left">
                            <h5 className="text-grey mb-6 text-[20px]">Legal</h5>
                            <div className="flex flex-col gap-3 text-[16px] text-[#7C7C7C] font-normal leading-6">
                                <a href="/#">Privacy Policy</a>
                                <a href="/#">Terms of Service</a>
                            </div>
                        </li>
                        <li  className="flex-1 text-center lg:text-left">
                             <h5 className="text-grey mb-6 text-[20px]">Resources</h5>
                             <div className="flex flex-col gap-3 text-[16px] text-[#7C7C7C] font-normal leading-6">
                                <a href="/#" className="no-underline">FAQs</a>
                                <a href="/#">Blog</a>
                                <a href="/#">Career</a>
                                <a href="/#">Customer Stories</a>
                            </div>
                        </li>
                        <li  className="flex-1 text-center lg:text-left">
                            <h5 className="text-grey mb-6 text-[20px]">Contact us</h5>
                            <div className="flex flex-col gap-3 text-[16px] text-[#7C7C7C] font-normal leading-6">
                                <a href="mail:">eazipay@gmail.com</a>
                                <p>+234 816 878 9518</p>
                                <div className="w-full relative mt-3">
                                    <form>
                                        <input className="bg-[#F2F1F1] w-[225px] rounded-2xl py-3 px-5 pr-3 focus:outline-none
                                        font-aeonik text-[14px] text-muted
                                        " type="email" placeholder="Your email address" />
                                        <button type="submit" className="absolute top-4 right-5 outline-none border-none">
                                                <SendSVG  />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
import React from 'react'
import tw from 'twin.macro'
import { withLandingLayout } from '../../hoc'
import { NavigationBar } from '../../component'
import { ReactComponent as HeroSVG } from '../../assets/image/hero_svg.svg'
import { ReactComponent as AppStoreSVG } from '../../assets/image/apple-store.svg'
import { ReactComponent as GooglePlaySVG } from '../../assets/image/google-play.svg';
import { ReactComponent as Work1SVG }from '../../assets/image/works-1-2.svg';
import { ReactComponent as Work2SVG }from '../../assets/image/works-2-3.svg';
import { ReactComponent as WorkBGSVG }from '../../assets/image/works-bg.svg';
import { ReactComponent as DemoSVG }from '../../assets/image/demo-svg.svg';
import { ReactComponent as DemoDotSVG }from '../../assets/image/demo-dots.svg';
import SalarySVG from '../../assets/image/salary-visual.svg';
import WorksPhoneSVG from '../../assets/image/works-phone.svg';

import ButtonLink from '../../component/Button/ButtonLink'

const LandingPage = () => {
  return (
    <WrapperStyle>
      <div className="mb-0">
        <header className="relative mi-h-auto lg:min-h-[65rem] mb-0 overflow-hidden ">
          <div className="px-0">
            <div className='absolute inset-0 bg-no-repeat index_beams__yWcJT'>
              <div className="absolute inset-0 bg-[bottom_1px_center]" ></div>
            </div>
            <NavigationBar />
             <div className="relative max-w-5xl mx-auto pt-20 lg:pt-20">
                 <div className="w-full flex flex-col lg:flex-row items-center justify-between">
                      <div className="relative flex flex-col items-center lg:items-start gap-[72px]" style={{ flex:"0 1" }}>
                         <div className="mt-0 lg:-mt-16 flex flex-col items-center lg:items-start gap-6 max-w-lg lg:max-w-auto">
                           <h1 className="text-grey font-medium text-[60px] lg:text-[64px] tracking-tight leading-[64px] lg:leading-[72px] text-left">
                              <p className="flex m-0 p-0 gap-3">
                                <span className="text-grey">Run your</span>
                                <span className="!text-primary">payroll</span>
                              </p>
                              <p className="flex m-0 p-0 gap-3">
                                <span className="!text-secondary tracking-tight">easily</span>
                                <span className="text-grey">in</span>
                                <span className="text-accent tracking-tight">seconds</span>
                              </p>
                           </h1>
                           <p className="text-[20px] text-muted text-center lg:text-left max-w-3xl mx-auto font-aeonik tracking-tight !leading-7">
                               We’ve built an all-inclusive simple solution for individual and businesses to manage staff, pay salaries, bills, and relevant taxes all at once.
                           </p>
                           <div>
                              <a href="/#" 
                                className="leading-5 flex items-center justify-center py-[16px] px-[36px] rounded-[32px] bg-primary font-[14px] !text-white font-aeonik 
                                ring-1 shadow-md shadow-primary/[0.20]">
                                Start Using Free, Forever
                              </a>
                           </div>
                         </div>
                         <div className="flex-shrink-0">
                            <p className="font-aeonik text-[18px] font-medium leading-9 mb-3 text-center lg:text-left">Download the Eazipay App</p>
                            <div className="flex items-center gap-4">
                               <ButtonLink url="/#">
                                  <span className="w-12 h-12 bg-[#F2F1F1] rounded-full flex-shrink-0 flex items-center justify-center">
                                    <AppStoreSVG />
                                  </span>
                                  <p className="py-0 font-aeonik text-muted">
                                    <span className="block text-[12px] font-medium leading-4">Download on the</span>
                                    <span className="leading-6 block text-[18px] font-bold">Appstore</span>
                                  </p>
                               </ButtonLink>
                               <ButtonLink url="/#">
                                  <span className="w-12 h-12 bg-[#F2F1F1] rounded-full 
                                     flex-shrink-0 flex items-center justify-center">
                                    <GooglePlaySVG />
                                  </span>
                                  <p className="py-0 font-aeonik text-muted">
                                    <span className="block text-[12px] font-medium leading-4">Get on</span>
                                    <span className="leading-6 block text-[18px] font-bold">Google Play</span>
                                  </p>
                               </ButtonLink>
                            </div>
                         </div>
                      </div>
                      <div className="flex-1 flex justify-end">
                        <HeroSVG className="w-[95%] lg:w-auto -mx-9 lg:mx-0" />
                      </div>
                 </div>
             </div>
          </div>
        </header>
        <section className="relative w-full min-h-auto lg:min-h-[55rem]">
            <div className='absolute z-0 inset-0 bg-cover bg-no-repeat -mt-0 lg:-mt-16 section2_beams__'></div>
              <div className="max-w-5xl mx-auto py-48 lg:py-20 z-40">
                <div className="flex flex-col items-center justify-center gap-16">
                  <div className="mb-0 text-center z-10">
                    <h1 className="text-primary text-[64px] font-medium leading-[64px] mb-3">For Individuals and Businesses</h1>
                    <p className="text-grey text-[20px] font-aeonik font-normal tracking-wide leading-6">Join 200+ businesses using Eazipay's easy solution.</p>
                  </div>
                  <div className="relative flex flex-col lg:flex-row items-center z-10">
                    <div className="w-auto lg:w-[552px] h-auto lg:h-[320px] mr-0 lg:-mr-72 flex flex-col gap-6 p-16 rounded-[16px] font-aeonik text-white ring-1 ring-offset-0 ring-transparent shadow-[-11px_0px_19px_0px_rgba(23,23,23,0.30),0px_13px_20px_0px_rgba(23,23,23,0.20)] card-bg-gradient">
                       <h3 className="text-[28px] font-bold leading-9">Tamper-proof Payroll for LIfe</h3>
                        <div className="max-w-md text-[18px] font-normal">
                          <p className="mb-2">Your staff payroll history is kept in one place forever.</p>
                          <p className="mb-2">No more excel sheet or manual records.</p>
                          <p className="mb-2">Download your payroll history anytime you need it.</p>
                        </div>
                    </div>
                    <div className="w-auto lg:w-[552px] mr-0 lg:-mr-72 flex flex-col gap-6 p-16 h-auto lg:h-[320px]  rounded-[16px] font-aeonik text-white ring-1 ring-offset-0 ring-transparent shadow-[-11px_0px_19px_0px_rgba(23,23,23,0.30),0px_13px_20px_0px_rgba(23,23,23,0.20)] card-bg-gradient">
                       <h3 className="text-[28px] font-bold leading-9">All Payroll, Anytime Anywhere</h3>
                        <div className="max-w-md text-[18px] font-normal">
                          <p className="mb-2">Wherever you are Eazipay has got you covered on ALL your Payroll tasks.</p>
                          <p className="mb-0">Whether it is Taxes, Pension insurances HMOs, trust funds, Eazipay handle all your compliamces in one place and easily, in seconds!</p>
                        </div>
                    </div>
                    <div className="w-auto lg:w-[552px] flex flex-col gap-6 p-16 h-auto lg:h-[320px] rounded-[16px] font-aeonik text-white ring-1 ring-offset-0 ring-transparent shadow-[-11px_0px_19px_0px_rgba(23,23,23,0.30),0px_13px_20px_0px_rgba(23,23,23,0.20)] card-bg-gradient">
                       <h3 className="text-[28px] font-bold leading-9">Payroll in Seconds</h3>
                        <div className="max-w-md text-[18px] font-normal">
                          <p className="mb-2">Never again wil you spend more than 2 minutes on payroll.</p>
                          <p className="mb-2">Just click on your staff annd bulk-pay them at once.</p>
                          <p className="mb-2">Payment is done permanently.</p>
                        </div>
                    </div>
                  </div>
                  <div className="pb-7 z-10 max-w-full lg:max-w-[60%] mx-auto">
                    <p className="m-0 p-0 text-center font-aeonik text-grey text-[20px] font-normal leading-6">
                      We are happy to answer your queries. Please, reach us at <span className="text-accent"> hello@myeazipay.com</span> and expect our response shortly after.
                    </p>
                  </div>
                </div>
             </div>
        </section>
        <section className="relative w-full min-h-auto bg-white pb-16">
            <div className="max-w-5xl mx-auto py-18 lg:py-20">
              <div className="flex flex-col items-center justify-center gap-16">
                   <div className="mb-0 text-center z-10">
                    <h1 className="text-primary text-[56px] font-medium leading-[64px] mb-4">How Eazipay Works</h1>
                    <p className="text-grey text-[28px] font-aeonik font-normal tracking-wide leading-6">Get started in 3 simple steps.</p>
                  </div>
                  <div className="relative flex flex-col py-11 lg:flex-row items-center justify-between gap-[150px] lg:gap-[200px">
                    <div className="relative flex-1 bg-cover">
                        <WorkBGSVG />
                        <div className="absolute -top-10 w-full flex justify-center items-center">
                            <img src={WorksPhoneSVG} alt="" />
                        </div>
                    </div>
                    <div className=" relative flex-shrink-1">
                        <div className="flex flex-col gap-4 max-w-xl" >
                           <div className="w-16 h-16 py-4 px-[33px] flex items-center justify-center rounded-[16px] bg-primary
                           ring-1 ring-offset-0 ring-transparent
                           shadow-[0px_20px_48px_0px_rgba(170,170,170,0.29)]">
                             <span className="text-white text-[36px] font-bold font-aeonik leading-[48px]">1</span>
                           </div>
                           <h5 className="text-muted font-bold leading-6 text-[20px] font-aeonik">Create your free account</h5>
                           <p className="font-aeonik text-muted text-[16px] opacity-90 font-normal leading-6">Click here to set up your Eazipay account.</p>
                        </div>

                        <div className="flex flex-col gap-4 mt-16 max-w-xs">
                           <div className="w-16 h-16 py-4 px-[33px] flex items-center justify-center rounded-[16px] bg-[#F2F1F1]">
                             <span className="text-primary text-[36px] font-bold font-aeonik leading-[48px]">2</span>
                           </div>
                           <h5 className="text-muted font-bold leading-6 text-[20px] font-aeonik">Add Employee Data</h5>
                           <p className="font-aeonik text-muted text-[16px] opacity-90 font-normal leading-6">
                              Your employee information is 100% safe and secure.</p>
                        </div>

                        <div className="flex flex-col gap-4 mt-16 max-w-xs">
                           <div className="w-16 h-16 py-4 px-[33px] flex items-center justify-center rounded-[16px] bg-[#F2F1F1]">
                             <span className="text-primary text-[36px] font-bold font-aeonik leading-[48px]">3</span>
                           </div>
                           <h5 className="text-muted font-bold leading-6 text-[20px] font-aeonik">Prepare your Transaction</h5>
                           <p className="font-aeonik text-muted opacity-90 text-[16px] font-normal leading-6">Run payroll: Bulk Salaries and Compliance are done at once!.</p>
                        </div>
                        <div className='absolute top-8 -left-14'><Work1SVG /></div>
                        <div className='absolute bottom-[7.5rem] left-[4.5rem]'><Work2SVG /></div>
                    </div>
                  </div>
              </div>
            </div>
        </section>
        <section className="relative w-full min-h-auto overflow-hidden ">
           <div className='absolute z-0 inset-0 bg-top bg-cover bg-no-repeat h-full salarys_beams__'></div>
           <div className=" relative max-w-5xl mx-auto py-28 lg:py-40">
                <div className=" w-full flex flex-col lg:flex-row items-center justify-between">
                  <div className=" flex flex-col items-center lg:items-start gap-[42px]" style={{ flex:"1 1" }}>
                      <div className="mb-0 text-center lg:text-left z-40">
                        <h1 className="text-grey font-medium text-[56px] leading-[64px] max-w-lg lg:max-w-auto">
                            Free forever for your <span className="text-accent">salary payment</span>
                        </h1>
                      </div>
                      <div className="flex-shrink-0 text-center lg:text-left">
                         <p className="text-grey text-[18px] font-aeonik font-medium tracking-wide leading-6">
                            Subscribe to the Eazilife today
                        </p>
                        <div className="flex items-center gap-4 mt-4">
                            <ButtonLink url="/#">
                              <span className="w-12 h-12 bg-[#F2F1F1] rounded-full flex-shrink-0 flex items-center justify-center">
                                <AppStoreSVG />
                              </span>
                              <p className="py-0 font-aeonik text-muted">
                                <span className="block text-[12px] font-medium leading-4">Download on the</span>
                                <span className="leading-6 block text-[18px] font-bold">Appstore</span>
                              </p>
                            </ButtonLink>
                            <ButtonLink url="/#">
                              <span className="w-12 h-12 bg-[#F2F1F1] rounded-full 
                                  flex-shrink-0 flex items-center justify-center">
                                <GooglePlaySVG />
                              </span>
                              <p className="py-0 font-aeonik text-muted">
                                <span className="block text-[12px] font-medium leading-4">Get on</span>
                                <span className="leading-6 block text-[18px] font-bold">Google Play</span>
                              </p>
                            </ButtonLink>
                        </div>
                      </div>
                  </div>
                  <div className="mt-12 lg:mt-0">
                      <img src={SalarySVG} alt='' />
                  </div>
              </div>
            </div>
        </section>
        <section className="relative w-full min-h-[555px] overflow-hidden bg-white">
          <div className="max-w-5xl mx-auto py-28 lg:py-28 z-50">
              <div className=" w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                    <div className=" flex flex-col items-center lg:items-start gap-[42px] mr-0 mb-14 mt-10 lg:mt-0 lg:mb-0 lg:mr-7" style={{ flex:"1 1" }}>
                        <div className="mb-0 text-center lg:text-left max-w-lg mx-auto lg:max-w-auto">
                          <h1 className="text-primary font-medium text-[64px] leading-[72px] mb-6 ">
                              Get an Exclusive Demo of Eazipay
                          </h1>
                          <p className="text-muted text-[24px] font-aeonik font-normal">
                            Our greatest priority is to put you and your business first. Let’s show you how we can help.</p>
                        </div>
                    </div>
                    <div className="flex-1 w-10/12 sm:w-6/12 lg:w-auto z-40">
                        <div className="w-full lg:w-[552px] rounded-[32px] p-[32px] z-40 border-1 bg-white border border-[#E7E8E7]
                        shadow-[0px_20px_48px_0px_rgba(170,170,170,0.29)] ring-offset-0">
                            <div className="w-full text-center mx-auto">
                               <div className="mb-2 max-w-xs mx-auto">
                                 <h1 className="text-grey text-[28px] font-bold font-aeonik leading-[48px]">First things first</h1>
                                 <p className="text-[#444] font-aeonik text-[18px] font-normal leading-6">We want to serve you better. Tell us a bit about yourself or company</p>
                               </div>
                               <div className='tab wrapper'>
                                  <div className="w-full flex items-center p-2 rounded-[16px] border border-[#E7E8E7] gap-3 mt-4">
                                        <a href="/#" 
                                          className=" flex-1 flex  items-center justify-center py-2 px-[11.5px] rounded-[12px] bg-primary font-[14px] !text-white font-aeonik
                                          shadow-[0px_8.871848106384277px_40.5570182800293px_-2.534813642501831px_rgba(24,39,75,0.12),0px_5.069627285003662px_13.941474914550781px_-3.802220582962036px_rgba(24,39,75,0.12)]">
                                          Individual
                                        </a>
                                        <a href="/#" 
                                          className=" flex-1 flex  items-center justify-center py-2 px-[11.5px] rounded-[12px] bg-[#F2F1F1] font-[14px] !text-grey font-aeonik">
                                          Individual
                                        </a>
                                  </div>
                                  <div className="tab-panel tab-1 form-tab">
                                      <form className="mt-2 pt-6">
                                         <div className="form-group w-full mb-4">
                                           <input className="!px-4 pt-4 pb-4 m-0
                                              w-full rounded-2xl bg-white border border-[#B5B6B5] focus:border-[#B5B6B5] focus:outline-none
                                             text-[14px] font-aeonik font-normal leading-5"  
                                             type="text" value=""  placeholder="First Name" 
                                            />
                                         </div>
                                         <div className="form-group w-full mb-4 mt-2">
                                           <input className="!p-4 m-0 w-full rounded-2xl bg-white border border-[#B5B6B5]
                                             text-[14px] font-aeonik font-normal leading-5 focus:border-[#B5B6B5] focus:outline-none"  
                                             type="text" value=""  placeholder="Last Name" 
                                            />
                                         </div>
                                         <div className="form-group w-full mb-4 mt-4">
                                           <input className="!p-4 m-0 w-full rounded-2xl bg-white border border-[#B5B6B5] focus:border-[#B5B6B5] focus:outline-none
                                             text-[14px] font-aeonik font-normal leading-5"  
                                             type="email" value=""  placeholder="Email" 
                                            />
                                         </div>
                                         <div className="form-group w-full mb-4 mt-2">
                                           <input className="!p-4 pb-3 m-0 w-full rounded-2xl bg-white border border-[#B5B6B5]
                                             text-[14px] font-aeonik font-normal leading-5 focus:border-[#B5B6B5] focus:outline-none"  
                                             type="text" value=""  placeholder="Job Title" 
                                            />
                                         </div>
                                         <div className="form-group w-full mb-4 mt-2">
                                           <input className="!p-4 pb-3 m-0 w-full rounded-2xl bg-white border border-[#B5B6B5]
                                             text-[14px] font-aeonik font-normal leading-5  focus:border-[#B5B6B5] focus:outline-none"  
                                             type="text" value=""  placeholder="Company Size" 
                                            />
                                         </div>
                                         <button type="submit" className="w-full flex items-center justify-center py-3 px-7 rounded-3xl bg-primary font-[16px]
                                           !text-white font-aeonik">
                                            Request Demo
                                         </button>
                                      </form>
                                  </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
          <div className="absolute z-0 -top-8 lg:top-24 left-0"><DemoDotSVG /></div>
          <div className="absolute z-0 -top-24 -right-28 lg:top-0 lg:right-0 opacity-30"><DemoSVG /></div>
        </section>
      </div>
    </WrapperStyle>
  )
}


const WrapperStyle = tw.div`
  w-full
  px-0 py-0
`;

export default withLandingLayout(LandingPage, false);
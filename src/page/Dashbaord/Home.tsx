import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import { AppContent } from '../../component';
import { ReactComponent as CalenderSVG }from '../../assets/image/calendar-icon.svg';
import { ReactComponent as EyeIconSVG }from '../../assets/image/eye-icon.svg';
import { ReactComponent as Wave1SVG }from '../../assets/image/wave-1.svg';
import { ReactComponent as Wave2SVG }from '../../assets/image/wave-2.svg';
import { ReactComponent as AddIconSVG }from '../../assets/image/list-add.svg';
import { ReactComponent as PaySVG }from '../../assets/image/list-currency.svg';
import { ReactComponent as SendPaySVG }from '../../assets/image/list-sendpay.svg';
import { ReactComponent as LoanSVG }from '../../assets/image/list-currency-1.svg';
import { ReactComponent as SearchSVG }from '../../assets/image/search.svg';
import { ReactComponent as FilterSVG }from '../../assets/image/filter-icon.svg';
import { ReactComponent as ChervonSVG }from '../../assets/image/chevron_down.svg';


import Card from './common/Card';
import ListItems from './common/ListItems';
import {options, series } from './common/chart';


const Home = () => {
  const [show, setShow] = useState(true);
  const handleToggle = () => setShow(prev => !prev);

  const data = [
    {
      id:1,
      date: 'Wednesday, November 09, 2022',
      items: [
        {
          id:10,
          type: 'payroll',
          client: {
            name: 'Badmus Kemis',
            image: '',
          },
          activity: 'Paid November 2022 salary',
          emp:{
            type: 'EMPLOYEE',
            val: '52',
            status: 'normal',
          }
        },
        {
          id:11,
          type: 'EMPLOYEE MANAGEMENT',
          client: {
            name: 'Kalu Abasiama',
            image: '',
          },
          activity: 'Added new employee',
          emp:{
            type: 'EMPLOYEE',
            val: '04',
            status: 'normal',

          }
        }
      ]
    },
    {
      id:2,
      date: 'Friday, November 04, 2022',
      items: [
        {
          id: 12,
          type: 'BONUS',
          client: {
            name: 'Badmus Kemis',
            image: '',
          },
          activity: 'Added new bonus',
          emp:{
            type: 'BONUS NAME',
            val: 'XMAS Bonus',
            status: 'normal',
          }
        },
        {
          id: 13,
          type: 'WALLET',
          client: {
            name: 'Badmus Kemis',
            image: '',
          },
          activity: 'Paid November 2022 salary',
          emp:{
            type: 'AMOUNT',
            val: 'N11,1678,900.00',
            status: 'failed',
          }
        }
      ]
    },
    {
      id:3,
      date: 'Monday, October 30, 2022',
      items: [
        {
          id:14,
          type: 'payroll',
          client: {
            name: 'Badmus Kemis',
            image: '',
          },
          activity: '',
          emp:{
            type: 'EMPLOYEE',
            val: '11',
            status: 'normal',

          }
        }
      ]
    }
  ];
  

  
  return (
    <AppContent>
        <div className="pt-0 w-full">
          <div className="font-aeonik mb-8">
             <h1 className="text-grey text-[36px] font-bold leading-12">Welcome  Abasiama</h1>
             <p className="text-[16px] text-muted font-medium leading-6">Pay and manage your employee in minutes</p>
          </div>
          <div className="top-section w-full flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative overflow-hidden w-full bg-primary py-[36px] px-[32px] rounded-3xl
                border border-[#E7E8E7] shadow-[0px_20px_48px_0px_rgba(170,170,170,0.29)]">
                   <div className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-0 justify-between">
                      <div className="font-aeonik z-40 w-full md:w-auto">
                        <p className="text-base font-medium text-[#D9EBCD]">Wallet Balance</p>
                        <h5 className=" text-white text-[32px] font-bold leading-10 mt-3 flex items-center 
                          w-full justify-between md:w-auto md:justify-normal">
                            <span className="flex-1">{show ? "N12,560,078.00" :"**********"}</span>
                            <EyeIconSVG className="cursor-pointer ml-1" onClick={handleToggle} />
                        </h5>
                      </div>
                      <button className="w-full md:w-auto bg-[#D9EBCD] py-3 px-[28px] rounded-3xl  z-40
                      shadow-[0px_6px_12px_0px_rgba(0,0,0,0.20)] font-aeonik font-medium text-sm text-center
                      hover:shadow-[0px_6px_12px_0px_rgba(0,0,0,0.60)] transition-shadow ease-in-out">
                        Fund Wallet
                      </button>
                   </div>
                   <Wave1SVG className="absolute top-0 left-0 right-0 w-full z-0 opacity-20" />
                   <Wave2SVG className="absolute -bottom-1 w-full opacity-20 z-0" />
                </div>
                <div className=" flex flex-wrap lg:flex-nowrap lg:flex-row items-center mt-10 gap-7 justify-center lg:justify-between">
                  <Card 
                    name="Add Employee"
                    icon={<AddIconSVG />}
                  />
                  <Card 
                    name="Pay Salaries"
                    icon={<PaySVG />}
                  />
                  <Card 
                    name="Pay Compliances"
                    icon={<SendPaySVG />}
                  />
                  <Card 
                    name="Quick Loan"
                    icon={<LoanSVG />}
                  />
                </div>
              </div>

              <div className="flex-shrink-0 w-full md:w-[188px] rounded-3xl border border-[#E7E8E7]
              bg-white shadow-[0px_6px_12px_0px_rgba(170,170,170,0.11)]">
                <div className="pb-3 bg-white border-b border-[#E7E8E7]">
                  <div className="flex items-center text-center justify-center w-full py-2 px-[36px] 
                  rounded-[16px_16px_0px_0px] bg-[#D9EBCD] shadow-[0px_9px_18px_0px_rgba(170,170,170,0.15)]">
                    <span className="font-aeonik text-[16px] text-muted font-bold">Next Payroll</span>
                  </div>
                  <div className="flex flex-col items-center justify-center pt-6 pb-4 px-6 text-muted font-aeonik">
                      <p className="flex items-center gap-1 !m-0">
                         <CalenderSVG />
                         <span className="text-[12px] leading-9 font-normal">Friday</span>
                      </p>
                      <p className="font-bold text-[18px] leading-6 !mt-1">
                        09/11/2022
                      </p>
                  </div>
                </div>
                 <div className="bg-white p-4  rounded-[0px_24px_24px_24px]">
                   <div className="mx-auto font-aeonik">
                     <p className="text-muted text-base font-medium">Total Employee</p>
                     <div className="mt-1">
                       <h5 className="text-grey text-2xl !leading-10 font-bold">64</h5>
                       <div className="mt-0.5">
                          <div className="w-full flex items-center">
                            <div className="h-[8px] flex-1 bg-primary"></div>
                            <div className="h-[8px] flex-1 bg-accent"></div>
                          </div>
                          <div className="mt-1 flex w-full items-center font-aeonik
                          text-[10px] font-bold leading-3 text-[#8D8E8D]">
                             <p className="flex-1">
                               <span className="block">Male</span>
                               <span className="block">36</span>
                             </p>
                             <p className="flex-1">
                               <span className="block">Female</span>
                               <span className="block">32</span>
                             </p>
                          </div>
                       </div>
                     </div>
                   </div>
                 </div>
              </div>
          </div>


          {/* <!-- Chart --> */}
          <div className="Chart-section w-full mt-9 bg-white rounded-2xl border border-[#E7E8E7]
          px-4 md:px-12 pt-12 pb-8 shadow-[0px_9px_18px_0px_rgba(170,170,170,0.15)] h-[447px] flex flex-col font-aeonik">
            <div className="flex items-start justify-between mb-2">
              <div>
                <span className="text-muted text-base">Inflow</span>
                <h5 className="text-success text-[22px] sm:text-[28px] font-bold">N1,567,552</h5>
              </div>
              <div>
                <span className="text-muted text-base">Outflow</span>
                <h5 className="text-accent text-[22px] sm:text-[28px] font-bold">N1,567,552</h5>
              </div>
              <div>
                <button className="outlin-none text-primary text-sm flex items-center gap-2">
                  Inflow/Outflow
                  <ChervonSVG className="mt-0.5" />
                </button>
              </div>
            </div>
            <div className="flex-1 h-full chart-container ">
              <ReactApexChart
                  options={options}
                  series={series}
                  type="line"
                  width="100%"
                  height="100%"
                />
            </div>
              <div className="flex-shrink-1 flex items-center justify-end w-full">
                <button className="outline-none text-white py-[10px] px-6 bg-primary">2022</button>
              </div>
          </div>


             {/* <!-- Recent Activities --> */}
          <div className="Recent-Section mt-10 mb-16 w-full">
             <div className="mb-2 font-aeonik">
              <h1 className="text-[30px] leading-10 font-medium text-grey">Recent Activities</h1>
              <div className="mt-5 flex items-center justify-between gap-4">
                  <div className="flex-1 relative overflow-hidden border border-[#B5B6B5] rounded-2xl">
                        <input type="text" className="w-full font-aeonik text-sm
                          rounded-2xl py-3 pl-[32px] pr-[32px] outline-none placeholder:text-[#B9BBC0] text-grey" 
                          placeholder="Search employee"
                         />
                         <button className="absolute right-0 bg-[#D9EBCD] w-[102px] py-3 h-full px-[32px]
                         rounded-[0px_16px_16px_0px] text-center">
                           <span className="flex w-full items-center justify-center">
                            <SearchSVG />
                           </span>
                         </button>
                  </div>
                   <button className="flex-shrink-1 bg-white py-3 px-4 border border-[#B5B6B5]
                     text-center rounded-2xl flex items-center justify-center gap-2 text-[#8D8E8D]" style={{flex:"0.055"}}>
                      <FilterSVG />
                      <span className="font-aeonik text-sm">Filter</span>
                   </button>
              </div>
              <div className="h-[752px] mt-8 w-full rounded-[20px] bg-[#F2F1F180] py-2">
                <div className="w-full overflow-x-hidden 
               overflow-y-auto h-full mt-4 lg:px-6 px-3">
                  {data.map(item => (
                    <ListItems key={item.id} item={item} />
                  ))}
                </div>
                 
              </div>
             </div>
          </div>
        </div>
    </AppContent>
  )
}

export default Home;
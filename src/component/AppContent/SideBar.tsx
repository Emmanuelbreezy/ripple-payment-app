import React from 'react'
import SubMenu from './common/SubMenu'
import { ReactComponent as DashSVG }from '../../assets/image/dash-icon.svg';
import { ReactComponent as SettingSVG }from '../../assets/image/settings-icon.svg';
import { ReactComponent as QuickLoanSVG }from '../../assets/image/quick-loan.svg';
import { ReactComponent as PayrollSVG }from '../../assets/image/payroll-icon.svg';
import { ReactComponent as BookSVG }from '../../assets/image/book-icon.svg';
import { ReactComponent as PhoneSVG }from '../../assets/image/phone-icon.svg';
import { ReactComponent as WalletSVG }from '../../assets/image/wallet-icon.svg';
import { ReactComponent as ComplianceSVG }from '../../assets/image/compliance.svg';
import { ReactComponent as UserSVG }from '../../assets/image/user-plus-icon.svg';
import { ReactComponent as ChervonSVG }from '../../assets/image/chevron_down.svg';
import { ReactComponent as LogoSVG }from '../../assets/image/logo-light.svg';
import { ReactComponent as CloseSVG }from '../../assets/image/close-icon.svg';

const SideBar = (props:{openSidebar:boolean; handletoggle:(val:boolean) => void}) => {
  const { openSidebar,handletoggle } = props;
  return (
    <>
      <div className={`
      ${
        openSidebar ? 'translate-x-0' : '-translate-x-full'
      }
      z-50  transform fixed top-0 left-0 transition-transform ease-in-out duration-300
      lg:translate-x-0 lg:relative lg:flex lg:flex-col flex-shrink-0 h-full w-[272px]
      border-r shadow-[4px_0px_25px_0px_rgba(170,170,170,0.08)] bg-white ring-inherit ring-offset-0`}>
        <div  className="relative  bg-primary h-[120px]
       ">
          <div className="flex items-center justify-center  mask_beams__ h-[150.702px] ">
            <a href="/"><LogoSVG /></a>
            <button className={`
             ${
              openSidebar ? 'translate-x-0' : '-translate-x-[150%]'
            }
            z-50 transition-transform ease-in-out duration-300 lg:hidden
            absolute w-16 h-16 p-4 text-center bg-white rounded-full outline-none top-3 -right-20
            shadow-[0px_9px_18px_0px_rgba(190,190,190,0.55)] border`} onClick={() =>handletoggle(false)}>
              <CloseSVG className="text-muted mx-auto" />
            </button>
          </div>
        </div>
        <div className="mt-16">
          <ul className="w-full list-none">
              <SubMenu
                  prefix={<DashSVG className="!fill-primary" />}
                  name="Dashboard"
                  active={true}
              />
              <SubMenu
                  prefix={<WalletSVG />}
                  name="Wallet"
              />
              <SubMenu
                  prefix={<UserSVG />}
                  name="Employee Management"
                  suffix={<ChervonSVG />}
              />
              <SubMenu
                  prefix={<PayrollSVG />}
                  name="Payroll"
                  suffix={<ChervonSVG />}
              />
              <SubMenu
                  prefix={<ComplianceSVG />}
                  name="Compliance"
                  suffix={<ChervonSVG />}
              />
              <SubMenu
                  prefix={<QuickLoanSVG />}
                  name="Quick Loan"
                  suffix={<ChervonSVG />}
              />
              <SubMenu
                  prefix={<BookSVG />}
                  name="Book Keeping"
                  isLast={true}
                  suffix={<ChervonSVG />}
              />
          </ul>
        </div>
        <div className="pt-9">
          <ul className="w-full list-none">
              <SubMenu
                  prefix={<PhoneSVG />}
                  name="Support"
              />
              <SubMenu
                  prefix={<SettingSVG />}
                  name="Settings"
                  suffix={<ChervonSVG />}
                  isLast={true}
              />
          </ul>
        </div>
        <div className={`
         ${
          openSidebar ? 'visible' : 'hidden'
        }
        transform  transition-transform ease-in-out duration-300 lg:hidden
        fixed z-40 top-0 left-full -right-0 w-full h-full bg-black/[0.4]`}></div>
      </div>
    </>
  )
}

export default SideBar
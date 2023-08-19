import React from 'react'

const Item = (props:{data:any}) => {
    const { data } = props
  return (
    <div className="pt-2.5 pb-5 px-6 lg:px-12 bg-white border border-[#E7E8E7] 
    shadow-[0px_9px_18px_0px_rgba(170,170,170,0.15)] rounded-2xl font-aeonik overflow-x-auto overflow-y-hidden
    lg:w-full w-[100vw]">
        <div className="text-[12px] leading-4 text-[#8D8E8D] w-full mb-3 uppercase">
            <span>{data.type}</span>
        </div>
        <div className="flex items-center  gap-6 lg:gap-[100px] justify-between">
            <div className="flex-0 lg:w-1/4 flex items-center mt-3 -mb-5 gap-2">
                <span className="flex items-center justify-center uppercase
                 w-10 h-10 rounded-full bg-success text-white">
                   {data.client.image ? <img src="" alt="" /> : 'bm' }
                </span>
                <h5 className="text-[16px] leading-6 text-grey">{data.client.name}</h5>
            </div>
            <div className="flex-1">
                <span className="text-[12px] leading-4 text-[#8D8E8D] uppercase">ACTIVITY</span>
                <h5 className="text-[16px] text-grey leading-6 mt-3 ">{data.activity}</h5>
            </div>
            <div className="flex-[0.5]">
                <span className="text-[12px] leading-4 text-[#8D8E8D] uppercase">{data.emp.type}</span>
                <h5 className={`text-[16px] leading-6 mt-3 ${data.emp.status === 'failed' ? '!text-accent': 'text-grey '}`}>{data.emp.val}</h5>
            </div>
            <div className="flex-none">
                <span className="text-[12px] leading-4 text-[#8D8E8D] uppercase">TIME</span>
                <h5 className="text-[16px] text-grey leading-6 mt-3">16:15</h5>
            </div>
        </div>
    </div>
  )
}

export default Item
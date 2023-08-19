import React from 'react'
import Item from './Item'

const ListItems = (props:{item:any;}) => {
    const { item} = props
  return (
    <div className="mt-10">
        <h5 className="font-aeonik text-[18px] font-medium leading-6 text-muted">{item.date}</h5>
        <div className="list-activities flex flex-col gap-3 mt-6">
            {item.items.map((res:any) => (
                <Item
                   key={res.id}
                   data={res}
                />
            ))}
        </div>

    </div>
  )
}

export default ListItems;
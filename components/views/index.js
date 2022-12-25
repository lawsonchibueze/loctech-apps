import { useState } from "react"
import All from "./All"

const tabs = [
    'All',
    'Trending',
    'Popularity',
    'Featured',
    'Art & Design'
]

const allTabs = [
    {
        component: <All />
    }
]

export default function Views() {
    const [openTab, setOpenTab] = useState(0)
    return (
        <div className='lg:px-20 px-4 mt-20'>
            <div className="flex justify-between items-center">
                <h1 className='text-3xl font-semibold text-gray-900 mb-10'>Students are Viewing</h1>
                <div className="flex gap-4">
                    {tabs.map((tab, index) => {
                        return (
                            <div
                                className={"hover:shadow-lg py-1 px-4 flex items-center cursor-pointer text-base font-semibold " +
                                    (openTab === index && 'text-[#0071dc] shadow-xl border border-gray-100')
                                }
                                onClick={(e) => setOpenTab(index)}
                                key={index}
                            >
                                {tab}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                {allTabs.map((item, index) => {
                    return (
                        <div
                            className={index === openTab ? "block" : "hidden"}
                            key={index}
                        >
                            {item.component}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
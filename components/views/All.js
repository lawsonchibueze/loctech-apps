import Image from 'next/image'
import { data } from '../data'

export default function All() {
    return (
        <div>
            <div className='grid lg:grid-cols-5 grid-flow-row gap-8'>
                {data.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className='flex flex-col gap-2'
                        >
                            <div className="relative">
                                <Image
                                    src={item.image}
                                    width={250}
                                    height={250}
                                    alt=''
                                    className="rounded-md"
                                />
                                {item.discount && (
                                    <div className="absolute text-white bg-[#0071dc] top-2 left-3 px-2 font-semibold rounded-sm text-sm">
                                        {item.discountPercent}
                                    </div>
                                )}
                                {item.free && (
                                    <div className="absolute text-white bg-[#6CBD7E] top-2 left-3 px-2 font-semibold rounded-sm text-sm">
                                        FREE
                                    </div>
                                )}
                            </div>
                            {item.level === 'All Levels' && (
                                <span className='font-semibold px-2 text-[#17b8c1] bg-[#17b8c126] self-start'>All Levels</span>
                            )}
                            {item.level === 'Beginner' && (
                                <span className='font-semibold px-2 text-[#5b63fe] bg-[#5b63fe26] self-start'>Beginner</span>
                            )}
                            <p className="font-semibold">{item.text}</p>
                            <h3 className="text-[#0071dc]">{item.tutor}</h3>
                            {item.free && (
                                <h4 className="font-bold flex flex-row items-center text-lg text-[#696969]">Free</h4>
                            )}
                            {item.discount ? (
                                <div className="flex flex-row gap-4">
                                    <h4 className="font-bold flex flex-row items-center text-lg text-[#d31819]">{item.newPrice} <span className="text-xs">{item.newPriceSm}</span></h4>
                                    <h4 className="font-bold flex flex-row items-center text-lg line-through text-[#ababab]">{item.oldPrice} <span className="text-xs">{item.oldPriceSm}</span></h4>
                                </div>
                            ) : (
                                <h4 className="font-bold flex flex-row items-center text-lg">{item.price} <span className="text-xs">{item.priceSm}</span></h4>
                            )}
                            {/* <div className="flex items-center border">
                        <Image
                            src={stars}
                            alt=""
                            className="w-20 h-20"
                        />
                        (2)
                    </div> */}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
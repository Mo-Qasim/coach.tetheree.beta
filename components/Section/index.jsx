import { H2, H3, H6, Button } from '../Typography'

export const MultiSection = ({ title, subTitle, btnTitle, list = ['Communicate with your coach 1-1', 'We build it with complex problems solutions in mind', 'Communicate with your coach 1-1', 'We build it with complex problems solutions in mind'], orderReverse, imgUrl, containerClassName }) => {

    return (
        <>
            <div className="container max-w-[1200px] mx-auto">
                <section className={`${containerClassName} w-full h-full flex justify-between gap-36 rounded-3xl py-76 px-20`}>
                    <div className={`${orderReverse && 'order-2'} w-full h-full`}>
                        <H3 className='font-semibold w-full lg:w-11/12 mt-14 mb-16'>{title}</H3>
                        <H6 className='font-normal w-full lg:w-11/12 mb-24'>{subTitle}</H6>
                        <ul>
                            {list?.map((item, _index) => (
                                <li key={_index} className='flex text-gray font-normal text-2xs mb-12'>
                                    <img className='w-20 h-20 mr-14' src='/assets/tick-icon.svg' alt="" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`${orderReverse && 'order-1'} relative w-full h-full`}>
                        <img className='relative z-10 w-full max-w-full' src='/assets/video-assessment.png' alt="" />
                        <img className={`absolute bottom-0 ${orderReverse ? '-left-68' : '-right-68'}`} src='/assets/svg/graphic-dots.svg' alt="" />
                    </div>
                </section>
            </div>
        </>
    )
}

export const SingleSection = ({ title, subTitle, btnTitle, borderTop, containerClassName, btnClassName }) => {

    return (
        <>
            <div className="container max-w-[800px] mx-auto">
                {borderTop && <hr className='text-[#CECECE] w-3/4 max-w-[300px] mx-auto' />}
                <section className={`${containerClassName} w-full flex flex-col items-center justify-center py-46 px-20`}>
                    <H2 className='font-semibold mb-16'>{title}</H2>
                    <H6 className='font-normal w-full lg:w-11/12 text-center mb-42'>{subTitle}</H6>
                    <Button className={btnClassName}>{btnTitle}</Button>
                </section>
            </div>
        </>
    )
}
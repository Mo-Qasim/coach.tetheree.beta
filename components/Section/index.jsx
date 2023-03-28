import { H2, H3, H6, Button } from '../Typography'

export const MultiSection = ({ title, subTitle, btnTitle, list = ['Communicate with your coach 1-1', 'We build it with complex problems solutions in mind', 'Communicate with your coach 1-1', 'We build it with complex problems solutions in mind'], orderReverse, imgUrl, containerClassName }) => {

    return (
        <>
            <div className="container mx-auto px-20 md:px-24 lg:px-32">
                <section className={`${containerClassName} relative w-full h-full flex flex-col lg:flex-row items-center justify-between gap-36 rounded-3xl py-76 px-20`}>
                    <div className={`${orderReverse && 'order-2'} w-full h-full`}>
                        <H3 className='font-semibold w-full lg:w-11/12 mt-14 mb-16'>{title}</H3>
                        <H6 className='font-normal w-full lg:w-11/12 mb-24'>{subTitle}</H6>
                        <ul>
                            {list?.map((item, _index) => (
                                <li key={_index} className='flex items-center mb-12 stroke-[#052F74]'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 21C16.5 21 21 16.5 21 11C21 5.5 16.5 1 11 1C5.5 1 1 5.5 1 11C1 16.5 5.5 21 11 21Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7 10.9999L9.83 13.8299L15.5 8.16992" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className='text-gray font-normal leading-34 text-sm md:text-2xs ml-14'>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`${orderReverse && 'order-1'} relative w-full h-full`}>
                        <img className='relative z-10 w-full max-w-full' src='/assets/video-assessment.png' alt="" />
                    </div>
                    <img className={`absolute hidden lg:block -scale-75 bottom-0 ${orderReverse ? '-left-46' : '-right-46'}`} src='/assets/svg/graphic-dots.svg' alt="" />
                </section>
            </div>
        </>
    )
}

export const SingleSection = ({ title, subTitle, btnTitle, borderTop, titleClassName, containerClassName, btnClassName }) => {

    return (
        <>
            <div className="container max-w-[800px] mx-auto">
                {borderTop && <hr className='text-[#CECECE] w-3/4 max-w-[300px] mx-auto' />}
                <section className={`${containerClassName} w-full flex flex-col items-center justify-center py-46 px-20`}>
                    <H2 className={`${titleClassName} font-semibold text-center mb-16`}>{title}</H2>
                    <H6 className='font-normal w-full lg:w-11/12 text-center mb-42'>{subTitle}</H6>
                    <Button className={`${btnClassName} !h-70 !text-md`}>{btnTitle}</Button>
                </section>
            </div>
        </>
    )
}
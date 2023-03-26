import { H2, H6, Button, Paragraph, Caption } from '../Typography'

const Index = ({ }) => {
    const list = [{ type: 'Basic', amount: 20 }, { type: 'Intermediate', amount: 50 }, { type: 'Professional', amount: 60 }, { type: 'Enterprise', amount: 100 }]

    return (
        <>
            <section className=''>
                <main className='bg-theme pt-99 pb-120'>
                    <div className="container max-w-[1200px] mx-auto">
                        <H2 className='text-center leading-55 mb-6'>Our pricing</H2>
                        <H6 className='w-full lg:w-11/12 lg:max-w-[600px] font-normal text-center mx-auto mb-42'>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.</H6>

                        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-28'>
                            {list?.map((item, _index) => (
                                <Card item={item} active={_index === 2} />
                            ))}
                        </section>
                    </div>
                </main>
            </section>
        </>
    )
}

const Card = ({ item, active }) => {
    const list = ['Lorem ipsum dolor', 'Lorem ipsum ', 'Lorem ipsum dolor ', 'Lorem ipsum dolor sit']

    return (
        <>
            <div className={`${active && 'shadow-card'} relative w-full bg-white flex flex-col rounded-lg overflow-hidden transition-all px-36 pt-40 pb-52`}>
                {active && (<div className='bg-[#052F74] absolute top-0 right-0 text-white' style={{ writingMode: 'vertical-lr' }}><Paragraph className='font-medium leading-34 py-16'>Most Popular</Paragraph></div>)}
                <h3 className='text-black font-medium text-25 leading-42 mb-8'>{item?.type}</h3>
                <div className='flex items-center gap-13 mb-18'>
                    <H2 className='!text-black'>${item?.amount}</H2>
                    <Caption className='!text-black'>/ month</Caption>
                </div>
                <Caption className='!text-[#363636] leading-6 mb-18'>A private tutoring session with your dedicated mentor</Caption>
                <ul className='mb-72'>
                    {list?.map((item, _index) => (
                        <li key={_index} className='flex first:border-t border-b border-[#F8F8F8] items-center text-[#363636] font-light text-13 py-13'>
                            <img className='mr-13' src='/assets/svg/tick-green.svg' alt="" />
                            {item}
                        </li>
                    ))}
                    {active && (
                        <>
                            <li className='flex first:border-t border-b border-[#F8F8F8] items-center text-[#363636] font-light text-13 py-13'>
                                <img className='mr-13' src='/assets/svg/tick-green.svg' alt="" />
                                Lorem ipsum dolor sit
                            </li>
                            <li className='flex first:border-t border-b border-[#F8F8F8] items-center text-[#363636] font-light text-13 py-13'>
                                <img className='mr-13' src='/assets/svg/tick-green.svg' alt="" />
                                Lorem ipsum dolor sit
                            </li>
                        </>
                    )}
                </ul>
                <Button className={`${!active && '!bg-[#000]'} self-center mt-12`}>Book Now</Button>
            </div>
        </>
    )
}

export default Index;
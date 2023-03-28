import { useState } from 'react'
import { H2, H6, Button, Paragraph, Caption } from '../Typography'

const Index = ({ }) => {

    return (
        <>
            <section>
                <div className="container mx-auto px-20 md:px-24 lg:px-32">
                    <section className='w-full relative z-10 lg:max-w-[600px] mx-auto mt-99 lg:-mb-162'>
                        <div>
                            <H2 className='text-center mb-6'>Get Started</H2>
                            <H6 className='w-full lg:w-11/12 font-normal text-center mb-32'>Save time and achieve greater results on behalf of you and your athletes</H6>
                            <div className='relative'>
                                <img className='hidden md:block absolute -scale-75 -top-18 -right-[88px]' src='/assets/svg/graphic-dots.svg' alt="" />
                                <img className='hidden md:block absolute -scale-75 translate-y-2/4 bottom-99 lg:bottom-220 -left-120 -z-10' src='/assets/svg/graphic-dots.svg' alt="" />
                                <main className='bg-[#FAFAFA] relative flex flex-col lg:rounded-lg p-26 lg:p-46'>
                                    <Caption className='text-[#343434] mb-28'>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.</Caption>
                                    <div className='flex flex-col lg:flex-row justify-between lg:gap-14'>
                                        <div className='w-full mb-18'>
                                            <Input label='First name' placeholder='first name' forId='fistname' />
                                        </div>
                                        <div className='w-full mb-18'>
                                            <Input label='Last name' placeholder='last name' forId='lastname' />
                                        </div>
                                    </div>

                                    <div className='w-full mb-18'>
                                        <Input label='Phone number' placeholder='00 000 000' forId='phone' />
                                    </div>

                                    <div className='w-full mb-18'>
                                        <Input label='Work email' placeholder='Your email address' forId='email' />
                                    </div>

                                    <div className='flex flex-col lg:flex-row justify-between lg:gap-14'>
                                        <div className='w-full mb-18'>
                                            <Input label='Password' placeholder='***********' forId='password' type='password' />
                                        </div>
                                        <div className='w-full mb-18'>
                                            <Input label='Confirm password' placeholder='***********' forId='confirm_password' type='password' />
                                        </div>
                                    </div>
                                    <Button className='self-end !text-16 lg::self-center !rounded lg:!rounded-full mt-12'>Register Now</Button>
                                </main>
                            </div>
                        </div>
                    </section>
                </div>

                <div className=' hidden lg:block w-full bg-black'>
                    <img className='w-full object-cover opacity-50' src='/assets/lg-register.png' alt="" />
                </div>

                <div className='block lg:hidden container mx-auto px-20 md:px-24 lg:px-32 mb-136'>
                    <img className='w-full object-cover opacity-60' src='/assets/sm-register.png' alt="" />
                </div>

            </section>
            <footer className='bg-primary'>
                <div className="container mx-auto px-20 md:px-24 lg:px-32">
                    <div className='pt-64'>
                        <section className=' w-full grid grid-cols-2 lg:grid-cols-4 gap-10'>
                            <div className='col-span-2 lg:col-span-1 mb-60 lg:mb-76'>
                                <img className='mb-14' src="/assets/svg/logo-footer.svg" alt="" />
                                <Paragraph className='w-full lg:w-3/4 text-white mb-20'>2238 Partha Nethan Street, Coimbatore - 638186 Tamil Nadu, India.</Paragraph>
                                <div className='flex items-baseline gap-28'>
                                    <svg className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <svg className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005V3.00005Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <svg className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16 11.3701C16.1234 12.2023 15.9813 13.0523 15.5938 13.7991C15.2063 14.5459 14.5932 15.1515 13.8416 15.5297C13.0901 15.908 12.2385 16.0397 11.4078 15.906C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1903 8.22774 13.4229 8.09408 12.5923C7.96042 11.7616 8.09208 10.91 8.47034 10.1584C8.8486 9.40691 9.4542 8.7938 10.201 8.4063C10.9478 8.0188 11.7978 7.87665 12.63 8.00006C13.4789 8.12594 14.2649 8.52152 14.8717 9.12836C15.4785 9.73521 15.8741 10.5211 16 11.3701Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17.5 6.5H17.51" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <svg className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6 9H2V21H6V9Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </div>
                            <div className='col-span-1 lg:mx-auto mb-60 lg:mb-76'>
                                <div className='inline-block'>
                                    <H6 className='text-white font-semibold mb-18 lg:mb-24'>Useful Links</H6>
                                    <ul>
                                        {['Payment & Tax', 'Terms of Service', 'Your Account', 'Privacy Policy']?.map((item, _index) => (
                                            <li key={_index} className='text-xs text-white font-normal transition-all cursor-pointer hover:underline hover:opacity-90 mb-12'>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className='col-span-1 lg:mx-auto mb-60 lg:mb-76'>
                                <div className='inline-block'>
                                    <H6 className='text-white font-semibold mb-18 lg:mb-24'>Our Company</H6>
                                    <ul>
                                        {['About us', 'Media', 'Blog', 'Contact us']?.map((item, _index) => (
                                            <li key={_index} className='text-xs text-white font-normal transition-all cursor-pointer hover:underline hover:opacity-90 mb-12'>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className='col-span-2 lg:col-span-1 lg:ml-auto mb-44 lg:mb-76'>
                                <div className='block'>
                                    <H6 className='text-white font-semibold mb-18 lg:mb-24'>Subscribe to our Newsletter</H6>
                                    <div className='relative w-full h-60 mb-14'>
                                        <input className='w-full lg:w-full h-full focus:outline-none rounded-lg px-20' type="email" placeholder='Email Address' />
                                        <svg className='absolute top-2/4 -translate-y-2/4 right-20' width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1_549)">
                                                <path d="M31.1127 16.9706H15.5564" stroke="#161313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M31.1127 16.9705L12.0208 26.1629L15.5564 16.9705L12.0208 7.77812L31.1127 16.9705Z" stroke="#161313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_549">
                                                    <rect width="24" height="24" fill="white" transform="translate(16.9706) rotate(45)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <ul>
                                        {['help@visume.link', '396-987 456 885']?.map((item, _index) => (
                                            <li key={_index} className='text-xs text-white font-normal transition-all cursor-pointer hover:underline hover:opacity-90 mb-12'>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <H6 className='text-white font-normal text-center pb-26 lg:pb-46'>© 2023 Coach.</H6>
                    </div>
                </div>
            </footer>
        </>
    )
}

const Input = ({ label, placeholder, forId, type }) => {
    const [code, setCode] = useState(null)
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <label className='block text-12 text-[#222222] font-normal mb-12' for={forId}>{label}</label>
            <div className='relative w-full h-46'>
                <input className={`w-full h-full focus:outline-none text-2xs rounded placeholder:text-2xs ${label === 'Phone number' ? 'pl-84 pr-16' : 'px-16'}`} type={type ? type : 'text'} id={forId} placeholder={placeholder} />
                {label === 'Phone number' && (
                    <>
                        <div onClick={() => setToggle(!toggle)} className='absolute w-80 left-0 top-0 flex items-center justify-center gap-6 h-full rounded-tl rounded-bl cursor-pointer pb-2'>
                            <span className='relative top-2 text-2xs text-gray opacity-80'>+{code ? code : '00'}</span>
                            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.2" d="M8 0L3.97 6L0 0H8Z" fill="black" />
                            </svg>
                        </div>
                        {toggle && (
                            <div className='absolute bg-white top-46 w-80 shadow-sm rounded-bl rounded-br z-50 pb-6'>
                                <ul>
                                    {[{ id: 1, code: 353 }, { id: 2, code: 354 }, { id: 3, code: 355 }]?.map(({ code }, _index) => (
                                        <li key={_index} onClick={() => { setCode(code); setToggle(false) }} className='flex items-center justify-center gap-6 transition-all cursor-pointer hover:bg-[#FBFBFB] hover:opacity-90 first:border-t border-b border-[#F8F8F8] py-6 px-4'>
                                            <img className='w-20 object-cover' src={`/assets/countries/${code}.svg.webp`} alt="" />
                                            <span className='text-12 text-gray font-medium'>{`+${code}`}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    )
}

export default Index;
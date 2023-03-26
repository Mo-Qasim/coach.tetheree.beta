import Navbar from '../Navbar'
import { H1, H4, H5, Caption, Button } from "../Typography";

const Index = () => {
    return (
        <header className="bg-[#E7F4FB] relative pt-26">
            <Navbar />
            <div className="container max-w-[800px] mx-auto mb-32">
                <section className='w-full flex flex-col items-center justify-center pt-136 px-20'>
                    <H5 className='text-black font-medium'>increase athletic performance</H5>
                    <H1 className='mb-16'>Extend your influence</H1>
                    <H4 className='w-full md:w-3/4 text-center !text-[#6D6D6D] mb-42'>Allow your athletes to revisit their performance and reflect upon your caching advice on their own time</H4>
                    <div className="relative w-3/4 max-w-[600px] h-70 mb-10">
                        <input className='w-full h-full rounded-full focus:outline-none placeholder:text-[#052F74] pl-24' type="email" placeholder="Email Address" />
                        <Button className='absolute top-3 right-3 h-64'>Get Started</Button>
                    </div>
                    <Caption className='!text-black !font-light mb-16'>free 7 days trial no credit card required</Caption>
                    <img className="w-full max-w-full h-full object-contain z-10" src="/assets/header.png" alt="" />
                    <div className="bg-white w-full h-64 absolute bottom-0">
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Index;
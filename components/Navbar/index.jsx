import { Button } from "../Typography";

const Index = () => {
    return (
        <nav className="bg-white lg:bg-transparent py-20 lg:py-28">
            <div className="container mx-auto px-20 md:px-24 lg:px-32">
                <div className="flex items-center justify-between">
                    <img className='scale-75 md:scale-100' src="/assets/svg/logo-nav.svg" alt="" />
                    <ul className="hidden lg:flex items-center gap-30">
                        {['Product', 'Use Case', 'Workflow', 'Pricing']?.map((item, _index) => (
                            <li key={_index} className='text-sm text-black font-normal transition-all cursor-pointer hover:underline hover:opacity-90'>{item}</li>
                        ))}
                    </ul>
                    <div className="flex items-center">
                        <span className='hidden lg:block text-sm text-black font-normal transition-all cursor-pointer hover:underline hover:opacity-90'>Sign in</span>
                        <Button className='!h-40 !text-14 md:!text-16 ml-16 mr-6 px-26 md:px-36'>Register Now</Button>
                        <div className="bg-primary grid lg:hidden place-content-center w-40 h-40 rounded-full cursor-pointer">
                            <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="18" height="2" rx="1" fill="white" />
                                <rect y="4" width="18" height="2" rx="1" fill="white" />
                                <rect y="8" width="18" height="2" rx="1" fill="white" />
                            </svg>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Index;
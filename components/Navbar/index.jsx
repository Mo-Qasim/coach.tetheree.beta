import { Button } from "../Typography";

const Index = () => {
    return (
        <div className="container max-w-[1200px] mx-auto">
            <nav className="flex items-center justify-between">
                <img src="/assets/svg/logo-nav.svg" alt="" />
                <ul className="flex items-center gap-30">
                    {['Product', 'Use Case', 'Workflow', 'Pricing']?.map((item, _index) => (
                        <li key={_index} className='text-sm text-black font-normal transition-all cursor-pointer hover:underline hover:opacity-90'>{item}</li>
                    ))}
                </ul>
                <div className="flex items-center gap-16">
                    <span className='text-sm text-black font-normal transition-all cursor-pointer hover:underline hover:opacity-90'>Sign in</span>
                    <Button>Register Now</Button>
                </div>
            </nav>
        </div>
    )
}

export default Index;
import Showcase from '../../components/Showcase'
import OurPricing from '../../components/OurPricing'
import Footer from '../../components/Footer'
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { MultiSection, SingleSection } from '../../components/Section'
import useSticky from '../hooks/useSticky'

const Index = () => {
  const {sticky, stickyRef} = useSticky()

  return (
    <>
      <div className='bg-[#0d1226] text-white'>
        <div className="px-30 py-12">
          <div className='flex justify-center gap-20'>
            <span className='text-12'>BREMONT'S ICONS OF MOTORSPORT</span>
            <span className='opacity-60'>|</span>
            <span className='text-12'>DISCOVER THE NEW WATCHES </span>
          </div>
        </div>
      </div>

      <header>
        <div className='bg-black border-t border-white'>
          <div className="flex items-center justify-between py-10 px-30">
              <img className='w-26' src="//www.bremont.com/cdn/shop/files/Bremont-British.jpg?v=1643966364&width=56" alt="" />
              <ul className='flex items-center text-white'>
                <li className='text-14 opacity-70 cursor-pointer px-10'>Blog</li>
                <li className='text-14 opacity-70 cursor-pointer px-10'>Help</li>
                <li className='text-14 opacity-70 cursor-pointer px-10'>Stores</li>
              </ul>
          </div>
        </div>

        <nav ref={stickyRef} className='w-full flex items-center justify-between gap-5 h-70 px-30'>
          <ul className='flex items-center'>
            {['WATCHES', 'COLLECTIONS', 'ACCESSORIES', 'INSIDE BREMONT', 'MILITARY']?.map((item, _index) => (
              <li key={_index} className="text-12 text-black px-10">{item}</li>
            ))}
          </ul>
            <img className='object-contain max-w-140 max-h-50' src="/assets/logo.svg" alt="" />
          <div className='flex items-center justify-end'>
            <div className='relative'>
              <input className='text-black w-240 h-40 border border-[#1212121a] outline-none rounded-[40px] text-xs px-20 mr-4' type="text" value='Search' />
              <div className='absolute top-2/4 -translate-y-2/4 right-20'>
                <AiOutlineSearch className='text-20' />
              </div>
            </div>
            <img className='object-cover w-16 h-16' src="/assets/heart.svg" alt="" />
              <span className='inline-flex px-10'>
                <AiOutlineHeart className='text-20' />
              </span>
              <span className='inline-flex px-10'>
                <AiOutlineShoppingCart className='text-20' />
              </span>
          </div>
          {sticky && (
              <div
                style={{
                  height: `${stickyRef.current?.clientHeight}px`
                }}
              />
            )}
        </nav>

      <div className='bg-img-wrapper flex min-h-[65vh] min-h bg-black bg-cover bg-center bg-no-repeat mb-24'>
          <div className='max-w-700 self-center text-white text-center py-60 px-30 mx-auto'>
            <p className='text-12 uppercase mb-15'>The tool watch designed for life above and below the waves</p>
            <h3 className='text-xl uppercase mb-15'>SUPERMARINE</h3>
            <button className='bg-white border border-black text-12 text-black hover:bg-black hover:text-white hover:border-white px-24 py-14 rounded-full'>SHOP SUPERMARINE</button>
          </div>
        </div>
      </header>

      <div className='my-100'>
        <div className='max-w-700 text-center px-30 mx-auto'>
          <h3 className='text-lg text-black'>TESTED BEYOND ENDURANCE</h3>
          <p className='text-muted text-14 mt-15'>At Bremont, we live for the pursuit of adventure and our indomitable British spirit can be felt in every watch that leaves the workshop. We create highly durable and precise tool watches, designed to be a reliable companion on any mission or in any environment. As such, our watches have been tried and tested by the most fearless adventurers and explorers, as well as being relied upon by over 400 military squadrons worldwide.</p>
        </div>
      </div>  

      <div className='container mx-auto'>
        <div className='grid grid-cols-4 gap-8 pb-100'>
            {[1,2,3,4]?.map((item, _index) => (
              <div className="card w-full bg-gray group mb-40">
                <div className='relative w-333 h-333'>
                  <img className='object-cover group-hover:opacity-1 absolute opacity-0 z-10' src="//www.bremont.com/cdn/shop/files/S302-strap_main_v2.webp?v=1687347754&width=1000" alt="" />
                  <img className='object-cover' src='https://www.bremont.com/cdn/shop/products/14-Peaks-Nims-Netflix-Documentary-S300-white-supermarine.png?v=1638870693&width=900' />
                </div>
                  <div className='w-full px-15 pt-20 pb-30'>
                    <p className='text-12 text-center'>S302</p>
                    <p className='text-center text-14 text-muted'>Specialised GMT diver Case Size 40mm</p>
                    <p className='text-black text-14 text-center mt-25 mx-auto'>£3,595.00</p>
                    <div className='my-14 mx-24'>
                      <button className='bg-black border border-black hover:bg-transparent hover:text-black w-full text-12 text-white px-24 py-14 rounded-full'>SHOP NOW</button>
                    </div>
                  </div>
              </div>
              ))}
        </div>
   
      </div>

      <div> 
        <div className='relative min-h-[80vh] flex justify-between mb-100'>
          <div className="w-full flex bg-black text-white">
            <div className='max-w-450 self-center py-60 mx-auto'>
              <p className='text-12 text-[#b32a2e] mb-15'>BUILT FOR EXTREME TESTING</p>
              <h3 className='text-xl mb-15'>THE MB RANGE</h3>
              <p className='text-14 pr-60 mb-25'>With the support of renowned British ejection seat manufacturer Martin-Baker, Bremont has created a watch that is built to endure everything a pilot does, and more.</p>
              <button className='bg-transparent border border-white hover:bg-white hover:text-black hover:border-white text-12 text-white px-24 py-14 rounded-full'>SHOP NOW</button>
            </div>
          </div>
          <div className='w-full bg-black'>
            <img className='w-full h-full object-cover' src="//www.bremont.com/cdn/shop/files/Register_Club_Bremont_Newsletter.webp?v=1677688373&width=180 180w, //www.bremont.com/cdn/shop/files/Register_Club_Bremont_Newsletter.webp?v=1677688373&width=360 360w, //www.bremont.com/cdn/shop/files/Register_Club_Bremont_Newsletter.webp?v=1677688373&width=540 540w, //www.bremont.com/cdn/shop/files/Register_Club_Bremont_Newsletter.webp?v=1677688373&width=720 720w, //www.bremont.com/cdn/shop/files/Register_Club_Bremont_Newsletter.webp?v=1677688373&width=900 900w, //www.bremont.com/cdn/shop/files/Register_Club_Bremont_Newsletter.webp?v=1677688373&width=1080 1080w, //www.bremont.com/cdn/shop/files/Register_Club_Bremont_Newsletter.webp?v=1677688373&width=1296 1296w" alt="" />
            <img width='230px' className='absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4' src="//www.bremont.com/cdn/shop/files/Martin-Baker.webp?v=1690559191&width=800" alt="" />
          </div>
        </div>
      </div>


      <div className='bg-img-wrapper flex min-h-[60vh] bg-black bg-cover bg-center bg-no-repeat mb-24'>
        <div className='max-w-700 self-end text-white text-center py-60 px-30 mx-auto'>
          <h3 className='text-xl uppercase mb-15'>TESTED BEYOND ENDURANCE</h3>
          <p className='text-14 uppercase mb-25'>Bremont watches are tested beyond endurance in the most extreme environments on the planet</p>
          <button className='bg-white border border-black text-12 text-black hover:bg-black hover:text-white hover:border-white px-24 py-14 rounded-full'>LEARN MORE</button>
        </div>
      </div>

      <div className='bg-img-wrapper flex min-h-[60vh] bg-black bg-cover bg-center bg-no-repeat mb-24'>
        <div className='max-w-700 self-center text-white text-center py-60 px-30 mx-auto'>
          <p className='text-12 uppercase mb-15'>The Home of British Watchmaking</p>
          <h3 className='text-xl uppercase mb-15'>OUR MANUFACTURING <br /> & TECHNOLOGY CENTRE </h3>
          <button className='bg-white border border-black text-12 text-black hover:bg-black hover:text-white hover:border-white px-24 py-14 rounded-full'>BOOK A TOUR</button>
        </div>
      </div>

      <div className='bg-img-wrapper flex min-h-[60vh] bg-black bg-cover bg-center bg-no-repeat mb-24'>
        <div className='max-w-700 self-end text-white text-center py-60 px-30 mx-auto'>
          <p className='text-12 uppercase mb-15'>designed in partnership with williams racing</p>
          <h3 className='text-xl uppercase mb-15'>the bremont wr-45</h3>
          <button className='bg-white border border-black text-12 text-black hover:bg-black hover:text-white hover:border-white  px-24 py-14 rounded-full'>SHOP NOW</button>
        </div>
      </div>

      <div>
        <div className='flex items-center justify-between'>
          <div className='w-full'>
            <img src="//www.bremont.com/cdn/shop/articles/Avro_Vulcan_1.webp?v=1684232640&width=1500" alt="" />
          </div>
          <div className='w-5/6'>
            <div className='flex flex-col px-80 mx-auto'>
              <p className='text-12 text-[#b32a2e] mb-15'>FEATURED ARTICLES</p>
              <div className='mt-auto'>
              <h3 className='text-lg uppercase mb-15'>Around the world in <br /> the Avro Vulcan</h3>
              <p className='text-14 pr-60 mb-25'>The Avro Vulcan was a jet powered, tail-less, delta-wing, high altitude strategic bomber, operated by the Royal Air Force (RAF)...</p>
              <button className='bg-transparent border border-black text-12 text-black hover:bg-black hover:border-black hover:text-white px-24 py-14 rounded-full'>Read article</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white py-100'>
        <div className="container mx-auto">
          <div className='flex justify-center px-30'>
            <div className='px-15'>
              <img width='32px' className='mx-auto' src="//www.bremont.com/cdn/shop/files/Handmade.png?v=1634303475&width=64" alt="" />
              <p className='text-12 mt-10'>HAND BUILT IN THE UK</p>
            </div>
            <div className='px-15'>
              <img width='32px' className='mx-auto' src="//www.bremont.com/cdn/shop/files/Warranty.png?v=1634303667&width=64" alt="" />
              <p className='text-12 mt-10'>3 OR 5 YEAR EXTENSIVE WARRANTY</p>
            </div>
            <div className='px-15'>
              <img width='32px' className='mx-auto' src="//www.bremont.com/cdn/shop/files/Delivery.png?v=1634303475&width=64" alt="" />
              <p className='text-12 mt-10'>FREE DELIVERY ON ALL TIMEPIECES</p>
            </div>
            <div className='px-15'>
              <img width='32px' className='mx-auto' src="//www.bremont.com/cdn/shop/files/Concierge.png?v=1634303475&width=64" alt="" />
              <p className='text-12 mt-10'>CONCIERGE DELIVERY SERVICE</p>
            </div>
          </div>
        </div>
      </div>  
 
      <div>
        <div className='flex justify-between'>
          <div className="w-full bg-[#fafafa]">
            <div className='max-w-450 py-60 mx-auto'>
              <h3 className='text-lg text-black mb-15'>CLUB BREMONT</h3>
              <p className='text-14 text-muted mb-25'>Stay up to date with Bremont. Be the first to hear about Bremont's exclusive events and new product releases.</p>

              <div className='flex justify-between gap-25'>
                <input className='w-full bg-[#fafafa] text-14 border-0 border-b border-black outline-none' type="email" placeholder='Your email address' />
                <button className='bg-black text-12 border text-white hover:bg-transparent hover:text-black px-24 py-14 rounded-full'>SIGNUP</button>
              </div>
                <p className='text-[#12121280] text-11 mt-15'>By signing up to the Bremont newsletter you are agreeing to allow us to email you. We will not share your email with any third parties.</p>

              <div className='flex justify-center gap-20 whitespace-nowrap px-30 mt-30'>
                <div className='px-15'>
                  <img width='32px' className='mx-auto' src="//www.bremont.com/cdn/shop/files/icon_news_48x48.png?v=17754358555048718456" alt="" />
                  <p className='text-12 mt-10'>LATEST NEWS</p>
                </div>
                <div className='px-15'>
                  <img width='32px' className='mx-auto' src="//www.bremont.com/cdn/shop/files/icon_exclusive_48x48.png?v=14954811558843409658" alt="" />
                  <p className='text-12 mt-10'>EXCLUSIVE EVENTS</p>
                </div>
                <div className='px-15'>
                  <img width='32px' className='mx-auto' src="//www.bremont.com/cdn/shop/files/icon_new_releases_48x48.png?v=13444530674252532799" alt="" />
                  <p className='text-12 mt-10'>NEW RELEASES</p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full bg-black h-420'>
            <img className='w-full h-full object-cover' src="//www.bremont.com/cdn/shop/files/Register_Club_Bremont_Newsletter.webp?v=1677688373&width=180 180w, //www.bremont.com/cdn/shop/files/Register_Club_Bremont_Newsletter.webp?v=1677688373&width=360 360w, //www.bremont.com/cdn/shop/files/Register_Club_Bremont_Newsletter.webp?v=1677688373&width=540 540w, //www.bremont.com/cdn/shop/files/Register_Club_Bremont_Newsletter.webp?v=1677688373&width=720 720w, //www.bremont.com/cdn/shop/files/Register_Club_Bremont_Newsletter.webp?v=1677688373&width=900 900w, //www.bremont.com/cdn/shop/files/Register_Club_Bremont_Newsletter.webp?v=1677688373&width=1080 1080w, //www.bremont.com/cdn/shop/files/Register_Club_Bremont_Newsletter.webp?v=1677688373&width=1296 1296w" alt="" />
          </div>
        </div>
      </div>

      <div className='bg-black text-white py-45 px-30'>
          <div className='border-b border-[#ffffff1a] pb-45 mb-45'>
            <div className='max-w-450 text-center mx-auto'>
              <h3 className='text-lg mb-15'>NEED A HAND?</h3>
              <p className='text-14 mt-15'>We're available to call free on 0800 817 4281 or live chat Monday to Friday, 9am - 5:30pm BST.</p>
              <ul className='flex justify-center mt-35'>
                <li className='px-30'>
                  <a href="#" className='flex flex-col items-center'>
                    <span className='text-[#b32a2e]'>
                      <svg fill="none" width='24px' height='24px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 25"><path clip-rule="evenodd" d="M13 1C6.37287 1 1 5.925 1 12c0 3.331 1.62157 6.31 4.17391 8.327V24l3.13044-1.875C9.74748 22.688 11.3336 23 13 23c6.6271 0 12-4.925 12-11S19.6271 1 13 1v0z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M7.26089 12.5c0 .276-.23374.5-.52174.5s-.52174-.224-.52174-.5.23374-.5.52174-.5.52174.224.52174.5v0zM13.5217 12.5c0 .276-.2337.5-.5217.5-.288 0-.5217-.224-.5217-.5S12.712 12 13 12c.288 0 .5217.224.5217.5v0zM19.7826 12.5c0 .276-.2337.5-.5217.5-.288 0-.5218-.224-.5218-.5s.2338-.5.5218-.5c.288 0 .5217.224.5217.5v0z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </span>
                    <p className='text-13 mt-10'>CHAT</p>
                  </a>
                </li>
                <li className='px-30'>
                  <a href="#" className='flex flex-col items-center'>
                    <span className='text-[#b32a2e]'>
                      <svg fill="none" width='24px' height='24px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 25"><path clip-rule="evenodd" d="M2 5h12c.552 0 1 .448 1 1s-.448 1-1 1H2c-.552 0-1-.448-1-1s.448-1 1-1v0z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 5V4c0-1.657 1.343-3 3-3h6c1.657 0 3 1.343 3 3v1M5 3h6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M4 22h8V10H4v12z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 10v12M4 14h8M4 18h8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M1 24h14v-2H1v2zM2 22h12V7H2v15z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </span>
                    <p className='text-13 mt-10'>CALL</p>
                  </a>
                </li>
                <li className='px-30'>
                  <a href="#" className='flex flex-col items-center'>
                    <span className='text-[#b32a2e]'>
                      <svg fill="none" width='24px' height='24px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 25"><path d="M3.08667 9.33936l8.55753 5.85494c.8171.5593 1.8939.5593 2.711 0l8.5576-5.85494" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M14.4139 1.43748c-.8525-.583306-1.9753-.583306-2.8278 0L1.95165 7.67957C1.35791 8.06357 1 8.72304 1 9.43052V21.8615c0 1.152.93391 2.0869 2.08696 2.0869H22.913c1.152 0 2.087-.9349 2.087-2.0869V9.43052c0-.70748-.359-1.36695-.9527-1.75095l-9.6334-6.24209v0z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.08667 21.8609l6.26087-5.2173M22.9128 21.8609l-6.2608-5.2173" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </span>
                    <p className='text-13 mt-10'>EMAIL</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <footer className='grid grid-cols-12 gap-30'>
            <div className='col-span-2 mb-30'>
              <a href="#" className='block mb-15'>
                <p className='text-14'>COLLECTION</p>
              </a>
              <div>
                <ul className='whitespace-nowrap'>
                  <li className='text-14'>Men's Watches</li>
                  <li className='text-14'>Ladies' Watches</li>
                  <li className='text-14'>New Releases</li>
                </ul>
              </div>
            </div>

            <div className='col-span-2 mb-30'>
              <a href="#" className='block mb-15'>
                <p className='text-14'>THE STORY</p>
              </a>
              <div>
                <ul className='whitespace-nowrap'>
                  <li className='text-14'>Beginnings</li>
                  <li className='text-14'>British Watchmaking</li>
                  <li className='text-14'>Our Technologies</li>
                  <li className='text-14'>Aviation & Military</li>
                  <li className='text-14'>Partnerships</li>
                  <li className='text-14'>Ambassadors</li>
                  <li className='text-14'>Awards</li>
                  <li className='text-14'>Journal</li>
                  <li className='text-14'>Careers</li>
                </ul>
              </div>
            </div>

            <div className='col-span-2 mb-30'>
              <a href="#" className='block mb-15'>
                <p className='text-14'>YOUR BREMONT</p>
              </a>
              <div>
                <ul className='whitespace-nowrap'>
                <li className='text-14'>Club Bremont</li>
                <li className='text-14'>Download a Brochure</li>
                <li className='text-14'>Download a Magazine</li>
                <li className='text-14'>FAQs</li>
                <li className='text-14'>Warranty</li>
                <li className='text-14'>Finance</li>
                <li className='text-14'>Delivery & Returns</li>
                <li className='text-14'>Privacy Policy</li>
                <li className='text-14'>Cookie Policy</li>
                <li className='text-14'>Terms and Conditions</li>
                <li className='text-14'>Customer Service</li>
                <li className='text-14'>Contact Us</li>
                </ul>
              </div>
            </div>

            <div className='col-span-2'>
              <div className='mb-30'>
                <a href="#" className='block mb-15'>
                  <p className='text-14'>LOCATE A STORE</p>
                </a>
                <div>
                  <ul className='whitespace-nowrap'>
                    <li className='text-14'>Find Your Nearest Store</li>
                    <li className='text-14'>View Our Boutiques</li>
                  </ul>
                </div>
              </div>
              <div className='mb-30'>
                <a href="#" className='block mb-15'>
                  <p className='text-14'>COMMUNITY</p>
                </a>
                <div>
                  <ul className='whitespace-nowrap'>
                    <li className='text-14'>#BremontSpotted</li>
                    <li className='text-14'>Altitude Forum</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-span-2 mb-30'>
              <div className="mb-30">
                <a href="#" className='block mb-15'>
                  <p className='text-14'>FOLLOW BREMONT</p>
                </a>
                <div>
                  <ul className='whitespace-nowrap'>
                    <li className='flex items-center gap-16 text-12 mb-20'>
                      <svg fill="none" width='16px' height='16px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 18"><path d="M2.30465 18h3.84768v-7.5883h3.46686L10 6.64083H6.15233V4.73684c0-.52321.43066-.94737.96191-.94737H10V0H7.11424C4.45798 0 2.30465 2.12076 2.30465 4.73684v1.90399H.380814L0 10.4117h2.30465V18z" fill="currentColor"></path></svg>
                      FACEBOOK</li>
                      <li className='flex items-center gap-16 text-12 mb-20'>
                      <svg fill="none" width='16px' height='16px' aria-hidden="true" focusable="false" role="presentation" class="icon icon-twitter" viewBox="0 0 18 15"><path fill="currentColor" d="M17.64 2.6a7.33 7.33 0 01-1.75 1.82c0 .05 0 .13.02.23l.02.23a9.97 9.97 0 01-1.69 5.54c-.57.85-1.24 1.62-2.02 2.28a9.09 9.09 0 01-2.82 1.6 10.23 10.23 0 01-8.9-.98c.34.02.61.04.83.04 1.64 0 3.1-.5 4.38-1.5a3.6 3.6 0 01-3.3-2.45A2.91 2.91 0 004 9.35a3.47 3.47 0 01-2.02-1.21 3.37 3.37 0 01-.8-2.22v-.03c.46.24.98.37 1.58.4a3.45 3.45 0 01-1.54-2.9c0-.61.14-1.2.45-1.79a9.68 9.68 0 003.2 2.6 10 10 0 004.08 1.07 3 3 0 01-.13-.8c0-.97.34-1.8 1.03-2.48A3.45 3.45 0 0112.4.96a3.49 3.49 0 012.54 1.1c.8-.15 1.54-.44 2.23-.85a3.4 3.4 0 01-1.54 1.94c.74-.1 1.4-.28 2.01-.54z"></path></svg>
                      TWITTER</li>
                      <li className='flex items-center gap-16 text-12 mb-20'>
                      <svg fill="none" width='16px' height='16px' aria-hidden="true" focusable="false" role="presentation" class="icon icon-instagram" viewBox="0 0 18 18"> <path fill="currentColor" d="M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3.41.17.7.35 1.01.66.3.3.5.6.65 1 .12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54a4.79 4.79 0 01-.3 1.63c-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05a4.79 4.79 0 01-1.62-.3c-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1a4.87 4.87 0 01-.3-1.64c-.04-.92-.05-1.2-.05-3.54s0-2.62.05-3.54c.04-.86.18-1.32.3-1.63.16-.41.35-.7.66-1.01.3-.3.6-.5 1-.65.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06zm0-1.58C6.39 0 6.09.01 5.15.05c-.93.04-1.57.2-2.13.4-.57.23-1.06.54-1.55 1.02C1 1.96.7 2.45.46 3.02c-.22.56-.37 1.2-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13.23.58.54 1.07 1.02 1.56.49.48.98.78 1.55 1.01.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68-.01 3.62-.05.93-.04 1.57-.2 2.13-.41a4.27 4.27 0 001.55-1.01c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.61 0-2.39 0-2.68-.05-3.62a6.47 6.47 0 00-.4-2.13 4.27 4.27 0 00-1.02-1.55A4.35 4.35 0 0014.52.46a6.43 6.43 0 00-2.13-.41A69 69 0 008.77 0z"></path><path fill="currentColor" d="M8.8 4a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.43a2.92 2.92 0 110-5.85 2.92 2.92 0 010 5.85zM13.43 5a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z"></path></svg>
                      INSTAGRAM</li>
                      <li className='flex items-center gap-16 text-12 mb-20'>
                      <svg fill="none" width='16px' height='16px' aria-hidden="true" focusable="false" role="presentation" class="icon icon-youtube" viewBox="0 0 100 70"><path d="M98 11c2 7.7 2 24 2 24s0 16.3-2 24a12.5 12.5 0 01-9 9c-7.7 2-39 2-39 2s-31.3 0-39-2a12.5 12.5 0 01-9-9c-2-7.7-2-24-2-24s0-16.3 2-24c1.2-4.4 4.6-7.8 9-9 7.7-2 39-2 39-2s31.3 0 39 2c4.4 1.2 7.8 4.6 9 9zM40 50l26-15-26-15v30z" fill="currentColor"></path></svg>
                      YOUTUBE</li>
                      <li className='flex items-center gap-16 text-12 mb-20'>
                      <svg fill="#fff" width='16px' height='16px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"></path></svg>
                      LINKEDIN</li>
                  </ul>
                </div>
              </div>
              <div className='mb-30'>
                <a href="#" className='block mb-15'>
                  <p className='text-14'>FOLLOW BREMONT MILITARY</p>
                </a>
                <div>
                  <ul className='whitespace-nowrap'>
                      <li className='flex items-center gap-16 text-12 mb-20'>
                      <svg fill="none" width='16px' height='16px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 18"><path d="M2.30465 18h3.84768v-7.5883h3.46686L10 6.64083H6.15233V4.73684c0-.52321.43066-.94737.96191-.94737H10V0H7.11424C4.45798 0 2.30465 2.12076 2.30465 4.73684v1.90399H.380814L0 10.4117h2.30465V18z" fill="currentColor"></path></svg>
                      FACEBOOK</li>
                      <li className='flex items-center gap-16 text-12 mb-20'>
                      <svg fill="none" width='16px' height='16px' aria-hidden="true" focusable="false" role="presentation" class="icon icon-twitter" viewBox="0 0 18 15"><path fill="currentColor" d="M17.64 2.6a7.33 7.33 0 01-1.75 1.82c0 .05 0 .13.02.23l.02.23a9.97 9.97 0 01-1.69 5.54c-.57.85-1.24 1.62-2.02 2.28a9.09 9.09 0 01-2.82 1.6 10.23 10.23 0 01-8.9-.98c.34.02.61.04.83.04 1.64 0 3.1-.5 4.38-1.5a3.6 3.6 0 01-3.3-2.45A2.91 2.91 0 004 9.35a3.47 3.47 0 01-2.02-1.21 3.37 3.37 0 01-.8-2.22v-.03c.46.24.98.37 1.58.4a3.45 3.45 0 01-1.54-2.9c0-.61.14-1.2.45-1.79a9.68 9.68 0 003.2 2.6 10 10 0 004.08 1.07 3 3 0 01-.13-.8c0-.97.34-1.8 1.03-2.48A3.45 3.45 0 0112.4.96a3.49 3.49 0 012.54 1.1c.8-.15 1.54-.44 2.23-.85a3.4 3.4 0 01-1.54 1.94c.74-.1 1.4-.28 2.01-.54z"></path></svg>
                      TWITTER</li>
                      <li className='flex items-center gap-16 text-12 mb-20'>
                      <svg fill="none" width='16px' height='16px' aria-hidden="true" focusable="false" role="presentation" class="icon icon-instagram" viewBox="0 0 18 18"> <path fill="currentColor" d="M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3.41.17.7.35 1.01.66.3.3.5.6.65 1 .12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54a4.79 4.79 0 01-.3 1.63c-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05a4.79 4.79 0 01-1.62-.3c-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1a4.87 4.87 0 01-.3-1.64c-.04-.92-.05-1.2-.05-3.54s0-2.62.05-3.54c.04-.86.18-1.32.3-1.63.16-.41.35-.7.66-1.01.3-.3.6-.5 1-.65.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06zm0-1.58C6.39 0 6.09.01 5.15.05c-.93.04-1.57.2-2.13.4-.57.23-1.06.54-1.55 1.02C1 1.96.7 2.45.46 3.02c-.22.56-.37 1.2-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13.23.58.54 1.07 1.02 1.56.49.48.98.78 1.55 1.01.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68-.01 3.62-.05.93-.04 1.57-.2 2.13-.41a4.27 4.27 0 001.55-1.01c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.61 0-2.39 0-2.68-.05-3.62a6.47 6.47 0 00-.4-2.13 4.27 4.27 0 00-1.02-1.55A4.35 4.35 0 0014.52.46a6.43 6.43 0 00-2.13-.41A69 69 0 008.77 0z"></path><path fill="currentColor" d="M8.8 4a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.43a2.92 2.92 0 110-5.85 2.92 2.92 0 010 5.85zM13.43 5a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z"></path></svg>
                      INSTAGRAM</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-span-2 mb-30'>
              <div>
                <img width='80px' height='120px' src="https://www.bremont.com/cdn/shop/files/armed-forces-covenant.png?v=1634303113&width=180" alt="" />
              </div>
            </div>
          </footer>

          <div>
            <p className='text-11 text-white opacity-50'>Bremont Watch Company Limited is registered in England 05414485. Registered office; Bremont Watch Company, Manufacturing and Technology Centre, The Wing, Reading Road, Henley-on-Thames, Oxfordshire, RG9 4GE.</p>
          </div>
        </div>
    </>
  )
}

const ContactSection = ({}) => { 
  return (
    <>
    
    </>
  )
}

export default Index  
import Showcase from '../../components/Showcase'
import OurPricing from '../../components/OurPricing'
import Footer from '../../components/Footer'
import { MultiSection, SingleSection } from '../../components/Section'
const Index = () => {

  return (
    <>

      <Showcase />

      <SingleSection
        title='Efficient and Performant'
        subTitle='Athletes are expected to be efficient with their body movements, while coaches should be efficient with their coaching tools and techniques'
        btnTitle='Start your free trial'
      />

      <MultiSection
        title='Video Assessment is a proven coaching tool'
        subTitle='Keep your video organized, private and rich with meaningful feedback, fostering greater relationships and positive outcomes'
        imgUrl='/assets/engage-and-communicate.png'
      />

      <MultiSection
        orderReverse={true}
        containerClassName='bg-theme px-36'
        title='#tags on the video timeline are valuable'
        subTitle='Allow your athletes to see themselves in action while receiving meaningful, directional feedback'
        imgUrl='/assets/tags-on-video.png'
      />

      <MultiSection
        title='Engage and communicate '
        subTitle='Comments and conversations add context to the goal and allow for greater results during . your next in person session '
        imgUrl='/assets/automate-tagging.png'
      />

      <SingleSection
        title='Coaching Workflow'
        borderTop={true}
        containerClassName='mb-52'
        subTitle='Make better use of your time, while offering personalized feedback to each of your athletes which can be reviewed as much as needed, fostering better technique, improve outcomes and stronger relationships'
        btnTitle='Register Now'
      />

      <MultiSection
        orderReverse={true}
        containerClassName='bg-theme px-36'
        title='Record, comment and collaborate'
        subTitle='Using an asynchronous video communication workflow you can support more athletes in a personal way on and off the course.  '
        imgUrl='/assets/automate-tagging.png'
      />

      <MultiSection
        title='automate tagging using recognized language'
        subTitle='Define your own keywords and phrases to dynamically generate tags in real time during video recording '
        imgUrl='/assets/automate-tagging.png'
      />

      <OurPricing />

      <Footer />
    </>
  )
}


export default Index
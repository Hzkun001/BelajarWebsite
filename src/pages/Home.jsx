import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Tutor from '../components/Tutor'
import Partner from '../components/Partner'
import { homeSection } from '../data/HomeSection'

import parse from 'html-react-parser'
import '../styles/home.css'
import { courseSection } from '../data/CourseSection'
import { tutorSection, tutorList } from '../data/TutorSection'
import { partnerSection } from '../data/PartnerSection'
function Home() {
    return (
    <>
        <Navbar />
        {/* home */}
        <div className='wrapper'><section id="home">
            <img src={homeSection.image} />
            <div className="kolom">
                {parse(homeSection.content)}
            </div>
        </section></div>
        {/* online course */}
        <section id="courses">
            <div className="kolom">
                {parse(courseSection.content)}
            </div>
            <img src={courseSection.image}/>
        </section>
        {/*tutor*/}
        <section id="tutors">
            <div className="tengah">
                <div className="kolom">
                    {parse(tutorSection.content)}
                </div>
            </div>
        </section>
        <Tutor tutorList={tutorList}/>

        <section id="partners">
            <div className="tengah">
                <div className="kolom">
                    {parse(partnerSection.content)}
                </div>
            </div>
        </section>
        < Partner />
        <Footer />
    </>
    )
}

export default Home

import KeyboardDoubleArrowDownSharpIcon from '@mui/icons-material/KeyboardDoubleArrowDownSharp';
import ValueCards from "../components/ValueCards";
import Content from "../components/Content";

const About = ()=>{
    return(
        <div>
            <div className="wrapper">
            <div className="About">
                <h1>About</h1>
                <i><KeyboardDoubleArrowDownSharpIcon color='white' fontSize="large"/></i>
            </div>

            </div>
            <section className="mission">
                <div className="missionContainer">
                    <div className="col-lg-6">
                        <div className="wrapper">
                        <div>
                            <img src={require('../images/flag.png')} alt=""/>
                        </div>
                        <div>
                            <h4>Our Mission</h4>
                            <p>To sharpen our edge in the manufacture and marketing of quality baked products.</p>

                        </div>

                        </div>
                        

                    </div>
                    <div className="col-lg-6">
                        <div className="wrapper">
                           <div>
                            <img src={require('../images/EYE.png')} alt=""/>
                          </div>
                           <div>
                            <h4>Our Vision</h4>
                            <p>To provide a nourishing, convenient and accessible answer to hunger’s call.</p>

                          </div>

                        </div>    
                    </div>
                </div>

            </section>
            <section className="values">
                <div className="valuesHeader"><h3>Our Core Values</h3></div>
                <div className="CardsContainer">
                    <ValueCards imgss={require('../images/teamwork.png')} valueTittle='Teamwork' ptext='We set inspiring goals that we pursue with passion, unity and focus. We support each other, build on our strengths and ensure that every player in our team contributes fully. We play to win and realise that synergy, communication and alignment bind us together.'/>
                    <ValueCards imgss={require('../images/respect.png')} valueTittle='Respect' ptext='We build self-esteem by treating each other fairly, communicating directly and respectfully. We have empathy, discipline and build on our diversity as a source of strength, creativity and innovation.'/>
                    <ValueCards imgss={require('../images/integrity.png')} valueTittle='Integrity' ptext='We uphold the highest professional and ethical standards. We guard the reputation of our brands. Our promises are bankable.'/>
                    <ValueCards imgss={require('../images/commitment.png')} valueTittle='Commitment' ptext='We are accountable to our stakeholders and commit to deliver what we promise. We translate plans into actions; strategies into achievements and tangible returns.'/>
                    <ValueCards imgss={require('../images/excellence.png')} valueTittle='Excellence' ptext='We strive to be the best in our business. We improve all the time, in all aspects and passionately deliver at the highest level. We offer superior value and present our offering with pride.' />
                </div>

            </section>

            <section className="ceo">
                     <Content
                     imagess={require('../images/ceo.png')}
                      header='PROMISE OF QUALITY'
                     ptext='Thank you for visiting our website. At Baker’s Inn, we are committed to delivering quality premium bread to our customers. We work with a team of over 1500 employees nationwide. Our aim is to uphold the highest ethical standards and perpetuate excellence in the delivery of our products. For us at Baker’s Inn, we aim to improve the accessibility of our bread. We are accountable to our stakeholders to deliver what we promise.'
                     ptext2='We translate plans into actions; dreams into reality; strategies into achievements and tangible returns. We strive to be the best in our business and in our partnerships. We are committed to every retail outlet, tuckshop, vendor and consumer in Zimbabwe who stock or consume our nourishing bread throughout Zimbabwe. We have built our top-quality brand and continue to grow as a company because of you. Thank you for your continued support of our brand.'       
                     ptext3='We set inspiring goals that we pursue with passion, unity and focus. We support each other, build on our strengths and ensure that every player in our team contributes fully. We play to win and realise that synergy, communication and alignment bind us together.'
                     signame='C.E.O:'
                     signature=' Ngoni Mazango'
                     
                     />
            </section>
            

        </div>
        
        
    )

}
export default About
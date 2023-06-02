import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Kids = ()=>{
    return(
        <div>
             <Navbar/>
             <div className="Kids"> </div>
             <section className="games">

                <div className="wrapper">
                     <Content 
                     header='Spaceship Maze'
                     ptext='Help the spaceship through the maze to get back to earth. Move through levels with increasing difficulty; each puzzle starts the ship in a different location.'
                     ptext2='Develop kids’ skills in strategizing, spatial awareness, hand-eye coordination, problem solving and more! Free to play, priceless for learning.'
                     bttn='Play Game'
                     imagess={require('../images/map.png')}
                     />
                </div>
                <div className="wrapper2">
                      <Content
                      header='Risky Way'
                      ptext='Risky Way is a free instant game. The highways of the future are risky and if you want to survive youll need to be smarter than all of them combined. All you have to do in this nerve-tingling racing game is click, hold, and let go. Of course, if you want to be an effective driver who is able to survive youll have to know when to click how long to hold and only let go at the appropriate time.'
                      bttn='Play Game'
                      imagess={require('../images/emojis.png')}
                      />
                </div>
                <div className="wrapper3">
                    <Content
                     header='Pacman'
                     ptext='Theres nothing like a little old school Pacman game right ? The great arcade game Pac Man was ported to the NES in 1988 and you can play it right here. Never played before?! What?! Eat all the pellets to complete a stage while trying to score as many points as possible by eating fruit and ghosts along the way! But theres more! Ever wonder how Pacman got started? Check out the history of Pacman below and see how it all began.'
                     bttn='Play Game'
                     imagess={require('../images/kisspng-pac-man-championship-edition-super-smash-bros-for-pac-man-5ac7fd0f47b9191484751415230558872938-u1U_ZbU1J-transformed 1.png')}
                    />
                </div>
           </section>
           <Footer/>

        </div>
       
    )

}
export default Kids;
import React from 'react'

const App = () => {
  return (
    <div className='parent'>
      <div className='home'><button>Home page</button></div>
      <div className="nav1">
        <h2>Clean web design and intuitive user experience <br />
          that reflects the club's dynamic spirit <br /> and premium feel.</h2>
      </div>
      <div className="section">
        <div className="nav2">
          <h3>Horizon Courts</h3>
          <div className="but">
          <button>About us</button>
          <button>services</button>
          <button>Coaches</button>
          <button>Events</button>
          <button>Contacts</button>
          </div>
          <button id='book'>Book Now</button>
        </div>
        <div className="child1">
          <div className="headline">
            <h2>Unleash Your Inner Champion Today.</h2>
            <h2 id='ce'>All In One Place</h2>
            <p id='ma'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum.</p>
            <p id='maa'>Lorem ipsum dolor sit amet consectetur.</p>
            <button>Start Your Own Journey</button>
          </div>

          <div className="footer">
            <div className="footer-left">
              <div className="footer-text">
                <p>Train With real professional. <br />Get the real results</p>
              </div>

              <div className="coaches">
                <img src="https://plus.unsplash.com/premium_photo-1661898576032-fd26e3409175?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="Coach1" />
                <img src="https://plus.unsplash.com/premium_photo-1679635697791-c58950196533?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="Coach2" />
                <img src="https://images.unsplash.com/photo-1665822814047-6ef8249da90e?q=80&w=963&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="Coach3" />
              </div>
            </div>

            <div className='social'>
              <a href="#">Instagram ↗</a>
              <a href="#">Facebook ↗</a>
              <a href="#">Tik Tok ↗</a>
            </div>
          </div>
        </div>

        <div className="child2">
          <div className="left">
            <button>About Horizon</button>
          </div>
          <div className="right"><h3>At Horizon, we don't just play tennis--We live it. Since 2021, <br />our club has been a home for players of all levels,from eager <br />begineers to seasoned pros. </h3></div>
        </div>

        <div className="child3">
          <div className="left">
            <p id='up'>Professional hard courts</p>
            <p id='change'>with tournament-grade <br />lighting & climate control- <br />play in perfect conditions,</p>
            <p>in any season.</p>

          </div>
          <div className="middle">
            <button>Private & Group Lessons</button>
          </div>

          <div className="right">
            <div className="top">
              <h1>100+</h1>
              <h4>Pro coaches</h4>
              <p>Certified professional ready to boost your game from first serve to tournament level.</p>
            </div>
            <div className="bottom">
              <div className="begineer">
                <h4>Begineer</h4>
                <div className="butt">
                <button></button><button></button><button></button><button></button><button></button><button></button><button></button><button></button><button></button><button></button>
                </div>
                <h4>55</h4>
              </div>
              <div className="int">
                <h4>intermediate</h4>
                <div className="butt">
                <button></button><button></button><button></button><button></button><button></button><button></button><button></button><button></button>
                </div>
                <h4>40</h4>
              </div>
              <div className="adv">
                <h4>Advanced</h4>
                <div className="butt">
                <button></button><button></button><button></button><button></button><button></button><button></button><button></button>
                </div>
                <h4>35</h4>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>

  )
}

export default App
import React from 'react'
import Card from './components/card'
const App = () => {

  const users = [
  {
    username: "IronMan",
    title: "Genius Billionaire",
    about: "I am Iron Man. Genius, inventor and protector of the world.",
    profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400",
    coverimage: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1200",
    likescount: 12500,
    postcount: 120,
    viewscount: 85000,
    followed: true
  },
  {
    username: "SpiderMan",
    title: "Friendly Neighborhood Hero",
    about: "With great power comes great responsibility.",
    profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    coverimage: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1200",
    likescount: 9800,
    postcount: 95,
    viewscount: 65000,
    followed: false
  },
  {
    username: "Thor",
    title: "God of Thunder",
    about: "The mighty protector of Asgard and the Nine Realms.",
    profile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    coverimage: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200",
    likescount: 18000,
    postcount: 150,
    viewscount: 120000,
    followed: true
  },
  {
    username: "CaptainAmerica",
    title: "The First Avenger",
    about: "I can do this all day. Fighting for freedom and justice.",
    profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    coverimage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    likescount: 11000,
    postcount: 105,
    viewscount: 72000,
    followed: false
  },
  {
    username: "BlackPanther",
    title: "King of Wakanda",
    about: "Wakanda forever! Protector of my people and nation.",
    profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
    coverimage: "https://images.unsplash.com/photo-1511497584788-876760111969?w=1200",
    likescount: 15500,
    postcount: 130,
    viewscount: 99000,
    followed: true
  },
  {
    username: "Hulk",
    title: "The Strongest Avenger",
    about: "You wouldn't like me when I'm angry! So behave",
    profile: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400",
    coverimage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200",
    likescount: 22000,
    postcount: 80,
    viewscount: 150000,
    followed: false
  },
  {
    username: "DoctorStrange",
    title: "Master of Mystic Arts",
    about: "Protecting reality through the power of magic.",
    profile: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400",
    coverimage: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1200",
    likescount: 13500,
    postcount: 115,
    viewscount: 88000,
    followed: true
  },
  {
    username: "Superman",
    title: "Man of Steel",
    about: "Standing for truth, justice and hope at any cost.",
    profile: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400",
    coverimage: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200",
    likescount: 25000,
    postcount: 200,
    viewscount: 200000,
    followed: true
  },
  {
    username: "Batman",
    title: "The Dark Knight",
    about: "I am vengeance. I am the night. I am Batman.",
    profile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    coverimage: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1200",
    likescount: 19500,
    postcount: 175,
    viewscount: 145000,
    followed: false
  },
  {
    username: "WonderWoman",
    title: "Amazonian Warrior",
    about: "Fighting for peace, equality and justice for women.",
    profile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
    coverimage: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200",
    likescount: 16500,
    postcount: 140,
    viewscount: 110000,
    followed: true
  }
];

  return (
    <div className='bg-black m-5 p-2 rounded-2xl text-white flex flex-wrap items-center justify-evenly'>
      {users.map(function (elem,idx) {
        
        return (
        
          <div  key ={idx} className=' bg-black p-3 mb-2 rounded-2xl'>
            {<Card username={elem.username} about={elem.about} profile={elem.profile} coverimage={elem.coverimage} likescount={elem.likescount} viewscount={elem.viewscount} postcount={elem.postcount} />}
          </div>
        
        )
      })}
    </div>
  )
}

export default App
import React from 'react'

const section = () => {
    return (
        <div className='sec bg-[url(https://plus.unsplash.com/premium_photo-1793775402453-b39fd41b4da8?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D)] bg-cover bg-bg-center h-150 p-10 mt-5 rounded-2xl'>
            <div className="me pt-35 pl-110 text-black">
                <div className="plus object-cover">
                    <button className='h-10 w-12 overflow-hidden ml-50 rounded-full'>
                        <img src="https://images.unsplash.com/photo-1613256168695-b13ed5ba9500?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
                    </button>
                </div>

                <div className="headline text-5xl font-serif">
                    <h1>Where Money Grows</h1></div>
                <div className="para mt-5 ml-8 text-xl">
                    <p>A programmable, utility-driven stable token <br />designed for native value accrual and seamless <br />intergration into DeFi.</p>
                </div>
                <div className="butt bg-[black] w-50 text-white pl-15 pt-1 pb-1 ml-33 mt-5 rounded-4xl cursor-pointer hover:bg-blue-900"><button>Try it Now</button></div>
            </div>
        </div>
    )
}

export default section
import React from 'react'

const Newsletter = () => {
    return (
        <div className="mt-20 text-primary">
            <div className="p-10 rounded-xl bg-white/5">
                <div className="text-center">
                    <h4 className="text-2xl font-bold">Stay Updated</h4>
                    <p className='mt-4'>Subscribe to our newsletter for the latest AI writing tips and BookAI updates.</p>
                </div>
                <div className="mt-6 grid md:grid-cols-2 gap-8">
                    <form className='flex flex-col gap-4'>
                        <div>
                            <input type="email" className='px-4 py-2 outline-none rounded-sm' placeholder='Your email here' />
                        </div>
                        <div>
                            <button className='px-5 py-2 rounded-sm bg-gradient-1'>Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
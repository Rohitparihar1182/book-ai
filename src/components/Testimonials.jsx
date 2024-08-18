import React from 'react'

const Testimonials = () => {
    return (
        <div className='mt-20 text-primary'>
            <div>
                <div className="text-center">
                    <h4 className="text-2xl font-bold">What our users say</h4>
                </div>
                <div className="mt-16 grid md:grid-cols-2 gap-8 text-center">
                    <div className='bg-white/5 p-6 rounded-xl'>
                        <h5>"BookAI revolutionized my writing process. I completed my debut novel in just two weeks!"</h5>
                        <p>- Sarah J., Author</p>
                    </div>
                    <div className='bg-white/5 p-6 rounded-xl'>
                        <h5>"The AI-generated ideas helped me overcome writer's block. It's like having a co-author at your fingertips."</h5>
                        <p>- Mark T., Aspiring Writer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
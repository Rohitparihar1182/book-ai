const Banner = () => {
    return (
        <div className="pt-24 text-center text-primary">
            <div>
                <h1 className="text-5xl font-bold leading-[1.3]">
                    Explore the Possibilities of  <span className="highlight inline-block">AI Book Writing </span> with BookAI
                </h1>
            </div>
            <div className="max-w-lg mt-6 text-secondary mx-auto">
                <p>
                    Unleash the power of AI to create captivating books in minutes.
                    Download, Distribute wherever you want. Generate unlimited free books
                </p>
            </div>
            <div className="mt-8 flex justify-center items-center gap-2">
                <div>
                    <button className="bg-gradient-1 rounded-full px-8 py-3">Get Started</button>
                </div>
                <div>
                    <button className="bg-gradient-1 rounded-full px-8 py-3">Get Api Access</button>
                </div>
            </div>
            <div className="mt-8">
                <p className="font-medium text-yellow-300">
                    Attention:TryBookAI has been acquired by Indicus AI. Indicus LLM will be used for text and image generation</p>
            </div>
        </div>
    )
}

export default Banner;
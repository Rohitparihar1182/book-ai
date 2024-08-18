import Book1 from '../assets/book2.png';
import Paradox from '../assets/paradox.png';
const ImageSection = () => {
    return (
        <div className="relative mt-16 isolate p-10 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-white/5 blur-sm -z-[2]"></div>
            <div className='rounded-xl overflow-hidden hover:scale-105 transition duration-300'>
                <img src={Book1} alt="book" />
            </div>
            <div className="absolute rounded-xl isolate z-10 left-4 top-4 p-4 flex items-center gap-2 overflow-hidden">
                <div className="absolute inset-0 bg-white/10 blur-md -z-[2]"></div>
                <div>
                    <div className="w-6 h-6 rounded-full bg-gradient-1"></div>
                </div>
                <div className='rounded-xl w-24 overflow-hidden hover:scale-105 transition duration-300'>
                    <img src={Paradox} alt="book" />
                </div>
            </div>
            <div className="absolute rounded-xl isolate z-10 right-4 bottom-4 p-4 flex items-center gap-2 overflow-hidden">
                <div className="absolute inset-0 bg-white/10 blur-md -z-[2]"></div>
                <div>
                    <div className="w-6 h-6 rounded-full bg-gradient-1"></div>
                </div>
                <div>
                    <h2 className="font-medium text-base">Chapter complete</h2>
                </div>
            </div>
        </div>
    )
}

export default ImageSection;
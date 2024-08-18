import Logo from '../assets/logo.png'

const NavLinks = [
    "Features",
    "How It Works",
    "Roadmap",
    "API",
    "Price",
    "Models"
]

const Header = () => {
    return (
        <header>
            <div className="flex justify-between items-center p-2 flex-wrap">
                <div className="flex gap-1 items-center">
                    <div className='w-12'>
                        <img src={Logo} alt="BookAI" className="object-cover" />
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold'>Book AI</h2>
                    </div>
                </div>
                <nav>
                    <ul className='flex items-center flex-wrap font-light gap-5 text-neutral-100'>
                        {
                            NavLinks.map((link, idx) => (
                                <li key={idx}>{link}</li>
                            ))
                        }
                        <li className='bg-gradient-1 px-6 py-2 rounded-md'>
                            Login / signup
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
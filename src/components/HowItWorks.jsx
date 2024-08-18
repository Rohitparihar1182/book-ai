import { FaCheckCircle, FaCogs, FaMagic, FaPencilAlt } from "react-icons/fa"


const Workings = [
    {
        title: "Choose Your Genre",
        description: "Select from a wide range of genres or create a custom blend.",
        icon: FaMagic
    },
    {
        title: "Provide Key Details",
        description: "Input main characters, plot points, or themes to guide the AI.",
        icon: FaPencilAlt
    },
    {
        title: "AI Generation",
        description: "Our advanced AI creates your book based on your inputs.",
        icon: FaCogs
    },
    {
        title: "Review and Download",
        description: "Review your generated book and download in your preferred format.",
        icon: FaCheckCircle
    },
]


const HowItWorks = () => {
    return (
        <div className="mt-20 text-primary">
            <div className="p-12 rounded-xl bg-white/5">
                <div className="text-center">
                    <h4 className="text-2xl font-bold">How it Works</h4>
                </div>
                <div className="mt-6 grid md:grid-cols-2 gap-8">
                    {
                        Workings.map((working, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div>

                                    <div className="p-4 bg-gradient-1 rounded-full">
                                        <working.icon className="w-6 h-6" />
                                    </div>
                                </div>
                                <div>
                                    <h5 className="font-bold text-lg">{working.title}</h5>
                                    <p className="text-secondary">{working.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HowItWorks
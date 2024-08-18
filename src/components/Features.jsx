import { FaBook, FaDownload, FaLanguage, FaRobot } from "react-icons/fa"

const features = [
    {
        title: "AI-Powered Writing",
        description: "Generate high-quality content with advanced AI technology.",
        icon: FaRobot
    },
    {
        title: "Custom Genres",
        description: "Create stories in any genre or blend multiple styles.",
        icon: FaBook
    },
    {
        title: "Instant Download",
        description: "Get your completed book in various formats instantly.",
        icon: FaDownload
    },
    {
        title: "Multilingual",
        description: "Generate content in multiple languages effortlessly.",
        icon: FaLanguage
    },
]

const Features = () => {
    return (
        <div className="mt-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-4">
                {
                    features.map((feature, idx) => (
                        <div key={idx} className="flex group flex-col items-center gap-2 text-primary text-center">
                            <div className="p-5 rounded-full bg-gradient-2">
                                <feature.icon className="w-5 h-5 transition duration-300 group-hover:scale-110" />
                            </div>
                            <div className="mt-2">
                                <h4 className="font-bold text-lg">{feature.title}</h4>
                            </div>
                            <div>
                                <p className="text-secondary text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Features
import { FaPaintBrush, FaUsers, FaUserCircle, FaStore } from "react-icons/fa"


const Workings = [
    {
        title: "Advanced Character Development",
        description: "AI-powered tool for creating deep, complex characters.",
        icon: FaUserCircle
    },
    {
        title: "E-book Platform Integration",
        description: "Seamless publishing to popular e-book platforms.",
        icon: FaStore
    },
    {
        title: "Collaborative Writing",
        description: "Co-create stories with other authors or AI assistants.",
        icon: FaUsers
    },
    {
        title: "AI Cover Art Generation",
        description: "Create stunning book covers with AI-generated art.",
        icon: FaPaintBrush
    },
]


const Roadmap = () => {
    return (
        <div className="mt-20 text-primary">
            <div className="p-12 rounded-xl bg-white/5">
                <div className="text-center">
                    <h4 className="text-2xl font-bold">Roadmap</h4>
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

export default Roadmap
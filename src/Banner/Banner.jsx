const Banner = () => {
    const cards = [
        {
            title: "Browse Profiles",
            desc: "1200+ VERIFIED PROFILES",
            image: "https://i.ibb.co/rZbDBvB/Adobe-Stock-650211873-Preview.jpg",
            gradient: "from-red-500 to-transparent",
        },
        {
            title: "Wedding Pages",
            desc: "MAKE RESERVATION",
            image: "https://i.ibb.co/bvsvRYc/pre-wedding-photoshoot-ideas-2023-1440x960.jpg",
            gradient: "from-blue-500 to-transparent",
        },
        {
            title: "All Services",
            desc: "1200+ VERIFIED PROFILES",
            image: "https://i.ibb.co/FhkvvQX/stylish-woman-spending-time-summer-field-1157-36092.jpg",
            gradient: "from-green-500 to-transparent",
        },
        {
            title: "Join Now",
            desc: "1200+ VERIFIED PROFILES",
            image: "https://i.ibb.co/zZsp0HC/BJ-494.jpg",
            gradient: "from-amber-300 to-transparent",
        },
    ];

    return (
        <div className="bg-slate-100   pt-9 z-50 pb-10">
            <p className="lg:px-32 font-medium text-yellow-800 mb-6">WEDDING MATRIMONY</p>
            <div className="px-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {cards.map((card, index) => (
                    <div key={index} className="h-48 w-full bg-red-500 rounded-md relative overflow-hidden cursor-pointer group">
                        <img
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            src={card.image}
                            alt={card.title}
                        />
                        <div className={`absolute top-0 h-full w-full bg-gradient-to-r ${card.gradient}`}></div>
                        <div className="absolute top-0 h-full  flex flex-col justify-center px-6 pt-7">
                            <p className="text-xl text-white">{card.title}</p>
                            <p className="text-xs text-white pb-4">{card.desc}</p>
                            <button className="btn btn-sm bg-black text-white border-none hover:bg-black">
                                MORE DETAILS
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;

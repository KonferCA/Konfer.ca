import {
    HawkHacksEvent,
    HawkHacksLogo,
    CollisionEvent,
    CollisionLogo,
    LCSEvent,
    LCSLogoEvent,
    SPURBrand,
    BBQEvent,
} from '@assets';

const Events = () => {
    const events = [
        {
            id: 1,
            title: 'SPUR Community BBQ Festival - Presented by Konfer x SPUR Innovation Center',
            logo: SPURBrand,
            image: BBQEvent,
            link: 'https://lu.ma/aouu9bsq'
        },
        {
            id: 2,
            title: 'HawkHacks 2024',
            logo: HawkHacksLogo,
            image: HawkHacksEvent,
            link: 'https://hawkhacks.ca'
        },
        {
            id: 3,
            title: 'Yacht After-Party - Collision 2024',
            logo: CollisionLogo,
            image: CollisionEvent,
            link: 'https://lu.ma/8iwq9lxb'
        },
        {
            id: 4,
            title: 'Laurier Computing Society',
            logo: LCSLogoEvent,
            image: LCSEvent,
            link: 'https://lauriercs.ca'
        }
    ];

    return (
        <section id="past-events">
            <h2 className="text-white text-4xl font-bold mb-12 text-center">Past Events</h2>
            <div className="flex flex-col gap-4">
                {events.map((event, index) => (
                    <div key={event.id}>
                        <a 
                            href={event.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`block relative ${
                                index % 2 === 0 
                                    ? 'w-[85vw] rounded-r-2xl' 
                                    : 'w-[85vw] rounded-l-2xl ml-[15vw]'
                            }`}
                        >
                            <div
                                className={`relative lg:h-80 h-40 bg-[#1a1f2a] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer overflow-hidden ${
                                    index % 2 === 0 ? 'rounded-r-2xl' : 'rounded-l-2xl'
                                }`}
                            >
                                <img 
                                    src={event.image}
                                    alt={event.title}
                                    className="absolute inset-0 w-full h-full object-cover bg-[#224F69]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-4 w-full flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center">
                                        <img 
                                            src={event.logo}
                                            alt={`${event.title}`}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-white font-bold">
                                        {event.title}
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export { Events };
import Image from "next/image";
import {portfolioData} from "@/data/data";
import Link from "next/link";

function Realizacje() {
    return (
        <div className='mt-20 flex flex-col items-center md:mx-auto md:max-w-7xl md:w-full'>
            <div className='grid grid-cols-1 '>
                <div>
                    <div className={`flex flex-col items-center`}>
                        <h2 className={`text-3xl font-bold`}>Realizacje</h2>

                        <span className={`block w-[100px] h-[1px] my-6 bg-black`}></span>
                    </div>
                </div>
            </div>
            <div className='px-5 flex flex-col items-center  md:w-full'>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {portfolioData.map((project) => (
                        <Link href={project.path} key={project.title}>
                            <div
                                className='relative overflow-hidden hover:shadow-xl transition-all duration-300'>
                                <Image
                                    src={project.img}
                                    alt={project.alt}
                                    width={1920}
                                    height={0}
                                    className='w-full aspect-video object-cover transition duration-300 hover:scale-[1.03]'
                                />
                                <h3 className='absolute right-0 bottom-4 bg-white px-10 py-3 text-black text-xl'>
                                    {project.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Realizacje;

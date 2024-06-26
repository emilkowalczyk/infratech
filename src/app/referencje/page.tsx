function Referencje() {
    return (
        <div className='mt-20 px-5 flex flex-col items-center md:mx-auto md:max-w-5xl md:w-full'>
            <div className='grid grid-cols-1 '>
                <div>
                    <div className={`flex flex-col items-center`}>
                        <h2 className={`text-3xl font-bold`}>Nasze referencje</h2>

                        <span className={`block w-[100px] h-[1px] my-6 bg-black`}></span>
                    </div>
                </div>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='w-full aspect-video bg-white'></div>
                <div className='w-full aspect-video bg-white'></div>
                <div className='w-full aspect-video bg-white'></div>
                <div className='w-full aspect-video bg-white'></div>
                <div className='w-full aspect-video bg-white'></div>
                <div className='w-full aspect-video bg-white'></div>
            </div>
        </div>
    );
}

export default Referencje;

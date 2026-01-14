import React from 'react';

const SaveTheDate = () => {
    return (
        <div className='flex flex-grow justify-center items-center'>
            <header className='flex flex-col justify-center items-center text-center'>
                <h1 className='font-petrona text-[48px] sm:text-[86px] text-[#FFF] text-shadow leading-none pb-2'>
                    Fabiana & Willian
                </h1>

                {/* Linha divisória e título "SAVE THE DATE" */}
                <div className='flex w-full items-center gap-2 my-2'>
                    <DividerLine/>
                    <h2 className='font-petrona px-4 text-[16px] sm:text-[20px] text-[#FFF] text-shadow leading-none whitespace-nowrap'>
                        SAVE THE DATE
                    </h2>
                    <DividerLine/>
                </div>

                <h3 className='font-great-vibes text-[32px] sm:text-[46px] text-[#FFF] text-shadow leading-none py-2'>
                    11 de Abril de 2026
                </h3>

                <img src='./oliveira.svg' alt='folhas' className='w-full max-w-[4rem] sm:max-w-[5rem]' />

                {/* <Countdown /> */}

            </header>
        </div>
    );
};

const DividerLine = () => (
    <div className='w-full h-[1px] rounded-full bg-[#FFF]' />
);

export default SaveTheDate;
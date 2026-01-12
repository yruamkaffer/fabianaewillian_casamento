import React from 'react';
import MapsComponent from './MapsComponent';

const WhenAndWhere = () => {
    const item = {
        title: "Cerimônia",
        date: "Sábado, 11 de abril de 2026",
        time: "Início da cerimônia: 17h30",
        address: "Paróquia São Francisco de Assis - R. Platina, 232 - Saguaçu",
    }

    return (
        <div className="flex flex-col items-center w-full max-w-[80rem] gap-4 ">
            {/*<img src='./oliveira3.svg' alt='folhas' className='w-full max-w-[3rem] rotate-45' /> */}
            <img src="./ceremony-icon-2.svg" alt='icone' className='w-full max-w-[3rem] md:max-w-[4rem]' />
            <h1 className='font-petrona text-3xl lg:text-[46px] font-bold'>Quando & Onde</h1>
            <div className='flex flex-col justify-center items-center w-full text-center pb-5 px-[1rem]' >
                <span className='text-[14px]'>{item.date}</span>
                <span className='text-[14px]'>{item.time}</span>
                <span className='text-[14px]'>{item.address}</span>
            </div>
            
            <MapsComponent />
        </div>
    );
};

export default WhenAndWhere;
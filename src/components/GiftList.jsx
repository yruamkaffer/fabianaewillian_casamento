import React from 'react';

const GiftList = () => {
    const gifts = [
        { title: "Presente ideal", img: "presente.jpeg", link: "#https://nubank.com.br/cobrar/4gz3d/67196b6f-76a5-4f92-a39d-225b0ba92bad", price: "0,00" },
        { title: "Iluminação", img: "iluminacao.jpeg", link: "#https://nubank.com.br/cobrar/4gz3d/67196b1c-a42a-4f2f-a0a9-7650225b9705", price: "62,81"  },
        { title: "Diária do encanador", img: "encanador.jpeg", link: "#https://nubank.com.br/cobrar/4gz3d/67196b48-6c84-4ced-aaf4-882a1c569478", price: "148,57"  },
        { title: "Diária do eletricista", img: "eletrecista.jpeg", link: "#https://nubank.com.br/cobrar/4gz3d/67196af3-53c0-4668-a375-c60eed31af16", price: "189,31"  },
        { title: "Torneira do banheiro", img: "torneira-banheiro.jpeg", link: "#https://nubank.com.br/cobrar/4gz3d/67196ac8-25c0-4877-9d35-d2af4518c5a2", price: "221,02"  },
        { title: "Diária do pedreiro", img: "pedreiro.jpeg", link: "#https://nubank.com.br/cobrar/4gz3d/67196988-6415-45c0-b276-ab79334710c8", price: "312,26"  },
        { title: "Saco de cimento", img: "saco-cimento.jpeg", link: "#https://nubank.com.br/cobrar/4gz3d/67196a5f-6c18-44e5-be7b-69f62b7813ca", price: "373,26" },
        { title: "Caixa d'água 1000 litros", img: "caixa-agua.jpeg", link: "#https://nubank.com.br/cobrar/4gz3d/6719641c-d8d1-44af-af7f-9eb495843fba", price: "387,31"  },
        { title: "Piso da sala", img: "piso-sala.jpeg", link: "#https://nubank.com.br/cobrar/4gz3d/671962cf-5054-4e97-9e69-d18a662e9834", price: "436,12"  },
        { title: "Pastilhas para banheiro", img: "pastilhas.jpeg", link: "#https://nubank.com.br/cobrar/4gz3d/671969dc-4533-43da-bc3b-c2472e68b40c", price: "495,31"  },
        { title: "Pintura da casa", img: "pintura-casa.jpeg", link: "#https://nubank.com.br/cobrar/4gz3d/67196a14-a4ea-4aed-a416-68449189d027", price: "532,98" },
        { title: "Impermeabilização", img: "impermeabilizacao.jpeg", link: "#https://nubank.com.br/cobrar/4gz3d/671969be-5f72-446b-a362-c4e4e73195bc", price: "589,16"  },
        { title: "Piso da cozinha", img: "piso-cozinha.jpeg", link: "#https://nubank.com.br/cobrar/4gz3d/671963a3-2bb8-46be-bb3c-a4cf5d91df2c", price: "639,54"  },
        { title: "Telhado da casa", img: "telhado.jpeg", link: "#https://nubank.com.br/cobrar/4gz3d/671963ec-fe3a-4ffd-ad60-720c1381d603", price: "847,63"  },
        { title: "Teto de gesso", img: "teto-de-gesso.jpeg", link: "#https://nubank.com.br/cobrar/4gz3d/67196ab1-80de-4bc0-8db7-8ee14be44367", price: "1024,08" },
    ];

    return (

        <div className="flex flex-col justify-center items-center w-full px-[1rem]">
            <img src='./flor1.svg' alt='folhas' className='w-full max-w-[6rem] pb-10 ' />
            {/* Título e descrição */}
            <HeaderSection />

            {/* Lista de presentes */}
            <div className="max-w-[80rem]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10">
                    {gifts.map((gift, index) => (
                        <GiftCard
                            key={index}
                            title={gift.title}
                            img={gift.img}
                            link={gift.link}
                            price={gift.price}
                        />
                    ))}
                </div>
            </div>
        </div>

    );
};

const HeaderSection = () => (
    <div className="flex flex-col justify-center items-center text-center">
        <h1 className="font-petrona text-3xl md:text-[46px] font-bold md:pb-4">Lista de Presentes</h1>
        <span className="opacity-80 max-w-[60rem]">
            Preparamos com carinho uma lista de presentes que gostaríamos de receber. Sinta-se à vontade para escolher um dos itens abaixo ou qualquer outro presente de sua escolha.
        </span>
    </div>
);

const GiftCard = ({ title, img, link, price }) => {
    return (
        <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
            <div className="w-full h-[200px]">
                <img className="w-full h-full object-cover" src={img} alt={`Foto ${title}`} />
            </div>
            <div class="px-4 py-4">
                <div class="font-bold text-xl mb-1 opacity-80" >{title}</div>
                <span className='opacity-80 font-semibold'>
                    R$: {price}
                </span>
            </div>
            <div class="flex flex-col justify-center px-4 pb-4">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <button class=" bg-[#4e6146] hover:bg-[#636b5f] text-[#FFF] font-bold py-2 px-4 rounded-md w-full">
                        Presentear
                    </button>
                </a>
            </div>
        </div>    
    )
}
export default GiftList;
import React from 'react';

const GiftList = () => {
    const gifts = [
        { title: "Presente ideal", img: "presente.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966de27-57be-49b2-b31e-195c313944d0", price: "0,00" },
        { title: "Só pra não dizer que não dei nada", img: "SO.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966dc2c-d5b6-478d-bf20-694a433b78cb", price: "50,00" },
        { title: "Fundo Emergencial para TPM", img: "TPM.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966dc4a-62c8-4d9a-a78c-a61c9f57958a", price: "70,00"  },
        { title: "KIT para Ressaca", img: "RESSACA.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966dc6f-c79a-47c2-829a-6e6ae4df46fd", price: "100,00"  },
        { title: "Despertador para a noiva", img: "DESPERTADOR.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966dc81-93af-4800-9021-f9172d479162", price: "130,00"  },
        { title: "Panos de prato novos para diarista (noiva)", img: "PANOS.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966dc91-e990-4ea7-b5b2-cdf24acc6d01", price: "150,00"  },
        { title: "Rolo de macarrão da noiva", img: "ROLO.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966dca2-c45f-4cd0-b7ff-2dbb03666d10", price: "180,00"  },
        { title: "Diarista", img: "DIARISTA.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966dcb0-5bfe-4051-ace5-2b1f82b0086c", price: "200,00" },
        { title: "Capacete contra rolo de macarrão", img: "CAPACETE.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966dcc0-f77a-4957-a1d3-36467ea1dfa2", price: "240,00" },
        { title: "Máscara de gás para o noivo trocar as fraldas do futuro filho", img: "MASCARA.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966dcce-fc29-4d1b-a318-f266472d8bf9", price: "280,00"  },
        { title: "5 meses de churu para os gatos", img: "CHURU.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966dcdf-45b0-4914-8f35-cfb9048660b2", price: "300,00"  },
        { title: "10 engradados de coquinha zero para a noiva", img: "COCA.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966dced-c648-471a-9cce-63f233982149", price: "320,00"  },
        { title: "Massagem relaxante para o noivo depois de ver a conta do casamento", img: "MASSAGEM.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966dcfe-b923-413d-9d03-b4f2a3965616", price: "350,00" },
        { title: "coleção de jogos para alegria do noivo e tristeza da noiva", img: "JOGOS.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966dd0d-a4a4-4262-807d-7458b311996f", price: "380,00"  },
        { title: "GPS Domesticado: Sistema que ajuda o noivo a encontrar coisas óbvias", img: "GPS.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966dd1d-b4d3-4c07-acad-a0a501bf00a4", price: "550,00"  },
        { title: "Lingerie chique", img: "LINGERIE.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966dd2e-27fe-4dc9-b932-1b3e2ba2fc9e", price: "400,00"  },
        { title: "Academia para os noivos", img: "ACADEMIA.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966dd3e-482f-4193-b4ad-1d71f2f8527c", price: "435,00" },
        { title: "Vale SPA para os noivos", img: "SPA.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966dd4d-e130-4a9a-a0c5-b53da64dda7d", price: "470,00" },
        { title: "Jantar romântico", img: "JANTAR.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966dd6e-b989-4a1f-a51f-9b662221c5bc", price: "500,00" },
        { title: "Ajuda para pagar o cartão de crédito da noiva", img: "CREDITO.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966dd7d-99d1-4e81-8664-9d2eca1231a1", price: "600,00" },
        { title: "Acessório de última geração para limpar a casa", img: "LIMPADOR.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966dd90-d009-4db5-8567-cea79d19d063", price: "649,50" },
        { title: "2 meses de Burger King para os noivos", img: "BK.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966dda1-b7c0-4e77-b8c2-70a8a87a11e7", price: "700,00" },
        { title: "10 engradados de HEINEKEN", img: "HEINECKEN.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966ddb0-fde5-4684-b3ea-b7bf9bfc9566", price: "850,00" },
        { title: "Ajuda com o aluguel atrasado", img: "ALUGUEL.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966ddbd-7074-4fca-a560-6557a485c1f6", price: "860,00" },
        { title: "Fraldas... Brincadeira!", img: "FRALDAS.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966ddc9-4edf-4c9d-82bd-bc856823c511", price: "900,00" },
        { title: "Adega de Vinhos", img: "ADEGA.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966ddd7-b5af-48fb-9a14-43a2995922a3", price: "1000,00" },
        { title: "Voucher para o noivo poder estar certo uma vez", img: "VOUCHER.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966dde5-13e4-49fa-a9bf-fae7dfe4c604", price: "1100,00" },
        { title: "Viagem dos sonhos do casal", img: "SONHO.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966ddf2-1602-4e99-999c-0282d8cecad3", price: "1250,00" },
        { title: "Ingresso para F1", img: "F1.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966de01-f9f6-481e-a621-4cdf88a0e393", price: "1550,00" },
        { title: "Se por uma intervenção divina você se sentir tocado", img: "DIVINO.jpeg", link: "https://nubank.com.br/cobrar/120ayp/6966de12-05bb-49bc-bb29-a06fbb7e1d03", price: "2500,00" },
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
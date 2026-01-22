import React from 'react';
import { PiDressDuotone } from 'react-icons/pi';
import { FaPlaceOfWorship, FaMapMarkedAlt } from "react-icons/fa";
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

const FAQ = () => {
    const faqData = [
        {
            icon: <FaPlaceOfWorship size={56} color="#4e6146" className="bg-[#c8dcbf] rounded-full p-2" />,
            question: 'Local da Cerimônia?',
            answer: 'Paróquia São Francisco de Assis - R. Platina, 232 - Saguaçu, Joinville - SC',
        },
        {
            icon: <FaMapMarkedAlt size={56} color="#4e6146" className="bg-[#c8dcbf] rounded-full p-2" />,
            question: 'Local da Festa?',
            answer: 'Salão Sótão do Restaurante do Nego - R. Fátima, 504 - Fátima, Joinville - SC',
        },
        {
            icon: <FaCalendarAlt size={56} color="#4e6146" className="bg-[#c8dcbf] rounded-full p-2" />,
            question: 'Data',
            answer: 'Sábado, 11 de abril de 2026.',
        },
        {
            icon: <FaClock size={56} color="#4e6146" className="bg-[#c8dcbf] rounded-full p-2" />,
            question: 'Horário',
            answer: 'Inicio da cerimonia: 17h30.',
        },
        {
            icon: <PiDressDuotone size={56} color="#4e6146" className="bg-[#c8dcbf] rounded-full p-2" />,
            question: 'Vestimenta?',
            answer: 'Traje esporte fino. Evitar as cores: Branca, Preto e Verde.',
        },

    ];

    return (
        <div className="w-full max-w-[80rem] relative md:pb-20">
            {/* Imagem de fundo como elemento separado */}
            <img src='./FabianaWillian.png' alt='foto do casal' className='absolute inset-0 w-full h-full object-cover z-0' />

            {/* Sobreposição se necessário */}
            <div className="absolute inset-0 bg-[#ffffffcb] backdrop-blur-sm z-10"></div> {/* Se quiser uma leve sobreposição */}

            {/* Conteúdo da div acima da imagem */}
            <div className="relative text-center z-20 px-[1rem]">
                <h1 className="font-petrona text-3xl lg:text-[46px] font-bold opacity-80">Dúvidas Sobre o Evento</h1>
                <span className="text-base opacity-80">Alguma dúvida? Entre em contato com a gente.</span>
            </div>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 pt-14 z-20">
                {faqData.map((item, index) => (
                    <FAQItem key={index} icon={item.icon} question={item.question} answer={item.answer} />
                ))}
            </div>
        </div>
    );
};

function FAQItem({ icon, question, answer }) {
    return (

        <div className="flex flex-col justify-center items-center px-[1rem]">
            {icon}
            <span className="font-petrona pt-2 font-bold opacity-80 text-2xl ">
                {question}
            </span>
            <span className="opacity-80 text-center text-base">
                {answer}
            </span>
            <div className='w-1/2 pt-[2px] mt-3 h-[1px] rounded-full bg-[#4e6146]' />
        </div>

    );
};

export default FAQ;
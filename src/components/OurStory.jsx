import React from 'react';
import { FacebookButton, InstagramButton } from './Buttons';
import ImageBox from './ImageBox';

const OurStory = () => {
    return (
        <>
            <img src='./flor1.svg' alt='folhas' className='w-full max-w-[6rem]' color='#4e6146' />

            {/* Texto sobre a história */}
            <div className='flex flex-col justify-center items-center my-10 w-full max-w-[40rem] text-center'>
                <h1 className='text-[48px] font-petrona italic font-semibold leading-none opacity-80'>Nossa história</h1>
                <span className='opacity-80'>
                    Tudo começou no ensino médio, aquele ambiente perfeito onde acne, trabalhos em grupo e decisões ruins se misturam com naturalidade. Ele era o famoso “conhecido por todos” — tipo prefeito não eleito da escola. Já ela… bem, ela tinha poucos amigos, mas de qualidade tão alta que podiam ser classificados como patrimônio histórico.

A única coisa que eles tinham em comum? A cara de bravo. Aquela expressão de “não chegue perto” que, ironicamente, fez um querer chegar perto do outro. A vida tem um senso de humor peculiar.

Aí entra a amiga em comum — a verdadeira culpada de tudo isso — que resolveu apresentá-los.
E assim, duas criaturas com estilos COMPLETAMENTE opostos se encontraram:
Ele, todo sociável, cheio de histórias, achando que era irresistível.
Ela, com cara de “não estou convencida” e analisando o produto antes de levar pra casa.

Com o tempo, viraram amigos… e aí ele começou um processo conhecido como persistência nível hard. Segundo ela, foram meses insistindo. Segundo ele, ela demorou pra perceber que ele era a última coca-cola gelada no deserto. A verdade? A gente deixa vocês decidirem.

Depois de um tempo ficando, eis que chega o dia *11/04/2018*. Ele respira fundo, reúne toda coragem disponível no estoque (que não era muita), e faz o pedido:
*“Quer namorar comigo?”*
Ela aceitou — talvez por amor, talvez por pena, talvez por fome após a aula, ninguém sabe ao certo.

Mas funcionou!

Desde então, eles não desgrudam. São praticamente dois imãs: quando um tenta ir pra longe, o universo dá um jeito de colar de novo. Até superbonder inveja a aderência.

E agora, caminhando para *11/04/2026*, lá estão eles: 8 anos juntos.
8 anos de risadas, discussões sobre quem comeu o último pedaço, memes compartilhados, choros, vitórias, derrotas, conquistas e muita paciência (principalmente da parte dela, segundo ela; e principalmente da parte dele, segundo ele).

Eles são diferentes? MUITO.
Mas combinam? ABSURDAMENTE.
Uma prova viva de que Deus sabe o que faz — mesmo quando junta duas pessoas que no ensino médio pareciam combinações aleatórias de videogame.

No fundo, ambos sabem a verdade:
A vida ficou muito mais caótica, muito mais divertida e MUITO mais cheia de histórias pra contar desde que se encontraram.

E é por isso que agora estão aqui… planejando um casamento.
E o resto?
O resto vai ser escrito com mais memes, mais risadas, e provavelmente mais caretas de bravo.
                </span>
            </div>

            <img src='./FabianaWillian.png' alt='foto do casal' className='w-full max-w-[30rem] md:hidden' />

            {/* Perfis das pessoas e imagem do casal */}
            <div className='flex flex-col lg:flex-row gap-2 md:gap-14 w-full h-full justify-center items-center'>
                <PersonProfile
                    name="Fabiana"
                    description="À primeira vista, ela parece brava, daquele tipo que você pensa duas vezes antes de incomodar. Tem a aura “durona”, a postura forte… mas basta conviver um pouquinho para descobrir que, na verdade, ela é um marshmallow disfarçado. Por trás da sobrancelha arqueada existe um coração enorme, daqueles que quer ajudar até quem nem pediu ajuda.

Brincalhona, meiga e devidamente debochada, ela domina a arte de dar aquela resposta afiada com carinho. É a pessoa perfeita para rir, chorar, reclamar da vida e fazer planos impossíveis — tudo em menos de cinco minutos.

Ama viajar e ir à praia, mas, ironicamente, não é exatamente a melhor companhia de viagem… porque ela dorme o caminho inteiro. Literalmente. Você pode atravessar três cidades, mudar o clima e quase chegar em outro país — e ela segue firme, igual um anjinho roncando no banco do passageiro.

Mesmo assim, é com ela que ele quer ir para qualquer lugar. Porque ela é parceira de verdade.
Aquela pessoa leal, que segura a mão dele em qualquer desafio, que está sempre ao lado, que não solta por nada.

Ele confia a vida nela — e não é força de expressão.
Ela é o porto seguro, o colo, a risada favorita, o descanso em forma de gente.

E no fim, mesmo com a pose de durona… ela é a parte mais suave, mais bonita e mais essencial da história deles."
                    facebook="Fabiana"
                    instagram="fabilopes"
                />

                <img src='./FabianaWillian.png' alt='foto do casal' className='hidden md:block w-full max-w-[30rem]' />

                <PersonProfile
                    name="Willian"
                    description="Ele é o lado mais atento do casal, daqueles que percebe quando algo não está certo, mas sem entrar em modo drama total. Um toque de preocupação que mostra cuidado, sem transformar tudo em emergência.

De cara fechada, ele engana bem — parece sério, até meio bravo. Mas é só dar cinco minutos de intimidade que todo mundo descobre a verdade: ele faz qualquer um rir falando quase nada. É o tipo de pessoa que solta UMA frase e parece que contou um stand-up inteiro.

Gentil e cuidadoso do jeitinho dele, adora soltar um “an?” mesmo tendo ouvido cada palavra claramente — é só parte da personalidade. Tem piadas tão ruins que passam do ruim e voltam pelo cômico, e tem o raro talento de pesar o clima como ninguém, mas de um jeito que até isso vira motivo de risada.

Não é de falar “eu te amo” toda hora… porém demonstra com cada gesto:
é ele quem deixa o último pedaço (mesmo sendo a coisa favorita dele na vida),
e é ele quem sempre coloca as vontades dela na frente, mesmo que custe seu lanche preferido.

E quando acorda? Ah, quando acorda ele é o próprio golden retriever humano. Felicidade pura, cabelo bagunçado, energia de quem nasceu pra ser amado.

Um amor quietinho, engraçadinho, cheio de cuidados — do jeitinho exato que faz ela ter certeza todos os dias."
                    facebook="Willian"
                    instagram="willian"
                />
            </div>

            <ImageGallery/>
        </>
    );
};

function PersonProfile({ name, description, facebook, instagram }) {
    return (
        <div className='flex flex-col mt-10 w-full max-w-[25rem] text-center lg:text-center'>
            <h2 className='text-[48px] font-petrona italic font-semibold opacity-80'>{name}</h2>
            <span className='opacity-80'>{description}</span>
            <SocialButtons facebook={facebook} instagram={instagram} />
        </div>
    );
};

function SocialButtons({ facebook, instagram }) {
    return (
        <div className='flex gap-3 mt-4 justify-center'>
            <FacebookButton username={facebook} />
            <InstagramButton username={instagram} />
        </div>
    );
};

const ImageGallery = () => {
    const images = [
        './foto1.png', './foto2.png', './foto3.png', './foto4.png',
        './foto5.png', './foto6.png', './foto7.png', './foto8.png'
    ];
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-16 lg:pt-32 z-10'>
            {images.map((src, index) => (
                <ImageBox key={index} src={src} alt={`foto${index + 1}`} />
            ))}
        </div>
    );
};

export default OurStory;
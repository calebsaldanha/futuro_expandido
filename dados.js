const dados = [
    {
        id: 'card1',
        imagem: 'https://www.whido.com.br/wp-content/uploads/2023/09/A-evolucao-da-computacao-quantica-e-suas-implicacoes-futuras-Blog-Whido.jpg',
        titulo: 'Computação Quântica',
        descricaoMeta: 'A computação quântica usa princípios da física quântica para resolver problemas complexos de forma muito mais rápida que os computadores tradicionais.',
        detalhes: `
            <p><strong>Impacto Social:</strong> Esta tecnologia pode transformar a indústria de tecnologia por meio de novos avanços em simulações e criptografia, possibilitando descobertas científicas e melhorias em diversas áreas.</p>
            <p><strong>Impacto Ambiental:</strong> O potencial para melhorar a eficiência energética em grandes cálculos pode ajudar a reduzir o consumo energético associado a tarefas computacionais intensivas.</p>
            <p><strong>Impacto Ético:</strong> Questões importantes incluem a segurança e a privacidade dos dados, além do possível acesso desigual à tecnologia, que pode ampliar a divisão digital.</p>
            <p><strong>Recursos:</strong></p>
            <ul>
                <li><a href="https://www.ime.usp.br/~mapweb/tcc/2018/WagnerJorcuvichV2.pdf">Introdução à Computação Quântica (Artigo)</a></li>
                <li><a href="https://www.youtube.com/watch?v=SNikFgXe_aI">O Futuro da Computação Quântica (Vídeo)</a></li>
                <li><a href="https://www.ime.usp.br/~mapweb/tcc/2018/WagnerJorcuvichV2.pdf">O que é Computação Quântica? (Artigo)</a></li>
                <li><a href="https://www.youtube.com/watch?v=CDo1dhf6JjM">3 Coisas que Computadores Quânticos Vão Mudar Para Sempre
 (Vídeo)</a></li>
            </ul>
        `,
        tags: ['tecnologia', 'ciência', 'física', 'informática']
    },
    {
        id: 'card2',
        imagem: 'https://th.bing.com/th/id/OIP.EspQHIanACUGHbwRBXpRMAHaE7?rs=1&pid=ImgDetMain',
        titulo: 'Edição Genética com CRISPR',
        descricaoMeta: 'CRISPR é uma técnica inovadora de edição genética que permite modificar o DNA com precisão, oferecendo novas possibilidades para tratamento de doenças e aprimoramento de características biológicas.',
        detalhes: `
            <p><strong>Impacto Social:</strong> CRISPR tem o potencial de curar doenças genéticas e melhorar práticas agrícolas, com implicações significativas para a saúde humana e segurança alimentar.</p>
            <p><strong>Impacto Ambiental:</strong> A modificação genética pode impactar práticas agrícolas e afetar a biodiversidade, exigindo uma gestão cuidadosa para evitar efeitos adversos no meio ambiente.</p>
            <p><strong>Impacto Ético:</strong> Levanta questões sobre a modificação genética em humanos, incluindo o potencial para desigualdades e a necessidade de regulamentação ética.</p>
            <p><strong>Recursos:</strong></p>
            <ul>
                <li><a href="https://www.researchgate.net/publication/359671752_Edicao_Genica_por_CRISPRCas9_Da_Teoria_a_Pratica">O Que é CRISPR? (Artigo)</a></li>
                <li><a href="https://www.youtube.com/watch?v=OiMBonOFVaM">Ética e CRISPR (Vídeo)</a></li>
                <li><a href="https://www.nadcro.com/crispr-crrna-tracrrna-grna-synthesis-services.html?msclkid=219e40a513cd1da79393267eca99581d&utm_source=bing&utm_medium=cpc&utm_campaign=ZJK-nadcro-Service&utm_term=CRISPR%20crRNA%20Synthesis&utm_content=1-1-2%20Synthesis-CRISPR">A Técnica CRISPR (Artigo)</a></li>
                <li><a href="https://www.youtube.com/watch?v=EGgOpyKm6oQ">Como o CRISPR Funciona?(Vídeo)</a></li>
            </ul>
        `,
        tags: ['biotecnologia', 'saúde', 'genética', 'medicina']
    },
    {
        id: 'card3',
        imagem: 'https://7wdata.be/wp-content/uploads/2021/03/artificial-intelligence-brain.png',
        titulo: 'Redes Neurais',
        descricaoMeta: 'Redes neurais são sistemas inspirados no cérebro humano que utilizam grandes volumes de dados para aprender e fazer previsões, sendo uma peça-chave em Inteligência Artificial.',
        detalhes: `
            <p><strong>Impacto Social:</strong> Estão transformando setores como saúde, finanças e marketing através de IA avançada, melhorando a análise de dados e a tomada de decisões.</p>
            <p><strong>Impacto Ambiental:</strong> O treinamento de modelos pode consumir uma quantidade significativa de energia, levantando questões sobre a sustentabilidade da tecnologia.</p>
            <p><strong>Impacto Ético:</strong> Desafios incluem questões de privacidade e o impacto no mercado de trabalho, com a necessidade de equilibrar inovação e responsabilidade.</p>
            <p><strong>Recursos:</strong></p>
            <ul>
                <li><a href="https://periodicos.utfpr.edu.br/recit/article/view/4330#:~:text=Diante%20disso%2C%20o%20presente%20artigo%20tem%20como%20objetivo,a%20efici%C3%AAncia%20do%20processo%20ao%20qual%20se%20destina.">Fundamentos das Redes Neurais (Artigo)</a></li>
                <li><a href="https://www.youtube.com/watch?v=ggmDI9_fm54">Como Funcionam as Redes Neurais (Vídeo)</a></li>
                <li><a href="https://www.scielo.br/j/ci/a/SQ9myjZWLxnyXfstXMgCdcH/">Redes Neurais: Um Guia Completo (Artigo)</a></li>
                <li><a href="https://www.youtube.com/watch?v=1_c_MA1F-vU">Redes Neurais e Machine Learning(Vídeo)</a></li>
            </ul>
        `,
        tags: ['inteligência artificial', 'tecnologia', 'machine learning', 'computação']
    },
    {
        id: 'card4',
        imagem: 'https://www.example.com/explorador-ideias.jpg',
        titulo: 'Explorador de Ideias',
        descricaoMeta: 'Explore diferentes categorias e sentimentos sobre o impacto de tecnologias e inovações.',
        categorias: [
            {
                id: 'cat-ciencia',
                titulo: 'Ciência',
                imagem: 'https://s4.static.brasilescola.uol.com.br/be/2023/06/ciencia-inteligencia-artificial.jpg',
                sentimentos: [
                    { tipo: 'Otimista', descricao: 'Avanços científicos prometem curas para doenças e novos entendimentos do universo.' },
                    { tipo: 'Distópico', descricao: 'Algumas inovações podem ter consequências imprevistas e potencialmente perigosas.' }
                ]
            },
            {
                id: 'cat-saude',
                titulo: 'Saúde',
                imagem: 'https://pronep.s3.amazonaws.com/wp-content/uploads/2022/10/14235834/tecnologia-medicina-2.png',
                sentimentos: [
                    { tipo: 'Otimista', descricao: 'Tecnologias de saúde podem melhorar a qualidade de vida e a longevidade.' },
                    { tipo: 'Distópico', descricao: 'Desafios na implementação e acessibilidade podem agravar desigualdades na saúde.' }
                ]
            },
            {
                id: 'cat-tecnologia',
                titulo: 'Tecnologia',
                imagem: 'https://th.bing.com/th/id/R.967ff79cb54bf258f11cd5adae102cf9?rik=QcDyMIiq0iXRxQ&pid=ImgRaw&r=0',
                sentimentos: [
                    { tipo: 'Otimista', descricao: 'Novas tecnologias podem transformar a forma como trabalhamos e nos comunicamos.' },
                    { tipo: 'Distópico', descricao: 'A dependência de tecnologia pode levar a problemas sociais e de segurança.' }
                ]
            },
            {
                id: 'cat-ambiente',
                titulo: 'Ambiente',
                imagem: 'https://voz.ucad.edu.mx/wp-content/uploads/2019/05/TECNOLOG%C3%8DA-MEDIO-AMBIENTE.jpg',
                sentimentos: [
                    { tipo: 'Otimista', descricao: 'Tecnologias podem ajudar a preservar o meio ambiente e promover a sustentabilidade.' },
                    { tipo: 'Distópico', descricao: 'O impacto ambiental das tecnologias pode ser prejudicial se não for bem gerido.' }
                ]
            }
        ],
        tags: ['ciência', 'saude', 'saúde', 'tecnologia', 'ambiente', 'inovação', 'futuro']
    },
    {
        id: 'card5',
        imagem: 'https://th.bing.com/th/id/R.f16cf1d82c25625938bd7d0908d6cdca?rik=67wzWM9XgJCK4w&pid=ImgRaw&r=0',
        titulo: 'Carros Autônomos',
        descricaoMeta: 'Tecnologia de veículos autônomos com potencial para transformar o transporte urbano e rural.',
        detalhes: `
            <p><strong>Impacto Local:</strong> Em pequenas comunidades, podem melhorar a acessibilidade e reduzir acidentes de trânsito.</p>
            <p><strong>Impacto Global:</strong> Nas grandes cidades, podem transformar o trânsito e reduzir a necessidade de estacionamento.</p>
            <p><strong>Recursos:</strong></p>
            <ul>
                <li><a href="https://www.theverge.com/2021/5/12/22432240/self-driving-cars-explained-what-are-ways-driving-technology">Como Funcionam os Carros Autônomos (Artigo)</a></li>
                <li><a href="https://www.youtube.com/watch?v=2IQ3fNffh2k">O Futuro dos Carros Autônomos (Vídeo)</a></li>
            </ul>
        `,
        tags: ['tecnologia', 'transporte', 'inovação', 'mobilidade']
    },
    {
        id: 'card6',
        imagem: 'https://th.bing.com/th/id/OIP.VUmOvIWwrbQM0lp79oIJpgHaEc?rs=1&pid=ImgDetMain',
        titulo: 'Energia Renovável',
        descricaoMeta: 'Tecnologia de energia renovável com impactos significativos tanto local quanto global.',
        detalhes: `
            <p><strong>Impacto Local:</strong> Instalações de energia renovável em áreas rurais podem reduzir custos de energia e promover a sustentabilidade local.</p>
            <p><strong>Impacto Global:</strong> Integração em grandes cidades pode reduzir a pegada de carbono e melhorar a eficiência energética urbana.</p>
            <p><strong>Recursos:</strong></p>
            <ul>
                <li><a href="https://www.energia.gov.br/renewable-energy">O Futuro da Energia Renovável (Artigo)</a></li>
                <li><a href="https://www.youtube.com/watch?v=G1R1PqET1kc">Como Funciona a Energia Renovável (Vídeo)</a></li>
            </ul>
        `,
        tags: ['energia', 'sustentabilidade', 'meio ambiente', 'tecnologia']
    }
];

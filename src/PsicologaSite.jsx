// Arquivo atualizado com novo design, cores e tipografia
// Importar fontes no index.html ou via CSS global:
// <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">

import { motion } from "framer-motion";

export default function PsicologaSite() {
  const especialidades = [
    {
      titulo: "Ansiedade",
      descricao:
        "Auxílio no controle de pensamentos acelerados, crises de ansiedade e preocupação excessiva.",
    },
    {
      titulo: "Depressão",
      descricao:
        "Apoio para lidar com tristeza profunda, desânimo e perda de sentido na vida.",
    },
    {
      titulo: "Angústia",
      descricao:
        "Compreensão das emoções difíceis e construção de caminhos para aliviar o sofrimento emocional.",
    },
    {
      titulo: "Autoestima",
      descricao: "Fortalecimento da autoconfiança e da relação consigo mesmo.",
    },
    {
      titulo: "Autoconhecimento",
      descricao:
        "Processo para compreender padrões emocionais, comportamentos e escolhas.",
    },
    {
      titulo: "Autocrítica",
      descricao:
        "Redução da cobrança excessiva e desenvolvimento de uma postura mais acolhedora consigo.",
    },
    {
      titulo: "Medos",
      descricao:
        "Trabalho terapêutico para compreender e enfrentar medos limitantes.",
    },
    {
      titulo: "Estresse",
      descricao:
        "Estratégias para lidar com sobrecarga emocional e pressão do dia a dia.",
    },
    {
      titulo: "Dependência emocional",
      descricao:
        "Construção de vínculos mais saudáveis e fortalecimento da autonomia emocional.",
    },
    {
      titulo: "Relacionamentos",
      descricao:
        "Melhora da comunicação, dos limites e da qualidade das relações afetivas.",
    },
    {
      titulo: "Fobia",
      descricao:
        "Acompanhamento no enfrentamento gradual de medos intensos e específicos.",
    },
    {
      titulo: "Solidão",
      descricao:
        "Acolhimento emocional e fortalecimento da conexão consigo e com os outros.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#4A443F] font-[Montserrat]">
      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-6 py-5  max-w-6xl mx-auto gap-6">
        <img
          src="/logo.png"
          alt="Logo Psithainaalkimim"
          className="h-52 sm:h-56 object-contain mx-auto sm:mx-0"
        />

        <a
          href="https://api.whatsapp.com/message/BL7TGOMEWES7B1?autoload=1&app_absent=0&utm_source=ig"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#D9C5B2] text-[#4A443F] px-6 py-3 rounded-2xl hover:opacity-80 transition font-medium text-center w-full sm:w-auto"
        >
          Agendar sessão
        </a>
      </header>

      {/* Hero */}
      <section className="px-6 py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl leading-tight mb-6 font-[Playfair Display]">
            Cuidar da sua saúde emocional é um ato de coragem
          </h2>
          <p className="mb-8 text-[#4A443F]/80">
            Atendimento psicológico humanizado para adultos e adolescentes,
            online e presencial.
          </p>
          <a
            href="https://api.whatsapp.com/message/BL7TGOMEWES7B1?autoload=1&app_absent=0&utm_source=ig"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#BFA07D] text-white px-7 py-3 rounded-2xl text-base hover:opacity-90 transition"
          >
            Agende pelo WhatsApp
          </a>
        </motion.div>

        <div className="flex justify-center">
          <img
            src="thay.png"
            alt=""
            className="w-80 h-80 object-cover rounded-[2rem] shadow-md"
          />
        </div>
      </section>

      {/* Sobre */}
      <section className="px-6 py-14 bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl mb-6 font-[Playfair Display]">Sobre mim</h3>
          <p className="leading-relaxed text-[#4A443F]/80">
            Olá, seja bem-vindo(a). É um prazer ter você aqui. Sou a Thaina
            Alkimim, psicóloga clínica, formada pela Universidade Cruzeiro do
            Sul, pós-graduada em Psicologia Organizacional e do Trabalho, e
            especializada na abordagem da Terapia Cognitivo-Comportamental
            (TCC). Acredito que a terapia é um espaço de acolhimento, reflexão e
            transformação. No meu trabalho, ofereço uma escuta segura e
            estratégias práticas para que você desenvolva autonomia emocional,
            fortaleça sua confiança e construa formas mais saudáveis de lidar
            com suas emoções, pensamentos e desafios. Desde o início da minha
            trajetória, meu propósito sempre foi contribuir para que as pessoas
            possam viver com mais leveza, consciência e equilíbrio. Priorizo a
            escuta atenta, a leveza e a flexibilidade, garantindo que a terapia
            não seja um processo rígido, mas sim um caminho de aprendizado e
            crescimento. Realizo atendimentos presenciais em São Paulo – SP,
            além de sessões online, possibilitando que mais pessoas tenham
            acesso a psicoterapia
          </p>
        </div>
      </section>

      {/* Especialidades */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h3 className="text-3xl mb-10 font-[Playfair Display]">
          Especialidades
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {especialidades.map((item, i) => (
            <div
              key={i}
              className="bg-white/70 p-7 rounded-3xl shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-lg mb-2 font-medium">{item.titulo}</h4>
              <p className="text-sm text-[#4A443F]/70">{item.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section className="px-6 py-16 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl mb-4 text-center font-[Playfair Display]">
            O que dizem sobre o acompanhamento
          </h3>
          <p className="text-center mb-12 text-[#4A443F]/70 max-w-2xl mx-auto">
            Relatos anônimos de pessoas que encontraram na terapia um espaço
            seguro de cuidado, escuta e transformação emocional.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "A sessão de hoje foi muito boa e está me ajudando muito cada dia que passa, estou tendo um aprendizado para minha vida.",
              "Obrigado por toda ajuda de sempre! Você é maravilohsa em tudo, me ajuda diaramente a ser uma pessoa melhor e me sentir melhor comigo mesmo faz toda diferença. Você foi um achao na minha vida!!!",
              "Você com certeza é uma peça fundamental na minha vida de muitas pessoas e principalmente na minha haha, você nos ajuda a ver aquilo que precisamos e que nunca irírimos ver sem sua ajuda! Seu trabalho é lindo e necessário para salvar vidas!!",
              "Obrigada pelas terapias! Acredito que melhorei de forma positiva e vocé e você tem contribuído com isso, obrigada por não desistir de mim. Eu jamais trocaria de psi... Essa eu amo!!!",
              "Muito origado Thaina, você se tornou uma pessoa fundamental na minha vida. Obrigado por me apoiar e me fazer voltar à razão, parabéns por ser essa profissional execepcional. Te desejo todo sucesso do mundo.",
              "Thai obrigado por mais uma sessão incrível, grata pelo tralho maravilhoso que você está fazendo, consigo ver a cada sessão uma evolução, um desbloqueio, obrigado por tudo.",
              "Muito obrigada pela sessão de hoje!! Estou muito mais leve e consegui me abrir e falar tudo o que precisava!!!",
              "Eu quase sempre esqueço de te mandar mensagem, mas muito obrigada por todo acompanhamento qye você ta fazendo comigo. As seções estão me ajudando muito.",
            ].map((texto, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-7 rounded-3xl shadow-sm"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx}>⭐</span>
                  ))}
                </div>
                <p className="text-sm mb-4 italic text-[#4A443F]/80">
                  “{texto}”
                </p>
                <span className="text-xs text-[#4A443F]/50">
                  Paciente (anônimo)
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agendamento */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center bg-white/60 p-12 rounded-[3rem] shadow-sm">
          <h3 className="text-3xl mb-4 font-[Playfair Display]">
            Agende sua sessão
          </h3>
          <p className="mb-8 text-[#4A443F]/70">
            Entre em contato pelo WhatsApp e tire suas dúvidas sem compromisso.
          </p>
          <a
            href="https://api.whatsapp.com/message/BL7TGOMEWES7B1?autoload=1&app_absent=0&utm_source=ig"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#BFA07D] text-white px-8 py-3 rounded-2xl hover:opacity-90 transition"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* Footer com redes sociais */}
      <footer className="px-6 py-10 text-center text-sm text-[#4A443F]/60">
        <div className="flex justify-center gap-8 mb-6">
          <a href="#" className="hover:opacity-70 font-medium">
            Instagram
          </a>
          <a href="https://www.instagram.com/psithainaalkimim/" className="hover:opacity-70 font-medium">
            LinkedIn
          </a>
          <a
            href="https://api.whatsapp.com/message/BL7TGOMEWES7B1?autoload=1&app_absent=0&utm_source=ig"
            className="hover:opacity-70 font-medium"
          >
            WhatsApp
          </a>
        </div>
        <p>CRP: 06/185558 • Atendimento online e presencial</p>
        <p>© 2026 - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

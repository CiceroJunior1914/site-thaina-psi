import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function PsicologaSite() {
  const whatsappUrl =
    "https://wa.me/5511940284588?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20psicol%C3%B3gico%3F";

  const especialidades = [
    { titulo: "Ansiedade", descricao: "Auxílio no controle de pensamentos acelerados, crises de ansiedade e preocupação excessiva.", icone: "🌿" },
    { titulo: "Depressão", descricao: "Apoio para lidar com tristeza profunda, desânimo e perda de sentido na vida.", icone: "🌱" },
    { titulo: "Angústia", descricao: "Compreensão das emoções difíceis e construção de caminhos para aliviar o sofrimento emocional.", icone: "🕊️" },
    { titulo: "Autoestima", descricao: "Fortalecimento da autoconfiança e da relação consigo mesmo.", icone: "✨" },
    { titulo: "Autoconhecimento", descricao: "Processo para compreender padrões emocionais, comportamentos e escolhas.", icone: "🔍" },
    { titulo: "Autocrítica", descricao: "Redução da cobrança excessiva e desenvolvimento de uma postura mais acolhedora consigo.", icone: "💛" },
    { titulo: "Medos", descricao: "Trabalho terapêutico para compreender e enfrentar medos limitantes.", icone: "🛡️" },
    { titulo: "Estresse", descricao: "Estratégias para lidar com sobrecarga emocional e pressão do dia a dia.", icone: "🧘" },
    { titulo: "Dependência emocional", descricao: "Construção de vínculos mais saudáveis e fortalecimento da autonomia emocional.", icone: "🤝" },
    { titulo: "Relacionamentos", descricao: "Melhora da comunicação, dos limites e da qualidade das relações afetivas.", icone: "💬" },
    { titulo: "Fobia", descricao: "Acompanhamento no enfrentamento gradual de medos intensos e específicos.", icone: "🌊" },
    { titulo: "Solidão", descricao: "Acolhimento emocional e fortalecimento da conexão consigo e com os outros.", icone: "🌸" },
  ];

  const depoimentos = [
    "A sessão de hoje foi muito boa e está me ajudando muito cada dia que passa, estou tendo um aprendizado para minha vida.",
    "Obrigado por toda ajuda de sempre! Você é maravilhosa em tudo, me ajuda diariamente a ser uma pessoa melhor. Você foi um achado na minha vida!!!",
    "Você com certeza é uma peça fundamental na minha vida. Você nos ajuda a ver aquilo que precisamos e que nunca veríamos sem sua ajuda! Seu trabalho é lindo e necessário para salvar vidas!!",
    "Obrigada pelas terapias! Acredito que melhorei de forma positiva e você tem contribuído com isso, obrigada por não desistir de mim. Eu jamais trocaria de psi... Essa eu amo!!!",
    "Muito obrigado Thaina, você se tornou uma pessoa fundamental na minha vida. Obrigado por me apoiar e me fazer voltar à razão, parabéns por ser essa profissional excepcional.",
    "Thai obrigado por mais uma sessão incrível, consigo ver a cada sessão uma evolução, um desbloqueio, obrigado por tudo.",
  ];

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#4A443F] font-[Montserrat]">

      {/* Header sticky */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-[#F9F7F2]/95 backdrop-blur-sm border-b border-[#E8DDD3] shadow-sm"
      >
        <div className="flex justify-between items-center px-6 py-3 max-w-6xl mx-auto">
          <img
            src="/logo.png"
            alt="Logo Psithaina Alkimim Psicologia"
            className="h-16 object-contain"
          />
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D9C5B2] text-[#4A443F] px-5 py-2.5 rounded-2xl hover:bg-[#BFA07D] hover:text-white transition-all duration-300 font-medium text-sm"
          >
            Agendar sessão
          </a>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#BFA07D] mb-4">
            Psicóloga Clínica · CRP 06/185558
          </span>
          <h1 className="text-4xl md:text-5xl leading-tight mb-6 font-[Playfair_Display]">
            Cuidar da sua saúde emocional é um ato de coragem
          </h1>
          <p className="mb-8 text-[#4A443F]/75 text-lg leading-relaxed">
            Atendimento psicológico humanizado para adultos e adolescentes,
            online e presencial.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#BFA07D] text-white px-7 py-3.5 rounded-2xl text-base hover:bg-[#a8896a] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.121 1.532 5.855L.057 23.882l6.19-1.623A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.213-3.726.977.994-3.63-.234-.373A9.818 9.818 0 1112 21.818z"/>
            </svg>
            Agende pelo WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-3 bg-[#D9C5B2]/40 rounded-[2.5rem] blur-xl" />
            <img
              src="thay.png"
              alt="Thaina Alkimim, psicóloga clínica especializada em TCC em São Paulo"
              className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-[2rem] shadow-lg"
            />
          </div>
        </motion.div>
      </section>

      {/* Sobre mim — 2 colunas */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="px-6 py-16 bg-white/60 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl mb-3 font-[Playfair_Display]">Sobre mim</h2>
            <p className="text-[#BFA07D] font-medium mb-5 text-lg leading-snug">
              Psicóloga clínica especializada em Terapia Cognitivo-Comportamental (TCC)
            </p>
            <p className="leading-relaxed text-[#4A443F]/80">
              Olá, seja bem-vindo(a). Sou a Thaina Alkimim, formada pela Universidade Cruzeiro do
              Sul, pós-graduada em Psicologia Organizacional e do Trabalho, e especializada na
              abordagem da TCC. Acredito que a terapia é um espaço de acolhimento, reflexão e
              transformação. Ofereço uma escuta segura e estratégias práticas para que você
              desenvolva autonomia emocional, fortaleça sua confiança e construa formas mais
              saudáveis de lidar com suas emoções, pensamentos e desafios.
            </p>
            <p className="leading-relaxed text-[#4A443F]/80 mt-4">
              Meu propósito é contribuir para que as pessoas vivam com mais leveza, consciência e
              equilíbrio. Realizo atendimentos presenciais em São Paulo – SP e sessões online para
              todo o Brasil.
            </p>
            <div className="flex gap-6 mt-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#BFA07D]">TCC</p>
                <p className="text-xs text-[#4A443F]/60 mt-1">Abordagem</p>
              </div>
              <div className="w-px bg-[#E8DDD3]" />
              <div className="text-center">
                <p className="text-2xl font-bold text-[#BFA07D]">SP</p>
                <p className="text-xs text-[#4A443F]/60 mt-1">Presencial</p>
              </div>
              <div className="w-px bg-[#E8DDD3]" />
              <div className="text-center">
                <p className="text-2xl font-bold text-[#BFA07D]">Online</p>
                <p className="text-xs text-[#4A443F]/60 mt-1">Todo Brasil</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-2 bg-[#BFA07D]/20 rounded-[2.5rem] blur-lg" />
              <img
                src="thay.png"
                alt="Thaina Alkimim psicóloga"
                className="relative w-72 h-72 object-cover rounded-[2rem] shadow-md"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Especialidades */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="text-3xl mb-2 font-[Playfair_Display]">Especialidades</h2>
          <p className="text-[#4A443F]/60 mb-10">Áreas em que posso te acompanhar</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {especialidades.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              className="bg-white/70 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-[#BFA07D] hover:-translate-y-1"
            >
              <span className="text-2xl mb-3 block">{item.icone}</span>
              <h3 className="text-base mb-2 font-semibold">{item.titulo}</h3>
              <p className="text-sm text-[#4A443F]/65 leading-relaxed">{item.descricao}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Depoimentos */}
      <section className="px-6 py-16 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl mb-3 font-[Playfair_Display]">
              O que dizem sobre o acompanhamento
            </h2>
            <p className="text-[#4A443F]/65 max-w-2xl mx-auto">
              Relatos anônimos de pessoas que encontraram na terapia um espaço seguro de cuidado,
              escuta e transformação emocional.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {depoimentos.map((texto, i) => (
              <motion.div
                key={i}
                variants={cardVariant}
                className="bg-white p-7 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg key={idx} className="w-4 h-4 text-[#BFA07D]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm mb-4 italic text-[#4A443F]/75 leading-relaxed">"{texto}"</p>
                <span className="text-xs text-[#4A443F]/45 font-medium">Paciente (anônimo)</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="px-6 py-20"
      >
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#EDE4D8] to-[#F9F7F2] p-14 rounded-[3rem] shadow-sm border border-[#E8DDD3]">
          <h2 className="text-3xl mb-4 font-[Playfair_Display]">Agende sua sessão</h2>
          <p className="mb-8 text-[#4A443F]/65 text-lg">
            Entre em contato pelo WhatsApp e tire suas dúvidas sem compromisso.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#BFA07D] text-white px-9 py-4 rounded-2xl text-base hover:bg-[#a8896a] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.121 1.532 5.855L.057 23.882l6.19-1.623A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.213-3.726.977.994-3.63-.234-.373A9.818 9.818 0 1112 21.818z"/>
            </svg>
            Falar no WhatsApp
          </a>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="px-6 py-10 text-center text-sm text-[#4A443F]/55 border-t border-[#E8DDD3]">
        <div className="flex justify-center gap-8 mb-5">
          <a
            href="https://www.instagram.com/psithainaalkimim/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#BFA07D] transition-colors font-medium"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/thaina-alkimim"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#BFA07D] transition-colors font-medium"
          >
            LinkedIn
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#BFA07D] transition-colors font-medium"
          >
            WhatsApp
          </a>
        </div>
        <p className="mb-1">CRP: 06/185558 · Atendimento online e presencial</p>
        <p>© 2026 - Todos os direitos reservados</p>
      </footer>

      {/* Botão flutuante WhatsApp */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-shadow duration-300"
        aria-label="Falar no WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.121 1.532 5.855L.057 23.882l6.19-1.623A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.213-3.726.977.994-3.63-.234-.373A9.818 9.818 0 1112 21.818z"/>
        </svg>
      </motion.a>
    </div>
  );
}

import { motion } from "framer-motion";

export default function PsicologaSite() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <h1 className="text-xl font-semibold">Psithainaalkimim</h1>
        <button className="bg-black text-white px-5 py-2 rounded-2xl hover:opacity-90 transition">
          Agendar sessão
        </button>
      </header>

      {/* Hero */}
      <section className="px-6 py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Cuidar da sua saúde emocional é um ato de coragem
          </h2>
          <p className="text-gray-600 mb-6">
            Atendimento psicológico humanizado para adultos e adolescentes,
            online e presencial.
          </p>
          <a
            href="https://api.whatsapp.com/message/BL7TGOMEWES7B1?autoload=1&app_absent=0&utm_source=ig"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-6 py-3 rounded-2xl text-base hover:opacity-90 transition"
          >
            Agende pelo WhatsApp
          </a>
        </motion.div>

        <div className="flex justify-center">
          <div className="w-72 h-72 bg-gray-200 rounded-2xl flex items-center justify-center">
            <img
              src="thay.png"
              alt=""
              className="w-72 h-72 bg-gray-200 rounded-2xl flex items-center justify-center"
            />
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Sobre a profissional</h3>
          <p className="text-gray-600 leading-relaxed">
            Psicóloga formada pela Universidade X, com atuação baseada na
            Terapia Cognitivo-Comportamental. Atendimento acolhedor, ético e
            focado no desenvolvimento emocional e bem-estar.
          </p>
        </div>
      </section>

      {/* Serviços */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-8">Como posso ajudar</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {["Ansiedade", "Depressão", "Angústia", "Autoestima", "Autoconhecimento", "Autocrítica", "Medos", "Estresse", "Dependência emocional", "Relacionamentos", "Fobia", "Solidão"].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="font-medium text-lg mb-2">{item}</h4>
              <p className="text-gray-600 text-sm">
                Acompanhamento psicológico com escuta acolhedora e profissional.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Agendamento */}
      <section className="px-6 py-16 bg-[#f5f5f5]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Agende sua sessão</h3>
          <p className="text-gray-600 mb-6">
            Entre em contato pelo WhatsApp e tire suas dúvidas sem compromisso.
          </p>
          <a
            href="https://api.whatsapp.com/message/BL7TGOMEWES7B1?autoload=1&app_absent=0&utm_source=ig"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-6 py-3 rounded-2xl text-base hover:opacity-90 transition"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center text-sm text-gray-500">
        <p>CRP: 06/185558 • Atendimento online e presencial</p>
        <p>© 2026 - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

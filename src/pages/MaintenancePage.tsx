import { motion } from 'framer-motion'

export function MaintenancePage() {
  return (
    <main
      className="min-h-screen w-full flex items-center justify-center px-6"
      style={{
        background: 'linear-gradient(180deg, #022C2E 0%, #032F31 100%)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl rounded-[32px] border p-8 md:p-12 text-center"
        style={{
          background: 'rgba(245, 241, 232, 0.05)',
          borderColor: 'rgba(216, 190, 147, 0.22)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <p
          className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em]"
          style={{ color: 'rgba(216, 190, 147, 0.9)' }}
        >
          Aviso importante
        </p>

        <h1
          className="text-3xl md:text-5xl"
          style={{
            color: '#F5F1E8',
            fontFamily: '"Melodrama", serif',
          }}
        >
          Estamos em manutenção
        </h1>

        <p
          className="mt-5 text-sm md:text-base leading-7"
          style={{ color: 'rgba(245, 241, 232, 0.82)' }}
        >
          Pedimos desculpas pelo inconveniente. Nossa página está passando por
          uma manutenção momentânea para melhorar sua experiência.
        </p>

        <p
          className="mt-3 text-sm md:text-base leading-7"
          style={{ color: 'rgba(245, 241, 232, 0.68)' }}
        >
          Em breve tudo estará disponível novamente.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="mt-8 rounded-full px-6 py-3 text-sm font-medium transition"
          style={{
            color: '#F5F1E8',
            border: '1px solid rgba(216, 190, 147, 0.36)',
            background: 'rgba(245, 241, 232, 0.04)',
          }}
        >
          Tentar novamente
        </button>
      </motion.div>
    </main>
  )
}
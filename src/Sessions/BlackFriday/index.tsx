import confetti from "canvas-confetti";
import { useEffect, useState } from "react";

export function BirthdayPromo() {
  const [now, setNow] = useState(new Date());
  const [show, setShow] = useState(true);
  const [confettiFired, setConfettiFired] = useState(false);

  // 🔧 MODO TESTE: Mude para true para simular a Black Friday ATIVA
  const TEST_MODE = false;

  const start = new Date("2025-11-27T09:00:00-03:00");
  const end = new Date("2025-11-29T18:00:00-03:00");
  const isPromoActive = TEST_MODE || (now >= start && now <= end);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if ((isPromoActive || import.meta.env.DEV) && show && !confettiFired) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      setConfettiFired(true);
    }
  }, [isPromoActive, show, confettiFired]);

  const getTimeLeft = () => {
    // Se estiver em TEST_MODE, mostra countdown simulado
    if (TEST_MODE) {
      return "2d 15h 30m 45s";
    }

    const diff = end.getTime() - now.getTime();
    if (diff <= 0) return "Promoção encerrada!";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  if (!(isPromoActive || import.meta.env.DEV) || !show) return null;

  return (
    <div className="fixed bottom-20 right-2 sm:bottom-4 sm:right-4 z-[45] bg-black text-white rounded-md sm:rounded-lg shadow-2xl border border-yellow-500 w-[260px] sm:w-[280px] sm:max-w-xs">
      <button
        onClick={() => setShow(false)}
        className="absolute -top-1.5 -right-1.5 bg-yellow-500 hover:bg-yellow-600 text-black rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center transition font-bold text-xs shadow-lg"
      >
        ✕
      </button>

      <div className="p-2 sm:p-2.5 text-center">
        <div className="text-base sm:text-lg font-bold mb-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
          🔥 BLACK FRIDAY
        </div>

        <p className="text-[0.7rem] sm:text-xs mb-1.5 text-yellow-100">
          <strong className="text-yellow-400">Até 40% OFF</strong> em todos!
        </p>

        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-2 py-0.5 sm:py-1 rounded text-[0.65rem] sm:text-xs font-bold">
          {getTimeLeft()}
        </div>
      </div>
    </div>
  );
}

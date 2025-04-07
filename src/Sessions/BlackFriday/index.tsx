import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import { BirthdayPromoContainer, BirthdayPromoWrapper } from "./styles";

export function BirthdayPromo() {
  const [now, setNow] = useState(new Date());
  const [show, setShow] = useState(false);
  const [confettiFired, setConfettiFired] = useState(false);

  const start = new Date("2025-04-07T09:00:00");
  const end = new Date("2025-04-09T18:00:00");
  const isPromoActive = now >= start && now <= end;

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if ((isPromoActive || import.meta.env.DEV) && show && !confettiFired) {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
      });
      setConfettiFired(true);
    }
  }, [isPromoActive, show, confettiFired]);

  const getTimeLeft = () => {
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
    <div className="fixed bottom-0 left-0 w-full z-50 bg-[#f8f9f4] border-t-[3px] border-amber-300 shadow-md">
      <BirthdayPromoWrapper>
        <BirthdayPromoContainer>
          <div className="relative z-10 text-center px-2 py-1 sm:px-4 sm:py-1 ">
            <h3 className="text-[#557655] font-bold text-[clamp(1rem,3vw,2rem)] flex items-center justify-center gap-2 leading-tight text-balance">
              <img src="/icons/golden-gift-3d.png" alt="gift" className="w-4 h-4 sm:w-5 sm:h-5" />
              O Aniversário é nosso mas o presente é seu!
              <img src="/icons/golden-gift-3d.png" alt="gift" className="w-4 h-4 sm:w-5 sm:h-5" />
            </h3>

            <p className="text-[clamp(0.75rem,2vw,0.95rem)] text-[#557655] mt-1 leading-snug">
              Nos dias 07, 08 e 09 de abril<br /><strong> TODOS OS PRODUTOS </strong> de <span className="font-bold">10% a 40%</span> de <strong>DESCONTO</strong>
            </p>

            <p className="text-[clamp(1rem,2vw,1.25rem)] italic text-[#7a9279] mt-1 mb-10">
              Termina em: {getTimeLeft()}
            </p>

          </div>
        </BirthdayPromoContainer>
      </BirthdayPromoWrapper>
    </div>
  );
}

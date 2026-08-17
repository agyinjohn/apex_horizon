import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type Message = { role: "user" | "assistant"; text: string };

const responses: Record<string, { en: string; fr: string }> = {
  default: {
    en: "Thank you for your message. A member of our advisory team will follow up with you directly. Is there anything specific about our expertise or services I can help clarify?",
    fr: "Merci pour votre message. Un membre de notre équipe vous contactera directement. Puis-je vous aider à clarifier quelque chose sur nos expertises ou services ?",
  },
  expertise: {
    en: "gthink advisory consult offers six core expertise areas: Strategy & Transformation, Transaction Advisory, Financial Advisory, Risk & Governance, Technology Advisory, and Market Intelligence. Which area would you like to explore?",
    fr: "gthink advisory consult propose six domaines d'expertise : Stratégie & Transformation, Conseil en transactions, Conseil financier, Risques & Gouvernance, Conseil technologique et Intelligence de marché. Lequel souhaitez-vous explorer ?",
  },
  location: {
    en: "We operate from two offices: Accra, Ghana (our head office) and Abidjan, Côte d'Ivoire. We serve clients across Anglophone and Francophone Africa.",
    fr: "Nous opérons depuis deux bureaux : Accra, Ghana (siège) et Abidjan, Côte d'Ivoire. Nous accompagnons des clients dans toute l'Afrique anglophone et francophone.",
  },
  contact: {
    en: "You can reach us via our Contact page, submit a formal RFP, or request a proposal. Our Accra office: accra@gthinkadvisory.example | Abidjan: abidjan@gthinkadvisory.example",
    fr: "Vous pouvez nous contacter via notre page Contact, soumettre un appel d'offres ou demander une proposition. Accra : accra@gthinkadvisory.example | Abidjan : abidjan@gthinkadvisory.example",
  },
  training: {
    en: "gthink Academy offers open programmes in Accra, Abidjan and virtually, plus bespoke corporate training. Topics include governance, risk, strategy, finance and technology.",
    fr: "gthink Academy propose des programmes ouverts à Accra, Abidjan et à distance, ainsi que des formations sur mesure. Thèmes : gouvernance, risques, stratégie, finance et technologie.",
  },
};

function getResponse(input: string, lang: "en" | "fr"): string {
  const lower = input.toLowerCase();
  if (lower.match(/expert|service|what do|what you do|offer/))
    return responses.expertise[lang];
  if (lower.match(/location|office|where|accra|abidjan|ghana|ivoire/))
    return responses.location[lang];
  if (lower.match(/contact|email|phone|reach|call/))
    return responses.contact[lang];
  if (lower.match(/train|academy|programme|course|learn/))
    return responses.training[lang];
  return responses.default[lang];
}

export function AiAssistant() {
  const { pick } = useLang();
  const lang = pick({ en: "en", fr: "fr" }) as "en" | "fr";
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: pick({
        en: "Hello! I'm the gthink AI assistant. How can I help you today? You can ask about our expertise, locations, training or how to get in touch.",
        fr: "Bonjour ! Je suis l'assistant IA de gthink. Comment puis-je vous aider ? Posez-moi des questions sur nos expertises, nos bureaux, nos formations ou comment nous contacter.",
      }),
    },
  ]);
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { role: "assistant", text: getResponse(text, lang) }]);
    }, 900);
  };

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={pick({ en: "Open AI assistant", fr: "Ouvrir l'assistant IA" })}
        className="fixed bottom-6 right-6 z-[80] flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_8px_32px_rgba(0,0,0,0.22)] transition-transform hover:scale-105 active:scale-95"
      >
        {open ? <X className="size-5" strokeWidth={2} /> : <MessageCircle className="size-5" strokeWidth={1.8} />}
      </button>

      {/* Chat panel */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-[80] flex w-[22rem] flex-col overflow-hidden rounded-xl border border-border bg-background shadow-[0_24px_64px_rgba(0,0,0,0.18)] transition-all duration-300 sm:w-[26rem]",
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
        )}
        style={{ maxHeight: "70vh" }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-border bg-navy px-5 py-4">
          <div className="flex size-8 items-center justify-center rounded-full bg-primary">
            <Bot className="size-4 text-white" strokeWidth={1.8} />
          </div>
          <div>
            <p className="text-[0.8125rem] font-bold text-white">
              {pick({ en: "gthink AI Assistant", fr: "Assistant IA gthink" })}
            </p>
            <p className="text-[0.6875rem] text-white/55">
              {pick({ en: "Powered by AI · Demo mode", fr: "Propulsé par IA · Mode démo" })}
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-4 overflow-y-auto p-5">
          {messages.map((m, i) => (
            <div key={i} className={cn("flex gap-2.5", m.role === "user" && "flex-row-reverse")}>
              {m.role === "assistant" && (
                <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15">
                  <Bot className="size-3.5 text-primary" strokeWidth={1.8} />
                </div>
              )}
              <p
                className={cn(
                  "max-w-[80%] rounded-xl px-4 py-2.5 text-[0.8125rem] leading-relaxed",
                  m.role === "assistant"
                    ? "bg-surface text-foreground"
                    : "bg-primary text-primary-foreground",
                )}
              >
                {m.text}
              </p>
            </div>
          ))}
          {typing && (
            <div className="flex gap-2.5">
              <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15">
                <Bot className="size-3.5 text-primary" strokeWidth={1.8} />
              </div>
              <div className="flex items-center gap-1 rounded-xl bg-surface px-4 py-3">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="size-1.5 rounded-full bg-muted-foreground/60 animate-bounce"
                    style={{ animationDelay: `${i * 150}ms` }}
                  />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="border-t border-border p-3">
          <form
            onSubmit={(e) => { e.preventDefault(); send(); }}
            className="flex items-center gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={pick({ en: "Ask a question…", fr: "Posez une question…" })}
              className="min-h-10 flex-1 rounded-lg border border-input bg-background px-4 text-[0.875rem] text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-opacity disabled:opacity-40"
            >
              <Send className="size-4" strokeWidth={1.8} />
            </button>
          </form>
          <p className="mt-2 text-center text-[0.625rem] text-muted-foreground/50">
            {pick({ en: "AI-assisted · responses are illustrative", fr: "Assisté par IA · réponses illustratives" })}
          </p>
        </div>
      </div>
    </>
  );
}

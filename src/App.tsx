import { useState, useEffect } from "react";
import logoPath from "/logo_no_bg.png";

type Lang = "kz" | "ru" | "en";

const translations = {
  kz: {
    trainers: "Жаттықтырушылар",
    rules: "Жалпы ережелер",
    memberships: "Абонементтер",
    schedule: "Жұмыс кестесі",
    address: "Мекенжай",
    contacts: "Байланыстар",
    heroTitle: "QAZAQ GYM",
    heroSubtitle: "Күш. Рух. Жеңіс.",
    trainersDesc: "Кәсіби жаттықтырушыларымыз сізге мақсатыңызға жетуге көмектеседі.",
    trainerPhotoPlaceholder: "Жаттықтырушының фотосы",
    trainerInfoPlaceholder: "Жаттықтырушы туралы ақпарат мұнда болады",
    rules_list: [
      "Абонементсіз кіру қатаң түрде тыйым салынады.",
      "Абонемент сатып алған күннен бастап тек бір ай ғана жарамды.",
      "Абонемент тек бір адамға арналған.",
      "Ауысатын аяқ киімсіз залға кіруге қатаң тыйым салынады.",
      "Гигиенаны сақтаңыз: жаттығу кезінде жеке сүлгіні пайдаланыңыз, өткір парфюм қолданбаңыз.",
      "Залда жалаңаш кеудемен жаттығуға тыйым салынады.",
      "Өзіңізден кейін темірді жинаңыз!",
      "16 жасқа толмаған тұлғалардың залға кіруі тек ата-ананың рұқсатымен (жазбаша рұқсат).",
      "Залға балалармен бірге кіруге қатаң тыйым салынады!",
      "Әкімшілік жауап бермейді: бағалы заттардың жоғалуы, денсаулық жағдайы және дербес жаттыққанда мүмкін болатын жарақат үшін.",
      "Залда болу уақыты максимум 3 сағат.",
      "Абонементті жоғалтқаны үшін айыппұл — 500 теңге.",
    ],
    rulesPlaceholder: "Ережелер мұнда толтырылады",
    membershipGroups: [
      {
        title: "12 жаттығу",
        items: [
          { label: "Күндізгі (10:00-17:00)", price: "10 000 ₸" },
          { label: "Кешкі (17:00-23:00)", price: "12 000 ₸" },
          { label: "Оқушылар (10:00-18:00)", price: "8 000 ₸" },
          { label: "Бір реттік", price: "2 000 ₸" },
        ],
      },
      {
        title: "Кеңейтілген",
        items: [
          { label: "16 жаттығу", price: "14 000 ₸" },
          { label: "1 айлық шексіз", price: "15 000 ₸" },
          { label: "3 айлық абонемент", price: "25 000 ₸" },
          { label: "6 айлық абонемент", price: "47 000 ₸" },
          { label: "Жылдық абонемент", price: "87 000 ₸" },
        ],
      },
      {
        title: "Вахтовый (шексіз)",
        items: [
          { label: "12 жаттығу", price: "14 000 ₸" },
          { label: "16 жаттығу", price: "16 000 ₸" },
        ],
      },
    ],
    additionalServices: [
      { label: "Топтық жаттығулар", price: "27 000 ₸" },
      { label: "Жаттықтырушы қызметі", price: "20 000 ₸" },
      { label: "Бір реттік жаттықтырушымен", price: "3 000 ₸" },
    ],
    additionalServicesTitle: "Қосымша қызметтер",
    membershipsPlaceholder: "Абонемент туралы ақпарат мұнда болады",
    scheduleRows: [
      { day: "Дүйсенбі", hours: "10:00 – 23:00" },
      { day: "Сейсенбі", hours: "10:00 – 23:00" },
      { day: "Сәрсенбі", hours: "10:00 – 23:00" },
      { day: "Бейсенбі", hours: "10:00 – 23:00" },
      { day: "Жұма", hours: "10:00 – 23:00" },
      { day: "Сенбі", hours: "10:00 – 23:00" },
      { day: "Жексенбі", hours: "12:00 – 18:00" },
    ],
    schedulePlaceholder: "Жұмыс уақыты мұнда көрсетіледі",
    addressPlaceholder: "Мекенжай мұнда болады",
    contactsPlaceholder: "Байланыс ақпараты мұнда болады",
    trainerMuratbekLabel: "Жаттықтырушы Муратбек",
    trainerMuratbekAchievements: [
      "Бодибилдинг бойынша өнер көрсететін атлет",
      "ҚР бодибилдинг чемпионатының жүлдегері",
      "Жатып итеру бойынша чемпион",
      "Үштайталас бойынша чемпион",
      "Сертификатталған нұсқаушы",
      "5 жылдан астам тәжірибе",
    ],
    trainerGalymzhanLabel: "Жаттықтырушы Ғалымжан",
    trainerGalymzhanAchievements: [
      "Сертификатталған жаттықтырушы (Қытайда сертификатталған)",
      "5 тілді меңгерген (Шетелдік клиенттермен жұмыс тәжірибесі бар)",
      "Арықтату",
      "Бұлшықет жинау",
      "Форманы түзету",
      "10 жылдан астам жұмыс тәжірибесі",
    ],
  },
  ru: {
    trainers: "Тренеры",
    rules: "Общие правила",
    memberships: "Абонементы",
    schedule: "График работы",
    address: "Адрес",
    contacts: "Контакты",
    heroTitle: "QAZAQ GYM",
    heroSubtitle: "Сила. Дух. Победа.",
    trainersDesc: "Наши профессиональные тренеры помогут вам достичь ваших целей.",
    trainerPhotoPlaceholder: "Фото тренера",
    trainerInfoPlaceholder: "Информация о тренере будет здесь",
    rules_list: [
      "Вход без абонемента строго запрещён.",
      "Абонемент действителен только один месяц со дня приобретения.",
      "Абонемент предназначен только для одного лица.",
      "Вход в зал без сменной обуви строго запрещён.",
      "Соблюдайте гигиену: во время занятий используйте личное полотенце, не применяйте резкие парфюмерные запахи.",
      "В зале запрещается заниматься с обнажённым торсом.",
      "После себя убирайте железо!",
      "Вход в тренажёрный зал лицам до 16 лет строго по разрешению родителей (письменное разрешение).",
      "Вход в зал с детьми строго воспрещён!",
      "Администрация не несёт ответственности: за утерю ценных вещей, за состояние здоровья и возможный травматизм, если посетитель занимается самостоятельно.",
      "Время посещения зала — максимум 3 часа.",
      "За утерю абонемента штраф — 500 тг.",
    ],
    rulesPlaceholder: "Правила будут заполнены здесь",
    membershipGroups: [
      {
        title: "12 занятий",
        items: [
          { label: "Дневной (10:00-17:00)", price: "10 000 ₸" },
          { label: "Вечерний (17:00-23:00)", price: "12 000 ₸" },
          { label: "Школьный (10:00-18:00)", price: "8 000 ₸" },
          { label: "Разовый", price: "2 000 ₸" },
        ],
      },
      {
        title: "Расширенные",
        items: [
          { label: "16 занятий", price: "14 000 ₸" },
          { label: "1 месячный безлимит", price: "15 000 ₸" },
          { label: "3 месячный абонемент", price: "25 000 ₸" },
          { label: "6 месячный абонемент", price: "47 000 ₸" },
          { label: "Годовой абонемент", price: "87 000 ₸" },
        ],
      },
      {
        title: "Вахтовый (без ограничений)",
        items: [
          { label: "12 занятий", price: "14 000 ₸" },
          { label: "16 занятий", price: "16 000 ₸" },
        ],
      },
    ],
    additionalServices: [
      { label: "Групповые занятия", price: "27 000 ₸" },
      { label: "Тренерские услуги", price: "20 000 ₸" },
      { label: "Разовый тренерский", price: "3 000 ₸" },
    ],
    additionalServicesTitle: "Дополнительные услуги",
    membershipsPlaceholder: "Информация об абонементах будет здесь",
    scheduleRows: [
      { day: "Понедельник", hours: "10:00 – 23:00" },
      { day: "Вторник", hours: "10:00 – 23:00" },
      { day: "Среда", hours: "10:00 – 23:00" },
      { day: "Четверг", hours: "10:00 – 23:00" },
      { day: "Пятница", hours: "10:00 – 23:00" },
      { day: "Суббота", hours: "10:00 – 23:00" },
      { day: "Воскресенье", hours: "12:00 – 18:00" },
    ],
    schedulePlaceholder: "Часы работы будут отображены здесь",
    addressPlaceholder: "Адрес будет здесь",
    contactsPlaceholder: "Контактная информация будет здесь",
    trainerMuratbekLabel: "Тренер Муратбек",
    trainerMuratbekAchievements: [
      "Выступающий атлет по бодибилдингу",
      "Призёр чемпионата РК по бодибилдингу",
      "Чемпион по жиму лёжа",
      "Чемпион по троеборью",
      "Сертифицированный инструктор",
      "Стаж более 5 лет",
    ],
    trainerGalymzhanLabel: "Тренер Галымжан",
    trainerGalymzhanAchievements: [
      "Сертифицированный тренер (Сертифицирован в Китае)",
      "Владение 5 языками (Опыт работы с иностранными клиентами)",
      "Похудение",
      "Набор массы",
      "Коррекция формы",
      "Опыт работы более 10 лет",
    ],
  },
  en: {
    trainers: "Trainers",
    rules: "General Rules",
    memberships: "Memberships",
    schedule: "Work Schedule",
    address: "Address",
    contacts: "Contacts",
    heroTitle: "QAZAQ GYM",
    heroSubtitle: "Strength. Spirit. Victory.",
    trainersDesc: "Our professional trainers will help you achieve your goals.",
    trainerPhotoPlaceholder: "Trainer Photo",
    trainerInfoPlaceholder: "Trainer information will be here",
    rules_list: [
      "Entry without a membership is strictly prohibited.",
      "A membership is valid for one month from the date of purchase.",
      "A membership is for one person only.",
      "Entry without indoor shoes is strictly prohibited.",
      "Maintain hygiene: use a personal towel during workouts, avoid strong perfumes.",
      "Working out shirtless in the gym is prohibited.",
      "Re-rack your weights after use!",
      "Entry for persons under 16 is strictly by parental permission (written consent required).",
      "Entry to the gym with children is strictly prohibited!",
      "The administration is not responsible for: loss of valuables, health condition, or possible injury if the visitor trains independently.",
      "Maximum visit time in the gym is 3 hours.",
      "Lost membership card fine — 500 KZT.",
    ],
    rulesPlaceholder: "Rules will be filled in here",
    membershipGroups: [
      {
        title: "12 Sessions",
        items: [
          { label: "Day (10:00-17:00)", price: "10 000 ₸" },
          { label: "Evening (17:00-23:00)", price: "12 000 ₸" },
          { label: "School (10:00-18:00)", price: "8 000 ₸" },
          { label: "Single visit", price: "2 000 ₸" },
        ],
      },
      {
        title: "Extended",
        items: [
          { label: "16 sessions", price: "14 000 ₸" },
          { label: "1-month unlimited", price: "15 000 ₸" },
          { label: "3-month membership", price: "25 000 ₸" },
          { label: "6-month membership", price: "47 000 ₸" },
          { label: "Annual membership", price: "87 000 ₸" },
        ],
      },
      {
        title: "Shift (Unlimited)",
        items: [
          { label: "12 sessions", price: "14 000 ₸" },
          { label: "16 sessions", price: "16 000 ₸" },
        ],
      },
    ],
    additionalServices: [
      { label: "Group classes", price: "27 000 ₸" },
      { label: "Trainer services", price: "20 000 ₸" },
      { label: "Single trainer session", price: "3 000 ₸" },
    ],
    additionalServicesTitle: "Additional Services",
    membershipsPlaceholder: "Membership information will be here",
    scheduleRows: [
      { day: "Monday", hours: "10:00 – 23:00" },
      { day: "Tuesday", hours: "10:00 – 23:00" },
      { day: "Wednesday", hours: "10:00 – 23:00" },
      { day: "Thursday", hours: "10:00 – 23:00" },
      { day: "Friday", hours: "10:00 – 23:00" },
      { day: "Saturday", hours: "10:00 – 23:00" },
      { day: "Sunday", hours: "12:00 – 18:00" },
    ],
    schedulePlaceholder: "Working hours will be displayed here",
    addressPlaceholder: "Address will be here",
    contactsPlaceholder: "Contact information will be here",
    trainerMuratbekLabel: "Trainer Muratbek",
    trainerMuratbekAchievements: [
      "Competitive bodybuilding athlete",
      "Prize-winner of the RK Bodybuilding Championship",
      "Bench Press Champion",
      "Powerlifting Champion",
      "Certified Instructor",
      "Over 5 years of experience",
    ],
    trainerGalymzhanLabel: "Trainer Galymzhan",
    trainerGalymzhanAchievements: [
      "Certified Trainer (Certified in China)",
      "Fluent in 5 languages (Experience with foreign clients)",
      "Weight Loss",
      "Muscle Gain",
      "Body Shaping",
      "Over 10 years of experience",
    ],
  },
};

const navItems = [
  { key: "trainers", id: "section-trainers" },
  { key: "rules", id: "section-rules" },
  { key: "memberships", id: "section-memberships" },
  { key: "schedule", id: "section-schedule" },
  { key: "address", id: "section-address" },
  { key: "contacts", id: "section-contacts" },
] as const;

function GoldDivider() {
  return (
    <div className="flex items-center gap-3 my-2">
      <div className="flex-1 gold-line" />
      <div className="w-2 h-2 rotate-45 border border-[#C9A84C]" />
      <div className="flex-1 gold-line" />
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-10">
      <h2
        className="font-cinzel text-2xl sm:text-3xl font-bold text-[#C9A84C] section-heading tracking-widest uppercase"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        {title}
      </h2>
      <div className="mt-4 w-24 h-0.5 red-accent rounded-full" />
    </div>
  );
}

interface TrainerData {
  name: string;
  label: string;
  photo?: string;
  achievements: string[];
}

function TrainerCard({ trainer, t }: { trainer?: TrainerData; t: ReturnType<typeof useTranslation> }) {
  if (!trainer) {
    return (
      <div className="trainer-card rounded-sm p-0 overflow-hidden flex flex-col sm:flex-row gap-0 bg-[#111]">
        <div
          className="photo-placeholder flex items-center justify-center"
          style={{ minWidth: 180, minHeight: 220, maxWidth: 220 }}
          data-testid="trainer-photo-placeholder"
        >
          <div className="flex flex-col items-center gap-3 opacity-40">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.2">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
            <span className="text-[#C9A84C] text-xs tracking-wider uppercase">{t.trainerPhotoPlaceholder}</span>
          </div>
        </div>
        <div className="flex-1 p-6 flex flex-col gap-3 border-l border-[#C9A84C]/20">
          <div className="w-32 h-4 bg-[#C9A84C]/10 rounded-sm" />
          <div className="w-20 h-3 bg-[#8B0000]/30 rounded-sm" />
          <div className="mt-2 space-y-2">
            <div className="w-full h-2.5 bg-[#C9A84C]/8 rounded-sm" />
            <div className="w-5/6 h-2.5 bg-[#C9A84C]/8 rounded-sm" />
            <div className="w-4/6 h-2.5 bg-[#C9A84C]/8 rounded-sm" />
          </div>
          <p className="text-[#C9A84C]/40 text-sm italic mt-2">{t.trainerInfoPlaceholder}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="trainer-card rounded-sm p-0 overflow-hidden flex flex-col sm:flex-row gap-0 bg-[#111]" data-testid={`card-trainer-${trainer.name.toLowerCase()}`}>
      <div className="relative flex-shrink-0 w-full sm:w-auto" style={{ maxWidth: 260 }}>
        {trainer.photo && (
          <img
            src={trainer.photo}
            alt={trainer.name}
            className="w-full object-cover object-top"
            style={{ height: 260, minHeight: 220 }}
            data-testid={`img-trainer-${trainer.name.toLowerCase()}`}
          />
        )}
      </div>

      <div className="flex-1 p-6 flex flex-col gap-4 border-l border-[#C9A84C]/20">
        <div>
          <p
            className="text-[#CC0000] text-sm tracking-[0.15em] uppercase font-bold mb-1"
          >
            {trainer.label}
          </p>
          <div className="w-16 h-px bg-[#C9A84C]/40 mt-2" />
        </div>

        <ul className="flex flex-col gap-2 mt-1">
          {trainer.achievements.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="flex-shrink-0 mt-1 w-4 h-4 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <polygon points="6,0 7.5,4.5 12,4.5 8.3,7.3 9.5,12 6,9 2.5,12 3.7,7.3 0,4.5 4.5,4.5" fill="#C9A84C" opacity="0.8" />
                </svg>
              </span>
              <span className="text-[#C9A84C]/80 text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function useTranslation(lang: Lang) {
  return translations[lang];
}

export default function App() {
  const [lang, setLang] = useState<Lang>("ru");
  const [activeSection, setActiveSection] = useState<string>("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const t = useTranslation(lang);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = navItems.map((item) => document.getElementById(item.id));
      let current = "";
      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120) current = section.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setSidebarOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ background: "#0d0d0d" }}>
      {/* ─── TOP BAR ─── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.85) 100%)",
          borderBottom: "1px solid rgba(201,168,76,0.25)",
        }}
        data-testid="header"
      >
        {/* Mobile hamburger */}
        <button
          className="sm:hidden text-[#C9A84C] mr-3"
          onClick={() => setSidebarOpen((p) => !p)}
          data-testid="button-hamburger"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logoPath}
            alt="Qazaq Gym Logo"
            className="h-12 w-12 object-contain rounded-sm"
            data-testid="img-logo"
          />
          <span
            className="text-[#C9A84C] font-bold tracking-[0.2em] text-xl hidden sm:block"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            QAZAQ GYM
          </span>
        </div>

        {/* Language switcher */}
        <div
          className="flex items-center gap-1 border border-[#C9A84C]/30 rounded-sm px-1 py-1"
          data-testid="language-switcher"
        >
          {(["kz", "ru", "en"] as Lang[]).map((l, i) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              data-testid={`button-lang-${l}`}
              className={`px-3 py-1 text-xs font-semibold tracking-widest uppercase transition-all duration-200 rounded-sm ${
                lang === l
                  ? "bg-[#C9A84C] text-black"
                  : "text-[#C9A84C]/70 hover:text-[#C9A84C]"
              }`}
            >
              {l === "kz" ? "ҚАЗ" : l === "ru" ? "РУС" : "ENG"}
            </button>
          ))}
        </div>
      </header>

      {/* ─── MOBILE SIDEBAR OVERLAY ─── */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ─── SIDEBAR ─── */}
      <aside
        className={`fixed top-0 left-0 h-full z-40 flex flex-col pt-20 pb-8 transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}`}
        style={{
          width: 220,
          background: "linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 100%)",
          borderRight: "1px solid rgba(201,168,76,0.18)",
        }}
        data-testid="sidebar"
      >
        <div className="px-6 mb-6">
          <GoldDivider />
        </div>

        <nav className="flex flex-col gap-1 px-4 flex-1" data-testid="nav-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              data-testid={`nav-link-${item.key}`}
              className={`nav-link text-left px-4 py-3 text-sm tracking-widest uppercase transition-all duration-200 rounded-sm font-medium
                ${activeSection === item.id
                  ? "text-[#C9A84C] bg-[#C9A84C]/8 border-l-2 border-[#C9A84C]"
                  : "text-[#C9A84C]/60 hover:text-[#C9A84C] hover:bg-[#C9A84C]/5 border-l-2 border-transparent"
                }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t[item.key]}
            </button>
          ))}
        </nav>

        <div className="px-6 mt-auto">
          <GoldDivider />
          <div className="mt-4 flex flex-col items-center gap-1">
            <div className="w-8 h-8">
              <img src={logoPath} alt="" className="w-full h-full object-contain opacity-40" />
            </div>
          </div>
        </div>
      </aside>

      {/* ─── MAIN CONTENT ─── */}
      <main className="min-h-screen sm:ml-[220px]">
        {/* Hero */}
        <section
          className="relative flex flex-col items-center justify-center text-center pt-24 pb-16 px-4 sm:px-8 overflow-hidden"
          style={{ minHeight: "90vh" }}
          data-testid="section-hero"
        >
          {/* Background decorative elements */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 40%, rgba(139,0,0,0.12) 0%, transparent 65%), radial-gradient(ellipse at 80% 80%, rgba(201,168,76,0.06) 0%, transparent 50%)",
            }}
          />
          {/* Corner lines */}
          <div className="absolute top-24 left-8 w-20 h-20 border-l border-t border-[#C9A84C]/30" />
          <div className="absolute top-24 right-8 w-20 h-20 border-r border-t border-[#C9A84C]/30" />
          <div className="absolute bottom-8 left-8 w-20 h-20 border-l border-b border-[#C9A84C]/30" />
          <div className="absolute bottom-8 right-8 w-20 h-20 border-r border-b border-[#C9A84C]/30" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <img
              src={logoPath}
              alt="Qazaq Gym"
              className="w-40 h-40 object-contain mb-2"
              style={{ filter: "drop-shadow(0 0 24px rgba(201,168,76,0.4))" }}
              data-testid="img-hero-logo"
            />
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#C9A84C] tracking-[0.15em]"
              style={{ fontFamily: "'Cinzel', serif", textShadow: "0 0 40px rgba(201,168,76,0.3)" }}
              data-testid="text-hero-title"
            >
              {t.heroTitle}
            </h1>
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-[#C9A84C]/50" />
              <p
                className="text-[#C9A84C]/70 text-sm sm:text-lg tracking-[0.2em] sm:tracking-[0.3em] uppercase font-light"
                style={{ fontFamily: "'Cinzel', serif" }}
                data-testid="text-hero-subtitle"
              >
                {t.heroSubtitle}
              </p>
              <div className="w-16 h-px bg-[#C9A84C]/50" />
            </div>

            {/* Red accent strip */}
            <div className="w-32 h-1 red-accent rounded-full mt-2" />
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
            <div className="w-px h-10 bg-[#C9A84C]" />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </section>

        {/* ─── TRAINERS ─── */}
        <section
          id="section-trainers"
          className="px-4 sm:px-8 py-10 sm:py-16"
          style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}
          data-testid="section-trainers"
        >
          <SectionTitle title={t.trainers} />
          <p className="text-[#C9A84C]/60 mb-10 text-sm tracking-wide" data-testid="text-trainers-desc">{t.trainersDesc}</p>

          <div className="flex flex-col gap-6">
            <TrainerCard
              t={t}
              trainer={{
                name: "Муратбек",
                label: t.trainerMuratbekLabel,
                photo: "/trainer_muratbek.jpeg",
                achievements: t.trainerMuratbekAchievements,
              }}
            />
            <TrainerCard
              t={t}
              trainer={{
                name: "Галымжан",
                label: t.trainerGalymzhanLabel,
                photo: "/trainer_galymzhan.jpeg",
                achievements: t.trainerGalymzhanAchievements,
              }}
            />
          </div>
        </section>

        <div className="px-4 sm:px-8"><GoldDivider /></div>

        {/* ─── GENERAL RULES ─── */}
        <section
          id="section-rules"
          className="px-4 sm:px-8 py-10 sm:py-16"
          data-testid="section-rules"
        >
          <SectionTitle title={t.rules} />
          <div className="info-card rounded-sm p-4 sm:p-8">
            <div className="flex flex-col gap-3">
              {t.rules_list.map((rule, i) => (
                <div key={i} className="flex items-start gap-4" data-testid={`rule-item-${i + 1}`}>
                  <div
                    className="flex-shrink-0 w-7 h-7 border border-[#C9A84C]/50 flex items-center justify-center text-[#C9A84C] text-sm font-bold"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {i + 1}
                  </div>
                  <div className="flex-1 py-1 border-b border-[#C9A84C]/10">
                    <p className="text-[#C9A84C]/85 text-sm leading-relaxed">{rule}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="px-4 sm:px-8"><GoldDivider /></div>

        {/* ─── MEMBERSHIPS ─── */}
        <section
          id="section-memberships"
          className="px-4 sm:px-8 py-10 sm:py-16"
          data-testid="section-memberships"
        >
          <SectionTitle title={t.memberships} />

          {/* Membership groups */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {t.membershipGroups.map((group, gi) => (
              <div
                key={gi}
                className="info-card rounded-sm flex flex-col overflow-hidden relative"
                data-testid={`card-membership-group-${gi + 1}`}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 red-accent" />
                {/* Group header */}
                <div className="px-5 pt-6 pb-3">
                  <h3
                    className="text-[#C9A84C] font-bold text-base tracking-widest uppercase"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {group.title}
                  </h3>
                  <div className="mt-2 gold-line" />
                </div>
                {/* Items */}
                <div className="flex flex-col px-5 pb-5 gap-0 flex-1">
                  {group.items.map((item, ii) => (
                    <div
                      key={ii}
                      className="flex items-center justify-between py-2.5"
                      style={{ borderBottom: "1px solid rgba(201,168,76,0.08)" }}
                      data-testid={`membership-item-${gi + 1}-${ii + 1}`}
                    >
                      <span className="text-[#C9A84C]/75 text-sm">{item.label}</span>
                      <span
                        className="text-[#C9A84C] font-bold text-sm ml-3 flex-shrink-0"
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional services */}
          <div className="mt-4">
            <h3
              className="text-[#CC0000] text-xs tracking-[0.25em] uppercase font-bold mb-4"
            >
              {t.additionalServicesTitle}
            </h3>
            <div className="info-card rounded-sm overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-0.5 red-accent" />
              <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-[#C9A84C]/10">
                {t.additionalServices.map((svc, si) => (
                  <div
                    key={si}
                    className="flex-1 px-6 py-5 flex flex-col gap-1"
                    data-testid={`card-additional-service-${si + 1}`}
                  >
                    <span className="text-[#C9A84C]/70 text-sm">{svc.label}</span>
                    <span
                      className="text-[#C9A84C] font-bold text-lg"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {svc.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="px-4 sm:px-8"><GoldDivider /></div>

        {/* ─── SCHEDULE ─── */}
        <section
          id="section-schedule"
          className="px-4 sm:px-8 py-10 sm:py-16"
          data-testid="section-schedule"
        >
          <SectionTitle title={t.schedule} />
          <div className="info-card rounded-sm p-4 sm:p-8 max-w-xl">
            <div className="flex flex-col gap-0">
              {t.scheduleRows.map((row, i) => {
                const isSunday = i === 6;
                return (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3"
                    style={{ borderBottom: "1px solid rgba(201,168,76,0.08)" }}
                    data-testid={`schedule-row-${i}`}
                  >
                    <span className={`text-sm tracking-wide ${isSunday ? "text-[#C9A84C]/50" : "text-[#C9A84C]/80"}`}>
                      {row.day}
                    </span>
                    <span
                      className={`text-sm font-bold ${isSunday ? "text-[#C9A84C]/60" : "text-[#C9A84C]"}`}
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {row.hours}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="px-4 sm:px-8"><GoldDivider /></div>

        {/* ─── ADDRESS ─── */}
        <section
          id="section-address"
          className="px-4 sm:px-8 py-10 sm:py-16"
          data-testid="section-address"
        >
          <SectionTitle title={t.address} />
          <div className="info-card rounded-sm p-4 sm:p-8 max-w-full sm:max-w-xl flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#C9A84C] font-bold text-base tracking-wide" style={{ fontFamily: "'Cinzel', serif" }}>
                  ул. Коркыт Ата, 13
                </p>
                <p className="text-[#C9A84C]/70 text-sm tracking-wide">Қызылорда, Казахстан</p>
              </div>
            </div>

            {/* Open in 2GIS button */}
            <a
              href="https://2gis.kz/kyzylorda/search/%25D0%259A%25D0%25BE%25D1%2580%25D0%25BA%25D1%258B%25D1%2582%2520%25D0%2590%25D1%2582%25D0%25B0%252C%252013/geo/70030076374719038/65.50058%2C44.840216?m=65.500779%2C44.84026%2F17.18"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm text-xs tracking-widest uppercase transition-colors"
              style={{
                border: "1px solid rgba(201,168,76,0.4)",
                color: "#C9A84C",
                background: "rgba(201,168,76,0.05)",
                fontFamily: "'Cinzel', serif",
                alignSelf: "flex-start",
              }}
              onMouseOver={e => (e.currentTarget.style.background = "rgba(201,168,76,0.12)")}
              onMouseOut={e => (e.currentTarget.style.background = "rgba(201,168,76,0.05)")}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              {lang === "en" ? "Open in 2GIS" : "Открыть в 2ГИС"}
            </a>
          </div>
        </section>

        <div className="px-4 sm:px-8"><GoldDivider /></div>

        {/* ─── CONTACTS ─── */}
        <section
          id="section-contacts"
          className="px-4 sm:px-8 py-10 sm:py-16"
          data-testid="section-contacts"
        >
          <SectionTitle title={t.contacts} />
          <div className="flex flex-col gap-5 max-w-md">
            {/* Phone */}
            <div className="info-card rounded-sm p-5 flex items-center gap-4" data-testid="card-contact-phone">
              <div className="w-10 h-10 border border-[#C9A84C]/40 rounded-sm flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#C9A84C]/50 text-xs tracking-widest uppercase">
                  {lang === "kz" ? "Телефон" : lang === "ru" ? "Телефон" : "Phone"}
                </span>
                <a href="tel:+77715422410" className="text-[#C9A84C] text-sm hover:text-white transition-colors">8 (771) 542-24-10</a>
                <a href="tel:+77018599404" className="text-[#C9A84C] text-sm hover:text-white transition-colors">8 (701) 859-94-04</a>
              </div>
            </div>

            {/* Instagram */}
            <div className="info-card rounded-sm p-5 flex items-center gap-4" data-testid="card-contact-instagram">
              <div className="w-10 h-10 border border-[#C9A84C]/40 rounded-sm flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#C9A84C]/50 text-xs tracking-widest uppercase">Instagram</span>
                <a
                  href="https://www.instagram.com/qazaq_gym_kzo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C9A84C] text-sm hover:text-white transition-colors"
                >
                  @qazaq_gym_kzo
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="info-card rounded-sm p-5 flex items-center gap-4" data-testid="card-contact-whatsapp">
              <div className="w-10 h-10 border border-[#C9A84C]/40 rounded-sm flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#C9A84C]/50 text-xs tracking-widest uppercase">WhatsApp</span>
                <a
                  href="https://wa.me/77715422410"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C9A84C] text-sm hover:text-white transition-colors"
                >
                  8 (771) 542-24-10
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer
          className="px-8 py-8 text-center"
          style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}
          data-testid="footer"
        >
          <GoldDivider />
          <div className="mt-6 flex flex-col items-center gap-3">
            <img src={logoPath} alt="" className="w-10 h-10 object-contain opacity-50" />
            <p
              className="text-[#C9A84C]/40 text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              © 2023 QAZAQ GYM
            </p>
          </div>
        </footer>
      </main>

      {/* ─── SCROLL TO TOP ─── */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          data-testid="button-scroll-top"
          className="scroll-top-btn fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center transition-all duration-200 hover:scale-110"
          style={{
            background: "rgba(13,13,13,0.9)",
            border: "1px solid rgba(201,168,76,0.6)",
            boxShadow: "0 0 15px rgba(201,168,76,0.2)",
          }}
          aria-label="Scroll to top"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}

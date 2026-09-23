/**
 * Dados oficiais da Dra. Isabela Damasceno
 * Cirurgiã-Dentista em Salvador - BA
 * 
 * Regras estritas:
 * - Não inventar anos de experiência, pós-graduações não citadas ou número de pacientes.
 * - Não prometer consulta gratuita nem inventar promoções/preços.
 * - Links de contato e imagens utilizados exatamente como fornecidos.
 */

export const DENTIST_INFO = {
  name: "Isabela Damasceno",
  title: "Cirurgiã-Dentista",
  specialtiesText: "Especializada em Implante, Prótese e Laserterapia",
  city: "Salvador, BA",
  whatsappUrl: "https://api.whatsapp.com/send/?phone=71993521600&text&type=phone_number&app_absent=0&utm_source=ig",
  instagramUrl: "https://www.instagram.com/damascenoisabela/",
  instagramHandle: "@damascenoisabela",
  phoneFormatted: "(71) 99352-1600",
} as const;

export const DOCTOR_IMAGES = {
  hero: "https://i.imgur.com/x5dm47a.png",
  about: "https://i.imgur.com/vbTMCog.png",
  portrait: "https://i.imgur.com/6RUy3gI.png",
} as const;

export const RESULTS_IMAGES = [
  {
    id: 1,
    url: "https://i.imgur.com/U8H850s.png",
    alt: "Registro clínico odontológico conduzido pela Dra. Isabela Damasceno",
   
  },
  {
    id: 2,
    url: "https://i.imgur.com/OCIwQ9T.png",
    alt: "Acompanhamento de resultado de reabilitação dental",
  },
  {
    id: 3,
    url: "https://i.imgur.com/WN90Cz5.png",
    alt: "Planejamento e restauração com prótese dental",
  },
  {
    id: 4,
    url: "https://i.imgur.com/PwYO3KK.png",
    alt: "Resultado de procedimento com implante e estética do sorriso",
  },
  {
    id: 5,
    url: "https://i.imgur.com/pTJnTw0.png",
    alt: "Harmonização e reabilitação de elementos dentários",
  },
  {
    id: 6,
    url: "https://i.imgur.com/Wj4Gwam.png",
    alt: "Registro de resultado clínico em Salvador",
  },
] as const;

export const SPECIALTIES = [
  {
    title: "Implantes",
    description: "Reabilitação de dentes ausentes através de implantes dentários com tecnologia avançada. Devolve estabilidade, função mastigatória precisa e a segurança de sorrir livremente.",
    highlight: "Estabilidade & Função",
  },
  {
    title: "Prótese",
    description: "Restauração de elementos dentários comprometidos ou ausentes, com confecção personalizada para recuperar a anatomia natural, o conforto da mastigação e a harmonia estética.",
    highlight: "Conforto & Naturalidade",
  },
  {
    title: "Laserterapia",
    description: "Uso do laser terapêutico para bioestimulação tecidual, suporte na cicatrização pós-operatória, controle de processos inflamatórios e alívio de desconfortos e sensibilidade.",
    highlight: "Tecnologia & Conforto",
  },
] as const;

export const TRUST_PILLARS = [
  {
    title: "Atendimento Personalizado",
    description: "Cada paciente possui uma história e necessidades particulares. Seu plano de tratamento é desenhado de forma individualizada.",
  },
  {
    title: "Comunicação Clara e Direta",
    description: "Orientações transparentes em todas as fases, explicando os procedimentos com clareza para que você se sinta seguro e bem informado.",
  },
  {
    title: "Cuidado Individualizado",
    description: "Acompanhamento atencioso antes, durante e após qualquer procedimento, valorizando seu tempo e seu bem-estar.",
  },
  {
    title: "Avaliação Detalhada",
    description: "Diagnóstico rigoroso da sua saúde bucal e da estrutura funcional para identificar as opções mais indicadas para o seu caso.",
  },
  {
    title: "Abordagem Humanizada",
    description: "Ambiente calmo e acolhedor, focado em proporcionar uma experiência odontológica tranquila e sem desconforto.",
  },
  {
    title: "Segurança e Planejamento",
    description: "Rigor técnico e protocolos clínicos atualizados em implantes, próteses e laserterapia para máxima previsibilidade.",
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Entre em contato",
    description: "Você inicia a conversa pelo WhatsApp de forma rápida e simples pelo botão na página.",
  },
  {
    step: "02",
    title: "Converse sobre suas necessidades",
    description: "Apresente suas dúvidas ou os cuidados que busca. Você receberá as orientações iniciais com clareza e atenção.",
  },
  {
    step: "03",
    title: "Conheça o atendimento",
    description: "Receba as informações para seguir com seu atendimento presencial no consultório em Salvador.",
  },
] as const;

export const BACKSTAGE_PHOTOS = [
  {
    url: DOCTOR_IMAGES.hero,
    caption: "Atendimento personalizado.",
    sub: "Foco no paciente",
  },
  {
    url: DOCTOR_IMAGES.about,
    caption: "Cuidado em cada detalhe.",
    sub: "Precisão clínica",
  },
  {
    url: DOCTOR_IMAGES.portrait,
    caption: "Uma experiência pensada para cada paciente.",
    sub: "Acolhimento & Segurança",
  },
] as const;

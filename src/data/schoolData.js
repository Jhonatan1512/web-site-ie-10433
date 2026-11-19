export const SCHOOL_INFO = {
  name: "I.E. N° 10433",
  locationShort: "LAJAS • PRIMARIA",
  fullLocation: "Distrito de Lajas, Provincia de Chota, Cajamarca - Perú",
  motto: "Estudio, Disciplina y Trabajo",
  slogan: "Ayer, Hoy y Siempre",
  schedule: "Lunes a Viernes: 8:00 a.m. – 1:00 p.m.",
  phoneDisplay: "+51 900 000 000",
  whatsappNumber: "51900000000",
  facebookUrl: "https://www.facebook.com",
  logo: "/assets/Insignia.png",
  facadeImg: "/assets/fachada.jpg",
}; 

export const NAV_LINKS = [
  { path: "/", label: "Inicio" },
  { path: "/quienes-somos", label: "Quiénes Somos" },
  { path: "/mision-vision", label: "Misión y Visión" },
  { path: "/plana-docente", label: "Plana Docente" },
  { path: "/galeria", label: "Galería" },
  { path: "/contactos", label: "Contactos" },
];
 
export const IDENTITY_ITEMS = [
  { title: "1° a 6° Grado", subtitle: "Educación Primaria" },
  { title: "Formación en Valores", subtitle: "Estudio, Disciplina y Trabajo" },
  { title: "Comunidad Lajeña", subtitle: "Chota - Cajamarca" },
];

export const VALUES_LIST = [
  { icon: "study", label: "Estudio Constante" },
  { icon: "discipline", label: "Disciplina Formativa" },
  { icon: "work", label: "Trabajo Solidario" },
  { icon: "respect", label: "Respeto y Empatía" },
];

export const FACULTY_LIST = [
  {
    icon: "director",
    badge: "Dirección",
    role: "Director(a) Institucional",
    description: "Liderazgo pedagógico y gestión administrativa del plantel.",
  },
  {
    icon: "teacher",
    badge: "1° Grado",
    role: "Docente de Primer Grado",
    description: "Iniciación a la lectura, escritura y pensamiento matemático.",
  },
  {
    icon: "teacher",
    badge: "2° Grado",
    role: "Docente de Segundo Grado",
    description: "Fortalecimiento de la comprensión lectora y convivencia.",
  },
  {
    icon: "teacher",
    badge: "3° Grado",
    role: "Docente de Tercer Grado",
    description: "Desarrollo de habilidades comunicativas y trabajo en equipo.",
  },
  {
    icon: "teacher",
    badge: "4° Grado",
    role: "Docente de Cuarto Grado",
    description: "Exploración científica, arte y razonamiento lógico.",
  },
  {
    icon: "teacher",
    badge: "5° y 6° Grado",
    role: "Docentes de Quinto y Sexto",
    description: "Consolidación académica para el paso al nivel secundario.",
  },
];

export const GALLERY_SLIDES = [
  {
    type: "image",
    src: "/assets/fachada.jpg",
    alt: "Frontis I.E. 10433 Lajas",
    title: "Infraestructura de la I.E. N° 10433",
    description: "Nuestros pabellones y áreas verdes en el distrito de Lajas.",
  },
  {
    type: "placeholder",
    bgClass: "bg-verde-slide",
    icon: "trophy",
    title: "Actuaciones Cívicas y Desfiles Escolares",
    description: "Nuestros niños y niñas demostrando civismo y amor por nuestra patria.",
  },
  {
    type: "placeholder",
    bgClass: "bg-naranja-slide",
    icon: "study",
    title: "Aprendizaje Activo en Aulas",
    description: "Dinámicas grupales, lectura recreativa y proyectos escolares de 1° a 6° grado.",
  },
  {
    type: "placeholder",
    bgClass: "bg-amarillo-slide",
    icon: "sports",
    title: "Olimpiadas Deportivas y Recreación",
    description: "Fomentando el deporte, la salud y el compañerismo entre todos los grados.",
  },
];

export const FAQ_LIST = [
  {
    question: "¿Qué nivel educativo atiende la I.E. N° 10433?",
    answer:
      "Nuestra institución brinda exclusivamente educación en el Nivel Primaria (de 1° a 6° grado) en turno mañana.",
  },
  {
    question: "¿Cuál es el horario de atención en secretaría?",
    answer:
      "Atendemos a los padres de familia de lunes a viernes de 8:00 a.m. a 1:00 p.m. en nuestro local escolar en Lajas.",
  },
  {
    question: "¿Cómo puedo hacer una consulta rápida?",
    answer:
      "Puedes escribirnos directamente haciendo clic en el botón flotante de WhatsApp ubicado en la esquina inferior derecha.",
  },
]; 

export const ENROLLMENT_INFO = {
  year: "2026",
  status: "Vacantes Abiertas • 1° a 6° Grado",
  schedule: "Lunes a Viernes de 8:00 a.m. a 1:00 p.m.",
  requirements: [
    "Copia simple del DNI del estudiante y de los padres o apoderado.",
    "Partida de nacimiento o certificado de estudios del año anterior (para traslados).",
    "Ficha Única de Matrícula generada por el sistema SIAGIE.",
    "Constancia de tamizaje de hemoglobina y tarjeta de vacunación (1° grado).",
  ],
  steps: [
    {
      step: "01",
      title: "Consulta de Vacantes",
      description: "Acércate a dirección o escríbenos por WhatsApp indicando el grado al que postula tu hijo(a).",
    },
    {
      step: "02",
      title: "Presentación de Documentos",
      description: "Entrega la carpeta con los requisitos básicos en la secretaría de nuestro plantel en Lajas.",
    },
    {
      step: "03",
      title: "Registro Oficial SIAGIE",
      description: "Confirmamos la vacante y emitimos la constancia oficial de matrícula para el año lectivo.",
    },
  ],
};

export const OUR_SCHOOL_DATA = {
  badge: "Trayectoria, Infraestructura y Liderazgo",
  title: "Conoce Nuestra Escuela",
  subtitle:
    "Más que aulas: somos un espacio histórico de formación ciudadana y excelencia académica en el corazón de Lajas.",
  highlights: [
    { value: "1° a 6°", label: "Grados de Nivel Primaria" },
    { value: "100%", label: "Compromiso Pedagógico" },
    { value: "Lajas", label: "Referente en Chota - Cajamarca" },
  ],
  history: {
    tag: "Legado Educativo",
    title: "Años formando generaciones de lajeños",
    paragraphs: [
      "La Institución Educativa Primaria N° 10433 nació con la vocación de brindar a las familias del distrito de Lajas una enseñanza sólida, cercana y arraigada en los valores de nuestra tierra chotana.",
      "A lo largo de su trayectoria, por nuestras aulas han pasado promociones de niños y niñas que hoy contribuyen como profesionales, líderes y ciudadanos íntegros al desarrollo de Cajamarca y del Perú.",
    ],
    milestones: [
      {
        period: "Fundación y Raíces",
        title: "Al servicio de la niñez lajeña",
        description:
          "Creada para garantizar el acceso a una educación primaria de calidad en el distrito de Lajas, consolidándose desde sus inicios como un pilar de la comunidad.",
      },
      {
        period: "Crecimiento Institucional",
        title: "Modernización de ambientes",
        description:
          "Ampliación progresiva de nuestros pabellones escolares, áreas recreativas y equipamiento pedagógico adaptado a cada ciclo de aprendizaje.",
      },
      {
        period: "Actualidad",
        title: "Liderazgo y valores vigentes",
        description:
          "Hoy reafirmamos nuestro lema 'Estudio, Disciplina y Trabajo', integrando metodologías activas con una estrecha alianza entre docentes y padres de familia.",
      },
    ],
  },
  infrastructure: [
    {
      icon: "building",
      title: "Pabellones y Aulas Iluminadas",
      description:
        "Ambientes amplios, ventilados y organizados por grados para favorecer la concentración y el aprendizaje colaborativo.",
    },
    {
      icon: "park",
      title: "Patio de Honor y Áreas Verdes",
      description:
        "Espacios seguros al aire libre destinados a nuestras ceremonias cívicas, formación escolar y recreación saludable.",
    },
    {
      icon: "library",
      title: "Recursos y Biblioteca Escolar",
      description:
        "Material didáctico estructurado y textos de consulta que impulsan el hábito de la lectura y la investigación desde primer grado.",
    },
    {
      icon: "sports",
      title: "Losa Deportiva y Recreación",
      description:
        "Infraestructura acondicionada para educación física, olimpiadas internas y el desarrollo psicomotor de nuestros estudiantes.",
    },
  ],
  pillars: [
    {
      icon: "verified",
      title: "Disciplina con Calidez Humana",
      description:
        "Fomentamos hábitos de responsabilidad, puntualidad y respeto mutuo en un clima escolar acogedor y libre de violencia.",
    },
    {
      icon: "study",
      title: "Aprendizaje Activo e Integral",
      description:
        "Potenciamos el razonamiento matemático, la comprensión lectora, el arte y la identidad cultural de Lajas.",
    },
    {
      icon: "work",
      title: "Alianza Escuela y Familia",
      description:
        "Trabajamos hombro a hombro con los padres y apoderados mediante comunicación permanente y acompañamiento continuo.",
    },
  ],
};
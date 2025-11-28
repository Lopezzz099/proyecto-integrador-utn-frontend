export interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  image?: string
  content?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Cómo elegir el profesional indicado para tu proyecto",
    excerpt: "Descubre los mejores consejos para seleccionar al profesional perfecto que se adapte a tus necesidades.",
    date: "15 Nov 2025",
    author: "OferTu Team",
    category: "Consejos",
    image: "https://via.placeholder.com/400x300?text=Elegir+Profesional",
    content: `
      <h2>La importancia de elegir bien</h2>
      <p>Elegir al profesional correcto puede marcar la diferencia entre un proyecto exitoso y una experiencia frustrante. En OferTu, queremos ayudarte a tomar la mejor decisión.</p>
      
      <h2>1. Revisa las calificaciones y reseñas</h2>
      <p>Las opiniones de otros usuarios son una excelente forma de conocer la calidad del trabajo de un profesional. Lee detenidamente las reseñas y presta atención a comentarios recurrentes.</p>
      
      <h2>2. Verifica la experiencia</h2>
      <p>Asegúrate de que el profesional tenga experiencia en el tipo de trabajo que necesitas. Un plomero con años de experiencia en instalaciones residenciales será más confiable para tu hogar.</p>
      
      <h2>3. Compara presupuestos</h2>
      <p>No te quedes con la primera opción. Solicita presupuestos a varios profesionales y compara no solo el precio, sino también lo que incluye cada servicio.</p>
      
      <h2>4. Comunicación clara</h2>
      <p>Un buen profesional se comunica de manera clara y responde tus preguntas. Si notas dificultades en la comunicación antes de contratar, puede ser una señal de alerta.</p>
      
      <h2>5. Confía en tu intuición</h2>
      <p>Al final, tu instinto también cuenta. Si algo no te convence del todo, está bien seguir buscando hasta encontrar al profesional ideal para ti.</p>
    `
  },
  {
    id: 2,
    title: "Tendencias en servicios domésticos 2025",
    excerpt: "Explora las tendencias más importantes en servicios domésticos y profesionales este año.",
    date: "12 Nov 2025",
    author: "María García",
    category: "Tendencias",
    image: "https://via.placeholder.com/400x300?text=Tendencias+2025",
    content: `
      <h2>El futuro de los servicios domésticos</h2>
      <p>El 2025 trae consigo nuevas tendencias que están transformando la forma en que contratamos servicios para nuestros hogares.</p>
      
      <h2>Digitalización completa</h2>
      <p>Cada vez más personas prefieren contratar servicios a través de plataformas digitales. La comodidad de poder comparar profesionales, ver reseñas y gestionar pagos desde una app es invaluable.</p>
      
      <h2>Sostenibilidad</h2>
      <p>Los profesionales que ofrecen servicios ecológicos están en alta demanda. Desde productos de limpieza biodegradables hasta técnicas de reparación que alargan la vida útil de los objetos.</p>
      
      <h2>Servicios personalizados</h2>
      <p>La personalización es clave. Los usuarios buscan profesionales que se adapten a sus horarios, necesidades específicas y preferencias personales.</p>
      
      <h2>Transparencia en precios</h2>
      <p>La tendencia hacia la transparencia total en los costos continúa creciendo. Los clientes valoran saber exactamente qué están pagando y por qué.</p>
    `
  },
  {
    id: 3,
    title: "Historias de éxito: Emprendedores en OferTu",
    excerpt: "Conoce las inspiradoras historias de profesionales que han crecido usando nuestra plataforma.",
    date: "8 Nov 2025",
    author: "Juan Pérez",
    category: "Historias",
    image: "https://via.placeholder.com/400x300?text=Historias+Exito",
    content: `
      <h2>De principiante a experto reconocido</h2>
      <p>Hoy queremos compartir la historia de Roberto, un electricista que transformó su negocio gracias a OferTu.</p>
      
      <h2>Los inicios</h2>
      <p>Roberto empezó como ayudante de electricista hace 10 años. Después de completar su formación, decidió independizarse, pero conseguir clientes era un desafío constante.</p>
      
      <h2>El descubrimiento</h2>
      <p>Un amigo le recomendó registrarse en OferTu. Al principio era escéptico, pero decidió intentarlo. Creó un perfil profesional, subió fotos de sus trabajos y comenzó a recibir solicitudes.</p>
      
      <h2>El crecimiento</h2>
      <p>En su primer mes, Roberto completó 5 trabajos. Las reseñas positivas comenzaron a llegar y, con ellas, más clientes. Hoy, 2 años después, tiene una agenda llena con 3 meses de anticipación.</p>
      
      <h2>El consejo de Roberto</h2>
      <p>"La clave es la calidad y la comunicación. Trata cada trabajo como si fuera para tu propia casa, responde rápido a los mensajes y cumple con los plazos. Las reseñas positivas hacen el resto."</p>
    `
  },
  {
    id: 4,
    title: "Seguridad y confianza en transacciones online",
    excerpt: "Todo lo que necesitas saber sobre cómo protegemos tus pagos en OferTu.",
    date: "5 Nov 2025",
    author: "OferTu Team",
    category: "Seguridad",
    image: "https://via.placeholder.com/400x300?text=Seguridad+Online",
    content: `
      <h2>Tu seguridad es nuestra prioridad</h2>
      <p>En OferTu, implementamos múltiples capas de seguridad para proteger tus transacciones y datos personales.</p>
      
      <h2>Encriptación de extremo a extremo</h2>
      <p>Todos los datos sensibles, especialmente información de pago, están protegidos con encriptación SSL/TLS de última generación. Esto significa que tus datos viajan seguros desde tu dispositivo hasta nuestros servidores.</p>
      
      <h2>Verificación de profesionales</h2>
      <p>Cada profesional en nuestra plataforma pasa por un proceso de verificación que incluye validación de identidad, antecedentes y referencias profesionales.</p>
      
      <h2>Sistema de pagos seguros</h2>
      <p>Trabajamos con procesadores de pago certificados PCI DSS. Tu información bancaria nunca se almacena en nuestros servidores.</p>
      
      <h2>Protección de datos personales</h2>
      <p>Cumplimos con todas las regulaciones de protección de datos. Tu información personal solo se comparte con los profesionales cuando es estrictamente necesario para completar un servicio.</p>
      
      <h2>Soporte 24/7</h2>
      <p>Si detectas cualquier actividad sospechosa, nuestro equipo de seguridad está disponible para ayudarte inmediatamente.</p>
    `
  },
  {
    id: 5,
    title: "Cómo crear un perfil profesional atractivo",
    excerpt: "Consejos prácticos para que tu perfil destaque y atraiga más clientes.",
    date: "1 Nov 2025",
    author: "Ana López",
    category: "Consejos",
    image: "https://via.placeholder.com/400x300?text=Perfil+Profesional",
    content: `
      <h2>Tu perfil es tu carta de presentación</h2>
      <p>Un perfil bien elaborado puede ser la diferencia entre conseguir muchos clientes o pasar desapercibido.</p>
      
      <h2>1. Foto profesional</h2>
      <p>Usa una foto clara donde se te vea el rostro. Evita selfies borrosas o fotos de grupo. Una foto profesional genera confianza.</p>
      
      <h2>2. Descripción detallada</h2>
      <p>Explica claramente qué servicios ofreces, tu experiencia y qué te hace diferente. Sé específico: en lugar de "hago reparaciones", escribe "especializado en reparación de electrodomésticos con 10 años de experiencia".</p>
      
      <h2>3. Portfolio de trabajos</h2>
      <p>Sube fotos de antes y después de tus proyectos. Las imágenes hablan más que mil palabras y demuestran la calidad de tu trabajo.</p>
      
      <h2>4. Precios transparentes</h2>
      <p>Si es posible, indica rangos de precios o tarifas por hora. La transparencia genera confianza y ahorra tiempo a todos.</p>
      
      <h2>5. Responde rápido</h2>
      <p>La velocidad de respuesta aparece en tu perfil. Los clientes prefieren profesionales que responden rápido a sus consultas.</p>
      
      <h2>6. Solicita reseñas</h2>
      <p>Después de cada trabajo exitoso, pide amablemente a tus clientes que dejen una reseña. Las valoraciones positivas son oro puro.</p>
    `
  },
  {
    id: 6,
    title: "Impacto de los servicios profesionales en la comunidad",
    excerpt: "Cómo los profesionales independientes generan cambios positivos en nuestros barrios.",
    date: "28 Oct 2025",
    author: "Carlos Rodríguez",
    category: "Comunidad",
    image: "https://via.placeholder.com/400x300?text=Impacto+Comunidad",
    content: `
      <h2>Más que un servicio, una comunidad</h2>
      <p>Los profesionales independientes no solo resuelven problemas, también fortalecen el tejido social de nuestras comunidades.</p>
      
      <h2>Economía local</h2>
      <p>Cuando contratas a un profesional local, el dinero se queda en la comunidad. Esto genera un efecto multiplicador que beneficia a todos.</p>
      
      <h2>Relaciones de confianza</h2>
      <p>Los profesionales del barrio construyen relaciones a largo plazo con sus clientes. No es solo un trabajo puntual, es el inicio de una relación de confianza.</p>
      
      <h2>Transmisión de conocimientos</h2>
      <p>Muchos profesionales comparten tips y enseñan pequeños trucos a sus clientes. Esta transferencia de conocimiento empodera a las personas.</p>
      
      <h2>Apoyo mutuo</h2>
      <p>En OferTu hemos visto cómo los profesionales se recomiendan entre sí, creando redes de apoyo que benefician a toda la comunidad.</p>
      
      <h2>Historias inspiradoras</h2>
      <p>Cada profesional tiene una historia única. Compartir estas historias inspira a otros a perseguir sus sueños y valorar el trabajo bien hecho.</p>
    `
  }
]

export function getBlogPostById(id: number): BlogPost | undefined {
  return blogPosts.find(post => post.id === id)
}

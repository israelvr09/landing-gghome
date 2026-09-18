import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const desserts = [
  {
    name: "Tarta de frambuesa",
    price: "Desde $520",
    detail: "Crema de vainilla, fruta fresca y base de mantequilla.",
    src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Pastel de chocolate",
    price: "Desde $680",
    detail: "Bizcocho humedo, ganache oscuro y cacao fino.",
    src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Macarons artesanales",
    price: "Caja desde $280",
    detail: "Piezas delicadas con rellenos de temporada.",
    src: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=900&q=80",
  },
];

const cakeVideos = [
  {
    title: "Decoracion con crema",
    text: "Capas suaves, manga pastelera y detalles hechos a mano.",
    src: "https://videos.pexels.com/video-files/10238452/10238452-hd_1080_1920_30fps.mp4",
  },
  {
    title: "Acabados con fruta",
    text: "Fresas, blueberries y brillo final para pedidos especiales.",
    src: "https://videos.pexels.com/video-files/7525480/7525480-hd_1080_1920_25fps.mp4",
  },
  {
    title: "Presentacion final",
    text: "Montaje limpio para que cada pastel llegue listo a la mesa.",
    src: "https://videos.pexels.com/video-files/5694291/5694291-uhd_4096_2160_30fps.mp4",
  },
  {
    title: "Roles de canela",
    text: "Crujiente y dulce, perfecto para acompañar un cafe.",
    src: "https://www.pexels.com/es-es/download/video/25946545/",
  },
];

const stats = ["Pedidos con 48 h", "Sabores por temporada", "Mesas dulces"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#efe3d1] text-[#301b12]">
      <ScrollReveal />

      <header className="sticky top-0 z-30 border-b border-[#d7b891]/60 bg-[#fff8ed]/90 px-5 py-4 shadow-sm shadow-[#7f4d32]/5 backdrop-blur-xl sm:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <a className="flex items-center gap-3" href="#inicio">
            <span className="grid size-12 place-items-center rounded-full border border-[#7f4d32] bg-white font-serif text-xl italic text-[#7f4d32] shadow-sm">
              GG
            </span>
            <span className="font-serif text-2xl italic text-[#3a2418] sm:text-3xl">
              GGHome Bakery
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-[#664637] md:flex">
            <a className="nav-link" href="#menu">
              Postres
            </a>
            <a className="nav-link" href="#proceso">
              Proceso
            </a>
            <a className="nav-link" href="#pedido">
              Pedido
            </a>
            <a className="nav-pill" href="#contacto">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <section
        id="inicio"
        className="relative overflow-hidden px-6 py-16 sm:px-10 lg:px-12 lg:py-20"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="reveal-on-scroll" data-reveal>
            <p className="eyebrow">Reposteria fina hecha en casa</p>
            <h1 className="mt-5 max-w-3xl font-serif text-5xl italic leading-[1.02] text-[#301b12] sm:text-6xl lg:text-7xl">
              Pasteles y postres con presencia de celebracion.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#654131]">
              GGHome Bakery crea tartas, pasteles y cajas dulces con una
              estetica elegante, sabores clasicos y acabados listos para regalar
              o compartir.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="primary-button" href="#pedido">
                Cotizar pedido
              </a>
              <a className="secondary-button" href="#proceso">
                Ver proceso
              </a>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div className="metric" key={stat}>
                  {stat}
                </div>
              ))}
            </div>
          </div>

          <div
            className="reveal-on-scroll relative min-h-[560px] overflow-hidden rounded-[32px] shadow-2xl shadow-[#7f4d32]/20"
            data-reveal
          >
            <Image
              src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1400&q=85"
              alt="Mesa elegante con postres variados"
              fill
              className="scale-[1.02] object-cover"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e1009]/70 via-[#1e1009]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="max-w-sm font-serif text-4xl italic leading-tight">
                Dulces frescos con acabado de aparador.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="bg-[#fff8ed] px-6 py-20 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="section-heading reveal-on-scroll" data-reveal>
            <div>
              <p className="eyebrow">Favoritos de la casa</p>
              <h2>Nuestro aparador</h2>
            </div>
            <p>
              Una seleccion pensada para reuniones, cumpleanos, regalos y
              pedidos personalizados.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {desserts.map((dessert, index) => (
              <article
                className="premium-card reveal-on-scroll overflow-hidden"
                data-reveal
                key={dessert.name}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={dessert.src}
                    alt={dessert.name}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-2xl italic text-[#3a2418]">
                      {dessert.name}
                    </h3>
                    <span className="rounded-full bg-[#e8f0da] px-3 py-1 text-xs font-bold text-[#4f6231]">
                      {dessert.price}
                    </span>
                  </div>
                  <p className="mt-3 leading-7 text-[#654131]">
                    {dessert.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="proceso"
        className="bg-[#efe3d1] px-6 py-20 sm:px-10 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="section-heading reveal-on-scroll" data-reveal>
            <div>
              <p className="eyebrow">Asi nace cada pastel</p>
              <h2>Proceso en movimiento</h2>
            </div>
            <p>
              Los videos se activan como parte de la experiencia visual para
              mostrar textura, decoracion y presentacion.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {cakeVideos.map((video, index) => (
              <article
                className="video-card reveal-on-scroll"
                data-reveal
                key={video.title}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <video
                  aria-label={video.title}
                  autoPlay
                  className="absolute inset-0 h-full w-full object-cover"
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#160b07]/85 via-[#160b07]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="font-serif text-3xl italic">{video.title}</p>
                  <p className="mt-2 leading-7 text-[#fff8ed]/90">
                    {video.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pedido"
        className="bg-[#fff8ed] px-6 py-20 sm:px-10 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="reveal-on-scroll" data-reveal>
            <p className="eyebrow">Pedido personalizado</p>
            <h2 className="mt-4 font-serif text-5xl italic leading-tight">
              Teclado listo para tu idea dulce.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-[#654131]">
              Los campos resaltados indican donde puedes escribir. Al enfocar
              cada opcion, el borde y el fondo cambian para guiar el pedido.
            </p>
          </div>

          <form className="order-form reveal-on-scroll" data-reveal>
            <label>
              <span>Nombre</span>
              <input placeholder="Escribe tu nombre" type="text" />
            </label>
            <label>
              <span>Postre deseado</span>
              <select defaultValue="">
                <option disabled value="">
                  Selecciona una opcion
                </option>
                <option>Pastel personalizado</option>
                <option>Tarta de frutas</option>
                <option>Macarons</option>
                <option>Mesa dulce</option>
              </select>
            </label>
            <label>
              <span>Fecha del evento</span>
              <input type="date" />
            </label>
            <label>
              <span>Telefono o WhatsApp</span>
              <input placeholder="+52 55 0000 0000" type="tel" />
            </label>
            <label className="sm:col-span-2">
              <span>Detalles del pedido</span>
              <textarea placeholder="Sabores, porciones, colores o mensaje del pastel" />
            </label>
            <button type="button">Preparar cotizacion</button>
          </form>
        </div>
      </section>

      <section
        id="contacto"
        className="bg-[#efe3d1] px-6 py-20 sm:px-10 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal-on-scroll" data-reveal>
            <p className="eyebrow">Pedidos y eventos</p>
            <h2 className="mt-4 font-serif text-5xl italic">
              Contacta a GGHome Bakery
            </h2>
            <p className="mt-4 max-w-xl leading-8 text-[#654131]">
              Agenda pasteles personalizados, mesas dulces y cajas de regalo.
              Para mejores resultados, solicita tu pedido con 48 horas de
              anticipacion.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <a
              className="contact-card reveal-on-scroll"
              data-reveal
              href="tel:+525500000000"
            >
              <span>Telefono</span>
              <strong>+52 55 0000 0000</strong>
            </a>
            <a
              className="contact-card reveal-on-scroll"
              data-reveal
              href="mailto:hola@gghomebakery.com"
            >
              <span>Email</span>
              <strong>hola@gghomebakery.com</strong>
            </a>
            <a
              className="contact-card reveal-on-scroll"
              data-reveal
              href="https://www.instagram.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Instagram</span>
              <strong>@gghomebakery</strong>
            </a>
            <div className="contact-card reveal-on-scroll" data-reveal>
              <span>Ubicacion</span>
              <strong>Ciudad de Mexico</strong>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#301b12] px-6 py-10 text-[#fff8ed] sm:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-3xl italic">GGHome Bakery</p>
          <p className="max-w-md text-sm leading-6 text-[#eadcc7]">
            Postres artesanales, pasteles por pedido y mesas dulces para
            celebraciones cuidadas.
          </p>
          <p className="text-sm text-[#eadcc7]">Lunes a sabado, 9:00 a 18:00</p>
        </div>
      </footer>
    </main>
  );
}

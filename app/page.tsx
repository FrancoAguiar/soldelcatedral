import Image from "next/image";
import { ArrowDown, ArrowUpRight, BedDouble, Flame, MapPin, Mountain, Trees, Users } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";

const facts = [
  { icon: Users, label: "Hasta 4 huéspedes" },
  { icon: BedDouble, label: "2 dormitorios" },
  { icon: Flame, label: "Estufa a leña" },
  { icon: Mountain, label: "Vista abierta" }
];

export default function Home() {
  return (
    <main>
      <Nav />

      <section id="inicio" className="hero">
        <Image src="/images/camioneta.png" alt="Camioneta frente a una cabaña en el campo al atardecer" fill priority className="hero__image" />
        <div className="hero__shade" />
        <div className="hero__content shell">
          <Reveal>
            <p className="eyebrow eyebrow--light">Cerro Catedral · Uruguay</p>
            <h1>Donde el día<br/>termina más lento.</h1>
            <p className="hero__lead">Una cabaña de campo para bajar el ritmo, prender el fuego y volver a mirar lejos.</p>
            <div className="hero__actions">
              <a className="button button--light" href="https://wa.me/59800000000" target="_blank" rel="noreferrer">Consultar disponibilidad <ArrowUpRight size={18}/></a>
              <a className="text-link text-link--light" href="#experiencia">Conocer el lugar <ArrowDown size={17}/></a>
            </div>
          </Reveal>
        </div>
        <div className="hero__note">Hospedaje rural · Estadías cortas</div>
      </section>

      <section id="experiencia" className="intro section shell">
        <Reveal className="intro__aside">
          <span className="section-number">01</span>
          <p>La experiencia</p>
        </Reveal>
        <Reveal className="intro__copy" delay={0.08}>
          <p className="eyebrow">Naturaleza sin espectáculo</p>
          <h2>No venís a hacer de todo.<br/>Venís a no necesitarlo.</h2>
          <p className="body-large">Sol del Catedral es una pausa real: aire limpio, noches oscuras, caminos de tierra y una cabaña pensada para habitar el paisaje sin interrumpirlo.</p>
        </Reveal>
      </section>

      <section className="feature-grid shell">
        <Reveal className="feature feature--large">
          <Image src="/images/campo.png" alt="Campo abierto con luz dorada" fill className="cover" />
          <div className="feature__label">Campo abierto</div>
        </Reveal>
        <Reveal className="feature feature--portrait" delay={0.08}>
          <Image src="/images/polar.png" alt="Buzo polar de Sol del Catedral" fill className="cover" />
        </Reveal>
        <Reveal className="feature-copy" delay={0.14}>
          <Trees size={28}/>
          <h3>Un lugar para quedarse quieto</h3>
          <p>Desayunar afuera, leer sin apuro, caminar sin rumbo y ver cómo cambia la luz sobre las sierras.</p>
        </Reveal>
      </section>

      <section id="cabana" className="stay section">
        <div className="shell stay__grid">
          <Reveal className="stay__visual">
            <Image src="/images/cartel.png" alt="Cartel de Sol del Catedral en madera" fill className="cover" />
          </Reveal>
          <Reveal className="stay__content" delay={0.08}>
            <span className="section-number">02</span>
            <p className="eyebrow">La cabaña</p>
            <h2>Simple, cálida y preparada para el frío.</h2>
            <p>Materiales nobles, espacios tranquilos y lo necesario para una estadía cómoda sin perder el carácter rural.</p>
            <div className="facts">
              {facts.map(({ icon: Icon, label }) => <div className="fact" key={label}><Icon size={21}/><span>{label}</span></div>)}
            </div>
            <a className="text-link" href="https://wa.me/59800000000" target="_blank" rel="noreferrer">Consultar detalles <ArrowUpRight size={17}/></a>
          </Reveal>
        </div>
      </section>

      <section id="galeria" className="gallery section shell">
        <Reveal className="gallery__head">
          <div><span className="section-number">03</span><p>El paisaje</p></div>
          <h2>Lo que cambia<br/>cada vez que mirás.</h2>
        </Reveal>
        <div className="gallery__grid">
          <Reveal className="gallery__item gallery__item--wide"><Image src="/images/vehiculo.png" alt="Vehículo rural junto a la cabaña" fill className="cover" /></Reveal>
          <Reveal className="gallery__item"><Image src="/images/campo.png" alt="Atardecer sobre el campo" fill className="cover" /></Reveal>
          <Reveal className="gallery__quote"><blockquote>“Acá el lujo no está en sumar cosas, sino en recuperar tiempo.”</blockquote></Reveal>
        </div>
      </section>

      <section className="booking">
        <Image src="/images/camioneta.png" alt="Paisaje de Sol del Catedral" fill className="booking__image" />
        <div className="booking__shade" />
        <Reveal className="booking__content shell">
          <Logo />
          <p className="eyebrow eyebrow--light">Tu próxima pausa</p>
          <h2>Elegí una fecha.<br/>El resto baja solo.</h2>
          <div className="booking__actions">
            <a className="button button--light" href="https://wa.me/59800000000" target="_blank" rel="noreferrer">Reservar por WhatsApp <ArrowUpRight size={18}/></a>
            <span><MapPin size={18}/> Cerro Catedral, Uruguay</span>
          </div>
        </Reveal>
      </section>

      <footer className="footer shell">
        <Logo compact />
        <p>Hospedaje rural en Cerro Catedral, Uruguay.</p>
        <div className="footer__links"><a href="#inicio">Instagram</a><a href="#inicio">WhatsApp</a><a href="#inicio">Ubicación</a></div>
        <small>© 2026 Sol del Catedral</small>
      </footer>
    </main>
  );
}

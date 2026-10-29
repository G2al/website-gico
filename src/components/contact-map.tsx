const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.376410681774!2d14.184655026467322!3d40.97323782158094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b030f24d54441%3A0xa1bf94ff702e222b!2sGiCo%20societ%C3%A0%20cooperativa%20sociale%20-%20impresa%20sociale!5e0!3m2!1sit!2sit!4v1715001232228!5m2!1sit!2sit";

export function ContactMap() {
  return <div className="contact-page-map" data-reveal><iframe src={mapUrl} title="Posizione della sede GiCo, Via Ambra 41/bis, Trentola Ducenta" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div>;
}

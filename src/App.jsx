export default function TrinexWebsite() {
  const services = [
    {
      title: "Menaxhim i rrjetit",
      desc: "Instalim, konfigurim dhe mirëmbajtje për rrjetet lokale dhe të largëta. Përfshihen routera, switch-e, access point-e dhe zgjidhje për lidhje të qëndrueshme."
    },
    {
      title: "Virtualizim & VMware",
      desc: "Zgjidhje për servera të virtualizuar, menaxhim i burimeve dhe disponueshmëri e lartë. Ofrimi i high-availability dhe snapshot-e për rikuperim të shpejtë."
    },
    {
      title: "Microsoft 365",
      desc: "Konfigurim, administrim dhe mbështetje për Outlook, SharePoint, Teams dhe më shumë. Migrime, politika sigurie dhe ruajtje e të dhënave."
    },
    {
      title: "Siguri & Firewall",
      desc: "Implementim firewall-ash, monitorim i ngjarjeve dhe alarmim në kohë reale. Mbrojtje nga sulmet kibernetike dhe konfigurim VPN."
    },
    {
      title: "Backup & Disaster Recovery",
      desc: "Backup automatike, CDP dhe rikuperim i të dhënave me Veeam. Planifikim DR dhe testim rikuperimi."
    },
    {
      title: "Konsulencë IT",
      desc: "Analizë infrastrukture, dokumentim teknik dhe optimizim performancash. Zgjidhje për përmirësim të rrjetit dhe ulje kostosh."
    },
    {
      title: "Support për printera dhe pajisje të thjeshta",
      desc: "Instalim dhe mirëmbajtje për printera, skanerë, PC, laptopë, rrjet WiFi, konfigurim pajisjesh të përditshme në zyra dhe ambiente biznesi. Ofrim asistence teknike edhe për nevoja minimale për biznese të vogla."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-3xl font-bold text-silver">Trinex</h1>
        <nav className="space-x-6 text-base">
          <a href="#about" className="hover:underline">Rreth Nesh</a>
          <a href="#services" className="hover:underline">Shërbimet</a>
          <a href="#contact" className="hover:underline">Kontakt</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-20 bg-gradient-to-b from-gray-900 to-black">
        <h2 className="text-4xl font-bold mb-4">Smart IT Infrastructure</h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          Zgjidhje inteligjente për rrjetin dhe sistemet tuaja IT. Ne ofrojmë mirëmbajtje të plotë të infrastrukturës, siguri të avancuar dhe mbështetje teknike për biznese që kërkojnë performancë dhe besueshmëri.
        </p>
        <div className="mt-6 space-x-4">
          <button className="bg-silver text-black px-5 py-2 rounded font-semibold">Shërbimet tona</button>
          <a href="tel:+355XXXXXXXXX" className="border border-silver text-silver px-5 py-2 rounded inline-block">Na kontaktoni</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-16 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Rreth Nesh</h3>
        <p className="mb-2">
          Trinex është një kompani shqiptare e dedikuar në menaxhimin e infrastrukturës së rrjetit dhe sistemeve informatike. Me një eksperiencë të konsoliduar në fushën e IT, ne ndihmojmë bizneset të funksionojnë pa ndërprerje përmes monitorimit, mirëmbajtjes dhe sigurisë së avancuar.
        </p>
        <p className="mb-2"><strong>Misioni:</strong> Të ofrojmë zgjidhje të personalizuara dhe të besueshme për IT-në tuaj.</p>
        <p><strong>Vizioni:</strong> Të jemi partneri juaj më i besuar për infrastrukturën teknologjike.</p>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-900 px-8 py-16">
        <h3 className="text-2xl font-bold text-center mb-8">Shërbimet</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <details key={i} className="bg-gray-800 p-6 rounded-xl shadow">
              <summary className="text-xl font-semibold cursor-pointer mb-2">{s.title}</summary>
              <p className="text-gray-300 mt-2">{s.desc}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-16 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Na Kontaktoni</h3>
        <p className="mb-2">Email: <a href="mailto:info@trinex.al" className="text-silver">info@trinex.al</a></p>
        <p className="mb-2">Telefon: <a href="tel:+355XXXXXXXXX" className="text-silver">+355 XX XXX XXXX</a></p>
        <p>Adresa: Tiranë, Shqipëri</p>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-8 border-t border-gray-800">
        &copy; {new Date().getFullYear()} Trinex – Teknologjia në duar të sigurta.
      </footer>
    </div>
  );
}

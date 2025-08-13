const TrustBar = () => {
  const companies = [
    { name: "Artificial Intelligence", icon: "ai.svg" },
    { name: "Web Development", icon: "webDev.svg" },
    { name: "Data Science", icon: "dataScience.svg" },
    { name: "Cloud Computing", icon: "cloudComputing.svg" },
    { name: "Cybersecurity", icon: "cybersecurity.svg" },
  ]

  return (
    <section className="py-0 pb-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <p className="text-center text-text-secondary mb-8">Helping talent from</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <div key={index} className="opacity-50 hover:opacity-100 transition-opacity duration-300">
              <img 
                src={`/${company.icon}`} 
                alt={company.name} 
                className="h-8 md:h-10 w-auto filter brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
const TrustBar = () => {
  const companies = [
    { name: "LinkedIn", icon: "linkedin.svg" },
    { name: "YouTube", icon: "youtube.svg" },
    { name: "GitHub", icon: "github.svg" },
    { name: "Zoom", icon: "zoom.svg" },
    { name: "Google Drive", icon: "google-drive.svg" },
  ]

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <p className="text-center text-text-secondary mb-8">Trusted by candidates at</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <div key={index} className="opacity-50 hover:opacity-100 transition-opacity duration-300">
              <img 
                src={`/icons/${company.icon}`} 
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
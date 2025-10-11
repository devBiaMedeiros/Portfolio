interface Contact {
    type: string;
    label: string;
    value: string;
    link: string;
    icon: string;
}

export default function Contatos() {
    const contacts: Contact[] = [
        {
            type: "email",
            label: "Email",
            value: "beatriz.rma@gmail.com",
            link: "mailto:beatriz.rma@gmail.com",
            icon: "📧"
        },
        {
            type: "linkedin",
            label: "LinkedIn",
            value: "/in/beatriz-medeiros",
            link: "https://www.linkedin.com/in/beatriz-medeiros-9a0515236/",
            icon: "💼"
        },
        {
            type: "github",
            label: "GitHub",
            value: "@devBiaMedeiros",
            link: "https://github.com/devBiaMedeiros",
            icon: "🐱"
        }
    ];

    return (
        <section id="Contatos">
            <h2>Contatos</h2>
            <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem', color: '#cbd5e1' }}>
                Vamos conversar! Entre em contato comigo através dos canais abaixo.
            </p>
            <div className="contacts-grid">
                {contacts.map((contact, index) => (
                    <div key={index} className="contact-card">
                        <span className="contact-icon">{contact.icon}</span>
                        <div className="contact-label">{contact.label}</div>
                        <a 
                            href={contact.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="contact-link"
                        >
                            {contact.value}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}
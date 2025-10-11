interface ProfileProps {  
    bio: string;
    location: string;
    age: number;
}      

export default function Profile ({bio, age, location}: ProfileProps) { 
    return(
        <section id="Profile">
            <h2>Sobre Mim</h2>
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '2rem', 
                alignItems: 'center' 
            }}>
                <div>
                    <p>
                        {bio}
                    </p>
                </div>
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(2, 1fr)', 
                    gap: '1rem',
                    textAlign: 'center' as const
                }}>
                    <div style={{
                        background: 'rgba(15, 23, 42, 0.8)',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        border: '1px solid rgba(148, 163, 184, 0.3)'
                    }}>
                        <div style={{ fontSize: '2rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                            {age}
                        </div>
                        <div style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>Anos</div>
                    </div>
                    <div style={{
                        background: 'rgba(15, 23, 42, 0.8)',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        border: '1px solid rgba(148, 163, 184, 0.3)'
                    }}>
                        <div style={{ fontSize: '2rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                            {location}
                        </div>
                        <div style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>Localização</div>
                    </div>
                </div>
            </div>
        </section>       
    )
}
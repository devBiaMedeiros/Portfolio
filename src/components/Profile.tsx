interface ProfileProps {  
    name: string;
    bio: string;
    location: string;
    age: number;
}      

export default function Profile ({name, bio,age, location}: ProfileProps) { 

    return(
        <>
            <h2>Perfil</h2>
            <section id="Profile">
                <p> Olá meu nome é {name}
                tenho { age } anos { location}, {bio}</p>  
            </section>       
        </>
    )
}
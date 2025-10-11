
import './App.css'
import Contatos from './components/Contatos'
import Header from './components/Header'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Projects from './components/Projects'
import { SkillList } from './components/Skills'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Profile 
          age={32} 
          location="Rio de Janeiro" 
          bio="Sou uma profissional em transição de carreira, migrando da área da saúde para o desenvolvimento de software. Tenho experiência como técnica de enfermagem, onde desenvolvi habilidades como trabalho em equipe, atenção aos detalhes e resolução de problemas sob pressão. Atualmente, estou me dedicando ao aprendizado em desenvolvimento web e busco aplicar minhas competências humanas na criação de soluções tecnológicas que gerem impacto positivo."
        />
        <SkillList />
        <Projects />
        <Contatos />
      </main>
      <footer>
        <p>Desenvolvedora em construção... 🚀</p>
      </footer>
    </>
  )
}

export default App

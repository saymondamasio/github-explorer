import { FormEvent, useEffect, useState } from 'react'
import Logo from '../../assets/logo.svg'
import { RepositoryItem } from '../../components/RepositoryItem'
import styles from './styles.module.scss'

type Repository = {
  id: number
  name: string
  description: string
  html_url: string
  full_name: string
  owner: {
    avatar_url: string
    login: string
  }
}

export function Repositories() {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/repositories')
      .then(response => response.json())
      .then(resp => setRepositories(resp))
  }, [])

  function handleSearchRepositories(e: FormEvent) {
    e.preventDefault()
    fetch('https://api.github.com/search/repositories?q=' + search)
      .then(r => r.json())
      .then(resp => setRepositories(resp.items))
  }

  return (
    <div className={styles.container}>
      <main>
        <Logo />

        <h1>
          Explore repositórios <br /> no Github.
        </h1>
        <form onSubmit={handleSearchRepositories} className="search-container">
          <input
            type="text"
            placeholder="Digite aqui"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button type="submit">Pesquisar</button>
        </form>

        <section className={styles.listRepositories}>
          <ul>
            {repositories.length > 0 &&
              repositories.map(repository => (
                <RepositoryItem key={repository.id} repository={repository} />
              ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

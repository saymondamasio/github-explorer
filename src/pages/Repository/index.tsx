import { useEffect, useState } from 'react'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { Link, useParams } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import { RepositoryItem } from '../../components/RepositoryItem'
import styles from './styles.module.scss'

type Repository = {
  id: number
  name: string
  html_url: string
  owner: {
    avatar_url: string
    login: string
  }
  full_name: string
  description: string
  stargazers_count: number
  forks: number
  open_issues: number
}

export function Repository() {
  const { user, repo } = useParams()

  const [repository, setRepository] = useState<Repository>()
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch(`https://api.github.com/repos/${user}/${repo}`)
      .then(resp => resp.json())
      .then(response => {
        setRepository(response)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps

    fetch(`https://api.github.com/users/${user}/repos`)
      .then(resp => resp.json())
      .then(response => {
        setRepositories(response)
      })
  }, [user, repo])

  return (
    <div className={styles.container}>
      <header>
        <Logo />

        <Link to="/">
          <RiArrowLeftSLine size={25} color="#a8a8b3" />
          Voltar
        </Link>
      </header>
      <main>
        <section className={styles.infoRepo}>
          <img
            src={repository?.owner.avatar_url}
            alt={repository?.owner.login}
          />

          <div>
            <strong>{repository?.full_name}</strong>

            <p>{repository?.description}</p>
          </div>
        </section>

        <section className={styles.moreInfo}>
          <ul>
            <li>
              <strong>{repository?.stargazers_count}</strong>
              <span>Stars</span>
            </li>

            <li>
              <strong>{repository?.forks}</strong>
              <span>Forks</span>
            </li>

            <li>
              <strong>{repository?.open_issues}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </section>

        <section className={styles.listRepositories}>
          {repositories.length > 0 &&
            repositories.map(repository => (
              <RepositoryItem
                key={repository.id}
                repository={repository}
                no_image
              />
            ))}
        </section>
      </main>
    </div>
  )
}

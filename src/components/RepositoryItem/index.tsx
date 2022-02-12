import { RiArrowRightSLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

interface Props {
  repository: {
    name: string
    full_name: string
    description: string
    html_url: string
    owner: {
      avatar_url: string
      login: string
    }
  }

  no_image?: boolean
}

export function RepositoryItem({ repository, no_image = false }: Props) {
  return (
    <li className={styles.container}>
      {!no_image && (
        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
      )}

      <div className={styles.infoRepo}>
        <Link to={`/repositories/${repository.full_name}`}>
          <strong>{repository.full_name}</strong>
        </Link>
        <p>{repository.description}</p>
      </div>

      <RiArrowRightSLine size={25} color="#C9C9D4" />
    </li>
  )
}

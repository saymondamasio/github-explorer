interface Props {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem({ repository }:Props) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url} target="_blank" rel="noreferrer">Acessar repositorio</a>
    </li>
  );
}
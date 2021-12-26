import Link from 'next/link';
import homeStyles from '../styles/HomeStyles/Home.module.css'

export const getStaticProps = async () => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await data.json();

  return {
    props: {
      users
    }
  }
}

export default function Home({ users }) {
  return (
    <div className={homeStyles.container}>
      <h1 className={homeStyles.title}>Users List</h1>
      {users.map(user => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <a>
              <div className={homeStyles.name}>
                <h4 className={homeStyles.text}>{user.name}</h4>
              </div>
            </a>
          </Link>
      ))}
    </div>
  )
}

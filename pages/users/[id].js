import Meta from '../../components/Meta'
import userStyles from '../../styles/UserStyles/UserStyles.module.css'

export const getStaticPaths = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await data.json();

    const paths = users.map(user => {
        return{
            params: { id: user.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await data.json()
    return{
        props: {
            user
        }
    }
}

const users = ({ user }) => {
    return ( 
        <>
        <Meta title={`${user.name}`} />
        <div className={userStyles.container}>
            <h2 className={userStyles.title}>{user.name}</h2>
            <p><b>Username:</b> {user.username}</p>
            <p><b>Email:</b> {user.username}</p>
            <p><b>Address:</b> {`${user.address.suite}, ${user.address.street}, ${user.address.city}`}</p>
            <p><b>Phone:</b> {user.phone}</p>
            <p><b>Website:</b> {user.website}</p>
            <p><b>Company:</b> {`${user.company.name} (${user.company.catchPhrase}, ${user.company.bs})`}</p>
        </div>
        </>
     );
}
 
export default users;
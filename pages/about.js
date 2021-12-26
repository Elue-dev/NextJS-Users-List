import Meta from "../components/Meta"
import aboutStyles from '../styles/AboutStyles/About.module.css'

const about = () => {
    return ( 
        <>
            <Meta title='About' />
            <div className={aboutStyles.container}>
                <p>Application built with Next JS.<br/>
                    Posts were fetched from a REST API called JSON Placeholder,
                    and a list of users were gotten from the API, as well as the
                    details of each user. Next JS concept such as 
                    <code>getStaticProps</code> and <code>getStaticPaths</code>
                    were used.

                </p>
            </div>
        </>
     );
}
 
export default about;
// import withLayout from '../components/Layout'
import Layout from '../components/Layout'
import { color, size } from '../colors'

// const Page = () => <p>About Page</p>

// export default withLayout(Page)
const aboutPageContent = <p style={{
    backgroundColor: color.primary,
    fontSize: size.fontSize,
    padding: size.padding,
    margin: size.margin
}}>About Page</p>

export default function About() {
    return (
        <div>
            {/* <Layout content={aboutPageContent}/> */}
            <Layout>
                {aboutPageContent}
            </Layout>
        </div>
    )
}
import Layout from '../components/Layout'
import { color, size } from '../colors'

export default function Index() {
    return (
        <div>
            <Layout>
                <p style={{
                    backgroundColor: color.primary,
                    fontSize: size.fontSize,
                    padding: size.padding,
                    margin: size.margin
                }}>Index Page</p>
            </Layout>
        </div>
    )
}
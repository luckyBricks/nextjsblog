//列表页
import Head from 'next/head'
import { Row,Col } from 'antd'
import Header from '../components/Header'
const List = () => (
    <div >
        <Head>
            <title>Home</title>
            <Header/>
            <Row className="comm-main" type='flex' justify='center'>
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14} >左</Col>
                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>右</Col>
            </Row>
        </Head>
    </div>
)

export default List

import { Row, Col, Menu } from 'antd'
import { HomeOutlined, YoutubeOutlined, FormOutlined } from '@ant-design/icons'
import styles from '../styles/HeaderComp.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <Row type="flex" justify="center">
                <Col xs={6} sm={6} md={10} lg={15} xl={12}>
                    <span className={styles.headerLogo}>偏安一隅</span>
                </Col>
                <Col xs={18} sm={18} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal">
                        <Menu.Item key="home">
                            <HomeOutlined />
                            <span>首页</span>
                        </Menu.Item>
                        <Menu.Item key="video">
                            <YoutubeOutlined />
                            <span>视频</span>
                        </Menu.Item>
                        <Menu.Item key="life">
                            <FormOutlined />
                            <span>生活</span>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}
export default Header

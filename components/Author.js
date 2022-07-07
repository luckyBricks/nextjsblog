import { Avatar, Divider } from 'antd'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'
import styles from '../styles/AuthorComp.module.css'

const Author = () => {
    return (
        <div className={`${styles.authorDiv} comm-box`}>
            <div>
                <Avatar
                    size={100}
                    src="http://blogimages.jspang.com/blogtouxiang1.jpg"
                />
            </div>
            <div className={styles.intro}>
                光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。
                <Divider>社交账号</Divider>
                <Avatar
                    size='large'
                    icon={<GithubOutlined />}
                    className={styles.account}
                />
                <Avatar
                    size='large'
                    icon={<QqOutlined />}
                    className={styles.account}
                />
                <Avatar
                    size='large'
                    icon={<WechatOutlined />}
                    className={styles.account}
                />
            </div>
        </div>
    )
}

export default Author

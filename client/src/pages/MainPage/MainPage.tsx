import { Helmet } from "react-helmet"
import ContactSection from '../../components/ContactSection'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import PostList from '../../components/PostList'
import VideoSection from '../../components/VideoSection'
import { posts } from '../../data/data'
import styles from './MainPage.module.scss'

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Rickroll</title>
        <meta name="description" content="Never Gonna Give You Up" />
        <meta name="keywords" content="Rickroll, Never Gonna Give You Up, Rick Astley" />
      </Helmet>
      <Header />
      <div className={styles.wrapper}>
        <VideoSection />
      </div>
      <PostList posts={posts} />
      <div className={styles.wrapper}>
        <ContactSection />
      </div>
      <Footer />
    </>
  )
}

export default MainPage

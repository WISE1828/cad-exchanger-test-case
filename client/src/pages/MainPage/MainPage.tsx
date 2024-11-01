import { Helmet } from "react-helmet"
import PostList from '../../components/PostList'
import { posts } from '../../data/data'
import Footer from '../../shared/Footer'
import Header from '../../shared/Header'
import ContactSection from './components/ContactSection'
import VideoSection from './components/VideoSection'
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

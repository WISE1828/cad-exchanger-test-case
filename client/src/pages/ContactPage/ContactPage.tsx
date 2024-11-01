import { Container, Typography } from '@mui/material';
import { useState } from 'react';
import { Helmet } from "react-helmet";
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import InputForms from './components/InputForms';
import styles from './ContactPage.module.scss';

const ContactPage = () => {
  const [serverResponse, setServerResponse] = useState('');


  return (
    <>
      <Helmet>
        <title>Contact the Some company</title>
        <meta name="description" content="Never Gonna Give You Up" />
        <meta name="keywords" content="Contact the Some company" />
      </Helmet>
      <Header />
      {!!serverResponse && (
        <div className={styles.wrapper}>
          <Container
            fixed
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: '100vh',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant='h2'
              sx={{
                textAlign: 'center',
                marginBottom: '2rem'
              }}
            >
              {serverResponse}
            </Typography>
          </Container>
        </div>
      )}
      {!serverResponse && (
        <div className={styles.wrapper}>
          <Container
            fixed
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: '100vh',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant='h2'
              sx={{
                textAlign: 'center',
                marginBottom: '2rem'
              }}
            >
              Only CTA on the page
            </Typography>
            <InputForms onSuccess={setServerResponse} />
          </Container>
        </div>
      )}
      <Footer />
    </>
  )
}

export default ContactPage

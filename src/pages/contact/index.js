import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import FormGroup from '../../components/form-group';
import styles from './index.module.scss';

function Contact() {
  return (
    <Layout>
      <SEO title="Contato"/>
      <section className={styles.contact}>
        <h2 className={styles.contactTitle}>
          CONTATO
        </h2>
        <form className={styles.contactForm}>
          <FormGroup
            label="Seu Nome"
            type="text"
          />
          <FormGroup
            label="Seu Email"
            type="email"
          />
          <FormGroup
            label="Deixe sua mensagem"
            Input={inputProps => (
              <textarea
                {...inputProps}
                rows={6}
                className={`${inputProps.className} ${styles.contactFormTextArea}`}
              />
            )}
          />
          <button className={styles.contactFormSubmit}>
            Enviar Mensagem
          </button>
        </form>
      </section>
    </Layout>
  );
}

export default Contact;
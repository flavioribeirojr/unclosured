import React from 'react';
import SEO from '../../components/seo';
import FormGroup from '../../components/form-group';
import styles from './index.module.scss';

function Contact() {
  return (
    <>
      <SEO title="Contato"/>
      <section className={styles.contact}>
        <h2 className={styles.contactTitle}>
          CONTATO
        </h2>
        <form className={styles.contactForm}>
          <FormGroup
            label="Seu Nome"
            type="text"
            inputClassName={styles.contactFormInput}
            labelClassName={styles.contactFormLabel}
            inverseLabelClassName={styles.inverse}
          />
          <FormGroup
            label="Seu Email"
            type="email"
            inputClassName={styles.contactFormInput}
            labelClassName={styles.contactFormLabel}
            inverseLabelClassName={styles.inverse}
          />
          <FormGroup
            label="Deixe sua mensagem"
            inputClassName={styles.contactFormInput}
            labelClassName={styles.contactFormLabel}
            inverseLabelClassName={styles.inverse}
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
    </>
  );
}

export default Contact;
import React, { useState } from 'react';
import SEO from '../../components/seo';
import FormGroup from '../../components/form-group';
import Spinner from '../../components/spinner';
import * as ContactService from '../../services/contact';
import { toast } from 'react-toastify';
import { css } from 'glamor';
import styles from './index.module.scss';

function MessageInput(props) {
  return (
    <textarea
      {...props}
      rows={6}
      className={`${props.className} ${styles.contactFormTextArea}`}
    />
  );
}

function Contact() {
  const [ isFormLoading, setIsFormLoading ] = useState(false);
  const [ form, setForm ] = useState({
    name: '',
    email: '',
    message: ''
  });

  return (
    <>
      <SEO title="Contato"/>
      <section className={styles.contact}>
        <h2 className={styles.contactTitle}>
          CONTATO
        </h2>
        <form className={styles.contactForm} onSubmit={submitContactForm}>
          <FormGroup
            label="Seu Nome"
            type="text"
            inputClassName={styles.contactFormInput}
            labelClassName={styles.contactFormLabel}
            inverseLabelClassName={styles.inverse}
            name="name"
            value={form.name}
            onChange={onInputChange}
            required
          />
          <FormGroup
            label="Seu Email"
            type="email"
            inputClassName={styles.contactFormInput}
            labelClassName={styles.contactFormLabel}
            inverseLabelClassName={styles.inverse}
            name="email"
            value={form.email}
            onChange={onInputChange}
            required
          />
          <FormGroup
            label="Deixe sua mensagem"
            inputClassName={styles.contactFormInput}
            labelClassName={styles.contactFormLabel}
            inverseLabelClassName={styles.inverse}
            name="message"
            value={form.message}
            onChange={onInputChange}
            Input={MessageInput}
            required
          />
          <button className={styles.contactFormSubmit}>
            {
              isFormLoading ?
                <Spinner /> :
                'ENVIAR MENSAGEM'
            }
          </button>
        </form>
      </section>
    </>
  );

  function onInputChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  async function submitContactForm(event) {
    event.preventDefault();

    setIsFormLoading(true);

    try {
      const data = new FormData();
      data.set('name', form.name);
      data.set('email', form.email);
      data.set('message', form.message);

      await ContactService.sendContactForm(data);

      toast('Sua mensagem foi enviada! Assim que puder te mando uma resposta :)', {
        className: css({
          background: 'black'
        }),
        bodyClassName: css({
          fontSize: '18px',
          color: 'white'
        }),
        progressClassName: css({
          background: "radial-gradient(#a55eea 25%, #fed330 25%, #fc5c65 25%, #2bcbba 25%)",
          fontFamily: 'Lato'
        })
      });
    } catch (error) {
      toast('Ooops... Algo errado aconteceu. Por favor tente novamente mais tarde', {
        type: 'error',
        progressClassName: css({
          fontFamily: 'Lato'
        })
      });
    } finally {
      setIsFormLoading(false);
    }
  }
}

export default Contact;
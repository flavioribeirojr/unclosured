import axios from 'axios';

async function sendContactForm(formData) {
  await axios.post('https://formspree.io/xyyjrgaq', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

export {
  sendContactForm
}
'use strict';

const CONTACT = {
  phoneRaw: '9153148638',
  phoneIntl: '19153148638',
  whatsapp: 'https://wa.me/19153148638?text=Hi%20Amanda!%20I%20want%20to%20RSVP%20for%20class.',
  sms: 'sms:+19153148638',
  email: 'amandance.studio@gmail.com',
  instagram: 'https://www.instagram.com/amandance.project?igsh=b3dxdGo2c3Rwdnp0&utm_source=qr',
  zelle: 'amanda.ur24@gmail.com',
  venmoUrl: 'https://www.venmo.com/u/amandadanceproject',
  venmoHandle: '@amandadanceproject'
};

function applyDynamicLinks() {
  const map = {
    reserve: CONTACT.whatsapp,
    whatsapp: CONTACT.whatsapp,
    text: CONTACT.sms,
    instagram: CONTACT.instagram,
    email: `mailto:${CONTACT.email}`,
    venmo: CONTACT.venmoUrl
  };

  Object.entries(map).forEach(([key, value]) => {
    document.querySelectorAll(`[data-link="${key}"]`).forEach((el) => {
      el.setAttribute('href', value);
    });
  });

  document.querySelectorAll('[data-fill="phone"]').forEach((el) => (el.textContent = CONTACT.phoneRaw));
  document.querySelectorAll('[data-fill="email"]').forEach((el) => (el.textContent = CONTACT.email));
  document.querySelectorAll('[data-fill="zelle"]').forEach((el) => (el.textContent = CONTACT.zelle));
  document.querySelectorAll('[data-fill="venmo"]').forEach((el) => (el.textContent = CONTACT.venmoHandle));

  const form = document.querySelector('[data-contact-form]');
  if (form) {
    form.setAttribute('action', `mailto:${CONTACT.email}`);
  }
}

function setupFaqAccordion() {
  document.querySelectorAll('[data-faq-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const answer = button.parentElement.querySelector('.faq-answer');
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      answer.hidden = expanded;
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyDynamicLinks();
  setupFaqAccordion();
});

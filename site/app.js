import {calculateCapacity} from './roi.mjs?v=4';
const $ = id => document.getElementById(id);
const number = new Intl.NumberFormat('fr-FR', {maximumFractionDigits:2});
const money = new Intl.NumberFormat('fr-FR', {style:'currency', currency:'EUR', maximumFractionDigits:0});
const form = $('roi-form');
let announceTimer;
function update() {
  const people = Number($('people').value);
  const currentHours = Number($('current-hours').value);
  const targetHours = Number($('target-hours').value);
  $('people-value').textContent = people + (people === 1 ? ' personne' : ' personnes');
  $('current-hours-value').textContent = number.format(currentHours) + ' h / semaine';
  $('target-hours-value').textContent = number.format(targetHours) + ' h / semaine';
  ['people', 'current-hours', 'target-hours'].forEach(id => {
    const field = $(id);
    field.style.setProperty('--fill', ((field.value-field.min)/(field.max-field.min)*100)+'%');
    field.setAttribute('aria-valuetext', $(id+'-value').textContent);
  });
  const valid = $('rate').validity.valid;
  $('input-error').hidden = valid;
  // Time always updates, even while the optional hourly cost is being edited.
  const result = calculateCapacity({people, currentHours, targetHours, rate: valid ? Number($('rate').value) : 0});
  $('hours-result').textContent = number.format(result.hours);
  $('value-result').replaceChildren(document.createTextNode(valid ? money.format(result.monthlyValue)+' ' : '— '), Object.assign(document.createElement('small'), {textContent:'/ mois'}));
  $('annual-value-result').replaceChildren(document.createTextNode(valid ? money.format(result.annualValue)+' ' : '— '), Object.assign(document.createElement('small'), {textContent:'/ an'}));
  $('rate-note').textContent = valid ? money.format(Number($('rate').value)) : 'à renseigner';
  $('scenario-note').hidden = currentHours > targetHours;
  $('calculation-detail').textContent = currentHours >= targetHours
    ? `(${number.format(currentHours)} h − ${number.format(targetHours)} h) × ${people} ${people === 1 ? 'personne' : 'personnes'} = ${number.format(result.hours)} h / semaine.`
    : 'Le temps visé dépasse le temps actuel : aucun temps récupéré dans ce scénario.';
  clearTimeout(announceTimer);
  announceTimer = setTimeout(() => {
    $('calculator-announcement').textContent = `${number.format(result.hours)} heures récupérables par semaine${valid ? ', soit '+money.format(result.monthlyValue)+' par mois et '+money.format(result.annualValue)+' par an de temps valorisé' : ''}.`;
  }, 180);
}
form.addEventListener('input', update);
form.addEventListener('change', update);
form.addEventListener('submit', event => event.preventDefault());
update();
$('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  if (!event.currentTarget.reportValidity()) return;
  const body = `Bonjour François,\n\n${$('contact-message').value.trim()}\n\n${$('contact-name').value.trim()}\n${$('contact-email').value.trim()}`;
  window.location.href = `mailto:contact@mexar.fr?subject=${encodeURIComponent('Mon projet avec Mexar')}&body=${encodeURIComponent(body)}`;
  $('contact-status').textContent = 'Votre brouillon est prêt à ouvrir dans votre messagerie. Si elle ne s’ouvre pas, vous pouvez écrire directement à contact@mexar.fr.';
});

import './style.css';

const app = document.querySelector('#app');
const readOnlyComputedStyle = getComputedStyle(app);
const readOnlyComputedStyleForPseudo = getComputedStyle(app, '::after');
app.innerHTML = `
  <div>
  computed style for padding from rem to px: ${JSON.stringify(
    readOnlyComputedStyle['padding']
  )}
  </div>
  <br> 
  <div>
  computed style contains padding as well padding-left,padding-right.. as seperate
  :${JSON.stringify(readOnlyComputedStyle['paddingLeft'])}
</div>
<br>
<div>
  Computed style takes pseduo class as well: ${JSON.stringify(
    readOnlyComputedStyleForPseudo['color']
  )}
  </div>
`;

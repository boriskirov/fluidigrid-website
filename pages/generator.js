function generate(columnStartName, columnEndName, gridSystem) {
  columnStartName = document.getElementById('start').value;
  columnEndName = document.getElementById('end').value;
  gridSystem = document.getElementById('grid').value;

  let gridName = '';
  let columnStartStyles = '';
  let columnEndStyles = '';

  gridSystem = `
/* Fluidi-gridy system */

grid, .${gridName} {
display: grid;
grid-template-columns: var(--grid-tc-12);
grid-column-gap: var(--grid-gap);
grid-row-gap: var(--grid-gap);
align-content: stretch;
align-self: stretch;
}

grid > div {
align-self: start;
}`;

  for (let i = 1; i <= 12; i++) {
    columnStartStyles += `
div[class~="${columnStartName}${i}"] {grid-column-start: ${i};}
`;

    columnEndStyles += `
div[class~="${columnEndName}${i}"] {grid-column-end: ${i + 1};}
`;
  }
  let pre = document.querySelector('#msg pre');
  pre.textContent = [gridSystem + columnStartStyles + columnEndStyles];
}

export default function Generator() {
  return (
    <div className="grid">
      <div className="cs1 ce12">
        <a href="/">Go back</a>
      </div>
      <div className="cs1 ce6">
        <h3>Fluidgrid Custom CSS generator</h3>
        <form>
          <input id="grid" type="text" value="vv" />
          <input id="start" type="text" value="cs" />{' '}
          <input id="end" type="text" value="ce" />
          <a
            className="button-donwload"
            type="button"
            value="Generate CSS"
            onClick="generate();"
          >
            Generate
          </a>
        </form>
      </div>
      <div className="cs1 ce6">
        <code id="msg">
          <pre>Your custom generation will appear here.</pre>
        </code>
      </div>
    </div>
  );
}

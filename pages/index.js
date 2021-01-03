import Head from 'next/head';
import Link from 'next/link';
import ExampleGrid from '../components/example';
import Logo from '../components/logo';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fluidigrid</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="CSS Grid system" />
        <meta
          name="image"
          property="og:image"
          content="https://i.ibb.co/9hv9H8k/thumbnail.png/?1"
        />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content="Fluidigrid" />
        <meta
          name="og:description"
          property="og:description"
          content="Simple and lightweight CSS grid system for constructing responsive and fluid layouts."
        />
        <meta property="og:site_name" content="Fluidigrid" />
        <meta property="og:url" content="https://www.fluidigrid.com" />
        <meta
          property="og:image"
          content="https://i.ibb.co/9hv9H8k/thumbnail.png/?1"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Fluidigrid" />
        <meta
          name="twitter:description"
          content="Simple and lightweight CSS grid system for constructing responsive and fluid layouts."
        />
        <meta name="twitter:site" content="https://www.fluidigrid.com" />
        <meta name="twitter:creator" content="Boris Kirov" />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/9hv9H8k/thumbnail.png/?1"
        />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="author" content="Boris Kirov" />
      </Head>

      <grid>
        <div class="cs1 ce3 sticky">
          <h1>Fluidigrid</h1>
          <p>
            Fluidigrid is a simple and lightweight CSS grid system for
            constructing responsive and fluid layouts.
          </p>
          <a
            className="button-donwload"
            href="https://raw.githubusercontent.com/Fluiditype/fluiditype/master/fluidtype.css"
            target="_blank"
          >
            Download
          </a>
        </div>
        <ExampleGrid />
        <div className="cs5 ce12">
          <h3>Structure</h3>
          <p>
            Let's skip the chitchat and get down to the nitty-gritty.The
            Fluidigrid setup is simple. It is based on 12 column
            grid-template-collumns, with the power of the <code>fr</code>{' '}
            (fractional) unit, which stands for 1 part of the available space.
            So you have <code>12fr</code> creating the 12 cells of the layout.{' '}
          </p>
        </div>
        <div className="cs5 ce12">
          <h3>How to use</h3>
          <p>
            You can either create a custom wrapper with name grid or add class
            name to your wrapper .grid. You should add a start and end class to
            each children element in order to create your layout. Use the cs
            <code>n</code> for defining the starting collumn-line of your of
            your item. Use ce<code>n</code> to define how many columns your item
            will span, or which column you define as an end line.
          </p>
        </div>
        <div className="cs5 ce12">
          <h3>Responsive</h3>
          <p>
            There is no need to think about responsiveness as the grid is
            handling well the device-size. For best experience Fluidigridy
            support simple rule for under 1024px to turn into 1 grid layout, and
            every cell will use the <code>1fr</code> fractional free unit space.
          </p>
        </div>
        <div className="cs5 ce12">
          <h3>Easy to adopt</h3>
          <ul>
            <li>
              <p>2KB file</p>
            </li>
            <li>Change to root values for better customization</li>
            <li>
              <a href="css-generator">CSS Genereator</a> for creating your own
              naming convention.
            </li>
          </ul>
        </div>
        <div className="cs5 ce12">
          <h3>Examples</h3>
          <iframe
            src="https://codesandbox.io/embed/infallible-haze-d6ttt?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=preview"
            title="Fluidigrid"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>
        </div>
        <div className="cs5 ce12">
          <ul className="sources">
            <li>
              <a
                href="https://codesandbox.io/s/fluidigrid-d6ttt?file=/src/App.js"
                target="_blank"
              >
                CodeSandbox
              </a>
            </li>
            <li>
              <a href="https://codepen.io/bkirov/pen/VwKXeKj" target="_blank">
                Codepen
              </a>
            </li>
            <li>
              <a href="https://glitch.com/edit/#!/fluidigridy" target="_blank">
                Glitch
              </a>
            </li>
            <li>
              <a href="https://codepen.io/bkirov/pen/VwKXeKj" target="_blank">
                Github
              </a>
            </li>
          </ul>
        </div>
      </grid>

      <footer>
        <div className="grid">
          <div className="cs1 ce1">
            <Logo />
          </div>
          <div className="cs2 ce12">
            <Link href="https://boriskirov.cc">
              <a>@boriskirov</a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

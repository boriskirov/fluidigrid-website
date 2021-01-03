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

      <div className="grid">
        <div class="cs1 ce3 sticky">
          <h1>Fluidigrid</h1>
          <p>
            Fluidigrid is a simple and lightweight CSS helper for building quick
            and efficient layouts.
          </p>
          <a
            className="button-donwload"
            href="https://github.com/Fluiditype/Fluidigrid/archive/v1.0.1.tar.gz"
            target="_blank"
          >
            Download
          </a>
        </div>
        <ExampleGrid />
        <div className="cs5 ce12">
          <h3>Getting started</h3>
          <p>
            You can copy the{' '}
            <a href="github.com" target="_blank">
              raw
            </a>{' '}
            file and add it to your project.
          </p>
          <p>
            You can use the <a href="/generator">Fluidigrid Generator</a> to
            create your own naming convention for custom experience.
          </p>
        </div>
        <div className="cs5 ce12">
          <h3>Structure</h3>
          <p>
            Fluidigrid setup is simple, it is based on 12 column
            <code>grid-template-columns</code>. Each of the 12 cells are using
            the <code>fr </code>
            (fractional unit). When going belowe <code>1024px</code> the layout
            switches the <code>1fr</code>.
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
          <h3>How to use</h3>
          <p>
            You can create your own <code>grid</code> html element or add a
            class <code>.grid</code>
            to the wrapper you want to create the grid layout. Then you should
            declare start and values for each of your columns to create the
            layout. Fluidigrid comes with pre-declared naming convention, we use
            <code>cs[n]</code> for <code>column-start[value]</code> and{' '}
            <code>ce[n]</code> for <code>column-end-[value]</code>. For example
            if you want to declare a column which starts from the first to last
            column you will declare <code>cs1 ce12</code>.
          </p>
        </div>
        <div className="cs5 ce12">
          <h3>Easy to adapt</h3>
          <ul>
            <li>
              <p>2KB file</p>
            </li>
            <li>
              Change to <code>:root</code> values for customization
            </li>
            <li>
              <a href="css-generator">Fluidigrid Generator</a> to create your
              own naming convention for custom experience.
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
        <div className="cs5 ce12">
          <h3>Contributions</h3>
          <p>
            If you want you can always contribute and ask for more, this would
            help us create something more meaningful.
          </p>
        </div>
      </div>

      <footer>
        <div className="grid">
          <div className="cs1 ce1">
            <Logo />
          </div>
          <div className="cs2 ce12">
            <Link href="https://boriskirov.cc" target="_blank">
              <a>@boriskirov</a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

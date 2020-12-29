import Head from 'next/head'
import ExampleGrid from '../components/example'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fluidigrid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <grid>
        <div class="cs1 ce4 sticky">
            <h6>CSS Framework</h6>
            <h1>Fluidy-gridy</h1>
            <p>Fluidigridy is a simple and lightweight CSS grid system for constructing responsive and fluid layouts.</p>
            <button>Download</button>
            <a href="#">Examples</a>
        </div>
        <ExampleGrid/>
      </grid>

      <footer className={styles.footer}>
        footer
      </footer>
    </div>
  )
}

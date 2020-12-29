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
            <h1>Fluidigrid</h1>
            <p>Fluidigrid is a simple and lightweight CSS grid system for constructing responsive and fluid layouts.</p>
            <button>Download</button>
        </div>
        <ExampleGrid/>
        <div class="cs1 ce12 separator">
        </div>
        <div class="cs5 ce12">
          <h3>Structure</h3>
          <p>Let's skip the chitchat and get down to the nitty-gritty.The Fluidigrid setup is simple. It is based on 12 column grid-template-collumns, with the power of the <code>fr</code> (fractional) unit, which stands for 1 part of the available space. So you have <code>12fr</code> creating the 12 cells of the layout. </p>
        </div>
        <div class="cs1 ce12 separator">
        </div>
        <div class="cs5 ce12">
          <h3>How to use</h3>
          <p>You can either create a custom wrapper with name grid or add class name to your wrapper .grid. You should add a start and end class to each children element in order to create your layout. Use the cs<code>n</code> for defining the starting collumn-line of your of your item. Use ce<code>n</code> to define how many columns your item will span, or which column you define as an end line.</p>
        </div>
      </grid>

      <footer className={styles.footer}>
        footer
      </footer>
    </div>
  )
}

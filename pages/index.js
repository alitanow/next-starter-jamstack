import React from 'react'
import Head from 'next/head'

const Home = () => (
  <div>
  
        <Head>
        <title>Eat It Up - Records</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <h1>Eat It Up Music</h1>

    <h3>Welcome 🎉 - our brand new website <a href="https://rec.mastered.to/">mastered.to</a> is currently under construction.</h3>

    <style jsx>{`
      :global(html,body) {
        margin: 0;
        padding: 0;
        height: 100%;
      }

      :global(body) {
        font-size: calc(10px + 1vmin);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
          'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: #282c34;
        color: white;
      }

      a {
        color: pink;
        text-decoration: none;
      }

      .content {
        padding: 0 32px;
      }
    `}</style>
  </div>
)

export default Home

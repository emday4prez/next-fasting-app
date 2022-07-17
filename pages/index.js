import React, {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DatePicker from 'react-datepicker'
import Button from '../components/Button/index'
import 'react-datepicker/dist/react-datepicker.css'
export default function Home() {
  const [selectedDate, setSelectedDate] = useState(null)

  return (
    <div className={styles.container}>
      <Head>
        <title>Fasting App</title>
        <meta name="description" content="Intermittent fasting app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>



        <div className={styles.grid}>
        
        <h3>what date did you finish fasting?</h3>
          <DatePicker 
            selected={selectedDate} 
            onChange={date => setSelectedDate(date)}
            maxDate={new Date()}
            isClearable
            />
          <h3>how many hours did you fast?</h3>
          <input className="hoursInput" type="number" id="hours" name="hours" maxLength="3" minLength="1" required placeholder="12.75"/>

          <Button></Button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

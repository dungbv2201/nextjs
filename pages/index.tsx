import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import Card from "../components/cards/Card";

export type Post = {
  id: number;
  title: string;
  body:string;
}

export async function getServerSideProps() {
  let data: Post[] =[];
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  data = await res.json()
  return {
    props: {
      data: data.slice(0,9)
    }, // will be passed to the page component as props
  }
}

const Home: NextPage<{data: Post[]}> = ({data}) => {
  return (
    <>
      <Head>
        <title>Home page | Hello guys</title>
        <meta name="description" content="1212"></meta>
      </Head>
      <h1>Post list</h1>
      <div className='container mx-auto grid grid-cols-3 gap-4'>
        { data.map(({title, body, id}) => (
          <Card
            title={title}
            body={body}
            id={id}
            key={id}/>
        ))}
      </div>
    </>
  )
}

export default Home

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import homeStyles from '@/styles/Home.module.css'
import { useState } from 'react'
import { GetStaticProps } from 'next'
import { getAllImageId } from '@/lib/images'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home({allImage}: {
  allImage: {
    id: string
    fullPath: string
  }[]
}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <section>
        <h2>사진을 선택하세요</h2>
        <ul>
          {allImage.map(({id, fullPath}) => (
            <li key={id}>
              <Link href={`/pages/${id}`}>
                <div>{id}</div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export const getStaticProps : GetStaticProps = async () => {
  const allImage = getAllImageId()
  return {
    props: {
      allImage
    }
  }
}
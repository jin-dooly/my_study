import { getAllImageId, getImageUrl } from '@/lib/images'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

export default function ImagePage({imageData}: {imageData: {
  id: string
  fullPath : string
}}) {
  return (
    <div>
      <Head>
        <title>{imageData.id}</title>
      </Head>
      <article>
        <h1>file name : {imageData.id}</h1>
        <div>file path : {imageData.fullPath}</div>
        <Image
          src={imageData.fullPath}
          width={100}
          alt={imageData.id}
        ></Image>
      </article>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllImageId()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps : GetStaticProps =async ({params}) => {
  const imageData = await getImageUrl(params.id as string)
  return {
    props: {
      imageData
    }
  }
}
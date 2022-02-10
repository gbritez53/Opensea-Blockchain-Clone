import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Collection = () => {
  const { query } = useRouter()
  return (
    <div className="cursor-pointer">
      <Link href="/">
        <h2>{query.collectionId}</h2>
      </Link>
    </div>
  )
}

export default Collection

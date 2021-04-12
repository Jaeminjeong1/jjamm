import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>My name is Jaemin Jeong</h1>
	  <p>My  hobby is soccer</p>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}
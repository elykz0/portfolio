import Link from "next/link"

const Contact = () => {
  return (
    <div className=" flex flex-col">
      <div className=" py-64 text-9xl text-center justify-between">
          <div className="hover:text-accent">
              <Link href='mailto:kylez42908@gmail.com'>
                CONTACT ME!
              </Link>
          </div>
      </div>
    </div>
  )
}

export default Contact
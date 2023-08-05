import { useEffect } from 'react'
import useFresh from '../../hook/useFresh'
import { motion } from 'framer-motion'
import ListOfClaim from '../../components/admin/ListOfClaim'

export default function AdminClaims (): JSX.Element {
  const { claims, getClaimsData } = useFresh()
  useEffect(() => {
    getClaimsData()
  }, [])
  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl text-center font-bold mt-10">
          Blog de la página de{' '}
          <span className="text-[#FF0D48]">Fresquilla</span>
        </h2>
      </motion.header>
      <main className="w-full space-y-5 my-10">
        {claims.length > 0 &&
          claims.map(claim => (
            <ListOfClaim
              key={claim._id}
              claim={claim}
            />
          ))
        }
      </main>
    </>
  )
}

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lottie from 'lottie-react'
import useFresh from '../../hook/useFresh'
import ListOfClaim from '../../components/admin/ListOfClaim'
import animationData from '../../../public/animations/strawberrya.json'

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
        <AnimatePresence>
          {claims.length > 0
            ? claims.map(claim => (
              <ListOfClaim
                key={claim._id}
                claim={claim}
              />
            ))
            : <motion.section
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl text-center font-bold mt-10">
                <p className="text-xl text-center font-bold mt-10">
                  No tienes ninguna solicitud de <span className="text-[#FF0D48]">Reclamo</span> por el momento.
                </p>
                <Lottie
                  className="w-1/6 mx-auto"
                  animationData={animationData}
                />
              </motion.section>
          }
        </AnimatePresence>
      </main>
    </>
  )
}

import styles from '../style'
import React from 'react'
import { clients } from '../constants'

function Clients() {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter}sm:min-w-[192px] min-w-[120px]`}>
            <img src={client.logo} alt="client logo" className=" md:w-[192px] w-[100px] object-contain clients-logo"/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients
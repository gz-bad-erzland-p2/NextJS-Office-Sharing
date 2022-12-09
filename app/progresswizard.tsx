'use client'
import { useState } from "react"
import './global.css';

export default function ProgressWizard(props: any) {

  const prog = props.prog;
  const anzahl = props.anzahl;
  return (

    <div className="relative">
      <div className="w-full bg-o-gray rounded-full h-2.5 dark:bg-o-gray">
      <div className="bg-o-green-light h-2.5 rounded-full" style={{width: prog/anzahl*100 + "%"}}></div>
    </div>
    </div>
    
  )
}

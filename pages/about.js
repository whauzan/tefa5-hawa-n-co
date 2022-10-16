import React from 'react'
import CardBio from '../components/CardBio'
import Story from '../components/story'

export default function about() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2 text-brown-dark text-center mt-10">
      <h2 className="text-4xl font-Lora font-extrabold">ABOUT</h2>
      <h3>Our Story</h3>
    <Story/>
    <div className="flex flex-col items-center justify-center gap-y-2 text-brown-dark text-center mt-10">
        
        <h2 className="text-4xl font-Lora font-extrabold">TEAM</h2>
        <p>Descriptions</p>
        <div className="row-2 flex">
          <CardBio
            image={"/hawa.png"}
            name={"Wahyu"}
            desc={"This is a block of text to provide more information about this section and why you should click the button."}
          />
          <CardBio
            image={"/hawa.png"}
            name={"Haqila"}
            desc={"This is a block of text to provide more information about this section and why you should click the button."}
          />
          
        </div>
    </div>
    
      
      
    </div>
    
  

  )
}

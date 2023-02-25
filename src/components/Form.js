import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form name="contact" method="POST" data-netlify= "true" >
        <input type="hidden" name="form-name" value="contact" />
            <label> Your name</label>
            <input type="text" id="name" name="name" required></input>
            <label> Email</label>
            <input type="email" id="email" name="email" required></input>
            
            <label> Message</label>
            
            <textarea id="message" name="message" required rows="6" placeholder="Type your message here" />
            <button classname="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form
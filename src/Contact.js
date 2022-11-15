const Contact = () => {
      return ( 
              <div class="formContainer">
              <form action="https://formspree.io/f/mgedjrpd" method="POST">
               <div className="flexForm">
                <input id="name" name="name" type="text" placeholder="Your Name*" class="tm-input" required />
                <input id="number" name="number" type="text" placeholder="Phone Number" onkeypress="return restrictAlphabets(event)" class="tm-input"/>
               </div>
               <div className="flexForm2">
                <input id="email" name="email" type="email" placeholder="Your Email*" class="tm-input" required />
                <textarea id="message" name="message" rows="8" placeholder="Message*" class="tm-input" required></textarea>
               </div>
                <button type="submit" class="submitButton">Submit</button>
              </form>
            </div>

       );
  }
   
  export default Contact;
import './RegistrationForm.css';

function RegistrationForm() {

    return (



      <div class="RegistrationForm">

        <form>
            <label for="fname">First Name </label>
            <input type="text" id="fname" name="fname" value="FirstName" required></input>
            <br />
            <label for="email">Email </label>
            <input type="text" id="email" name="email" value="Email@domain.tld" required></input>
            <br />

        </form>
        
      </div>
    );
  
   }
   
   export default RegistrationForm;

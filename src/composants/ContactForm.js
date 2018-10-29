import React, { Component } from 'react';
import { TextField, Button, } from '@material-ui/core';
import './ContactForm.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';




const adress = () => {
  return 'hugo.trichard@yahoo.fr'
}

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#035913'
    }
  },
  //typography: { useNextVariants: true },
});




class ContactForm extends Component {
  constructor(props) {
    super(props)

    this.state = {value: ''}

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { value } = this.state
    const regex = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$");
    const isOk = regex.test(value)

    if(!isOk) {
      return false + alert("Veuillez entrer une adresse mail valide")
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

    

    render(){
      return(

        <div className="contact-form">
            <MuiThemeProvider theme={theme}>
                <form id="form" action={`//formspree.io/${adress()}`} method="POST">
                    <TextField
                        id="standard-with-placeholder"
                        label="Votre adresse mail"
                        placeholder="Votre adresse mail..."
                        className="text-field"
                        margin="normal"
                        type="email"
                        name="_replyto"
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Votre message"
                        multiline
                        rows="10"
                        placeholder="Votre message..."
                        className="text-field"
                        margin="normal"
                        variant="outlined"
                        name="message"
                    />
                    <TextField
                      className="hidden-input"
                      type="text" 
                      name="_gotcha" 
                    />
                    <TextField 
                      className="hidden-input" 
                      type="hidden" 
                      name="_subject" 
                      value="Website contact" 
                    />
                    <TextField 
                      className="hidden-input" 
                      type="hidden" 
                      name="_next" 
                      value="contact/merci"
                    />
                    <Button variant="outlined" className="button" type="submit" value="send">
                      Envoyer
                    </Button>
                </form>
            </MuiThemeProvider>
          
          </div>
      )
      
        
    }
}

export default ContactForm;


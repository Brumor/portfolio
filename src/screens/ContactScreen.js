import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ContactScreen extends React.Component {

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="contactContainer">
        <div >
          <h2>Find me on:</h2>
          <div className="socialContainer">
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" className="logo linkedinLogo"  onClick={() => { window.open("https://www.linkedin.com/in/paul-bricout-428974104/")}}/>
            <FontAwesomeIcon icon={['fab', 'github-alt']} size="3x" className="logo" onClick={() => { window.open("https://github.com/Brumor")}}/>
          </div>

        </div>
        <h2>...Or send me a mail !</h2>
        <form  method="POST" action="https://formspree.io/paulbricout2@gmail.com">
                      <div>
                          <div>
                              <input type="text" name="name" placeholder="Your Name"/>
                          </div>
                          <div class="col-md-6">
                              <input type="text" name="_subject" placeholder="Subject"/>
                          </div>
                      </div>
                      <div >
                          <div >
                              <input type="text" name="_replyto" placeholder="Email"/>
                          </div>

                      </div>
                      <div >
                          <div>

                              <textarea name="message" rows="5" placeholder="Message"></textarea>
                          </div>

                      </div>
                      <button type="submit" className="sendMailButton" >Submit</button>

        </form>
      </div>
    );
  }
}

import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const linkedinURL = 'https://www.linkedin.com/in/paul-bricout-428974104/';
const githubURL = 'https://github.com/Brumor';

export default class ContactScreen extends React.Component {
  render() {
    return (
      <div className="contact-container" id="contact">
        <div >
          <h2>Find me on:</h2>
          <div className="social-container">
            <FontAwesomeIcon
              icon={['fab', 'linkedin']}
              size="3x"
              className="logo linkedin-logo"
              onClick={() => window.open(linkedinURL)}/>
            <FontAwesomeIcon
              icon={['fab', 'github-alt']}
              size="3x"
              className="logo"
              onClick={() => window.open(githubURL)}/>
          </div>

        </div>
        <h2>...Or send me a mail !</h2>
        <form
          method="POST"
          action="https://formspree.io/paulbricout2@gmail.com">
          <div>
            <div>
              <input type="text" name="name" placeholder="Your Name"/>
            </div>
            <div className="col-md-6">
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

              <textarea name="message" rows="5" placeholder="Message">

              </textarea>
            </div>
          </div>
          <button type="submit" className="send-mail-button" >Submit</button>
        </form>
      </div>
    );
  }
}

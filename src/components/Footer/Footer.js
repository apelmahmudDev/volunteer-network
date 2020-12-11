import React from 'react';
import './Footer.css';
import logo from '../../images/volunteer-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

	const styles = {
        icon: {
            height:'1.5em',
            width:'1.5em'
        },
    };
    
    const links = [
        {
            icon: <FontAwesomeIcon icon={faFacebook} style={styles.icon} />,
            link: 'https://web.facebook.com/apelmahmudDev/'
        },
        {
            icon: <FontAwesomeIcon icon={faLinkedin} style={styles.icon} />,
            link: 'https://www.linkedin.com/in/apelmahmuddev/'
        },
        {
            icon: <FontAwesomeIcon icon={faTwitter} style={styles.icon} />,
            link: 'https://twitter.com/apelmahmudDev'
        },
        {
            icon: <FontAwesomeIcon icon={faInstagram} style={styles.icon} />,
            link: 'https://www.instagram.com/apelmahmuddev/'
        },
        {
            icon: <FontAwesomeIcon icon={faYoutube} style={styles.icon} />,
            link: 'youtube'
        }
    ]

    const posts = [
        {
            link: 'blank',
            date: 'October 19, 2020',
            title: 'Peaceful Coexistence Through Civic Education'
        },
        {
            link: 'blank',
            date: 'October 19, 2020',
            title: 'Peaceful Coexistence Through Civic Education'
        },
        {
            link: 'blank',
            date: 'October 19, 2020',
            title: 'Peaceful Coexistence Through Civic Education'
        }
    ]

	return (
		<footer>
			<div className="footer-top">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-3 first-column">
                            <img src={logo} alt="v-logo" className="w-75 img-fluid mb-3" />
                            <p>“Volunteer for Bangladesh” has been providing the youth of
                                Bangladesh a voice and platform to contribute to nation building.</p>
                        </div>
                        <div className="col-md-3 second-column">
                            <h5 className="text-uppercase font-weight-normal text-white mb-4">Newsletter</h5>
                            <p>Enter your email and you will get the latest news and events updates about us</p>
                            <form>
                                <input type="email" className="form-control" placeholder="Your Email address" required/>
                                <button className="btn btn-warning text-uppercase mt-3" style={{color:'black'}}>Sign Up</button>
                            </form>

                        </div>
                        <div className="col-md-3 third-column">
                            <h5 className="text-uppercase font-weight-normal text-white mb-4">Recents Post</h5>
                            <ul className="list-unstyled">
                                {
                                    posts.map((post, index) => <li key={index}>
                                        <a href={post.link} className="text-warning text-decoration-none">{post.title}</a>
                                        <p>{post.date}</p>     
                                    </li>)
                                }
                            </ul>
                        </div>
                        <div className="col-md-2">
                        <h5 className="text-uppercase font-weight-normal text-white mb-4">Follow Us</h5>
                            <ul className="list-unstyled d-flex justify-content-between">
                                {
                                    links.map((link, index) => <li key={index}>
                                        <a href={link.link} target="_blank" rel='noreferrer noopener' className="text-warning text-decoration-none">
                                        {link.icon}
                                        </a>
                                    </li>)
                                }
                            </ul>
                        </div>
                    </div>
                    {/* <p>All rights reserved- {new Date().getFullYear()} | Developed by Apel Mahmud</p> */}
                </div>
            </div>
            <div className="footer-bottom pb-1 pt-4">
                <p className="text-uppercase py-2">
                    {new Date().getFullYear()} &copy; All rights reserved. Made with 💛 By <span className="text-warning">Apel Mahmud</span>
                </p>
            </div>
		</footer>
	);
};

export default Footer;

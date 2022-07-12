import React from 'react'
import './about.css'
// import ME from '../../assets/fani.jpg'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                <div className="about__me-img">
                     <img src={ME} alt="About Me"></img>
                </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'> 
                            <FaAward  className='about__icon'/>
                            <h5>Experience</h5>
                            <small>5+ Years Working</small>
                        </article>

                        <article className='about__card'> 
                            <FiUsers  className='about__icon'/>
                            <h5>Clients</h5>
                            <small>100+ Worldwide</small>
                        </article>

                        <article className='about__card'> 
                            <VscFolderLibrary  className='about__icon'/>
                            <h5>Projects</h5>
                            <small>20+ Completed</small>
                        </article>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse facere, dolorum placeat fugit cumque nisi ducimus eaque labore quam, praesentium harum quo, ut saepe assumenda velit sit enim! Quia.
                    </p>

                    <a href="#contact" className='btn btn-primary'> Let's Talk</a>
                   
                </div>
            </div>


        </section>
    )
}

export default About

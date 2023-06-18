import '../styles/styles.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import SKILLS from "../Mock/skills.json"
import JOBS from '../Mock/jobs.json'
import STUDIES from '../Mock/studies.json'
import { CarouselCard } from '../Components/CarouselCard';
import { useState } from 'react';
// import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import Timeline from '../Components/Univers/timeline'
import { CSSTransition, } from 'react-transition-group';
import slideTransition from "../Transitions/slide.module.css";
import { ProjectSection } from '../Components/Project';
import { Colab } from '../Components/Colab';

export const Recruteur= (props) =>{
    const [skill, setSkill]= useState(null)
    const [isCompOpen, setCompOpen]= useState(false)
    const birth = new Date('March 07, 1999');
    const currentDate   = new Date()
    const age = currentDate.getFullYear() - birth.getFullYear()  
    return ( 
          <div>
              {/* Timeline */}
              <section ref={props.refProp4a} className="container">
                  <span className="background-2"></span>
                  <div className="flex-wrapper column center">
                      <h1>Mes expériences</h1>
                      <span className="underline"></span>
                  </div>
                  


              </section>
              {/* FORMATIONS */}
              <section ref={props.refProp4b} className="container">
                  <span className="background-2"></span>
                  <div className="flex-wrapper column center">
                      <h1>Mes formations</h1>
                      <span className="underline"></span>
                  </div>
                  {/* <Timeline lineColor={'#ddd'}>
                      {STUDIES.map((job, i) => <TimelineItem
                                dateInnerStyle={{ backgroundColor: i%2 === 0 ? '#e86971' : '#2C3545' }}
                                key={i}
                                dateText={job.date}
                                style={{ color: i%2 === 0 ? '#e86971' : '#2C3545'}}
                            >
                                <h3 style={{ color: '#e86971'}}>{job.title}</h3>
                                <h4>{job.subtitle}</h4>
                                <p>{job.description}</p>
                            </TimelineItem>
                      )}
                  </Timeline> */}
              </section>
              {/* CONTACT */}
              <section ref={props.refProp5} className="contact-container">
                  <span className="background-3"></span>
                  <div className="contact">
                      <div className="note">
                          <div>
                              <div className="row">
                                  <img className="icon" src="/DungeonOfAsun/Assets/Phone.png" alt="Tel"/>
                                  <p>Téléphone</p>
                              </div>
                              <p className="data">07 81 48 47 35</p>
                          </div>
                          <div>
                              <div className="row">
                                  <img className="icon" src="/DungeonOfAsun/Assets/mail.png" alt="Mail"/>
                                  <p>Email</p>
                              </div>
                              <p className="data">laurent.vltn@gmail.com</p>
                          </div>
                          <div>
                              <div className="row">
                                  <img className="icon" src="/DungeonOfAsun/Assets/Pins.png" alt="Pins"/>
                                  <p>Localisation</p>
                              </div>
                              <p className="data">17300, Rochefort</p>
                          </div>
                      </div>
                  </div>
              </section>
          </div>)
}
const contact = {
    flexDirection: 'row',
     display: 'flex',
     justifyContent: 'space-around',
     alignItems: 'center',
}
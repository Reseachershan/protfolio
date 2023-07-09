import React from 'react'
import { industries } from '../Json/web'
import { useNavigate } from 'react-router-dom';

const Industries = () => {
  const navigate = useNavigate();

  return (
    <div id="skills" style={{ boxShadow: '0 1px 2px -2px var(--light)' }}>
      <section id='industries-we-serve' className='industries container pb-5 pt-5'>
        <div className='row'>
          <div className='col-4'>
            <div className="css-cc8cfy">
            <h4 className="css-1auulg9">Skills</h4>
              <p style={{fontSize:"16px"}} className='ms-0 ps-0'>
                Happy to work on open source projects, make algorithms, and help
                programmers on StackOverflow.
              </p>
            </div>
          </div>
          <div className='col-8'>
            <div className="css-hd33gx">
              <h3 className='mb-5'>Mobile Apps</h3>
              <ul className="css-1d7uo79">
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">
                      Mobile - Frameworks &amp; Libraries
                    </h4>
                    <p className="css-n6780q">React Native, Expo, Android, IOS</p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">
                      Languages
                    </h4>
                    <p className="css-n6780q">JavaScript, Typescript, Swift, ObjectiveC, Java, Kotlin, HTML, CSS</p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">
                      Mobile App security
                    </h4>
                    <p className="css-n6780q">Javascript obfuscation, Java obfuscation, Certificate SSL pinning, Jailbreak/Root
                      detection, Secure Envs files through c++ and encryption, Anti-tampering measures, App Check for
                      preventing backend apis abuse.</p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">
                      Components
                    </h4>
                    <p className="css-n6780q">Class_base, Functional_components and Styled_components</p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">
                      State Management
                    </h4>
                    <p className="css-n6780q">Redux, MobX, Classes, Recoil, jotai, zustand &amp; React Context API</p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">
                      Networking
                    </h4>
                    <p className="css-n6780q">Rest APIs, GraphQL, Firebase APIs, Socket.io, SignalR, PubNub</p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">
                      Google Map
                    </h4>
                    <p className="css-n6780q">Places Auto Complete, Geocoding, Geolocation, Directions</p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">
                      Chat App
                    </h4>
                    <p className="css-n6780q">Socket.io, SignalR, Firebase, Twilio</p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">
                      Audio/Video
                    </h4>
                    <p className="css-n6780q">Calling/Streaming: Agore.io, Twilio &amp; WebRTC</p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">
                      Notifications
                    </h4>
                    <p className="css-n6780q">Firebase, Apns, OneSignal &amp; PubNub</p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">
                      Analytics
                    </h4>
                    <p className="css-n6780q">Google Crash Analytics, Firebase, Sentry &amp; branch.io</p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">
                      Campaign tools
                    </h4>
                    <p className="css-n6780q">Appboy, Clevertap</p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">
                      Search
                    </h4>
                    <p className="css-n6780q">Elastic Search, Typesense, Algolia</p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">
                      In-App Ads
                    </h4>
                    <p className="css-n6780q">Google AdMob, Facebook Ads</p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">
                      Social Logins
                    </h4>
                    <p className="css-n6780q">Facebook, Google, Instagram, Apple login</p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">
                      Layout Animations
                    </h4>
                    <p className="css-n6780q">react-native-reanimted, react-native-skia, react-native-interactible</p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">
                      Performance Improvement
                    </h4>
                    <p className="css-n6780q">Turbo Module, Fabric renderer, JSI, Virtualization, Profiling, Flashlist, memo and
                      useMemo, Performance monitoring through flipper plugins </p>
                  </div>
                </li>

              </ul>
              <h4 className="css-1auulg9 mb-3">Web, Backend &amp; Others</h4>
              <ul className="css-1d7uo79">
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">
                      Website
                    </h4>
                    <p className="css-n6780q">
                      React Js, NextJS, React Remix
                    </p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">
                      Back-end - Node.js frameworks &amp; libraries
                    </h4>
                    <p className="css-n6780q">
                      Node js, Express, Puppeteer, Socket.IO, ASP WCF, Php
                    </p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">Databases</h4>
                    <p className="css-n6780q">MongoDB, MySQL, MSSQL, SQLite, Postgresql, Redis</p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">Query languages</h4>
                    <p className="css-n6780q">SQL, MongoDB Queries, GraphQL</p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">
                      Programming/Markup/Stylesheet/Notation languages
                    </h4>
                    <p className="css-n6780q">
                      Javascript [ES5, ES6, ES7, ES8] (Browser and Node.js),
                      TypeScript, PHP, JSON, JSX
                    </p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">
                      Preprocessors/Static type checkers
                    </h4>
                    <p className="css-n6780q">Flow, SASS, LESS</p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">
                      Front-end- Frameworks &amp; Libraries
                    </h4>
                    <p className="css-n6780q">
                      React, Redux, Ant design, jQuery, Axios, Lodash, Bootstrap,
                      Styled components
                    </p>
                  </div>
                </li>

                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">Linting/Code Quality Tool</h4>
                    <p className="css-n6780q">Eslint, JSLint, Standard JS</p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">Prototyping</h4>
                    <p className="css-n6780q">Figma, Zeplin, Adobe XD, Sketch</p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">Version control</h4>
                    <p className="css-n6780q">GIT, SVN, CVS</p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">Test tools</h4>
                    <p className="css-n6780q">Jest, Mocha, Chai</p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">CMS</h4>
                    <p className="css-n6780q">
                      WordPress (plugins, themes and widgets)
                    </p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">Dependency managers</h4>
                    <p className="css-n6780q">
                      Composer, Yarn, Npm, Bower, Make own custom package manager
                    </p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">
                      Module bundlers &amp; Task runners
                    </h4>
                    <p className="css-n6780q">Webpack, Metro</p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">Work/Deployment environment</h4>
                    <p className="css-n6780q">
                      Docker, kubernetes, Heroku, Digital Ocean, Linode, Generic
                      shared hosts, Vps Window server, Aws ubuntu instance,
                      Firebase
                    </p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">Touched with</h4>
                    <p className="css-n6780q">
                      Javascript , IOS(swift) , Android , MongoDB , AWS , Docker ,
                      destroy the structure of frameworks , Find
                      loophole/vulnerability in coding level, next to move in
                      protocol level or physical layer
                    </p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">New Intrests</h4>
                    <p className="css-n6780q">
                      Ecosystem building, Problem-solving, Protocols, Hacks,
                      Algorithms
                    </p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">Left technologies</h4>
                    <p className="css-n6780q">
                      Php (wordpress, laravel, codeignitor), ASP .Net and MVC, C#
                      window Forum, Unity, R Language, Android, java, scala,
                      C/C++, Sql Injections
                    </p>
                  </div>
                </li>
                <li className="css-13qvviv">
                  <div>
                    <h4 className="css-1auulg9">Others</h4>
                    <p className="css-n6780q">
                      Babel, Storybook, REST, MVC, ORM, OOP, AWS (S3), Functional
                      programming, SOLID, Natural Language Processing, Scrum,
                      Continuous Integration, Continuous Delivery, Progressive web
                      apps, Performance, Usability, Accessibility, SEO, Terraform
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Industries
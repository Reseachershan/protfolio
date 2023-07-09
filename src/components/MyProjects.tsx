import React, { useState, useEffect } from 'react'
import { web, app } from '../Json/web'
import { Modal } from 'react-bootstrap-v5';
//@ts-ignore
import Cone from '../assets/cone.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from 'swiper/react';
// Import Swiper styles
import "swiper/css";

interface Features {
  name: string
  description: string
}
interface Projects {
  name: string
  image: string
  url: string
  description: string
  features: Features[]
  screen: string[]
  mobile_screen: string[]
}


function MyProjects() {
  const [tect, setTect] = useState('web')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isScreenImage, setIsScreenImage] = useState(false)
  const [slide, setSlide] = useState(0)
  const [screenImage, setScreenImage] = useState()
  const [project, setProject] = useState<Projects>()
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleCloseImageModal = () => {
    setIsScreenImage(false)
  }

  const handleProject = (value: any) => {
    if (Boolean(value?.screen)) {
      setSlide(0)
      setProject(value)
      setIsModalOpen(true)
    }
  }

  const handleFullScreenImage = (value: any) => {
    setIsScreenImage(true)
    setScreenImage(value)
  }

  const SwiperButtonNext = ({ children }: { children: any }) => {
    const swiper = useSwiper();
    return <button className="d-flex justify-content-center align-items-center position-absolute translate-middle" style={{ zIndex: 1000, right: 0, top: 30, border: 'none', backgroundColor: 'black', borderRadius: '50%', height: '30px', width: '30px', cursor: 'pointer' }} onClick={() => { swiper.slidePrev() }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-left text-white fw-bolder" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
    </svg>
    </button>
  };

  const SwiperButtonBack = ({ children }: { children: any }) => {
    const swiper = useSwiper();
    return <button className="d-flex justify-content-center align-items-center position-absolute translate-middle" style={{ zIndex: 1000, right: 0, top: 70, border: 'none', backgroundColor: 'black', borderRadius: '50%', height: '30px', width: '30px', cursor: 'pointer' }} onClick={() => { swiper.slideNext() }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-right text-white fw-bolder" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
    </svg>
    </button>
  };

  //@ts-ignore
  const imageForSmallerScreen = tect == 'app' ? 'md' : 'lg'
  let pro = Boolean(tect === 'web' && windowSize[0] < 550) ? project?.mobile_screen : project?.screen

  return (
    <>
    
    <div id='Experience' style={{ boxShadow: '0 1px 2px -2px var(--light)' }} >
      <section id='my-projects' className='my-projects container mb-5 mt-5'>
        <div className="css-1ozmpdx">
          <div className="css-f77afh row">
            <div className="css-cc8cfy col-md-4">
              <h3 className="css-4kozmy">Experience</h3>
              <p className="css-1vdxwoa">
                I already had the opportunity to work on awesome companies with
                awesome people.
              </p>
            </div>
            <div className="css-hd33gx col-md-8">
              <ul className="css-1d7uo79">
                <li className="css-13qvviv d-flex">
                  <img style={{ width: "50px", height: '50px', borderRadius: '100%' }} src="https://plus.unsplash.com/premium_photo-1668473365948-8a92c2d1fa78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" alt=">Senior Mobile App Engineer + Full Stack Software Engineer<span className=" draggable="false" width="60" height="60" className="css-1lir6di me-2" />
                  <div>
                    <h4 className="css-1auulg9">
                      Senior Mobile App Engineer + Full Stack Software Engineer<span className="css-15474bk">Ninja</span>
                    </h4>
                    <p className="css-qkdgad">Jan, 2022 - Present</p>
                    <p className="css-n6780q">
                      Worked on React Native · JavaScript · Node.js · React.js.
                      <br />
                      Ninja: Order groceries via our app and in 30 minutes we'll deliver your shopping right to your door.
                    </p>
                  </div>
                </li>
                <li className="css-13qvviv d-flex">
                  <img style={{ width: "50px", height: '50px', borderRadius: '100%' }} src="https://plus.unsplash.com/premium_photo-1668473365948-8a92c2d1fa78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" alt=">Full Stack Software Engineer<span className=" draggable="false" width="60" height="60" className="css-1lir6di me-2" />
                  <div>
                    <h4 className="css-1auulg9">
                      Senior Mobile App Engineer + Full Stack Software Engineer<span className="css-15474bk">Shobbak</span>
                    </h4>
                    <p className="css-qkdgad">Jan, 2022 - Present</p>
                    <p className="css-n6780q">
                      Worked on Socket.io, React Native, JavaScript, Node.js and React.js.
                      <br />
                      - Shobbak: Shobbak app is an online flea market from KSA. This app provides an open space to sell all
                      kinds of goods,
                      new or used.
                    </p>
                  </div>
                </li>
                <li className="css-13qvviv d-flex">
                  <img style={{ width: "50px", height: '50px', borderRadius: '100%' }} src="https://plus.unsplash.com/premium_photo-1668473365948-8a92c2d1fa78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" alt=">Full Stack Software Engineer<span className=" draggable="false" width="60" height="60" className="css-1lir6di me-2" />
                  <div>
                    <h4 className="css-1auulg9">
                      Senior Mobile App Engineer + Full Stack Software Engineer<span className="css-15474bk">The
                        Entertainer</span>
                    </h4>
                    <p className="css-qkdgad">Sep, 2019 - Jan, 2022</p>
                    <p className="css-n6780q">
                      Worked on React Native, React js portal. Node js based
                      backend, Node js based CLI, and deployments. Worked on One X
                      Plateform (App Builder) make apps (PWA, Expo, Expokit)
                      through combining module) from the portal.
                    </p>
                  </div>
                </li>
                <li className="css-13qvviv d-flex">
                  <img style={{ width: "50px", height: '50px', borderRadius: '100%' }} src="https://plus.unsplash.com/premium_photo-1668473365948-8a92c2d1fa78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" alt=">Full Stack Software Engineer<span className=" draggable="false" width="60" height="60" className="css-1lir6di me-2" />
                  <div>
                    <h4 className="css-1auulg9">
                      Mobile App Engineer + Full Stack Software Engineer<span className="css-15474bk">Dynamic Logix</span>
                    </h4>
                    <p className="css-qkdgad">Aug, 2017 - Aug 2019</p>
                    <p className="css-n6780q">
                      Worked on React Native, React js, Node js. Mostly worked on
                      the US All payments through (Plaid, Dwolla)
                    </p>
                  </div>
                </li>
                <li className="css-13qvviv d-flex">
                  <img style={{ width: "50px", height: '50px', borderRadius: '100%' }} src="https://plus.unsplash.com/premium_photo-1668473365948-8a92c2d1fa78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" alt="Full Stack Software Engineer" draggable="false" width="60" height="60" className="css-1lir6di me-2" />
                  <div>
                    <h4 className="css-1auulg9">
                      Mobile App Engineer + Full Stack Software Engineer<span className="css-15474bk">Upwork</span>
                    </h4>
                    <p className="css-qkdgad">Jan, 2017 - Dec, 2017</p>
                    <p className="css-n6780q">
                      Worked on React Native, React js, Node js.
                    </p>
                  </div>
                </li>
                <li className="css-13qvviv d-flex">
                  <img style={{ width: "50px", height: '50px', borderRadius: '100%' }} src="https://plus.unsplash.com/premium_photo-1668473365948-8a92c2d1fa78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" alt="Full Stack Software Engineer" draggable="false" width="60" height="60" className="css-1lir6di me-2" />
                  <div>
                    <h4 className="css-1auulg9">
                      Mobile App Engineer + Full Stack Software Engineer<span className="css-15474bk">Fiverr</span>
                    </h4>
                    <p className="css-qkdgad">Jan, 2017 - Dec, 2017</p>
                    <p className="css-n6780q">
                      Worked on React Native, React js, Node js.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Modal contentClassName='overflow-lg-hidden overflow-auto h-100' onHide={handleCloseModal} centered size='lg' fullscreen='lg-down' show={isModalOpen}>
          <div className='position-relative d-lg-flex d-none flex-lg-column flex-row w-100 h-100 overflow-hidden p-0' style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className='position-relative d-lg-flex d-none' style={{ width: '61%', maxHeight: '510px', height: '100%', zIndex: '11' }}>
              <img className='d-lg-flex d-none w-100 h-100' style={{ objectFit: 'cover', objectPosition: 'center' }} src={Cone} />
              <div className='position-absolute top-0 start-0 bottom-0 end-0 d-flex flex-column justify-content-center'>
                <h3 className='fw-bolder pt-2 text-capitalize mb-0 pb-2 ps-5' style={{ fontSize: '3rem', color: 'var(--light)' }}>{project?.name}</h3>
                <div className='ps-5 py-2'>
                  <hr className='m-0' style={{ backgroundColor: 'var(--light)', width: '100px', height: '5px' }} />
                </div>
                <p className='mb-0 mb-0 p-5 pb-0 pt-0' style={{ color: 'var(--light)' }}>{project && project.description ? project.description.length > 400 ? project?.description.slice(0, 400) + '...' : project.description : 'Google LLC is an American multinational technology company focusing on search engine technology, online advertising, cloud computing, computer software, quantum computing, e-commerce, artificial intelligence, and consumer electronics.'}</p>
                <div className='position-absolute p-5 bottom-0'>
                  <button onClick={() => handleFullScreenImage(project?.screen[slide])} style={{ backgroundColor: 'var(--yellow)', color: '(var(--dark))', fontSize: '1rem', borderRadius: '40rem', width: '140px', height: '40px' }}>Learn more</button>
                </div>
              </div>
            </div>
            <div className='position-absolute' style={{ width: '57%', top: '0px', right: '0px', bottom: '0px', zIndex: '1', maxHeight: '510px', height: '100%', }}>
              {/* @ts-ignore */}
              <div className='d-flex position-relative h-100 w-100'>
                <Swiper
                  loop={true}
                >
                  {project?.screen && project?.screen?.length > 1 && <>
                    <SwiperButtonNext>Slide</SwiperButtonNext>
                    <SwiperButtonBack>Slide</SwiperButtonBack>
                  </>}
                  {
                    project?.screen.map((item) => {
                      return (
                        <SwiperSlide>
                          <div className='position-relative d-flex justify-content-center align-items-center image-slide h-100 w-100 bg-white'>
                            {tect == 'web' ? <div className='ps-5'>
                              <img
                                onClick={() => handleFullScreenImage(item)}
                                className="w-100 h-100 overflow-hidden"
                                src={item}
                                style={{ objectFit: 'cover', cursor: 'pointer', }}
                              />
                            </div> : <img
                              onClick={() => handleFullScreenImage(item)}
                              className="w-100 h-100 overflow-hidden"
                              src={item}
                              style={{ objectFit: 'cover', cursor: 'pointer', }}
                            />}
                          </div>
                        </SwiperSlide>
                      )
                    })
                  }
                </Swiper>
              </div>
            </div>
          </div>
          <div className='d-lg-none d-block' style={{ overflowX: 'hidden', overflowY: 'auto' }}>
            <button className='btn position-absolute d-flex justify-content-between align-items-center' style={{ top: "3px", right: "10px", zIndex: 11, backgroundColor: 'black', borderRadius: '100%', padding: '10px' }} onClick={() => handleCloseModal()}>
              <svg width='10' height='10' viewBox="0 0 511.058 511.058" xmlns="http://www.w3.org/2000/svg"><g><path fill='white' d="m511.058 60.811-60.811-60.811-194.718 194.718-194.718-194.718-60.811 60.811 194.718 194.718-194.718 194.718 60.811 60.811 194.718-194.718 194.718 194.718 60.811-60.811-194.718-194.718z"></path></g></svg>
            </button>
            <div>
              {
                Boolean(project && project?.screen) &&
                <div className='row'>
                  <div style={{ backgroundColor: 'var(--dark)' }} className={`${Boolean(project?.features?.length) ? 'col-lg-5' : 'col-12'} col-12`}>
                    <h3 className='fw-bolder pt-2 text-capitalize mb-0 pb-2 ps-5' style={{ fontSize: '3rem', color: 'var(--light)' }}>{project?.name}</h3>
                    <div className='ps-5 py-2'>
                      <hr className='m-0' style={{ backgroundColor: 'var(--light)', width: '100px', height: '5px' }} />
                    </div>
                    <p className='mb-0 mb-0 p-5 pb-0 pt-0' style={{ color: 'var(--light)' }}>{project && project.description ? project?.description : 'Google LLC is an American multinational technology company focusing on search engine technology, online advertising, cloud computing, computer software, quantum computing, e-commerce, artificial intelligence, and consumer electronics.'}</p>
                    <div className='ps-5 py-2'>
                      <button onClick={() => handleFullScreenImage(project?.screen[slide])} style={{ backgroundColor: 'var(--yellow)', color: '(var(--dark))', fontSize: '1rem', borderRadius: '40rem', width: '140px', height: '40px' }}>Learn more</button>
                    </div>
                  </div>
                  <div className={`${Boolean(project?.features?.length) ? 'col-lg-5' : 'col-12'} col-12`}>
                    <div className='d-flex position-relative overflow-hidden' style={{ height: '100%', width: '100%' }}>
                      <Swiper
                        loop={true}
                      >
                        {pro && pro.length > 1 && <>
                          <SwiperButtonNext>Slide</SwiperButtonNext>
                          <SwiperButtonBack>Slide</SwiperButtonBack>
                        </>
                        }
                        {
                          pro?.map((item: any) => {
                            return (
                              <SwiperSlide>
                                <div className='position-relative image-slider w-100 h-100' style={{ width: '100%' }}>
                                  <img
                                    onClick={() => handleFullScreenImage(item)}
                                    className="w-100 h-100"
                                    src={item}
                                    style={{ objectFit: 'cover' }}
                                  />
                                </div>
                              </SwiperSlide>
                            )
                          })
                        }
                      </Swiper>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </Modal>

        {/* @ts-ignore */}
        <Modal contentClassName='overflow-auto p-0' onHide={handleCloseImageModal} size={imageForSmallerScreen} fullscreen={imageForSmallerScreen + '-down'} show={isScreenImage}>
          <div className={tect == 'app' ? 'full-image-modal' : 'full-image-modal-app'} style={{ width: '100%', maxWidth: '1200px', overflowY: 'auto', overflowX: 'hidden' }}>
            <button className='btn position-absolute d-flex justify-content-between align-items-center' style={{ top: "10px", right: "10px", zIndex: 11, backgroundColor: 'black', borderRadius: '100%', padding: '10px' }} onClick={() => handleCloseImageModal()}>
              <svg width='15' height='15' viewBox="0 0 511.058 511.058" xmlns="http://www.w3.org/2000/svg"><g><path fill='white' d="m511.058 60.811-60.811-60.811-194.718 194.718-194.718-194.718-60.811 60.811 194.718 194.718-194.718 194.718 60.811 60.811 194.718-194.718 194.718 194.718 60.811-60.811-194.718-194.718z"></path></g></svg>
            </button>
            <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
              <img
                className='w-100 h-100 overflow-auto'
                src={screenImage}
                style={{ objectFit: 'cover', maxHeight: '600px', maxWidth: '600px' }}
              />
            </div>
          </div>
        </Modal>
      </section>
    </div>
    <Couse/>
    <Portfolio />
    </>
  )
}

const Couse = () => {
  return (
    <div id="Courses" className='d-flex justify-content-center align-items-center' style={{ boxShadow: '0 1px 2px -2px var(--light)' }}>
    <div className="css-f77afh row mt-5 container" >
      <div className="css-cc8cfy col-4 ">
        <h3 className="css-4kozmy">Courses</h3>
        <p className="css-1vdxwoa">
          now I am learning every day. I try to learn something new every
          single day.
        </p>
      </div>
      <div className="css-hd33gx col-8">
        <ul className="css-1d7uo79">
          <li className="css-13qvviv">
            <div>
              <h4 className="css-1auulg9">
                Bachelor of Computer Science<span className="css-15474bk">Comsats University</span>
              </h4>
              <p className="css-qkdgad">2014 - 2018</p>
            </div>
          </li>
          <li className="css-13qvviv">
            <div>
              <h4 className="css-1auulg9">
                ICS<span className="css-15474bk">Superior College</span>
              </h4>
              <p className="css-qkdgad">2012 - 2014</p>
            </div>
          </li>
          <li className="css-13qvviv">
            <div>
              <h4 className="css-1auulg9">
                Matric<span className="css-15474bk">Superior School</span>
              </h4>
              <p className="css-qkdgad">2010 - 2012</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}

const Portfolio = () => {
  return (
    <div id="Portfolio" className='pb-5 d-flex justify-content-center align-items-center'>
    <div className="css-f77afh row mt-5 container" >
      <div className="css-cc8cfy col-md-4">
        <h3 className="css-4kozmy">Portfolio</h3>
        <p className="css-1vdxwoa">
        Most of my work runs on closed environments, or under NDA (confidentiality agreement). So I can not show most of the projects I worked on. But here, I'm showing some of the public projects. Apps list are too much longer,so I am just sharing some of it.
        </p>
      </div>
      <div className="css-hd33gx col-md-8" style={{ boxShadow: '0 1px 2px -2px var(--light)' }}>
        <ul className="css-1d7uo79">
        <li className="css-qtedj8 d-md-flex ">
              <a href="#_" id="portfolio-theentertainer" className="css-q7v5bu"><img src="	https://numan.dev/images/theentertainer.png" alt="Jimbo" style={{maxWidth:'270px',margin:'0 auto'}} className="css-1jmq36u" /></a>
              <div className="css-b9do0y ms-3">
                <a style={{textDecoration:'none', color:'#3333ff'}} href="https://www.theentertainerme.com/" target="_blank" className="css-1259ouq">
                  <h4 className="css-1k45bwb">The ENTERTAINE‪R</h4>
                </a>
                <div className='d-flex flex-column'>

                <a style={{textDecoration:'none', color:'#3333ff', fontSize:"12px"}} href="https://play.google.com/store/apps/details?id=com.theentertainerme.entertainer" target="_blank" className="css-1259ouq">
                  ANDROID
                </a>
                <a style={{textDecoration:'none',color:'#3333ff', fontSize:"12px"}} href="https://apps.apple.com/pk/app/the-entertainer/id702813714" target="_blank" className="css-1259ouq">
                  IOS
                </a>
                </div>
                <p className="css-1wiofhw">
                  The ENTERTAINER is the moneysaving app that’s packed with
                  the 2-for-1 offers everyone wants.
                </p>
                <ul className="css-1d7uo79">
                  <li className="css-n9lewo">Javascript</li>
                  <li className="css-n9lewo">React Native</li>
                  <li className="css-n9lewo">React</li>
                  <li className="css-n9lewo">Redux</li>
                  <li className="css-n9lewo">Braze</li>
                  <li className="css-n9lewo">JNI</li>
                  <li className="css-n9lewo">Localization</li>
                  <li className="css-n9lewo">Theme</li>
                  <li className="css-n9lewo">react-native-reanimted</li>
                  <li className="css-n9lewo">react-native-interactible</li>
                </ul>
              </div>
            </li>
         
        </ul>
      </div>
    </div>
    </div>
  )
}

export default MyProjects

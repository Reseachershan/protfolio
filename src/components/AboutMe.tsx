import React from 'react';

function AboutMe() {

  const onDownload2 = () => {
    fetch("../../testFile.docx").then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "resume.docx";
        a.click();
      });
    });
  };


  return (
    <section id='home' style={{ boxShadow: '0 1px 2px -2px var(--light)' }} className='about-me position-relative mb-0 mt-5 pb-5'>
      <div className='container' style={{ zIndex: 2 }}>
        <div className='row'>
          <div className='col-lg-3 d-flex justify-content-center'>
            <div style={{ width: '200px', height: '200px', borderRadius: '100%', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" style={{ objectFit: 'cover', height: '100%', width: '100%' }} alt="Profile" />
            </div>
          </div>
          <div className='col-lg-9'>
            <h2 className='text-start'>I am Numan</h2>
            <p className='mb-0 text-start'>
              I'm a <strong>Software Engineer</strong> located in Lahore,
              Pakistan. passionate developer, the main focus on
              <b>React Native (Mobile App Development)</b>, <b>React JS (Website Development)</b>, and <b>Node.js
                (Restful
                APIs and CLI building)</b> with over 5+ years of experience. I help people on <strong>Stack Overflow (22k+
                  reputation)</strong>
              and have made many <strong>open-source</strong> packages on Git/npm.
            </p>
            <div className='mt-5'>
              <div className='d-flex'>
                <dt className="css-1m6anh9" style={{ width: '100px' }}>PHONE:</dt>
                <dd className="css-1wvklo8 ms-2">
                  <a href="tel:+923429555558" style={{ textDecoration: 'none', color: 'black' }}>+923429555558</a>
                </dd>
              </div>
              <div className='d-flex'>
                <dt className="css-1m6anh9" style={{ width: '100px' }}>EMAIL:</dt>
                <dd className="css-1wvklo8 ms-2">
                  <a href="mailto:muhammadnuman70@gmail.com" style={{ textDecoration: 'none', color: 'black' }}>muhammadnuman70@gmail.com</a>
                </dd>
              </div>
              <div className='d-flex'>
                <dt className="css-1m6anh9" style={{ width: '100px' }}>WEBSITE:</dt>
                <dd className="css-1wvklo8 ms-2">
                  <a href="https://numan.dev" style={{ textDecoration: 'none', color: 'black' }}>https://numan.dev</a>
                </dd>
              </div>
              <div className='d-flex'>
                <dt className="css-1m6anh9" style={{ width: '100px' }}>ADDRESS:</dt>
                <dd className="css-1wvklo8 ms-2">
                  <a href="https://maps.google.com/?q=Okara, Pakistan" style={{ textDecoration: 'none', color: 'black' }}>Okara, Pakistan</a>
                </dd>
              </div>
              <div className='mt-3'>
                <button className="newButton" onClick={() => onDownload2()} style={{ color: '#3333ff', textDecoration: 'none' }}>Download Resume</button>
                <a className="newButton" style={{ background: '#3333ff', color: 'white', textDecoration: 'none', marginLeft: '1rem' }} href="mailto:muhammadnuman70@gmail.com">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

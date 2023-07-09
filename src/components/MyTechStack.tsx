import React from 'react'
import { techStack } from '../Json/web'

function MyTechStack() {
  return (
    <div id="Profiles" style={{ boxShadow: '0 1px 2px -2px var(--light)' }} className='pb-5'>
      <section id='my-tech' className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <h3 className="css-4kozmy">Profiles</h3>
            <p className="css-1vdxwoa">
              Happy to work on open source projects, make algorithms, and help
              programmers on StackOverflow.
            </p>
          </div>
          <div className='col-md-8'>
            <div className="css-hd33gx">
              <ul className="css-1d7uo79">
                <li className="css-13qvviv">
                  <div id="profileMarkdown" style={{ width: "100%" }}><table>
                    <thead>
                      <tr>
                        <th>Plateform</th>
                        <th>Progress</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                      <td><a style={{textDecoration:'none', color:'black'}} href="https://github.com/numandev1"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" width="40" /> <span>Github<span> </span></span></a></td>
                      <td><a style={{textDecoration:'none', color:'black'}} href="https://github.com/numandev1"><img src="https://img.shields.io/github/followers/numandev1.svg?style=for-the-badge&amp;logo=github&amp;logoColor=white&amp;maxAge=2592000" alt="GitHub Repo stars" /></a></td>
                    </tr>
                      <tr>
                        <td><a style={{textDecoration:'none', color:'black'}} href="https://stackoverflow.com/users/8079868/muhammad-numan?tab=profile"><img src="https://pbs.twimg.com/profile_images/1220067947798024192/30eZhfxx_400x400.png" width="40" /> <span>Stackoverflow<span> </span></span></a></td>
                        <td><a style={{textDecoration:'none', color:'black'}} href="https://stackoverflow.com/users/8079868/muhammad-numan?tab=profile"><img src="https://img.shields.io/stackexchange/stackoverflow/r/8079868?label=StackOverFlow&amp;logo=stackoverflow&amp;style=for-the-badge" alt="GitHub Repo stars" /></a></td>
                      </tr>
                      <tr>
                        <td><a style={{textDecoration:'none', color:'black'}} href="https://www.linkedin.com/in/numandev/"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="40" /> <span>Linkedin<span> </span></span></a></td>
                        <td><a style={{textDecoration:'none', color:'black'}} href="https://www.linkedin.com/in/numandev/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&amp;logo=linkedin&amp;logoColor=white" alt="GitHub Repo stars" /></a></td>
                      </tr>
                      <tr>
                        <td><a style={{textDecoration:'none', color:'black'}} href="https://www.youtube.com/@numandev?sub_confirmation=1"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png" width="40" /> <span>Youtube<span> </span></span></a></td>
                        <td><a style={{textDecoration:'none', color:'black'}} href="https://www.youtube.com/@numandev?sub_confirmation=1"><img src="https://img.shields.io/youtube/channel/subscribers/UCYCUspfN7ZevgCj3W5GlFAw?style=social" height="36" /></a><a></a></td>
                      </tr>
                      <tr>
                        <td><a style={{textDecoration:'none', color:'black'}} href="https://www.tiktok.com/@numandev"><img src="https://seeklogo.com//images/T/tiktok-app-icon-logo-0F5AD7AE01-seeklogo.com.png" width="40" /> <span>TikTok<span> </span></span></a></td>
                        <td><a style={{textDecoration:'none', color:'black'}} href="https://www.tiktok.com/@numandev"><img src="https://img.shields.io/static/v1?style=for-the-badge&amp;message=TikTok&amp;color=000000&amp;logo=TikTok&amp;logoColor=FFFFFF&amp;label=" height="36" /></a><a></a></td>
                      </tr>
                      <tr>
                        <td><a style={{textDecoration:'none', color:'black'}} href="https://dev.to/numandev1"><img src="https://d2fltix0v2e0sb.cloudfront.net/dev-black.png" width="40" /> <span>Dev.to<span> </span></span></a></td>
                        <td><a style={{textDecoration:'none', color:'black'}} href="https://dev.to/numandev1"><img src="https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&amp;logo=devdotto&amp;logoColor=white" alt="GitHub Repo stars" /></a></td>
                      </tr>
                      <tr>
                        <td><a style={{textDecoration:'none', color:'black'}} href="https://www.instagram.com/numandev1"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" width="40" /> <span>Instagram<span> </span></span></a></td>
                        <td><a style={{textDecoration:'none', color:'black'}} href="https://www.instagram.com/numandev1"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&amp;logo=instagram&amp;logoColor=white" alt="GitHub Repo stars" /></a></td>
                      </tr>
                      <tr>
                        <td><a style={{textDecoration:'none', color:'black'}} href="https://www.facebook.com/numandev1"><img src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202110facebooklogosocialsocialmedia-115707_115594.png" width="40" /> <span>Facebook Page<span> </span></span></a></td>
                        <td><a style={{textDecoration:'none', color:'black'}} href="https://www.facebook.com/numandev1"><img src="https://img.shields.io/badge/Facebook-%231877F2.svg?style=for-the-badge&amp;logo=Facebook&amp;logoColor=white" alt="GitHub Repo stars" /></a></td>
                      </tr>
                      <tr>
                        <td><a style={{textDecoration:'none', color:'black'}} href="https://twitter.com/numandev1"><img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" width="40" /> <span>Twitter<span> </span></span></a></td>
                        <td><a style={{textDecoration:'none', color:'black'}} href="https://twitter.com/numandev1"><img src="https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&amp;logo=Twitter&amp;logoColor=white" alt="GitHub Repo stars" /></a></td>
                      </tr>
                    </tbody>
                  </table>
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

export default MyTechStack
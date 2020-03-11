import React from 'react';

class Comments extends React.Component {
  render() {
    return (
        <div id="Comments" className="section-part comments">
          <div className="comments-form">
            <div className="comments-input">
              <input placeholder="Write your comment..."/>
            </div>
          </div>
          <div className="upload">+ Upload image</div>
          <h6><b>46 comments</b></h6>

          <div className="list-comments">

            <div>
              <div className="donation-box-comments">
                <div>
                  <div className="name-day-comment">
                    <b className="name-author-comments">Adam Smith</b>
                    <span className="day">Oct 29 16:47</span><br/>
                    <span className="sms-comments">Very good job!</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="donation-box-comments upl-comments">
                <div>
                  <div className="name-day-comment upl-name">
                    <b className="name-author-comments">Andrew Ralphen-Sow</b>
                    <span className="day">Oct 29 16:47</span><br/>
                    <img id="upl" src="assest/upload-img.png"/>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="donation-box-comments">
                <div>
                  <div className="name-day-comment">
                    <b className="name-author-comments">Andrew Ralphen-Sow</b>
                    <span className="day">Oct 29 16:47</span><br/>
                    <span className="sms-comments">Lets get together!!!</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="donation-box-comments">
                <div>
                  <div className="name-day-comment">
                    <b className="name-author-comments">Elisabeth Jefferson</b>
                    <span className="day">Oct 29 16:47</span><br/>
                    <span className="sms-comments">Our city need this changes! I gave donated 50$ and will tell my friend to participate in this campaigns too</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="donation-box-comments">
                <div>
                  <div className="name-day-comment">
                    <b className="name-author-comments">Adam Smith</b>
                    <span className="day">Oct 29 16:47</span><br/>
                    <span className="sms-comments">Very good job!</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="donation-box-comments">
                <div>
                  <div className="name-day-comment">
                    <b className="name-author-comments">James Stewart</b>
                    <span className="day">Oct 29 16:47</span><br/>
                    <span className="sms-comments">I am glad that some foundation is trying to make our city more beautiful</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="donation-box-comments">
                <div>
                  <div className="name-day-comment">
                    <b className="name-author-comments">Andrew Ralphen-Sow</b>
                    <span className="day">Oct 29 16:47</span><br/>
                    <span className="sms-comments">Lets get together!!!</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="donation-box-comments">
                <div>
                  <div className="name-day-comment">
                    <b className="name-author-comments">Anna Jefferson</b>
                    <span className="day">Oct 29 16:47</span><br/>Name
                    <span className="sms-comments">Our city need this changes! I gave donated 50$ and will tell my friend to participate in this campaigns too</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="load">Load more comments</div>
        </div>

    )
  }

};

export default Comments;

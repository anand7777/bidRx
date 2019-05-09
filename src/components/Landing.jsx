import React  from 'react'
import '../styles/carousel.css'
import patient from '../images/patient.png';
import pharmacy from '../images/pharmacy.png';
import pharma from '../images/pharma.png';
import MenuAppBar from './MenuAppBar.jsx';


const Landing = () => {

    return (
      <React.Fragment>
          <MenuAppBar />

          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
              <img src={patient} className="carousel-img" />
                <div className="container">
                  <div className="carousel-caption text-left">
                    <h1>Consumers</h1>
                    <p>Paying out of pocket for medications shouldn't place you at a disadvantage.  There are over 65,000 pharmacies across the United States - let them compete for your business.</p>
                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pharmacy} className="carousel-img" />
                <div className="container">
                  <div className="carousel-caption">
                    <h1>Pharmacies</h1>
                    <p>BidRx is a platform where pharmacies can connect with people that need medications.</p>
                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pharma} className="carousel-img" />
                <div className="container">
                  <div className="carousel-caption text-right">
                    <h1>Pharma</h1>
                    <p>Help lower costs for everyone - even those that pay out of pocket.</p>
                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn More</a></p>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

          <div className="container marketing">

          {/* <!-- Three columns of text below the carousel --> */}
            <div className="row">
              <div className="col-lg-4">
                <img src="https://bit.ly/fcc-relaxing-cat" className="marketing-image" />
                <h2>Patients</h2>
                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
              </div>
              <div className="col-lg-4">
                <img src="https://bit.ly/fcc-relaxing-cat" className="marketing-image" />
                <h2>Pharmacies</h2>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
              </div>
              <div className="col-lg-4">
                <img src="https://bit.ly/fcc-relaxing-cat" className="marketing-image" />
                <h2>Pharma</h2>
                <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
              </div>
            </div>
          </div>
      </React.Fragment>
    )
}

export default Landing;


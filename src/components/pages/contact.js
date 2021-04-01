var contact = React.createClass({
    render: function() {
      return (
  
        <div className="container">
          <div className="row">
            {/*Heading*/}
            <div className="col-md-6 col-6">
              <h1>Contact me</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 contact-text">
              <strong> Esteban Meza </strong>
              <br />
              estebandmeza@gmail.com
              <br />
              (614) 886-0920
              <p>
                <br />
                Columbus, Oh 43202
              </p>
            </div>
            <div className="col-md-6 col-lg-6 send-image">
              <a href="mailto: estebandmeza@gmail.com"><img src="https://i.pinimg.com/originals/98/64/9a/98649add72e05e3cc1b8ae0e6f553c8e.gif" alt="" /></a>
            </div>
          </div>
        </div>
      );
    }
  });
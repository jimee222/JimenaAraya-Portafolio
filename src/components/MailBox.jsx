export default function MailBox() {
  return (
    <>
      <style>{`
        body {
          background: #323641;
        }

        .letter-image {
          position: relative;
          top: 50%;
          left: 50%;
          width: 200px;
          height: 200px;
          transform: translate(-50%, -50%);
          -webkit-transform: translate(-50%, -50%);
          -moz-transform: translate(-50%, -50%);
          cursor: pointer;
        }

        .animated-mail {
          position: absolute;
          height: 150px;
          width: 200px;
          transition: .4s;
          -webkit-transition: .4s;
          -moz-transition: .4s;
        }

        .animated-mail .body {
          position: absolute;
          bottom: 0;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 0 100px 200px;
          border-color: transparent transparent #440eae transparent;
          z-index: 2;
        }

        .animated-mail .top-fold {
          position: absolute;
          top: 50px;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 50px 100px 0 100px;
          transform-origin: 50% 0%;
          -webkit-transform-origin: 50% 0%;
          -moz-transform-origin: 50% 0%;
          transition: transform .4s .4s, z-index .2s .4s;
          -webkit-transition: transform .4s .4s, z-index .2s .4s;
          -moz-transition: transform .4s .4s, z-index .2s .4s;
          border-color: #5112cc transparent transparent transparent;
          z-index: 2;
        }

        .animated-mail .back-fold {
          position: absolute;
          bottom: 0;
          width: 200px;
          height: 100px;
          background: #370a91;
          z-index: 0;
        }

        .animated-mail .left-fold {
          position: absolute;
          bottom: 0;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 50px 0 50px 100px;
          border-color: transparent transparent transparent #370a91;
          z-index: 2;
        }

        .animated-mail .letter {
          left: 20px;
          bottom: 0;
          position: absolute;
          width: 160px;
          height: 60px;
          background: #ffffff;
          z-index: 1;
          overflow: hidden;
          transition: .4s .2s;
          -webkit-transition: .4s .2s;
          -moz-transition: .4s .2s;
        }

        .animated-mail .letter .letter-border {
          height: 10px;
          width: 100%;
          background: repeating-linear-gradient(
            -45deg,
            #5e17eb,
            #5e17eb 8px,
            transparent 8px,
            transparent 18px
          );
        }

        .animated-mail .letter .letter-title {
          margin-top: 10px;
          margin-left: 5px;
          height: 10px;
          width: 40%;
          background: #5e17eb;
        }

        .animated-mail .letter .letter-context {
          margin-top: 10px;
          margin-left: 5px;
          height: 10px;
          width: 20%;
          background: #5e17eb;
        }

        .animated-mail .letter .letter-stamp {
          margin-top: 30px;
          margin-left: 120px;
          border-radius: 100%;
          height: 30px;
          width: 30px;
          background: #5e17eb;
          opacity: 0.3;
        }

        .shadow {
          position: absolute;
          top: 200px;
          left: 50%;
          width: 400px;
          height: 30px;
          transform: translateX(-50%);
          -webkit-transform: translateX(-50%);
          -moz-transform: translateX(-50%);
          transition: .4s;
          -webkit-transition: .4s;
          -moz-transition: .4s;
          border-radius: 100%;
          background: radial-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.0), rgba(0,0,0,0.0));
        }

        .letter-image:hover .animated-mail {
          transform: translateY(50px);
          -webkit-transform: translateY(50px);
          -moz-transform: translateY(50px);
        }

        .letter-image:hover .animated-mail .top-fold {
          transition: transform .4s, z-index .2s;
          -webkit-transition: transform .4s, z-index .2s;
          -moz-transition: transform .4s, z-index .2s;
          transform: rotateX(180deg);
          -webkit-transform: rotateX(180deg);
          -moz-transform: rotateX(180deg);
          z-index: 0;
        }

        .letter-image:hover .animated-mail .letter {
          height: 180px;
        }

        .letter-image:hover .shadow {
          width: 250px;
        }
      `}</style>

      <div className="letter-image">
        <div className="animated-mail">
          <div className="back-fold"></div>
          <div className="letter">
            <div className="letter-border"></div>
            <div className="letter-title"></div>
            <div className="letter-context"></div>
            <div className="letter-stamp">
              <div className="letter-stamp-inner"></div>
            </div>
          </div>
          <div className="top-fold"></div>
          <div className="body"></div>
          <div className="left-fold"></div>
        </div>
        <div className="shadow"></div>
      </div>
    </>
  );
}

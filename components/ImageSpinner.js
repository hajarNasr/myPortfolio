import React from "react";
const ImageSpinner = () => (
  <div className="image-spinner">
    <div className="bounce1"></div>
    <div className="bounce2"></div>
    <div className="bounce3"></div>
    <style jsx>{`
      /* code source https://tobiasahlin.com/spinkit/ */
      .lazy-image-wrapper {
        position: relative;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .image-spinner {
        width: 70px;
        text-align: center;
      }

      .image-spinner > div {
        width: 12px;
        height: 12px;
        background-color: #8b979b;
        border-radius: 100%;
        display: inline-block;
        -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
        animation: sk-bouncedelay 1.4s infinite ease-in-out both;
      }

      .image-spinner .bounce1 {
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
      }

      .image-spinner .bounce2 {
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
      }

      @-webkit-keyframes sk-bouncedelay {
        0%,
        80%,
        100% {
          -webkit-transform: scale(0);
        }
        40% {
          -webkit-transform: scale(1);
        }
      }

      @keyframes sk-bouncedelay {
        0%,
        80%,
        100% {
          -webkit-transform: scale(0);
          transform: scale(0);
        }
        40% {
          -webkit-transform: scale(1);
          transform: scale(1);
        }
      }
    `}</style>
  </div>
);

export default ImageSpinner;

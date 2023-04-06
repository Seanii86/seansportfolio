import React, { useEffect } from "react";
import videojs from "video.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "video.js/dist/video-js.min.css";
import './index.scss'
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const VideoModal = ({ content, video, closeModal }) => {
    const videoRef = React.useRef();
  
    useEffect(() => {
      if (video) {
        const player = videojs(videoRef.current, {
          controls: true,
          autoplay: true,
          preload: "auto",
        });
        return () => {
          player.dispose();
        };
      }
    }, [video]);
  
    return (
      <div className="video-modal">
        <div className="video-modal-content">
          <button className="close" onClick={closeModal}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          {video && (
            <div data-vjs-player>
              <video ref={videoRef} className="video-js vjs-default-skin">
                <source src={video} type="video/mp4" />
              </video>
            </div>
          )}
        </div>
      </div>
    );
};
export default VideoModal;
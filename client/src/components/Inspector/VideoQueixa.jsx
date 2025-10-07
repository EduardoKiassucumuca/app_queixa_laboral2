import React from 'react';

const VideoQueixa = () => {
  // Substitua pela URL do seu vídeo
  const videoUrl = "/videos/sua-queixa.mp4";

  return (
    <div className="media-viewer" >
      <div className="video-container">
        <video 
          controls 
          className="video-player"
          width={650}
          height={350}
        >
          <source src={videoUrl} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
    </div>
  );
};

export default VideoQueixa;
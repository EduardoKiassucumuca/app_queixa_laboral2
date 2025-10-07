import React from 'react';

const AudioQueixa = () => {
  // Substitua pela URL do seu áudio
  const audioUrl = "/audios/sua-queixa.mp3";

  return (
    <div className="media-viewer">
      <div className="audio-container">
        <audio 
            controls 
            className="audio-player"
            width={650}
        >
          <source src={audioUrl} type="audio/mp3" />
          Seu navegador não suporta o elemento de áudio.
        </audio>
      </div>
    </div>
  );
};

export default AudioQueixa;
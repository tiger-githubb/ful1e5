import React from "react";
import { ReadmeImg, Text } from "./common";

export interface Props {
  cover?: string;
  track: string;
  artist: string;
  progress: number;
  duration: number;
  isPlaying: boolean;
}

export const Player: React.FC<Props> = ({
  cover,
  track,
  artist,
  progress,
  duration,
  isPlaying,
}) => {
  const trackEllipsis =
    track?.length > 30 ? track.substring(0, 30 - 3) + "..." : track;
  const artistEllipsis =
    artist?.length > 50 ? artist.substring(0, 50 - 3) + "..." : artist;
  return (
    <ReadmeImg width="540" height="130">
      <style>
        {`
            .paused { 
              animation-play-state: paused !important;
              background: #e1e4e8 !important;
            }
            
            img {
              border-radius: 60px;
              z-index: 2;
            }

            p {
              color: #E1E4E8;
              display: block;
              opacity: 0;
            }

            .progress-bar {
              position: relative;
              width: 100%;
              height: 4px;
              margin: -1px;
              border: 0.1px solid #4f4f4f;
              border-radius: 4px;
              overflow: hidden;
              padding: 2px;
              padding-right: 30px
              z-index: 0;
            }

            #progress {
              position: absolute;
              top: -1px;
              left: 0;
              width: 100%;
              height: 6px;
              transform-origin: left center;
              background-color: #1DB954;
              animation: progress ${duration}ms linear;
              animation-delay: -${progress}ms;
            }
            
            .progress-bar,
            #track,
            #artist,
            #cover {
              opacity: 0;
              animation: appear 300ms ease-out forwards;
            }

            #track {
              animation-delay: 400ms;
            }
            #artist {
              animation-delay: 500ms;
            }
            .progress-bar {
              animation-delay: 550ms;
              margin-top: 4px;
            }

            #wrapper {
              position: relative;
            }

            #blurred {
              position: absolute;
              z-index: 0;
              filter: blur(50px);
              
            }

            #cover {
              z-index: 1;
              position: relative;
              animation-name: cover-appear;
              animation-delay: 300ms;
              box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 3px 10px rgba(0,0,0,0.05);
            }

            #cover:not([src]) {
              box-shadow: none;
            }

            @keyframes cover-appear {
              from {
                opacity: 0;
                transform: scale(0.8);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }

            @keyframes appear {
              from {
                opacity: 0;
                transform: translateX(-8px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @keyframes progress {
              from {
                transform: scaleX(0)
              }
              to {
                transform: scaleX(1)
              }
            }
        `}
      </style>
      <div
        className={isPlaying ? "disabled" : ""}
        style={{
          marginLeft:15,
          display: "flex",
          alignItems: "center",
          paddingTop: 20,
          paddingBottom: 20,
          paddingLeft: 40,
          paddingRight: 40,
          background: "#222222",
          width: "500px",
          borderRadius: "14px",
          overflow: "hidden",
          boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
      >
        <div id="wrapper">
          <img
            id="blurred"
            src={cover ?? undefined}
            height="60px"
            width="auto"
          />
          <img id="cover" src={cover ?? undefined} height="60px" width="auto" />
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            marginTop: -4,
            marginLeft: 35,
          }}
        >
          <Text
            id="artist"
            color={!artist ? "white" : undefined}
            weight="black"
            size="small"
          >
            {artist ? artistEllipsis.toUpperCase() : ""}
          </Text>
          <Text id="track" weight="bold" size={track ? "large" : "larger"}>
            {track ? trackEllipsis : "       Nothing playing..."}
          </Text>
          {track && (
            <div className="progress-bar">
              <div id="progress" className={!isPlaying ? "paused" : ""} />
            </div>
          )}
        </div>
      </div>
    </ReadmeImg>
  );
};

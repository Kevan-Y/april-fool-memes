import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";

export default function Home(): JSX.Element {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (progress === 100) {
      axios.get("/api/memes").then((response) => {
        setUrl(response.data.url);
      });
    }
  }, [progress]);

  const playProgress = () => {
    setProgress(0);
    const audio = new Audio(
      "https://www.myinstants.com/media/sounds/cat-transcendence-limitless_mp3cut.mp3"
    );
    audio.play();
    if (progress === 0) {
      setInterval(() => {
        setProgress((oldProgress) => {
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 275);
    }
  };

  return (
    <>
      <Head>
        <title>This is not a fake Web</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container">
        {progress === 0 || progress === 100 ? null : (
          <>
            <h1>Hacking Nasa . . .</h1>
            <LinearProgress variant="determinate" value={progress} />
          </>
        )}
        {progress === 100 ? <h3>Data retrieved from Nasa</h3> : null}

        {url && progress == 100 ? (
          <img src={url} className="img img-thumbnail"></img>
        ) : null}
        <div className={progress === 0 ? `main_center` : "main"}>
          <Button
            type="button"
            className="button"
            onClick={playProgress}
            disabled={!(progress == 100 || progress == 0)}
          >
            Click Me plz!
          </Button>
        </div>
      </div>
    </>
  );
}

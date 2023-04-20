import { useState } from 'react';
import playIconBlack from '../../../../public/assets/images/playIconBlack.png';
import classes from './index.module.css';
import Image from 'next/image';
import useWindowSize from '@/hooks/useWindowSize';

interface VideoBlockProps {
    url: string;
}
  

const Video: React.FC<VideoBlockProps> = ({ url }) => {
    const [ isPlaying, setIsPlaying ] = useState(false);
    const { width } = useWindowSize();
    const handlePlayButtonClick = () => {
      setIsPlaying(true);
    };
    
    return (
        <div className={classes.videoContainer} style={Boolean(!isPlaying && Number(width) > 1024) ? { paddingBottom: '100%' }: {}}>
          {isPlaying ? (
            <video src={url} autoPlay muted className={classes.video} />
          ) : (
            <div className={classes.videoOverlay} onClick={handlePlayButtonClick}>
                <Image
                    src="/assets/images/playIconBlack.png"
                    alt="play"
                    className={classes.playIcon}
                    priority
                    width={9999}
                    height={9999}
                />
            </div>
          )}
        </div>
    );
};

export { Video }
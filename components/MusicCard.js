import React,{useContext} from 'react'
// import {AiFillGithub, AiOutlineLink} from 'react-icons/ai'
import {Context} from 'config/Context'
// import moment from 'moment'
import NextImage from 'next/image'
import {FiExternalLink} from 'react-icons/fi'

function MusicCard() {  
  const {data} = useContext(Context);
  console.log(data);
//   const convertRelativeTime = (date) => {
//     return moment(date).fromNow();
//   }
  return (
        <>
        {
            data.map((music, index) => (
                <a href={music.Link} target="_blank" rel="noopener" aria-label={music.Name} className="music-card" key={index}>
                    <div className="music-card-container">
                            <NextImage
                            src={music.Image[0].thumbnails.full.url}
                            alt={music.Name}
                            width="64"
                            height="64"
                            objectFit="cover"
                            loading="lazy"
                            quality={50}
                            className="music-x"
                            />
                        <div className="music-card-info">
                                <h3 className="music-name">{music.Name}</h3>
                                <span className="music-artist">{music.Description}</span>
                        </div>
                        <FiExternalLink color="#fff" size={30} />
                    </div>
                </a>
            ))
        }
        </>
    )
}


export default MusicCard

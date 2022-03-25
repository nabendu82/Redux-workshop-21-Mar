import React from 'react'
import './MovieCard.css'

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const MovieCard = (props) => {
    const { data } = props
    return (
        <div className="card-item">
            <div className="card-inner">
                <div className="card-top">
                    <img src={IMGPATH + data.poster_path} alt={data.title} />
                </div>
                <div className="card-bottom">
                    <div className="card-info">
                        <h4>{data.title}</h4>
                        <p>{data.release_date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
import Popular from './Popular'
import New from './New'

function Video(props) {
    return (
        <div className="item item-video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
};
export default Popular(New(Video));
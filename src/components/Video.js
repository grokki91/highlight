import wrapperView from "./wrapperView";

function Video(props) {

    return (
        <div className="item item-video">
            <iframe src={props.url} allow="autoplay; encrypted-media" allowFullScreen title={props.url}></iframe>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
};

export default wrapperView(Video);
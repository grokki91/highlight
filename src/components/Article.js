import wrapperView from "./wrapperView";

function Article(props) {
    return (
        <div className="item item-article">
            <h3><a href={props.url}>{props.title}</a></h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    )
};

export default wrapperView(Article);
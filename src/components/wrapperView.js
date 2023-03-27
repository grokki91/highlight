import New from "./New";
import Popular from "./Popular";

function wrapperView(Component) {
    return function(props) {
        if (props.views > 1000) {
            return Popular(Component);
        } else if (props.views < 100) {
            return New(Component);
        }
    }
}

export default wrapperView;
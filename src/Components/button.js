import '../styles/styles.css';

export const Button= (props) => {
    return (
        <div className={`button-${props.type}`}>
            <p className="desc">{props.children}</p>
        </div>
    )
}
import '../styles/styles.css';

export const Button= (props) => {
    return (
        <div className={`button-${props.type}`}>
            <p style={{width:'100%'}}>{props.children}</p>
        </div>
    )
}
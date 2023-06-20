import classes from './ErrorComponent.module.css'

const ErrorComponent = props => {

    let text;

    if(props.error.statusCode === 404){
      text = `Sorry, we don't have that`
    } else{
        text = `Sorry! we can't get your search results for some reason.`
    }
    return <section className={classes.errorSection}>
        <div className={classes.errorText}>{text}</div>
    </section>
}

export default ErrorComponent;
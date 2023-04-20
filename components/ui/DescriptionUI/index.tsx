import classNames from 'classnames';
import classes from './index.module.css'

interface Iprops {
    text: string;
    size?: number;
}

const DescriptionUI: React.FC<Iprops> = ({
    text
}) => {
    const styles = classNames(
        classes.descriptionUI
    )
    return (
        <p className={classes.descriptionUI}>
            {text}
        </p>
    )
}
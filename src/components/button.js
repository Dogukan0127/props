import className from "classnames";

function Button({ text, variant }) {

    return (
        <button className={className({
            "buton": true,
            "red": variant == "red",
            "blue": variant == "blue",
            "green": variant == "green",
            "yellow": variant == "yellow"
        })
        }>{text}</button>
    )
}

export default Button
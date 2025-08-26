interface IButtonProps {
    name: string
}

const YellowButton = ({ name }: IButtonProps) => {
    return (
        <button className="btn btn__yellow">
            {name}
        </button>
    )
}


const YellowBorderButton = ({ name }: IButtonProps) => {
    return (
        <button className="btn btn__yellow-border">
            {name}
        </button>
    )
}

export { YellowButton, YellowBorderButton }
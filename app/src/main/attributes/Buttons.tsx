interface IButtonProps {
    name: string,
    onClick?: (<T>(params?: T) => void);
}

const YellowButton = ({ name, onClick }: IButtonProps) => {
    return (
        <button className="btn btn__yellow" onClick={() => onClick ? onClick() : ''}>
            {name}
        </button>
    )
}


const YellowBorderButton = ({ name, onClick }: IButtonProps) => {
    return (
        <button className="btn btn__yellow-border" onClick={() => onClick ? onClick() : ''}>
            {name}
        </button>
    )
}

export { YellowButton, YellowBorderButton }
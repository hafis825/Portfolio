const FormattedDate = ({ isHighLight, children }) => {
    return (
        <div>
            <span className="text-sm font-bold">
                {children}
            </span>
        </div>
    )
}

export default FormattedDate;
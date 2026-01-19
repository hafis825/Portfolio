const FormattedDate = ({ isHighLight, children }) => {
    return (
        <div>
            <span className="text-sm font-semibold">
                {children}
            </span>
        </div>
    )
}

export default FormattedDate;


const InputNavBar = () => {
    return (
        <>
        <div>

            <h1 className="h1">Flexible Search Box</h1>

            <div className="flexsearch">
                <div className="flexsearch--wrapper">
                    <form className="flexsearch--form" action="/products" method="get">
                        <div className="flexsearch--input-wrapper">
                            <input className="flexsearch--input" type="search" placeholder="search"/>
                        </div>
                        <input className="flexsearch--submit" type="submit" value="&#10140;" />
                    </form>
                </div>
            </div>
        </div>

        </>
    )
}

export default InputNavBar;
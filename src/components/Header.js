function Header(props){
    
    return <header>
        <h2>Shopster</h2>
        <button onClick={props.cb}>
            {props.isDarkMode ? "Dark" : "Light"} Mode
        </button>
    </header>
}

export default Header;
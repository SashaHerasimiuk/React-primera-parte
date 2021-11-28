import '../../Styles/Components/Layout/Header.css'


const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <div classsName="logo">
                    <img src="img/logo.png" wdith="100" alt="Transportes X" />
                    <h1>Transportes X</h1>
                </div>
            </div>
        </header>
    );
}

export default Header;
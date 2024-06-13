import './Home.css';

export const Home = () => {

    return (
        <div className="Container">
            <div className="Header">Welcome to Invent!</div>
            <div className="Content">
                <span>Click on the Users button above to see a list of users.</span>
                <span>Click on the Home button above to return to this page.</span>
            </div>
        </div>
    );
}
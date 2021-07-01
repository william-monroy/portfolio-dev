import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';
import {useState, useEffect} from 'react';
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    desktopPortfolio,
    contentPortfolio
} from '../../data'

const Portfolio = () => {

    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])

    const list = [
        {
            id: 'featured',
            title: 'Featured',
        },
        {
            id: 'web',
            title: 'Web App',
        },
        {
            id: 'mobile',
            title: 'Mobile App',
        },
        {
            id: 'desktop',
            title: 'Desktop App',
        },
        {
            id: 'content',
            title: 'Content',
        },
    ];

    useEffect(() => {
        
        switch (selected) {
            case "featured":
                setData(featuredPortfolio)
                break;
            case "web":
                setData(webPortfolio)
                break;
            case "mobile":
                setData(mobilePortfolio)
                break;
            case "desktop":
                setData(desktopPortfolio)
                break;
            case "content":
                setData(contentPortfolio)
                break;
            default:
                setData(featuredPortfolio)
                break;
        }

    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Potfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList 
                        title={item.title} 
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}      
            </ul>
            <div className="container">
                {data.map((d)=>(
                    <div className="item">
                        <img 
                            src={d.img} 
                            alt={d.title} 
                        />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio

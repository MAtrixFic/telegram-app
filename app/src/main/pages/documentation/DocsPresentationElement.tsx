import { Link } from "react-router-dom";

interface IDocsPresentationElementProps {
    title: string,
    links: { name: string, link: string }[]
}

const DocsPresentationElement = ({ title, links }: IDocsPresentationElementProps) => {
    return (
        <div>
            <section className='docs__presentaion__block'>
                <div className="docs__presentation-title-container">
                    <h3 className='docs__presentation__title'>{title}</h3>
                </div>
                <div className="docs__presentation-list-container">
                    <ul className="docs__presentation-list">
                        {links.map((l, i) =>
                            <li className="docs__presentation-list-element">
                                <Link key={i + l.name} className="docs__presentation-list" to={l.link}>{l.name}</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default DocsPresentationElement;
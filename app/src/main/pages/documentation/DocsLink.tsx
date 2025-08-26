import { Link } from 'react-router-dom';

interface IDocsLinkProps {
    link: string,
    name: string
}

const DocsLink = ({ link, name }: IDocsLinkProps) => {
    return (
        <li className='docs__main-link-element'>
            <Link to={link} className='docs__main-link'>{name}</Link>
        </li>
    );
};

export default DocsLink;
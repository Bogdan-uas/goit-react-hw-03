import style from './ContactList.module.css'
import Contact from '../Contact/Contact.jsx'

export default function ContactList({info}) {
    return (
    <ul className={style.list}>
        {info.map((infos) => (
        <li className={style.item}>
            <Contact information={infos}/>
        </li>
    ))}
    </ul>
    )
}


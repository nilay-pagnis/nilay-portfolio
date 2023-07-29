import "./header.css";


export default function Header() {
    return (
      <>
        <div className='nav-container'>
          <ul className='nav-list'>
            <li className='nav-list'>
              <a href='#section' alt='home'>
                Home
              </a>
            </li>
            <li className='nav-list'>
              <a href='#project' alt='projects'>
                Projects
              </a>
            </li>
          </ul>
        </div>
      </>
    );
}
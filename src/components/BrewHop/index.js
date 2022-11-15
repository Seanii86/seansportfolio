import { useRef } from 'react';
import './index.scss';

const BrewHopp = () => {

    const refSearch = useRef()

    return (
        <div>
            <div className='search-bar'>
            <form ref={refSearch}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Your Name' required />
                            </li>
                        </ul>
                    </form>
            </div>
        </div>
    )
}

export default BrewHopp
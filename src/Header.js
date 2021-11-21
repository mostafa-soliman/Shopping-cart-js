import React from 'react';

export default function Header(props) {
    const {countCartItems}=props;
    return (                     
    <header className="block row center">
        <div>
            <a href="#/">
                Shopping card
            </a>
        </div>
        <div>
            <a href="#/cart">
                Card {''}
                {countCartItems?(
                    <button className="badge">{countCartItems}</button>
                ):(
                    ''
                )
            }
            {' '}
            </a>
            <a href="#/singIn">SingIn</a>
        </div>
    </header>
    );
};

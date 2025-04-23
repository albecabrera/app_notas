import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Student Grades Application</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/grades">Grades</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
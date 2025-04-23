import React, { useState } from 'react';
import Header from '../components/Header';
import GradeEntryForm from '../components/GradeEntryForm';
import GradeList from '../components/GradeList';

const HomePage: React.FC = () => {
    const [grades, setGrades] = useState<number[]>([]);

    const addGrade = (newGrade: number) => {
        setGrades([...grades, newGrade]);
    };

    return (
        <div>
            <Header />
            <GradeEntryForm onAddGrade={addGrade} />
            <GradeList grades={grades} />
        </div>
    );
};

export default HomePage;
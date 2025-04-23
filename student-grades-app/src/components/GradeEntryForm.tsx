import React, { useState } from 'react';

const GradeEntryForm: React.FC<{ onSubmit: (grade: number) => void }> = ({ onSubmit }) => {
    const [grade, setGrade] = useState<number | ''>('');
    const [error, setError] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setGrade(value === '' ? '' : Number(value));
        setError('');
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validateGrade(grade)) {
            onSubmit(grade as number);
            setGrade('');
        } else {
            setError('Please enter a valid grade between 1 and 6.');
        }
    };

    const validateGrade = (grade: number | ''): boolean => {
        return typeof grade === 'number' && grade >= 1 && grade <= 6;
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter Grade:
                <input
                    type="number"
                    value={grade}
                    onChange={handleChange}
                    min="1"
                    max="6"
                    required
                />
            </label>
            <button type="submit">Submit</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default GradeEntryForm;
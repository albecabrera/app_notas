import React from 'react';

interface Grade {
    studentName: string;
    subject: string;
    grade: number;
}

interface GradeListProps {
    grades: Grade[];
}

const GradeList: React.FC<GradeListProps> = ({ grades }) => {
    return (
        <div>
            <h2>Student Grades</h2>
            <table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Subject</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {grades.map((grade, index) => (
                        <tr key={index}>
                            <td>{grade.studentName}</td>
                            <td>{grade.subject}</td>
                            <td>{grade.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GradeList;
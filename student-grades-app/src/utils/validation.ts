export const validateGrade = (grade: number): boolean => {
    return grade >= 1 && grade <= 6; // Valid grades are between 1 and 6
};

export const validateStudentName = (name: string): boolean => {
    return name.trim().length > 0; // Name should not be empty
};

export const validateClassLevel = (classLevel: number): boolean => {
    return classLevel >= 5 && classLevel <= 13; // Valid class levels are between 5 and 13
};
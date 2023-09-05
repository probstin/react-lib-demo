import React from 'react';

interface ButtonProps {
    label: string;
}

const Button: React.FC<ButtonProps> = ({ label }: { label: string }) => {
    return <button>{label}</button>;
};

export default Button;

import React, { ReactNode } from 'react';
import clsx from 'clsx';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
    children?: ReactNode;
};

type SectionProps = {
    children?: ReactNode;
    className?: string;
};

const Card: React.FC<CardProps> & {
    Header: React.FC<SectionProps>;
    Body: React.FC<SectionProps>;
    Footer: React.FC<SectionProps>;
} = ({ children, className, ...rest }) => {
    return (
        <div className={clsx('bg-white shadow rounded-md border', className)} {...rest}>
            {children}
        </div>
    );
};

const Header: React.FC<SectionProps> = ({ children }) => {
    return (
        <div className='p-4'>
            <h1 className={'text-xl'}>{children}</h1>
        </div>
    );
};

const Body: React.FC<SectionProps> = ({ children }) => {
    return <div className='p-4 text-sm leading-relaxed'>{children}</div>;
};

const Footer: React.FC<SectionProps> = ({ children }) => {
    return <div className='p-4'>{children}</div>;
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;

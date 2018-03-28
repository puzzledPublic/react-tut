import React from 'react';

const PageTemplate = ({header, children}) => {
    return (
        <div className="">
            <header>
                {header}
            </header>
            <main>
                {children}
            </main>
        </div>
    );
}

export default PageTemplate;
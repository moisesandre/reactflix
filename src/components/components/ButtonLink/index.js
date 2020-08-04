import React from 'react';

function ButtonLink(props){
    //pros => {className: "O que alguém passar", href: "/" }

    return (
        <a href={props.href} className={props.className}>
            Novo vídeo
        </a>
    );
}

export default ButtonLink;
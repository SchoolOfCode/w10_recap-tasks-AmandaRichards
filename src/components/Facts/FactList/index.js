import React from 'react';
import articles from '../../../libs/articles';
import { PigeonFact } from '../PigeonFact';



export function FactList() {
    const facts = articles[0].paragraphs;
    return (
        <div>
        <h2>Pigeon Facts</h2>
        <ul>
            {facts.map((fact, index) => {
                return (
                    <PigeonFact
                        key={fact.id}
                       
                        fact={fact.text}
                        />
                );
            })}

        </ul>
        </div>);
}

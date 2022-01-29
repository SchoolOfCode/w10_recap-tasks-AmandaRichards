import React from 'react';
import articles from '../../../libs/articles';
import { PigeonFact } from '../../Facts/PigeonFact';



export function HistoryList() {
    const facts = articles[1].paragraphs;
    return (
        <div>
        <h2>Pigeon History</h2>
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

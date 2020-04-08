import React from 'react';
import { ITTag } from './ITTag'
import './ITTags.scss'

export const ITTags = (props) => {
    const tags = props.tags || []
    const elementTags = tags.map((tag, index) => <ITTag key={index} tagName={tag}/>)

    return (
        <div className="ITTags">
            {elementTags}
        </div>
    )
}
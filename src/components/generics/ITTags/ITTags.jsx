import _ from 'lodash'
import React from 'react';
import { ITTag } from './ITTag'
import './ITTags.scss'


export const ITTags = (props) => {
    const tags = _.map(props.tags, (tag, index) => <ITTag key={index} tagName={tag}/>)

    return (
        <div className="ITTags">
            {tags}
        </div>
    )
}
import React, { useContext} from 'react'
import Card from '../components/Card'
import { context } from '../context'

export default function Home() {

    const news = useContext(context)

    return (
        <div className='row'>
            {
                news.length > 0 && news.map((item,index) => (
                    <Card item={item} key={index}/>
                ))
            }
        </div>
    )
}

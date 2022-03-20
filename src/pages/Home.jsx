import React from 'react'
import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react'

import BoxComponents from '../components/Box'

import topicService from '../services/topicService'

const Home = () => {
    const [objs, setObj] = useState([])
    const [count, setCount] = useState(0)

    const logData = (txt) => {
        console.log(txt)
        setObj(objs + txt)
        console.log(objs)
    }

    const getData = async (id) => {
        const data = await topicService(id)
        console.log(data)
    }

    useEffect(() => {
        logData('test')
        logData('test2')
        getData('6236edf40ec058ef003fc87a')
    }, [])

    return (
        <div>
            <h1>HomePageasdasd</h1>
            <Link to='/contact'>
                <button>
                    Contact
                </button>
            </Link>
            <BoxComponents title='test' content='test2' />
            <BoxComponents title='test2' content='test22' />
            <BoxComponents title='test3' content='test23' />
            <BoxComponents title='test4' content='test24' />
            
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <BoxComponents title={count} content='box' />
        </div>
    )
}

export default Home
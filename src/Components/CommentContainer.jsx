import React from 'react'

const commentData = [
    {
        name:"Chandu",
        text: "ksfsjkvbksjvbjsdbv",
        replies: [{
            name:"Chandu",
            text: "ksfsjkvbksjvbjsdbv",
            replies: [],
        },],
    },
    {
        name:"Chandu",
        text: "ksfsjkvbksjvbjsdbv",
        replies: [{
            name:"Chandu",
            text: "ksfsjkvbksjvbjsdbv",
            replies: [],
        },],
    },{
        name:"Chandu",
        text: "ksfsjkvbksjvbjsdbv",
        replies: [{
            name:"Chandu",
            text: "ksfsjkvbksjvbjsdbv",
            replies: [],
        },],
    },{
        name:"Chandu",
        text: "ksfsjkvbksjvbjsdbv",
        replies: [{
            name:"Chandu",
            text: "ksfsjkvbksjvbjsdbv",
            replies: [],
        },],
    },{
        name:"Chandu",
        text: "ksfsjkvbksjvbjsdbv",
        replies: [{
            name:"Chandu",
            text: "ksfsjkvbksjvbjsdbv",
            replies: [],
        },],
    },
]

const Comment = ({data}) => {
    const {name,text} = data

    return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
        <img className='w-12 h-12 rounded-full' src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg" alt="" />
        <div className='px-2'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>)
}

const CommentList = ({comments}) => {
    return comments.map((comment, index) => (
        <div>
            <Comment data={comment} />
            <div className='pt-5 border-black ml-5'>
                <CommentList comments={comment.replies}/>
            </div>
        </div>
    ))
}

const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments : </h1>
        <CommentList comments ={commentData}/>

    </div>
  )
}

export default CommentContainer
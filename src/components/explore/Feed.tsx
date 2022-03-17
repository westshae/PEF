import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const CardStyle = styled.div`
  background-color: #dfdfcc;
  color: #800000;
  padding: 1rem;
  border: transparent;
  border-radius: 0.75rem;
`;

const CardTitle = styled.h1``;

const CardText = styled.p``;

const CardImage = styled.img``;

interface CardInterface {
  content: String,
  dislikerEmail?: Array<String>,
  dislikes:number,
  likerEmail?:Array<String>,
  likes:number,
  ownerEmail:String,
  postID:String,
  replies:number,
  repliesID:Array<String>,
  replyID?:String
}

const Post = (props:{ data: CardInterface}) => {
  return (
    <CardStyle>
      <CardText>Content: {props.data.content}</CardText>
      <CardText>postID: {props.data.postID}</CardText>

      <CardText>likes: {props.data.likes}</CardText>


      <CardText>dislikes: {props.data.dislikes}</CardText>
      <CardText>replies: {props.data.replies}</CardText>

    </CardStyle>
  );
};

const Feed = () => {
  const [feed, setFeed] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/feed/getFeed")
      .then((result) => {
        setFeed(result.data);
      })
      .catch((e: AxiosError) => {
        console.error(e);
      });
  }, []);
  return <CardContainer>
    {feed != undefined && feed.map((data:CardInterface)=>{
      return <Post data={data}/>
    })}
  </CardContainer>;
};

export default Feed;

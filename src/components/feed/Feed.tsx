import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  overflow:scroll;
`;

const PostStyle = styled.div`
  background-color: #292929;
  color: #ebebeb;
  padding: 1rem;
  border: transparent;
  border-radius: 0.75rem;
  display:grid;
  grid-template-rows:1fr 1fr;
  grid-template-columns:1fr;
`;

const PostBar = styled.div`
  display:flex;
  gap:1rem;
`;

const PostText = styled.p``;

const PostButton = styled.button``;

interface PostInterface {
  username: String;
  content: String;
  dislikes: number;
  likes: number;
  postID: String;
  replies: number;
  repliesID: Array<String>;
  replyID?: String;
}

const Post = (props: { data: PostInterface }) => {
  return (
    <PostStyle>
      <PostText>{props.data.content}</PostText>

      <PostBar>
        <PostText>#{props.data.postID}</PostText>
        <PostText>likes: {props.data.likes}</PostText>
        <PostButton>Add Like</PostButton>

        <PostText>dislikes: {props.data.dislikes}</PostText>
        <PostButton>Add Dislike</PostButton>

        <PostText>replies: {props.data.replies}</PostText>
        <PostButton>Add Reply</PostButton>

      </PostBar>
    </PostStyle>
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
  return (
    <CardContainer>
      {feed != undefined &&
        feed.map((data: PostInterface) => {
          return <Post data={data} />;
        })}
    </CardContainer>
  );
};

export default Feed;

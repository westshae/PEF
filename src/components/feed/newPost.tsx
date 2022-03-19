import styled from "styled-components";

const Container = styled.div`
  display:flex;
`;

const TextBox = styled.textarea`
  width:100%;
  border:none;
  margin:1rem;
  margin-right:0.5rem;
  background-color: #292929;
  color: #ebebeb;
`;

const SubmitButton = styled.button`
  margin:1rem;
  margin-left:0.5rem;
  background-color: #292929;
  color: #ebebeb;
  border:none;
  padding-left:0.8rem;
  padding-right:0.8rem;
`;

const newPost = () => {
  return (
    <Container>
      <TextBox/>
      <SubmitButton>Post</SubmitButton>
    </Container>
  );
};

export default newPost;
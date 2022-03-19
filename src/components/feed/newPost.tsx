import styled from "styled-components";

const Container = styled.div`

`;

const TextBox = styled.textarea`
  width:100%;
  background-color:#292929;
  border:none;
  margin:1rem;
`;

const newPost = () => {
  return (
    <Container>
      <TextBox/>
    </Container>
  );
};

export default newPost;